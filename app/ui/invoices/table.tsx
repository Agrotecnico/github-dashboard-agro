import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle ">
        <div className="rounded-lg  p-4 bg-[#0000000d] [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0] min-[824px]:pt-0 ">
          <div className="min-[824px]:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full text-sm rounded-md p-4 bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047]"
              >
                <div className="flex items-center justify-between border-b border-[#00000014] pb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={invoice.image_url}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt={`${invoice.name}'s profile picture`}
                    />
                    <div>
                      <p className="font-semibold ">{invoice.name}</p>
                      <p>{invoice.email}</p>
                    </div>
                  </div>
                  <p>{formatDateToLocal(invoice.date)}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-lg font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <InvoiceStatus status={invoice.status} />
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
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
                  Monto
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="hidden">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full py-3 bg-[#ffffff47] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] text-sm last-of-type:border-none [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg [&:first-child>td:first-child]:rounded-tl-lg  [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg "
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <div>
                        <p className="font-semibold ">{invoice.name}</p>
                        <p>{invoice.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div className="flex flex-col ml-2 items-start gap-2">
                      <p>{formatCurrency(invoice.amount)}</p>
                      <InvoiceStatus status={invoice.status} />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-end flex-col justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
