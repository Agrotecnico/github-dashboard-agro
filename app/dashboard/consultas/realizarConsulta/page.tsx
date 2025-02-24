import { auth } from 'auth';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import RealizarConsulta from '@/app/ui/consultas/realizar-consulta-user';
import { fetchUserById } from '@/app/lib/data';



export const metadata: Metadata = {
  title: 'Realizar consulta',
};

export default async function Page() {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email);

  if (user?.email === process.env.ADMIN )
    return notFound();

  return (
    <main>
      <h1 className={` mb-7 text-xl lg:text-2xl`}>
        Realizá tu consulta
      </h1>
      <RealizarConsulta user= {user} />
      
    </main>
  );
}
