
import { Metadata } from 'next';
import Link from 'next/link';
import { auth } from '@/auth';
import Pagination from '@/app/ui/invoices/pagination';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';

import { fetchTramitesPages } from '@/app/lib/data';
import TableTramiteAdmin from '@/app/ui/tramites/table-tramite-admin';
import TableTramiteMember from '@/app/ui/tramites/table-tramite-member';
import { fetchUserById } from '@/app/lib/data';
import { fetchTramitesPagesM } from '@/app/lib/data';
import { fetchFilteredTramitesM } from '@/app/lib/data';
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
  const email= user?.email

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  const totalPages = await fetchTramitesPages(query);


  const {totalPagesMember, countcon} = await fetchTramitesPagesM(email);


  const tramites = await fetchFilteredTramitesM( email, currentPage );

  const lengthTramites= tramites.length


  if (user?.email === process.env.ADMIN)
    return (
      <main>
        <h1 className={` mb-4 text-xl md:mb-8 lg:text-2xl`}>
          Trámites
        </h1>

        <TableTramiteAdmin query={query} currentPage={currentPage}   />

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </main>
    );

    return (
      <main>
        <div className="flex items-center justify-between text-wrap mb-8">
          <h1 className={` text-xl lg:text-2xl`}>
            Trámites
          </h1>

          <Link href="/iniciar-tramite">
            <ButtonA className={`h-7 pl-3 pr-2 text-[14.5px] w-max`}>
              <div className="flex gap-2 items-center ">
                <p>{lengthTramites !== 0 ? "Nuevo" : "Iniciar"} trámite</p>
                <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
              </div>
            </ButtonA>
          </Link>
        </div>
        
        {tramites.length ? (
          <div className="text-[#1d0215dd] flex flex-col gap-2 ">
            {tramites?.map((tramite, idx) => (
              <div key={idx } className=" text-[13px] leading-[18px] ">
                <TableTramiteMember tramite={tramite} idx={idx} lengthTramites={lengthTramites} />
              </div>
            ))}
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPagesMember} />
            </div>
          </div>
        ) : (
          <div>Todavía no iniciaste un trámite</div>
        )}
      </main>
    );
}
