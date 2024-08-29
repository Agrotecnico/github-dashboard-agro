import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchCustomersPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import { auth } from '@/auth';

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

  if (session?.user?.email ===  process.env.ADMIN )
    return (
      <main>
        <CustomersTable query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </main>
    );
  return (
    <div className="h-[50%] flex items-center justify-center ">Clientes no disponble para este Usuario</div>
  );
}
