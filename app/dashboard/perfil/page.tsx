import React from 'react';
import { auth } from 'auth';
import EditPerfilForm from '@/app/ui/edit-form-perfil';
import { lusitana } from '@/app/ui/fonts';
import { fetchUserById } from '@/app/lib/data';

export default async function Page() {
  const session = await auth();

  const user = await fetchUserById(session?.user?.email);

  if (user)
    return (
      <main>
        <h1
          className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl`}
        >
          Editar perfil
        </h1>

        <div className="mb-4 mt-6 flex w-full resize-y flex-col rounded-lg border-[1px] border-[#fff0] bg-[#0000000d]  px-3 pb-9 pt-3  [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff]    focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none ">
          <EditPerfilForm user={user} />
        </div>
      </main>
    );
  return (
    <div className="flex h-[50%] items-center justify-center ">
      Perfil no disponble para este Usuario
    </div>
  );
}
