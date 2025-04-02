
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UpdateConsulta, DeleteConsulta } from '@/app/ui/consultas/buttons';
import Search from '@/app/ui/search';
import { fetchFilteredConsultas } from '@/app/lib/data';
import { User } from 'next-auth';
import Image from 'next/image'
import distanceToNow from '@/app/lib/dateRelative';
// import  {DeleteConsultaDialog}  from "@/app/ui/consultas/buttons";
import  AlertDialogDelete  from "@/app/ui/uiRadix/alert-dialog-delete";



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

  // console.log("query: ",query  )
  // console.log("currentPage: ",currentPage )
  // console.log("AllConsultas: ",AllConsultas[0].id )

  return (
    <div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar consultas..." />
      </div>

      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md">
            <div className="">
              {AllConsultas?.map((AllConsulta, index) => (
                <div
                  key={AllConsulta.id}
                  className="mb-2 w-full text-sm rounded-lg p-4 bg-[#ffffff94] [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e]"
                >
                  {/* <div className="flex flex-col gap-3 rounded-lg "> */}
                    <div className="flex items-center mb-4">
                      <div className=" relative" data-testid="image-container">
                        { AllConsulta.image ? (
                            <Image
                              // decoding="async" 
                              src= {AllConsulta.image}
                              width={20}
                              height={20}
                              className="w-11 max-w-2xl rounded-full " alt="avatar user">
                              
                            </Image>
                          ) : (
                            <div className="flex w-12 h-12 text-2xl items-center justify-center rounded-full bg-[#1d021511] text-[#666] ">
                            {AllConsulta?.email_id?.substring(0, 1).toUpperCase()}
                          </div>
                          )} 
                      </div>
                      <div className="flex flex-col justify-center items-start ml-4 w-full min-[800px]:items-start min-[800px]:my-1 ">
                        <h2 className="text-md font-semibold m-0" data-testid="username-test">
                          {AllConsulta?.name}
                        </h2>
                        <p className="text-[#1d0215aa] ">{AllConsulta?.email_id}</p>
                      </div>
                    </div>

                    {/* <div className="flex items-center my-2 ">
                      <div className="flex text-start text-sm sm:text-[15px] ">
                        <div className="mr-1.5 ">Consulta:</div>
                        <div>{AllConsulta.consulta}</div>
                      </div>
                    </div> */}
                  {/* </div> */}

                  <div className="flex flex-col w-full text-[#1d0215] py-2 gap-2 border-y border-[#1d021514]">
                    <div className={`flex items-center `}>
                      <div className="mr-2 px-[5px] bg-[#dd00dd00] rounded-[4px]">&#10003;</div>
                      <div className={``}>
                        Consulta realizada el día <span className="font-medium text-[15px] text-[#1d0215] " > {formatDateToLocal(AllConsulta.created_at)}</span>  ({distanceToNow(new Date(AllConsulta.created_at))})
                      </div>
                    </div>

                     <div className={`flex items-center `}>
                      <div className={`mr-2 px-[5px] rounded-[4px]  ${!AllConsulta.respuesta && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                      { AllConsulta.respuesta  ? (
                        <div className={``}>
                          Respuesta enviado el día <span className="font-medium text-[15px] text-[#1d0215]" > {formatDateToLocal(AllConsulta.updated_at)}</span>  ({distanceToNow(new Date(AllConsultas[index].updated_at))})
                        </div>
                        ) : (
                          <div>Enviar respuesta</div>
                        ) }
                    </div>
                  </div>

                  {/* <div className="flex w-full items-center justify-star gap-4 border-y border-[#00000014] py-2">
                    <div>
                      Consulta:
                    </div>
                    {AllConsulta?.respuesta ? (
                        <div className="px-2 border border-[#2ca026aa] [box-shadow:_inset_0_0_3px_#2ca026aa] rounded-md text-center text-sm ">
                          Respondida
                        </div>
                        ) : (
                          <div className="px-2 border border-[#cf0000aa] [box-shadow:_inset_0_0_3px_#cf0000aa] rounded-md text-center text-sm ">
                            Sin responder
                          </div>
                        )}
                  </div> */}

                  <div className="flex gap-2 items-end justify-end pt-2">
                    <UpdateConsulta id={AllConsulta.id} />
                    <DeleteConsulta id={AllConsulta.id} />
                    {/* <AlertDialogDelete id={AllConsulta.id} /> */}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
