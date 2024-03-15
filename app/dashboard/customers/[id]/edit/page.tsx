import Form from '@/app/ui/customers/edit-form-customer'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomerById } from '@/app/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editar Cliente',
}
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
  const customer = await fetchCustomerById(id);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Clientes', href: '/dashboard/customers' },
          {
            label: 'Editar Cliente',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
       <Form  customer={customer}  /> 
    </main>
  );
}