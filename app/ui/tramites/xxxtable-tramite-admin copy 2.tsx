"use client"

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Disclosure, DisclosurePanel } from '@headlessui/react'

import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UpdateTramite, DeleteTramite } from '@/app/ui/tramites/buttons';
import Search from '@/app/ui/search';
import { fetchFilteredTramites } from '@/app/lib/data';
import Image from 'next/image'
import distanceToNow from '@/app/lib/dateRelative';
import { Frente } from '@/app/ui/marcos';
import { Button } from '@/app/ui/button';
import useToggleState from "@/app/lib/hooks/use-toggle-state"
import { TramitesTable } from "@/app/lib/definitions";


export default async function TableTramiteAdmin({
  query,
  currentPage,
  // AllTramites,
}: {
  query: string;
  currentPage: number;
  // Alltramites: TramitesTable;
}) {

  // const [successState, setSuccessState] = useState(false)
  // const { state, close, toggle } = useToggleState()

  // const clearState = () => {
  //   setSuccessState(false)
  // }

  // const handleToggle = () => {
  //   clearState()
  //   setTimeout(() => toggle(), 100)
  // }

  // useEffect(() => {
  //   if (successState) {
  //     close()
  //   }
  // }, [successState, close])

  const AllTramites = await fetchFilteredTramites(query, currentPage);
  // const AllTramite = AllTramites[0]
  console.log("AllTramites:", AllTramites)


  return (
    <div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar trámites..." />
      </div>

      <div className="mt-6 flow-root">
        Polo
        {/* <div className="inline-block min-w-full align-middle">
          <div className=" rounded-md overflow-hidden">
            <div className="">
              {AllTramites?.map((AllTramite, index) => (
                <div
                  key={AllTramite.id}
                  className="flex flex-col gap-3 mb-2 w-full text-sm rounded-lg p-4 bg-[#ffffff94] [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e] "
                  >
                  <div className="flex flex-col gap-3 rounded-lg ">
                    <div className="flex items-center">
                      <div className="" data-testid="image-container">
                        { AllTramite.image ? (
                            <Image
                              src= {AllTramite.image}
                              width={20}
                              height={20}
                              className="w-11 max-w-2xl rounded-full " alt="avatar user">
                              
                            </Image>
                          ) : (
                            <div className="flex w-12 h-12 text-2xl items-center justify-center rounded-full bg-[#1d021511] text-[#666] ">
                              {AllTramite?.email_id?.substring(0, 1).toUpperCase()}
                            </div>
                          )} 
                      </div>
                      <div className="flex flex-col justify-center items-start ml-4 ">
                        <h2 className="text-md font-semibold m-0" data-testid="username-test">
                          {AllTramite?.name}
                        </h2>
                        <p className="text-[#1d0215aa] ">{AllTramite?.email_id}</p>
                      </div>
                    </div>

                    <div className="flex items-center flex-nowrap gap-2 leading-tight">
                      <img 
                          src= "/dnrpa.png" 
                          alt="icono trámites" 
                          width={26} 
                          height={"auto"}
                          className="opacity-50 mt-1 mb-auto w-3 sm:w-4 md:mt-0 " 
                        />

                      <div className="flex flex-wrap gap-2 items-center">
                        <h1 className=" text-start mr-2 text-[#50073a88] font-semibold leading-tight tracking-tighter text-base sm:text-lg sm:text-[22px] md:leading-none ">
                          {AllTramite.tramite}
                        </h1>

                        <div className="flex gap-[1px] w-28 h-[14px] bg-[#ffffff] rounded-lg">
                          <div className="flex items-center justify-center text-[10px] text-white text-center w-7 bg-[#50073abf] rounded-l-lg ">
                            1
                          </div>
                          <div className={`flex items-center justify-center text-[10px] text-center w-7  ${AllTramite.estado === "presupuestado" || AllTramite.estado === "iniciado" || AllTramite.estado === "cancelado" || AllTramite.estado === "terminado"  ? "bg-[#50073abf] text-white" : "bg-white text-[#1d0215cc]" } `}>
                            2
                          </div>
                          <div className={`flex items-center justify-center text-[10px] text-center w-7 ${ AllTramite.estado === "iniciado" || AllTramite.estado === "cancelado" || AllTramite.estado === "terminado" ? "bg-[#50073abf] text-white" : "bg-white text-[#1d0215cc]" } `}>
                            3
                          </div>
                          <div className={`flex items-center justify-center text-[10px] text-center w-7 ${ AllTramite.estado === "cancelado" || AllTramite.estado === "terminado"  ? "bg-[#50073abf] text-white" : "bg-white text-[#1d0215cc]" } rounded-r-lg `}>
                            4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full text-[#1d0215] py-2 gap-2 border-y border-[#1d021514]">
                    <div className={`flex items-center `}>
                      <div className="mr-2 text-[12.5px] px-[5px] bg-[#dd00dd00] rounded-[4px]">1</div>
                      <div className={``}>
                        Solicitó presupuesto el día <span  className="font-medium text-[13px] bg-[#ffffffdd] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(AllTramite.created_at)}</span><span className="opacity-70 text-[13px] ">{distanceToNow(new Date(AllTramites[index].created_at))}</span> 
                      </div>
                    </div>

                    <div className={`flex items-center `}>
                      <div className={`mr-2 text-[12.5px] px-[5px] rounded-[4px]  ${AllTramite.estado === "presupuestar" && "text-[#ffffff] bg-[#e580d0]"}`}>2</div>
                      { AllTramite.estado === "presupuestado" || AllTramite.estado === "iniciado" || AllTramite.estado === "cancelado" || AllTramite.estado === "terminado" ? (
                        <div className={``}>
                          Presupuesto enviado el día <span className="font-medium text-[13px] bg-[#ffffffdd] px-1.5 py-0.5 mr-1  rounded-[4px]" > {formatDateToLocal(AllTramite.budgeted_at!)}</span><span className="opacity-70 text-[13px] mr-1.5">{distanceToNow(new Date(AllTramites[index].budgeted_at!))} </span> Precio: <span className="font-medium text-[14px] bg-[#ffffffdd] ">{formatCurrency(Number(AllTramites[index].presupuesto))}</span>
                        </div>
                        ) : (
                          <div>Calcular presupuesto</div>
                        ) }
                    </div>

                    <div className={`flex items-center `}>
                      <div className={`mr-2 text-[12.5px] px-[5px] rounded-[4px] ${AllTramite.estado === "presupuestado" ? "text-[#ffffff] bg-[#e580d0]" : AllTramite.estado === "presupuestar" ? "opacity-40" : "opacity-100"}`}>3</div>
                      {AllTramite.estado === "iniciado" || AllTramite.estado === "cancelado" || AllTramite.estado === "terminado" ? (
                        <div className={``}>
                          Pago realizado el día <span  className="font-medium text-[13px] bg-[#ffffffdd] px-1.5 py-0.5 mr-1  rounded-[4px]" > {formatDateToLocal(AllTramite.started_at!)}</span> <span className="opacity-70 text-[13px] " >{distanceToNow(new Date(AllTramites[index].started_at!))} </span>
                        </div>
                        ) : (
                          <div className={`${AllTramite.estado === "presupuestar" ? "opacity-40" : "opacity-100"} `}>Chequear pago</div>
                        )}
                    </div>

                    <div className={`flex items-center `}>
                      <div className={`mr-2 text-[12.5px] px-[5px] rounded-[4px] ${AllTramite.estado === "iniciado" ? "text-[#ffffff] bg-[#e580d0]" : AllTramite.estado === "presupuestar" ||  AllTramite.estado === "presupuestado" ? "opacity-40" : "opacity-100" }`}>4</div>
                      {AllTramite.estado === "cancelado" || AllTramite.estado === "terminado" ? (
                        <div className={``}>
                          Trámite {AllTramite.estado === "cancelado" ? "cancelado" : AllTramite.estado === "terminado" && "terminado" } el día <span  className="font-medium text-[13px] bg-[#ffffffdd] px-1.5 py-0.5 mr-1  rounded-[4px]" > {formatDateToLocal(AllTramite.finished_at!)}</span>  <span className="opacity-70 text-[13px] ">{distanceToNow(new Date(AllTramites[index].finished_at!))}</span>
                        </div>
                        ) : (
                          <div className={`${AllTramite.estado === "presupuestar" ||  AllTramite.estado === "presupuestado" ? "opacity-40" : "opacity-100"} `}>Realizar el trámite</div>
                        )}
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end items-end">
                    <UpdateTramite id={AllTramite.id} />
                    <DeleteTramite id={AllTramite.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

