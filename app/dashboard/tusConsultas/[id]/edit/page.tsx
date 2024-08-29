import Form from '@/app/ui/consultas/edit-form-consulta';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchConsultaById } from '@/app/lib/data';
import { Metadata } from 'next';
import { auth } from '@/auth';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Editar Consulta',
};

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  const id = params.id;
  const consulta = await fetchConsultaById(id);

  if (!consulta) {
    notFound();
  }

  if (session?.user?.email === process.env.ADMIN)
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Consultas', href: '/dashboard/tusConsultas' },
            {
              label: 'Editar Consulta',
              href: `/dashboard/tusConsultas/${id}/edit`,
              active: true,
            },
          ]}
        />
        <Form consulta={consulta} />
      </main>
    );
  return (
    <div className="flex h-[50%] items-center justify-center ">
      No editar las consultas
    </div>
  );
}
