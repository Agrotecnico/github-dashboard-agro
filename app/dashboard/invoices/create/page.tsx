import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'
import { Metadata } from 'next'
import { auth } from '@/auth'
import { notFound } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Crear Factura',
}
 
export default async function Page() {
  const session = await auth()
  const customers = await fetchCustomers();
 
  if (session?.user?.email ===  process.env.ADMIN )
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Facturas', href: '/dashboard/invoices' },
          {
            label: 'Crear Factura',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  )
  return (
    notFound()
  )
}