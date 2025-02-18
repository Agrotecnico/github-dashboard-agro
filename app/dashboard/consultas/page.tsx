import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { auth } from '@/auth';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchConsultasPages } from '@/app/lib/data';
import TableConsultaAdmin from '@/app/ui/consultas/table-consulta-admin';
import TableConsultaMember from '@/app/ui/consultas/table-consulta-member';
import { fetchUserById } from '@/app/lib/data';
import { fetchConsultasPagesM } from '@/app/lib/data';
import { fetchFilteredConsultasM } from '@/app/lib/data';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';
import { ButtonA } from '@/app/ui/button';


export const metadata: Metadata = {
  title: 'Consultas',
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

  const totalPages = await fetchConsultasPages(query);
  const {totalPagesMember, countcon} = await fetchConsultasPagesM(id);

  const consultas = await fetchFilteredConsultasM( id, currentPage );
  const lengthConsultas= consultas.length


  if (user?.email === process.env.ADMIN)
    return (
      <main>
        <h1 className={` mb-4 text-xl md:mb-8 lg:text-2xl`}>
          Consultas
        </h1>

        <TableConsultaAdmin query={query} currentPage={currentPage} user={user}  />

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </main>
    );

  return (
    <main>
      <div className="flex items-center justify-between text-wrap mb-8">
        <h1 className={` text-xl lg:text-2xl`}>
          Consultas
        </h1>

        <Link href="/realizar-consulta">
          <ButtonA
             className={`h-8 text-[13.5px] w-max`}>
            {lengthConsultas !== 0 ? "Nueva" : "Realizar"} consulta <ChevronRightIcon className="ml-3 w-4 stroke-[3] opacity-80" />
          </ButtonA>
        </Link>
      </div>
        {consultas.length ? (
          <div className="text-[#1d0215dd] flex flex-col gap-2 ">
            {consultas?.map((consulta, idx) => (
              <div key={idx } className=" text-[13px] leading-[18px] ">
                <TableConsultaMember consulta={consulta} idx={idx} lengthConsultas={lengthConsultas} />
              </div>
            ))}
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPagesMember} />
            </div>
          </div>
        ) : (
          <div>Todavía no realizaste una consulta</div>
        )}
    </main>
  );
}
