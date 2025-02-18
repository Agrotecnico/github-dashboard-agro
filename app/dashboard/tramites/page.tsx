import React from 'react';
import { auth } from '@/auth';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';

import { fetchUserById } from '@/app/lib/data';
import { ButtonA } from '@/app/ui/button';


export const metadata: Metadata = {
  title: 'Trámites',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email);
  const id= user?.id

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const tramites = undefined
  const lengthTramites= 0


  if (user?.email === process.env.ADMIN)
    return (
      <main>
        <h1 className={`mb-4 text-xl md:mb-8 lg:text-2xl`} >
          Trámites
        </h1>

        <div>Todos los trámites general</div>
        {/* <TableConsultaAdmin query={query} currentPage={currentPage} user={user}  /> */}
                
        {/* <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div> */}
        
      </main>
    );

  return (
    <main>
      <div className="flex items-center justify-between mb-8">
        <h1
          className={`text-xl lg:text-2xl`}
        >
          Trámites
        </h1>

        <Link href="/iniciar-tramite">
          <ButtonA
            className={`h-8 text-[13.5px] w-max`}>
            {lengthTramites !== 0 ? "Nuevo" : "Iniciar"} trámite <ChevronRightIcon className="ml-3 w-4 stroke-[3] opacity-80" />
          </ButtonA>
        </Link>
      </div>

      {lengthTramites ? (
        <div className="text-[#1d0215dd] flex flex-col gap-2 ">
          polo
          {/* {tramites?.map((tramite, idx) => (
            <div key={idx } className=" text-[13px] leading-[18px] ">
              <TableConsultaMember consulta={tramite} idx={idx} lengthTramites={lengthTramites} />
            </div>
          ))}
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPagesMember} />
          </div> */}
        </div>
      ) : (
        <div>Todavía no iniciaste un trámite</div>
      )}
    </main>
  );
}

