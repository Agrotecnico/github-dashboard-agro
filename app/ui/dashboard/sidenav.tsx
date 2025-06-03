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
        <Fondo className=" p-3 ">
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

          <div className={`flex flex-col gap-[1px] text-[14px] mt-3  ${session?.user?.email === process.env.ADMIN && "hidden"}`}>
            <Link href="/iniciar-tramite/baja-de-vehiculo">
              <ButtonA className={`h-6 w-full rounded-none !rounded-t-[4px] sm:h-[26px]`}>
                <p className="w-full">Pedir presupuesto</p>
              </ButtonA>
            </Link>

            <Link href="/realizar-consulta">
              <ButtonA className={`h-6 !bg-[#b74ab7] !text-[#ffffff] w-full rounded-none !rounded-b-[4px] sm:h-[26px]`}>
                <p className="w-full">Realizar consulta</p>
              </ButtonA>
            </Link>
          </div>
        </Fondo>
      </div>
    );
  return null;
}
