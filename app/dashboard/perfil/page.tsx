
import React from 'react'
import { auth } from "auth"
import  EditPerfilForm  from "@/app/ui/edit-form-perfil";
import  EditPerfilFormB  from "@/app/ui/edit-form-perfil-b";
import { fetchUserById } from '@/app/lib/data'
import { SessionProvider } from "next-auth/react"



export default async function Page() {

  const session = await auth()

  const user = await fetchUserById(session?.user?.email);
  
  /* console.log("session", session) */

  if (user)

  return (
    <main>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Editar perfil
      </h1>

      <div className="mb-4 mt-6 flex flex-col w-full border-[1px] border-[#fff0] px-3 pt-3 pb-9  rounded-lg resize-y bg-[#0000000d]  focus:shadow-none    focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] ">
        <EditPerfilForm  user={user} />
      </div>
    </main>
  )

  return (
    <main>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Editar perfil
      </h1>

      <SessionProvider session={session}>
        <div className="mb-4 mt-6 flex flex-col w-full border-[1px] border-[#fff0] px-3 pt-3 pb-9  rounded-lg resize-y bg-[#0000000d]  focus:shadow-none    focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] ">
          <EditPerfilFormB />
        </div>
      </SessionProvider>
    </main>
  )

}
