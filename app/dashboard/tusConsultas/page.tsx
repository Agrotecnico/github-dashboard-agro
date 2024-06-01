import React from 'react';
import { notFound } from 'next/navigation';
import { auth } from '@/auth';
import type { Consulta, User } from '@/app/lib/definitions';
import { sql } from '@vercel/postgres';
import DateFormatter from "@/app/ui/date-formatter"
/* import { getUser } from "@/app/lib/data" */
import { getConsulta } from "@/app/lib/data"
import { getConsultas } from "@/app/lib/data"
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import Search from '@/app/ui/search';
import { Divide } from 'lucide-react';
import { UpdateConsulta, DeleteConsulta } from '@/app/ui/consultas/buttons';
import Pagination from '@/app/ui/invoices/pagination';

/* async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;

    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
} */
/* async function getConsulta(email: string) {
  try {
    const consultas = await sql<Consulta>`SELECT * 
      FROM consultas 
      WHERE email=${email}
      ORDER BY created_at DESC;`;
    return consultas.rows;
  } catch (error) {
    console.error('Failed to fetch consulta:', error);
    throw new Error('Failed to fetch consulta.');
  }
} */


/* export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
} */



export default async function Page() {
  const session = await auth();

  /* const user = await getUser(session?.user?.email); */
  const consultas = await getConsulta(session?.user?.email);
  const AllConsultas = await getConsultas();
  /* const polo= AllConsultas */

  if (session?.user?.email === 'agrotecnicog@gmail.com')

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Consultas
      </h1>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar consultas..." />
      </div>

      <div className="mt-6 flow-root">
        <div className="overflow-x-auto rounded-md bg-[#0000000d] [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0]">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md p-4 md:pt-0">
              {/* <div className="md:hidden">
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
              </div> */}
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Mombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Respuesta
                    </th>
                  </tr>
                </thead>
                <tbody /* className="divide-y-2 divide-white !bg-white text-gray-900" */>
                  {AllConsultas?.map((AllConsulta) => (
                    <tr key={AllConsulta?.id} className="w-full py-3 bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] text-sm last-of-type:border-none [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg [&:first-child>td:first-child]:rounded-tl-lg  [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg  ">
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm text-black group-first-of-type:[border-radius:_8px_0_0_0] group-last-of-type:[border-radius:_0_0_0_8px] sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{AllConsulta?.name }</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {AllConsulta.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                      <p>{formatDateToLocal(AllConsulta.created_at)}</p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {AllConsulta?.respuesta ? (
                          <div className="text-center rounded bg-[#c2f3c1] ">Con respuesta</div>
                          ) : (
                            <div className="text-center rounded bg-[#f7cfcf] ">Sin respuesta</div>
                          )}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3 group-first-of-type:[border-radius:_0_8px_0_0] group-last-of-type:[border-radius:_0_0_8px_0]">
                        <div className="flex justify-end gap-3">
                          <UpdateConsulta id={AllConsulta.id} />
                          <DeleteConsulta id={AllConsulta.id} />
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

        <div className="text-[#374151] hidden ">
          {AllConsultas?.map((AllConsulta) => (
            <div
              key={AllConsulta.id}
              className="mb-2 w-full rounded-md p-4 bg-[#0000000d] [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0]"
              >
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <p>{AllConsulta?.name}</p>
                  </div>
                  
                  <p className="text-sm text-gray-500">{AllConsulta.email}</p>
                </div>
                {/* <InvoiceStatus status={invoice.status} /> */}
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <p>{formatDateToLocal(AllConsulta.created_at)}</p>
                {/* <div>
                  <p className="text-xl font-medium">
                    {formatCurrency(AllConsulta.created_at)}
                  </p> 
                  
                </div>*/}
                {/* <div className="flex justify-end gap-2">
                  <UpdateInvoice id={invoice.id} />
                  <DeleteInvoice id={invoice.id} />
                </div> */}
              </div>
              <p>{AllConsulta?.respuesta ? "Con respuesta" : "Sin respuesta"}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div> */}


    </div>
  );

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Tus Consultas
      </h1>
      <div>
        {consultas.length ? (
          <div className="text-[#374151] ">
            {consultas?.map((consulta) => (
              <div className="mb-8 rounded-md bg-[#0000000a] px-4 pt-6 pb-3 text-[15px] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff]">
                <div className="mb-6 rounded-lg ">
                  <div className="mb-1 flex justify-between text-[#747e91]">
                    <p className="flex text-[#747e91]">
                      Consulta:
                    </p>
                    <p className="ml-2 text-[13px] opacity-80 underline">
                      {/* Realizada el 25-05-24*/} {formatDateToLocal(consulta.created_at)}
                     {/*  <DateFormatter dateString={consulta.created_at} />  */}
                    </p>
                     
                    {/* {distanceToNow(new Date(consulta?.created_at))} */}
                  </div>
                  <p className="">{consulta?.consulta}</p>
                  {/* <div className="mb-2 text-end text-sm">{consulta.email}</div> */}
                </div>
                <div className="-mx-1 rounded-md bg-[#ffffff57] p-3  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] ">
                  <div>
                    {consulta.respuesta ? (
                      <>
                      <div className="mb-1 flex justify-between text-[#747e91]">
                        <p className="flex text-[#747e91] ">
                          Respuesta:
                        </p>
                         {/* <p className="ml-2 text-[13px] opacity-80 underline">
                         Realizada el 29-05-24
                        </p>*/} 
                        {/* <DateFormatter dateString={consulta?.created_at} /> */}
                        {/* {distanceToNow(new Date(consulta?.created_at))} */}
                      </div>
                      {/* <p className="mb-1 flex text-[#747e91] underline">
                        Respuesta:
                      </p> */}
                      <p>{consulta.respuesta} </p>
                      </>
                    ) : (
                      <>
                      <p className="mb-1 text-[14px] flex text-[#747e91]">
                        Respuesta:
                      </p>
                      <p className="text-[14px] italic text-[#747e91]">
                        Hemos recibido tu consulta.<br></br>
                        Por esta misma cuenta te responderemos a la brevedad.
                      </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          ) : (
          <div>Todavía no realizaste ninguna consulta</div>
        )}
      </div>
    </div>
  );
}
