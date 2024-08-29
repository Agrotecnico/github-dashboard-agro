import Form from '@/app/ui/customers/edit-form-customer'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomerById } from '@/app/lib/data'
import { Metadata } from 'next'
import { auth } from '@/auth'
import { notFound } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Editar Cliente',
}
 
export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth()
  const id = params.id;
  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }
 
  if (session?.user?.email ===  process.env.ADMIN ) 
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
    )
    return (
      notFound()
    )
}