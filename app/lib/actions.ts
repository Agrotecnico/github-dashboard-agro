'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect, useRouter } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from "bcrypt";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Por favor seleccione un cliente.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Por favor ingrese una cantidad mayor a $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Seleccione un estado de factura.',
  }),
  date: z.string(),
});

const FormSchemaCustomer = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  image_url: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

const FormSchemaUser = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
  confirmPassword: z.string().min(5, { message: "Must be 5 or more characters long" }),
  role: z.enum(['admin', 'member', 'memberAccount'], {
    invalid_type_error: 'Seleccione un rol de usuario.',
  }),
  image: z.string(),
});

const FormSchemaConsulta = z.object({
  id: z.string(),
  // userId: z.string(),
  // codigoConsulta: z.string(),
  archivos_url: z.string().min(5, { message: "Must be 5 or more characters long" }),
  // name: z.string().min(3, { message: "Must be 3 or more characters long" }),
  user_id: z.string(),
  consulta: z.string().max(1024, { message: "Must be 2048 or fewer characters long" }),
  respuesta: z.string().max(1024, { message: "Must be 2048 or fewer characters long" }),
  created_at: z.string(),
  // updated_at: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const CreateCustomer = FormSchemaCustomer.omit({ id: true });
const CreateUser = FormSchemaUser.omit({ id: true, image: true });/*  role: true, */

const CreateConsulta = FormSchemaConsulta.omit({ created_at: true, respuesta: true,  id: true });

const UpdateInvoice = FormSchema.omit({ date: true, id: true });
const UpdateCustomer = FormSchemaCustomer.omit({ id: true });

const UpdateConsulta = FormSchemaConsulta.omit({  created_at: true, updated_at: true, id: true, user_id: true, archivos_url: true });


// const UpdateUser = FormSchemaUser.omit({ role: true, id: true, password: true, confirmPassword: true, image: true });
const UpdateUser = FormSchemaUser.omit({ role: true, id: true, password: true, confirmPassword: true, image: true, name: true });
const UpdateUserImage = FormSchemaUser.omit({ role: true, id: true, password: true, confirmPassword: true, name: true, email: true });
const UpdateUserName = FormSchemaUser.omit({ role: true, id: true, password: true, confirmPassword: true, image: true, email: true });
const UpdateUserEmail = FormSchemaUser.omit({ role: true, id: true, password: true, confirmPassword: true, image: true, name: true });




// This is temporary
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export type StateCustomer = {
  errors?: {
    name?: string[];
    email?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

export type StateUser = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    role?: string[] | undefined;
    image?: string[] | undefined;
  };
  message?: string | null;
};

export type StateUserImage = {
  errors?: {
    image?: string[] | undefined;
  };
  message?: string | null;
};

export type StateUserName = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

export type StateUserEmail = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export type StateConsulta = {
  errors?: {
    // userId?: string[];
    // codigoConsulta?: string[];
    user_id?: string[];
    archivos_url?: string[] | undefined;
    consulta?: string[];
    // respuesta?: string[] | undefined;
  };
  message?: string | null;
};

export type StateUpdateConsulta = {
  errors?: {
    // userId?: string[];
    // codigoConsulta?: string[];
    consulta?: string[];
    respuesta?: string[] | undefined;
  };
  message?: string | null;
};


export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos faltantes. No se pudo crear la factura.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
      
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}



export async function createCustomer(prevStateCustomer: StateCustomer, formData: FormData) {
  // Validate form fields using Zod
  const validatedFieldsCustomer = CreateCustomer.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: formData.get('image_url'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFieldsCustomer.success) {
    return {
      errors: validatedFieldsCustomer.error.flatten().fieldErrors,
      message: 'Campos faltantes. No se pudo crear el cliente.',
    };
  }

  // Prepare data for insertion into the database
  const { name, email, image_url } = validatedFieldsCustomer.data;

  // Insert data into the database
  try {
    await sql`
      INSERT INTO customers (name, email, image_url)
      VALUES (${name}, ${email}, ${image_url})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: No se pudo crear el cliente.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}
export async function updateCustomer(
  id: string,
  prevState: StateCustomer,
  formData: FormData,
) {
  const validatedFields = UpdateCustomer.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: formData.get('image_url'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Customer.',
    };
  }

  const { name, email, image_url } = validatedFields.data;

  try {
    await sql`
      UPDATE customers
      SET name = ${name}, email = ${email}, image_url = ${image_url}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Customer.' };
  }

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}
export async function deleteCustomer(id: string) {
  // throw new Error('Failed to Delete Customer');

  try {
    await sql`DELETE FROM customers WHERE id = ${id}`;
    revalidatePath('/dashboard/customers');
    return { message: 'Deleted Customer' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Customer.' };
  }
}



export async function createConsulta(prevStateConsulta: StateConsulta, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateConsulta.safeParse({
    // userId: formData.get('userId'),
    user_id: formData.get('user_id'),
    archivos_url: formData.get('archivos_url'),
    consulta: formData.get('consulta'),
    // respuesta: formData.get('respuesta'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos faltantes. No se pudo enviar la consulta.',
    };
  }

  // Prepare data for insertion into the database
  const { user_id, archivos_url, consulta } = validatedFields.data;

  // Insert data into the database 
  try {
    await sql`
      INSERT INTO consultas ( user_id, archivos_url, consulta )
      VALUES ( ${user_id}, ${archivos_url}, ${consulta})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Error al crear consulta.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/tusConsultas');
  redirect('/dashboard/tusConsultas');
}
export async function updateConsulta(
  id: string,
  prevStateConsulta: StateUpdateConsulta,
  formData: FormData,
) {
  const validatedFields = UpdateConsulta.safeParse({
    // name: formData.get('name'),
    // email: formData.get('email'),
    consulta: formData.get('consulta'),
    respuesta: formData.get('respuesta'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Consulta.',
    };
  }

  const { /* name, email, */ consulta, respuesta } = validatedFields.data;

  try {
    await sql`
      UPDATE consultas
      SET consulta = ${consulta}, respuesta = ${respuesta}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Consulta.' };
  }

  revalidatePath('/dashboard/tusConsultas');
  redirect('/dashboard/tusConsultas');
}
export async function deleteConsulta(id: string) {
  // throw new Error('Failed to Delete Consulta');

  try {
    await sql`DELETE FROM consultas WHERE id = ${id}`;
    revalidatePath('/dashboard/tusConsulta');
    return { message: 'Deleted Consulta' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Consulta.' };
  }
}


export async function createUser(prevStateUser: StateUser, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateUser.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    role: formData.get('role'),
    /* image: formData.get('image'), */
  });
  
  // Validate confirm password
  const pwd= formData.get("password")
  const confirmPwd= formData.get("confirmPassword")
  if (pwd !== confirmPwd) {
    return {
      errors: {},
      message: 'Las contraseñas no coinciden.',
    };
  }
  /* console.log("validatedFields: ", validatedFields) */
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos faltantes. No se pudo crear el Usuario.',
    };
  }
  
  // Prepare data for insertion into the database
  const { name, email, password, role  } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10); 

  // Insert data into the database
  try {
    await sql`
      INSERT INTO users (name, email, password, role )
      VALUES (${name}, ${email}, ${hashedPassword}, ${role} )
    `;
    return {
      message: `usuario`,
    };
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: `Database Error: El email ya existe.`,
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath('/login');
  // redirect('/login');
  
  revalidatePath('/realizar-consulta');
  redirect('/realizar-consulta');
  
}
export async function updateUser(
  id: string,
  prevStateUser: StateUser,
  formData: FormData,
) {
  const validatedFields = UpdateUser.safeParse({
    // name: formData.get('name'),
    email: formData.get('email'),
    /* image: formData.get('image'), */
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. No se pudo actualizar a el Usuario.',
    };
  }

  const { /* name, */ email/* , image */ } = validatedFields.data;

  try {
    await sql`
      UPDATE users
      SET email = ${email}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: No se pudo actualizar a el Usuario.' };
  }

  revalidatePath('/dashboard/perfil');
  redirect('/dashboard/perfil');
}
export async function updateUserImage(
  id: string,
  prevStateUserImage: StateUserImage,
  formData: FormData,
) {
  const validatedFields = UpdateUserImage.safeParse({
    image: formData.get('image'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. No se pudo actualizar la imagen del Usuario.',
    };
  }

  const { image } = validatedFields.data;

  try {
    await sql`
      UPDATE users
      SET image = ${image}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: No se pudo actualizar la imagen del Usuario.' };
  }

  revalidatePath('/dashboard/perfil');
  redirect('/dashboard/perfil');
}
export async function updateUserName(
  id: string,
  prevStateUserName: StateUserName,
  formData: FormData,
) {
  const validatedFields = UpdateUserName.safeParse({
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. No se pudo actualizar el nombre del Usuario.',
    };
  }

  const { name } = validatedFields.data;

  try {
    await sql`
      UPDATE users
      SET name = ${name}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: No se pudo actualizar el nombre  del Usuario.' };
  }

  revalidatePath('/dashboard/perfil');
  redirect('/dashboard/perfil');
}
export async function updateUserEmail(
  id: string,
  prevStateUserEmail: StateUserEmail,
  formData: FormData,
) {
  const validatedFields = UpdateUserEmail.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. No se pudo actualizar el nombre del Usuario.',
    };
  }

  const { email } = validatedFields.data;

  try {
    await sql`
      UPDATE users
      SET email = ${email}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: No se pudo actualizar el nombre  del Usuario.' };
  }

  revalidatePath('/dashboard/perfil');
  redirect('/dashboard/perfil');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  
  try {
    await signIn('credentials', formData );
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales no válidas.';
        default:
          return 'Algo salió mal.';
      }
    }
    throw error;
  }
}


