"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { notFound } from 'next/navigation';
/* import ConsultaForm from '@/app/ui/consultas/comments/form-consulta'; */
import ConsultaForm from '@/app/ui/consultas/comments/form-consulta';

export default function Page() {
  
  const { data: session, status } = useSession()

  if (session?.user?.email === 'agrotecnicog@gmail.com' )
  
    return notFound();
  
  return (
    status === "loading" ? <div>Loading...</div> : 
    <div>
      <h1 className="mb-8 text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
        Realizá tu Consulta
      </h1>
      <ConsultaForm session={session} />
    </div>
  )
}
