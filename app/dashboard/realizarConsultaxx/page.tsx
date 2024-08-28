'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import ConsultaForm from '@/app/ui/consultas/comments/form-consulta';

export default function Page() {
  const { data: session, status } = useSession();

  if (session?.user?.email === process.env.ADMIN )   return  notFound();

  return status === 'loading' ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Realizá tu Consulta
      </h1>
      <ConsultaForm session={session} />
    </div>
  );
}
