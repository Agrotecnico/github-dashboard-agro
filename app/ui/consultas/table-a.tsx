
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UpdateConsulta, DeleteConsulta } from '@/app/ui/consultas/buttons';
import Search from '@/app/ui/search';
import { fetchFilteredConsultas } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';


export default async function ConsultasTableA({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {

  const AllConsultas = await fetchFilteredConsultas(query, currentPage);

  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl`}>
        Consultas
      </h1>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar consultas..." />
      </div>

      <div className="mt-6 flow-root">
        <div className="overflow-x-auto rounded-md bg-[#0000000d] [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0]">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md p-4 md:pt-0">
              <div className="md:hidden">
                {AllConsultas?.map((AllConsulta) => (
                  <div
                    key={AllConsulta.id}
                    className="mb-2 w-full text-sm rounded-lg p-4 md:bg-white  bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047]"
                  >
                  <div className="flex pb-2 items-center w-full rounded-lg min-[800px]:flex-row ">
                    <div className=" relative" data-testid="image-container">
                      {AllConsulta?.image ? (
                          <img
                            decoding="async" 
                            src= {session?.user?.image}
                            className="rounded-full cursor-pointer bg-cover h-10 bject-cover w-full " alt="header-image-profile">
                          </img>
                        ) : (
                          <div className="flex w-10 h-10 text-2xl items-center justify-center rounded-full bg-[#ffffffba] text-[#666] ">
                            {AllConsulta?.email?.substring(0, 1).toUpperCase()}
                          </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-start ml-4 w-full min-[800px]:items-start min-[800px]:my-1 ">
                      <h2 className="text-md font-semibold m-0" data-testid="username-test">
                        {AllConsulta?.name}
                      </h2>
                      <p>{AllConsulta?.email}</p>
                    </div>
                  </div>
                    <div className="flex w-full items-center justify-star gap-4 border-b border-t border-[#ffffff88] py-2">
                      <div>Consulta:</div>
                      {AllConsulta?.respuesta ? (
                          <div className="text-center rounded bg-[#c2f3c1] text-sm ">Respondida</div>
                          ) : (
                            <div className="text-center rounded bg-[#f7cfcf] text-sm ">Sin responder</div>
                          )}
                    </div>
                    <div className="flex justify-between pt-2">
                      <div>
                        <p>Fecha</p>
                        <p className="text-sm">{formatDateToLocal(AllConsulta.created_at)}</p>
                      </div>
                      <div className="flex items-end">
                        <UpdateConsulta id={AllConsulta.id} />
                        <DeleteConsulta id={AllConsulta.id} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Mombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Respuesta
                    </th>
                  </tr>
                </thead>
                <tbody >
                  {AllConsultas?.map((AllConsulta) => (
                    <tr key={AllConsulta?.id} className="w-full py-3 bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] text-sm last-of-type:border-none [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg [&:first-child>td:first-child]:rounded-tl-lg  [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg  ">
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm text-black group-first-of-type:[border-radius:_8px_0_0_0] group-last-of-type:[border-radius:_0_0_0_8px] sm:pl-6">
                      <div className="flex items-center gap-3">
                          <div> 
                            <p className="font-semibold ">{AllConsulta.name}</p>
                            <p>{AllConsulta.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                      <p>{formatDateToLocal(AllConsulta.created_at)}</p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {AllConsulta?.respuesta ? (
                          <div className="text-center rounded bg-[#c2f3c1] ">Respondida</div>
                          ) : (
                            <div className="text-center rounded bg-[#f7cfcf] ">Sin respuesta</div>
                          )}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3 group-first-of-type:[border-radius:_0_8px_0_0] group-last-of-type:[border-radius:_0_0_8px_0]">
                        <div className="flex justify-end gap-3  items-end flex-col">
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
            </div>
            <div className="flex w-full items-center justify-between pt-4">
              <p>{formatDateToLocal(AllConsulta.created_at)}</p>
            </div>
            <p>{AllConsulta?.respuesta ? "Respondida" : "Sin respuesta"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
