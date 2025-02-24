import { sql } from '@vercel/postgres'
import {
  CustomerField,
  CustomersTableType,
  Consulta,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
  Customer,
  ConsultasTable
} from './definitions'
import { formatCurrency } from './utils'
import { unstable_noStore as noStore } from 'next/cache'


export async function fetchRevenue() {
  noStore()

  try {

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore()
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  noStore()
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}


const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchFilteredCustomers(query: string, currentPage: number,) {
  noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchFilteredConsultas(query: string, currentPage: number,) {
  noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const consultas = await sql<ConsultasTable>`
    SELECT
    consultas.id,
    consultas.consulta,
    consultas.respuesta,
    consultas.created_at,
    consultas.user_id,
    users.name,
    users.email,
    users.image
    FROM consultas
    JOIN users ON consultas.user_id = users.id
    WHERE
      users.name ILIKE ${`%${query}%`} OR
      users.email ILIKE ${`%${query}%`} OR
      ORDER BY consultas.created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return consultas.rows;
  } catch (error) {
    console.error('Failed to fetch consultas:', error);
    throw new Error('No se pudieron recuperar las consultas.');
  }
}


export async function fetchFilteredConsultasM(id: string | null | undefined, currentPage: number,) {
  noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const consultas = await sql<Consulta>`
      SELECT
      id,
      consulta,
      respuesta,
      created_at,
      -- codigo_consulta,
      archivos_url
      FROM consultas 
      WHERE
      user_id = ${id}
      ORDER BY created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
    return consultas.rows;
  } catch (error) {
    console.error('Failed to fetch consultas:', error);
    throw new Error('No se pudieron recuperar las consultas.');
  }
}




export async function fetchInvoicesPages(query: string) {
  noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchCustomersPages(query: string) {
  noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM customers
    WHERE
    customers.name ILIKE ${`%${query}%`} OR
    customers.email ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

export async function fetchConsultasPages(query: string) {
  noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM consultas
    JOIN users ON consultas.user_id = users.id
    WHERE
    users.name ILIKE ${`%${query}%`} OR
    users.email ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('No se pudo recuperar el número total de consultas.');
  }
}

export async function fetchConsultasPagesM(id: string | null | undefined) {
  noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM consultas
    WHERE user_id = ${id}
  `;

    const totalPagesMember = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    const countcon = Math.ceil(Number(count.rows[0].count) / 1);

    // return totalPages;
    return {totalPagesMember, countcon};
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('No se pudo recuperar el número total de consultas.');
  }
}




export async function fetchInvoiceById(id: string) {
  noStore()
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomerById(id: string) {
  noStore()
  try {
    const data = await sql<Customer>`
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url
      FROM customers
      WHERE customers.id = ${id};
    `;

    const customer = data.rows.map((customer) => ({
      ...customer,
      // Convert amount from cents to dollars
      //amount: customer.amount / 100,
    }));

    return customer[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer.');
  }
}

export async function fetchConsultaById(id: string) {
  noStore()
  try {
    const data = await sql<Consulta>`
      SELECT
      id,
      consulta,
      respuesta,
      created_at,
      codigo_consulta,
      user_id
      FROM consultas
      WHERE id = ${id};
    `;

    const consulta = data.rows.map((consulta) => ({
      ...consulta,
      // Convert amount from cents to dollars
      //amount: customer.amount / 100,
    }));

    return consulta[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch consulta.');
  }
}


export async function fetchUserById(email: string | null | undefined): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
export async function fetchUserByEmail(id: string | null | undefined): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE id=${id}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

 export async function fetchCustomers() {
  noStore()
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
