import FormCustomer from '@/app/ui/customers/create-form-customer';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
import { auth } from '@/auth';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Crear Cliente',
};

export default async function Page() {
  const session = await auth();

  if (session?.user?.email === 'agrotecnicog@gmail.com')
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
        <FormCustomer />
      </main>
    );
  return notFound();
}
