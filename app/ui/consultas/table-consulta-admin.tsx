
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UpdateConsulta, DeleteConsulta } from '@/app/ui/consultas/buttons';
import Search from '@/app/ui/search';
import { fetchFilteredConsultas } from '@/app/lib/data';
import { User } from 'next-auth';



export default async function TableConsultaAdmin({
  query,
  currentPage,
  // user,
}: {
  query: string;
  currentPage: number;
  // user: User | undefined
}) {

  const AllConsultas = await fetchFilteredConsultas(query, currentPage);

  console.log("query: ",query  )
  console.log("currentPage: ",currentPage )
  console.log("AllConsultas: ",AllConsultas )

  return (
    <div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar consultas..." />
      </div>

      {/* <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md">
            <div className="md:hidden">
              {AllConsultas?.map((AllConsulta) => (
                <div
                  key={AllConsulta.id}
                  className="mb-2 w-full text-sm rounded-lg p-4 md:bg-white  bg-[#ffffff94] [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e]"
                >
                  <div className="flex pb-2 items-center w-full rounded-lg min-[800px]:flex-row ">
                    <div className=" relative" data-testid="image-container">
                      { AllConsulta.image ? (
                          <img
                            decoding="async" 
                            src= {AllConsulta.image}
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
                      <p className="text-[#1d0215aa] ">{AllConsulta?.email}</p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-star gap-4 border-y border-[#00000014] py-2">
                    <div>
                      Consulta:
                    </div>
                    {AllConsulta?.respuesta ? (
                        <div className="text-center rounded text-sm ">
                          Respondida
                        </div>
                        ) : (
                          <div className="text-center rounded text-[#cf0000] text-sm ">
                            Sin responder
                          </div>
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
            
            <table className="hidden min-w-full rounded-md md:table">
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
                  <tr key={AllConsulta?.id} className="w-full py-3 bg-[#ffffff94] [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e] text-sm last-of-type:border-none [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg [&:first-child>td:first-child]:rounded-tl-lg  [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg  ">
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm group-first-of-type:[border-radius:_8px_0_0_0] group-last-of-type:[border-radius:_0_0_0_8px] sm:pl-6">
                    <div className="flex items-center gap-3">
                        <div> 
                          <p className="font-semibold ">{AllConsulta.name}</p>
                          <p className="text-[#1d0215aa] ">{AllConsulta.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-5 text-sm">
                    <p>{formatDateToLocal(AllConsulta.created_at)}</p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-5 text-sm">
                      {AllConsulta?.respuesta ? (
                        <div className="text-center rounded ">Respondida</div>
                        ) : (
                          <div className="text-center rounded text-[#cf0000] ">Sin resonder</div>
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
      </div> */}
    </div>
  );
}
