// "use client"

import { auth } from '@/auth'
import Link from 'next/link';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';

import { Fondo } from '@/app/ui/marcos'
import  NavLinksAdmin  from '@/app/ui/dashboard/nav-links-admin'
import  NavLinksMember  from '@/app/ui/dashboard/nav-links-member'
import { User } from '@/app/lib/definitions';
import { fetchUserById } from '@/app/lib/data';
import { ButtonA } from '@/app/ui/button';
import { fetchFilteredConsultasM } from '@/app/lib/data';


export default async function SideNav({
  // user,
  // searchParams,
}: {
  // user: User | undefined
  // searchParams?: {
  //   query?: string;
  //   page?: string;
  // };
}/* { user }: { user: User | undefined } */) {

  const session = await auth()
  const user = await fetchUserById(session?.user?.email)
  const id= user?.email

  // const email= user?.email
  
  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchConsultasPages(query);

  // const {totalPagesMember, countcon} = await fetchConsultasPagesM(id);

  // const consultas = await fetchFilteredConsultasM( id, currentPage );
  // const lengthConsultas= consultas.length

  // console.log("session:", session)
  if (session)
    return (
      <div className="flex h-full flex-col fixed w-60">
        <Fondo className=" p-3 pb-6 ">
          <div className="mb-2.5 flex flex-col-reverse font-medium items-center text-sm min-[824px]:[margin:_18px_0_34px]  ">
            <div className="">
              {/* {session?.user?.name} */}{session.user?.name}
            </div>
          </div>

          <div className="flex-col gap-0.5 ">
            {session.user?.email === process.env.ADMIN ? (
              <NavLinksAdmin />
              ) : (
              <NavLinksMember />
              )}
          </div>
        </Fondo>


        {/* <Link href="/realizar-consulta">
          <ButtonA className={`h-7 pl-3 pr-2 text-[14.5px] w-max`}>
            <div className="flex gap-2 items-center ">
              <p>{lengthConsultas !== 0 ? "Nueva" : "Realizar"} consulta</p>
              <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
            </div>
          </ButtonA>
        </Link> */}


      </div>
    );
  return null;
}
