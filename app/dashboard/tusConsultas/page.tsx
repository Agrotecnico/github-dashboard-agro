import React from 'react';
import { auth } from '@/auth';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchConsultasPages } from '@/app/lib/data';
import ConsultasTableA from '@/app/ui/consultas/table-a';
import ConsultasTableM from '@/app/ui/consultas/table-m';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const session = await auth();

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchConsultasPages(query);

  if (session?.user?.email === 'agrotecnicog@gmail.com')

  return (
    <main>
      <ConsultasTableA query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );

  return  (
    <main>
      <ConsultasTableM currentPage={currentPage} session={session} />
    </main>
  ); 
}
