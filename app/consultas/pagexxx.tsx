
import Image from 'next/image';
import infobae from '../../public/infobae.jpg'
import intervencion from '../../public/intervencion.jpg'
import { auth } from '@/auth'
import clsx from "clsx"
import { Button } from "@/app/ui/uiRadix/button"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import ConsultaForm from '@/app/ui/consultas/comments/form-consulta';


export default async function Page() {
  const session = await auth()
  return (
    <>
      <div className=" flex flex-col mx-auto min-h-screen max-w-[1024px]">

        
        <article className=" mx-1 mb-1 mt-0 rounded-xl bg-[#ffffff94] pt-6 pb-6 px-3 text-[#374151] [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_12px_0_#fff_inset] backdrop-blur-md md:px-6">

          <h1 className="mb-8 text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
            Realizá tu Consulta
          </h1>

          <ConsultaForm session={session} />
          
        </article>
      </div>
    </>
  );
}