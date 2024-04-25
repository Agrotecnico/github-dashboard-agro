/* "use client" */
/* import { fetchFilteredCustomers } from '@/app/lib/data'; */
import CustomersTable from '@/app/ui/customers/table'
import { Metadata } from 'next'
import { fetchCustomersPages } from '@/app/lib/data'
import Pagination from '@/app/ui/invoices/pagination'
import Customers from '@/app/ui/customers/customers'
/* import { useSession } from "next-auth/react" */


export const metadata: Metadata = {
  title: 'Clientes',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  /* const { data: session, status } = useSession() */
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1

  /* const customers = await fetchFilteredCustomers(query); */
  const totalPages = await fetchCustomersPages(query)

  /* if (session?.user?.email === 'agrotecnicog@gmail.com' )
    return (
      <main>
        <CustomersTable  query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </main>
    )
    return (
      status === "loading" ? <div>ERROR</div> :  
      <div>ERROR</div>
    ) */

  return (
    <>
    {/* <Customers query={query} currentPage={curren tPage} totalPages={totalPages} /> */}
    <main>
      <CustomersTable  query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
    </>
  );
}