/* import { fetchFilteredCustomers } from '@/app/lib/data'; */
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchCustomersPages } from '@/app/lib/data'
import Pagination from '@/app/ui/invoices/pagination'


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
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1

  /* const customers = await fetchFilteredCustomers(query); */
  const totalPages = await fetchCustomersPages(query)

  return (
    <main>
      <CustomersTable /* customers={customers} */ query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}