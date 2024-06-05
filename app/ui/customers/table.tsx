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
    <div className="">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Clientes
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar cliente..." />
        <CreateCustomer />
      </div>
      <div className="mt-6 flow-root">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg  p-4 bg-[#0000000d] [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffef] min-[824px]:pt-0 ">
              <div className="min-[824px]:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full text-sm rounded-md p-4 bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047]"
                    >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.image_url}
                          className="rounded-full"
                          alt={`${customer.name}'s customers picture`}
                          width={28}
                          height={28}
                        />
                        <div>
                        <p>{customer.name}</p>
                        <p>{customer.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col  " >
                        <p className="text-sm">Debe</p>
                        <p className="font-medium text-red-500">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-sm ">Cobrado</p>
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
              <table className="hidden min-w-full text-gray-900 min-[824px]:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Cliente
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Facturas
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Cobrado<p className="text-red-500">Debe</p>
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="hidden">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody >
                  {customers.map((customer) => (
                    <tr 
                      key={customer.id} 
                      className="w-full py-3 bg-[#ffffff47] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] text-sm last-of-type:border-none [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg [&:first-child>td:first-child]:rounded-tl-lg  [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg "
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <div>
                          <p>{customer.name}</p>
                          <p>{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        <div>
                          <p>{customer.total_paid}</p>
                          <p className="text-red-500">{customer.total_pending}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3 group-first-of-type:[border-radius:_0_8px_0_0] group-last-of-type:[border-radius:_0_0_8px_0]">
                        <div className="flex items-end flex-col justify-end gap-3">
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
  );
}
