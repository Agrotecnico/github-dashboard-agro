'use client'

/* import { CustomerField } from '@/app/lib/definitions'; */
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions'
import { useFormState } from 'react-dom'
import CustomersTable from '@/app/ui/customers/table'
import Pagination from '@/app/ui/invoices/pagination'
import { fetchCustomersPages } from '@/app/lib/data'
import { useSession } from "next-auth/react"

export default async function Customers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const { data: session, status } = useSession()

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1

  /* const customers = await fetchFilteredCustomers(query); */
  const totalPages = await fetchCustomersPages(query)

  if (session?.user?.email === 'agrotecnicog@gmail.com' )
  return (
    <main>
      <CustomersTable /* customers={customers} */ query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  )
  return (
    status === "loading" ? <div>ERROR</div> : 
    <div>ERRORXX</div>
  )
}