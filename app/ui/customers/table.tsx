import Image from 'next/image';
import { UpdateCustomer, DeleteCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { CreateCustomer } from '@/app/ui/customers/buttons';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Clientes
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar cliente..." />
        <CreateCustomer />
      </div>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto rounded-xl [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-white p-4 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-lg bg-[#f7f7f7] p-4 md:bg-white"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={customer.image_url}
                              className="rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pendiente</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Cobrada</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 text-sm">
                      <p>{customer.total_invoices} facturas</p>
                      <div className="flex">
                        <UpdateCustomer id={customer.id} />
                        <DeleteCustomer id={customer.id} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-white text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Mombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Facturas
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Pendientes
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Cobradas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-white !bg-white text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group bg-[#f7f7f7]">
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm text-black group-first-of-type:[border-radius:_8px_0_0_0] group-last-of-type:[border-radius:_0_0_0_8px] sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.total_paid}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3 group-first-of-type:[border-radius:_0_8px_0_0] group-last-of-type:[border-radius:_0_0_8px_0]">
                        <div className="flex justify-end gap-3">
                          <UpdateCustomer id={customer.id} />
                          <DeleteCustomer id={customer.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
