import Pagination from '@/app/ui/invoices/pagination'
import Search from '@/app/ui/search'
import Table from '@/app/ui/invoices/table'
import { CreateInvoice } from '@/app/ui/invoices/buttons'
import { lusitana } from '@/app/ui/fonts'
import { InvoicesTableSkeleton } from '@/app/ui/skeletons'
import { Suspense } from 'react'
import { fetchInvoicesPages } from '@/app/lib/data'
import { Metadata } from 'next'
import { auth } from '@/auth'


export const metadata: Metadata = {
  title: 'Facturas',
}
 
export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const session = await auth()
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const totalPages = await fetchInvoicesPages(query)

  if (session?.user?.email ===  process.env.ADMIN )
    return (
      <div className="">
        <div className="flex w-full items-center justify-between">
          <h1 className={` mb-4 text-xl md:mb-8 lg:text-2xl`}>Facturas</h1>{/* ${lusitana.className} */}
        </div>
        <div className="flex items-center justify-between gap-2">
          <Search placeholder="Buscar facturas..." />
          <CreateInvoice />
        </div>
        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    )
      return (
        <div className="h-[50%] flex items-center justify-center ">Página no disponble</div>
      );
}