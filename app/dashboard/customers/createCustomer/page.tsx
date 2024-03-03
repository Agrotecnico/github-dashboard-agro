import FormCustomer from '@/app/ui/customers/create-form-customer'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
/* import { fetchCustomers } from '@/app/lib/data' */
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crear Cliente',
}
 
export default async function Page() {
  /* const customers = await fetchCustomers(); */
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Clientes', href: '/dashboard/customers' },
          {
            label: 'Crear Cliente',
            href: '/dashboard/customers/createCustomer',
            active: true,
          },
        ]}
      />
      <FormCustomer /* customers={customers} */ />
    </main>
  );
}