import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchCustomersPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import { auth } from '@/auth';
import { notFound } from 'next/navigation';

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
  const session = await auth();

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomersPages(query);

  if (session?.user?.email === 'agrotecnicog@gmail.com')
    return (
      <main>
        <CustomersTable query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </main>
    );
  return notFound();
}
