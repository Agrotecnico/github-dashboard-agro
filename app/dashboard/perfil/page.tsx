import React from 'react';
import { auth } from 'auth';
import EditPerfilMember from '@/app/ui/edit-perfil-member'
import EditPerfilAdmin from '@/app/ui/edit-perfil-admin';
import { lusitana } from '@/app/ui/fonts';
import { fetchUserById } from '@/app/lib/data';
import { Fondo, Frente } from '@/app/ui/marcos';
import { SessionProvider } from "next-auth/react";


export default async function Page() {

  const session = await auth();
  const user = await fetchUserById(session?.user?.email);
  /* console.log("session: ", session) */
  /* if (!user) */
  /* if (session?.user?.email === process.env.ADMIN) */
    return (
      <>
      <main>
        <h1
          className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl`}
        >
          Editar perfil
        </h1>

        <div className="mb-4 flex w-full resize-y flex-col rounded-lg border-[1px] border-[#fff0] px-3 pb-9 focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none ">
          <EditPerfilAdmin  user={user} />
        </div>
      </main>
      {/* <main>
        <h1 className={`${lusitana.className} mb-2 text-xl lg:text-2xl opacity-60`}>
          Página Perfil: en desarrollo
        </h1>
        <Fondo className="p-3 mb-4 w-full opacity-50" >
          <h2 className="h-8 w-48 bg-slate-300 mb-2"></h2> 
          <p className="h-6 w-32 bg-slate-200 mb-2"></p> 
          <Frente className="p-3 w-full">
            <h2 className="h-8 w-48 bg-slate-300 mb-2"></h2> 
            <p className="h-6 w-60 bg-slate-200 mb-2"></p> 
            <p className="h-6 w-16 bg-slate-200 mb-2"></p> 
          </Frente>
        </Fondo>
      </main> */}
    </>
    );
  /* return (
    <main>
      <h1 className={`${lusitana.className} mb-2 text-xl lg:text-2xl`}>
        Editar perfil
      </h1>

      <div className="mb-4 flex w-full resize-y flex-col border-[1px] border-[#fff0] px-3 pb-9 pt-3  focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none ">
        <SessionProvider session={session}>
          <EditPerfilMember />
        </SessionProvider>
      </div>
    </main>
  ); */
}
