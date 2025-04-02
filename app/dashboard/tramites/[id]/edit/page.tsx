import Form from '@/app/ui/tramites/edit-form-tramite';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchTramiteById } from '@/app/lib/data';
import { Metadata } from 'next';
import { auth } from '@/auth';
import { notFound } from 'next/navigation';
import { fetchUserById } from '@/app/lib/data';
import { fetchUserByEmail } from '@/app/lib/data';


export const metadata: Metadata = {
  title: 'Editar Trámite',
};

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  const emailx= session?.user?.email
  const user = await fetchUserById(emailx);
  const id = params.id;
  const tramite = await fetchTramiteById(id);
  const email= tramite.email_id

  // const polo= consulta.user_id
  const userMember = await fetchUserByEmail(email);

  // console.log("tramite:", tramite)

  if (!tramite) {
    notFound();
  }

  if (user?.email === process.env.ADMIN)
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Tramites', href: '/dashboard/tramites' },
            {
              label: 'Editar Tramite',
              href: `/dashboard/tramites/${id}/edit`,
              active: true,
            },
          ]}
        />
        <Form tramite={tramite} userMember={userMember} />
      </main>
    );

    return notFound(); /* (
      <div className="flex h-[50%] items-center justify-center ">
        No editar las consultas
      </div>
    ); */
}
