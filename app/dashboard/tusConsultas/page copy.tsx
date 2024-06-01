import React from 'react';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import ConsultaForm from '@/app/ui/consultas/comments/form-consulta';
import Table from '@/app/ui/consultas/table';
import { auth } from '@/auth';
import type { Consulta, User } from '@/app/lib/definitions';
import { sql } from '@vercel/postgres';
import distanceToNow from '@/app/lib/dateRelative';
import DateFormatter from "@/app/ui/date-formatter";

import { Divide } from 'lucide-react';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    /* console.log('user', user); */
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
async function getConsulta(
  email: string,
) /* : Promise<Consulta | undefined> */ {
  try {
    const consultas =
      await sql<Consulta>`SELECT * FROM consultas WHERE email=${email}`;
    /* console.log('consulta', consulta); */
    return consultas.rows;
  } catch (error) {
    console.error('Failed to fetch consulta:', error);
    throw new Error('Failed to fetch consulta.');
  }
}

export default async function Page() {
  /* const { data: session, status } = useSession()*/
  const session = await auth();

  const user = await getUser(session?.user?.email);
  const consultas = await getConsulta(session?.user?.email);

  if (session?.user?.email === 'agrotecnicog@gmail.com') return notFound();

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Tus Consultas
      </h1>
      <div>
      {consultas.length ? (
        <div>
          {consultas?.map((consulta) => (
            <div className="mb-2 whitespace-pre-wrap break-all rounded-lg bg-[#0000000a] px-4 py-6 [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff]">
              <time className="mb-2 flex text-[#747e91]">
                Consulta realizada{' '}
                {/* <DateFormatter dateString={consulta?.created_at} /> */}
                {/* {distanceToNow(new Date(consulta?.created_at))} */}
              </time>
              <p className="mb-2">{consulta?.consulta}</p>
              <div className="mb-2 text-end text-sm">{consulta.email}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>Todavía no realizaste ninguna consulta</div>
      )}
      </div>
      {/*<pre className="py-6 px-4 whitespace-pre-wrap break-all">
        {JSON.stringify(session, null, 2)}
      </pre>
      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        <p>Email: {user?.email }</p>
        <p>Id: {user?.id }</p>
        <p>Name: {user?.name }</p>
        <p>Password: {user?.password }</p>
        <p>Role: {user?.role }</p>
      </pre>
       <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        polo
        <p>Email: {consultas.email }</p>
        <p>Id: {consultas?.id }</p>
        <p>Consulta: {consultas?.consulta }</p>
        <div className="mt-2 flex text-[#747e91]">
          Date: {distanceToNow(new Date(consultas?.created_at))}
        </div>
      </pre> */}

      {/* <Table session={session}  /> */}
    </div>
  );
}
