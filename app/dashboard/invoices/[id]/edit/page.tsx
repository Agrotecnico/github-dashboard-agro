import Form from '@/app/ui/invoices/edit-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { auth } from '@/auth'


export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth()
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  if (session?.user?.email ===  process.env.ADMIN )
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Facturas', href: '/dashboard/invoices' },
            {
              label: 'Editar Factura',
              href: `/dashboard/invoices/${id}/edit`,
              active: true,
            },
          ]}
        />
        <Form invoice={invoice} customers={customers} />
      </main>
    )
    return (
      notFound()
    )
}