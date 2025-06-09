import React from 'react';
import { auth } from 'auth';
import { Metadata } from 'next';

import { fetchUserById } from '@/app/lib/data';
import EditProfileImage from '@/app/ui/edit-profile-image';
import EditProfileName from '@/app/ui/edit-profile-name';
import EditProfileEmail from '@/app/ui/edit-profile-email';


export const metadata: Metadata = {
  title: 'Editar perfil',
};

export default async function Page() {

  const session = await auth();

  const user = await fetchUserById(session?.user?.email);

    return (
      <>
      <main>
        <h1
          className={` mb-4 text-xl md:mb-8 lg:text-2xl`}
        >
          Editar perfil
        </h1>

        <div className="mb-4 flex w-full resize-y flex-col rounded-lg border-[1px] border-[#fff0] pb-9 focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none ">
            <EditProfileImage  user={user} />
            <EditProfileName  user={user} />
            <EditProfileEmail  user={user} />
        </div>
      </main>
    </>
    );
}
