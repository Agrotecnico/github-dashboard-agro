'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import Image from 'next/image'
import { CalendarDaysIcon} from '@heroicons/react/24/outline'
import { Disclosure, DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx';
import { useState, useEffect } from 'react';

import { Tramite } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateTramite } from '@/app/lib/actions';
import { User } from '@/app/lib/definitions';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import {InputCnp} from "@/app/ui/uiRadix/input-cnp"
import { Frente } from '@/app/ui/marcos';
import IconConsultaRight from "@/app/ui/logosIconos/icon-consulta-right"
import distanceToNow from '@/app/lib/dateRelative';
import useToggleState from "@/app/lib/hooks/use-toggle-state"


export default function EditTramiteForm({
   tramite,
   userMember,
  }: { 
    tramite: Tramite;
    userMember: User | undefined
  }) {

    const [successState, setSuccessState] = useState(false)

    const { state, close, toggle } = useToggleState()

    const clearState = () => {
      setSuccessState(false)
    }

    const handleToggle = () => {
      clearState()
      setTimeout(() => toggle(), 100)
    }

  const id= tramite.id

  const archivosAdjuntos= tramite?.documentos_url
  const archivos: string[] = JSON.parse(`${archivosAdjuntos}`)

  // const infoAdjuntos= tramite?.informacion
  const infos: string[] = JSON.parse(/* `${infoAdjuntos}` */tramite?.informacion!)
  let infoAdjuntos: string[]= []
  infos.forEach((value, index) => {
    if (value === "undefined : ") {
      return
    } else {
      infoAdjuntos[index] = value
    }
  });

  const initialState = { message: null, errors: {} };
  const updateTramiteWithId = updateTramite.bind(null, id);
  const [statex, dispatch] = useFormState(updateTramiteWithId, initialState);

  console.log("infos:", infos)
  console.log("infoAdjuntos:", infoAdjuntos)


  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-between rounded-xl ">
        <div className="flex flex-col">
          <div className=" flex items-center ">
            <div className=" relative mr-4" data-testid="image-container">
              {userMember?.image ? (
                  <img
                    decoding="async" 
                    src= {userMember?.image}
                    className="rounded-full cursor-pointer bg-cover h-14 bject-cover w-full " alt="header-image-profile">
                    
                  </img>
                ) : (
                  <div className="flex w-10 h-10 text-2xl items-center justify-center rounded-full bg-[#ffffffba] text-[#666] ">
                    {userMember?.email?.substring(0, 1).toUpperCase()}
                  </div>
                )}
            </div>

            <div className=" text-sm">
              <div className="font-medium">{userMember?.name} </div>
              <div className=" text-[13px]">{userMember?.email}</div>
            </div>
          </div>

          <div className="flex items-center my-5 ">
            <Image
              src= "/dnrpa.png" 
              alt="icono trámites" 
              width={26} 
              height={26}
              className="opacity-50 h-[14px] w-[14px] mr-1.5 sm:mr-2 " 
            />
            <h1 className=" text-start text-[#50073a88] font-semibold leading-tight tracking-tighter text-base sm:text-lg sm:text-[22px] md:leading-none ">
              {tramite.tramite}
            </h1>
          </div>
        </div>

        <Frente  className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
            <div className={`flex w-full text-[15px] sm:text-base ${state && "hidden"}`}>
              Informacion y Documentos adjuntos
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { handleToggle()}}
              data-testid="edit-button"
              data-active={state}
              type='button'
            >
              {state ? "Cerrar" :  <div><span className="text-[12px] uppercase">Ver</span></div> }
            </Button>
          </div>
          <Disclosure>
            <DisclosurePanel
              static
              className={clsx(
                "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                {
                  "max-h-[1000px] opacity-100": state,
                  "max-h-0 opacity-0": !state,
                  "invisible": !state,
                }
              )}
            >
              <div className="flex flex-col mb-4" >
                <div className="w-full bg-[#1d0215] p-4 mt-4 rounded-lg flex flex-col gap-2.5 flex-wrap justify-start">
                  <div className="mb-1.5 text-white  text-[15px] sm:text-base">Informacion adjunta</div>
                    {infoAdjuntos ? (
                      <div className="text-[#ffffffdd] flex flex-col gap-1 ">
                        {infoAdjuntos?.map((infoAdjunto, index) => (
                          <div key={index } className=" text-sm sm:text-[15px] ">
                            {infoAdjunto}
                          </div> 
                        ))}
                      </div>
                    ) : (
                      <div className="text-[#ffffffaa] ">No tiene informacion adjunta</div>
                    )}
                </div>
              </div>

              <div className={`flex flex-col `}>
                <div className="w-full bg-[#1d0215] p-4 rounded-lg flex flex-col gap-2.5 flex-wrap justify-center">
                  <div className="mb-1.5 text-white text-[15px] sm:text-base">Documentos adjuntos</div>
                  {/* <div className=""> */}
                    {archivos ? (
                      <div className="text-[#1d0215dd] flex gap-5 items-baseline ">
                        {archivos?.map((archivo, index) => (
                          <div key={index } className=" text-[13px] leading-[18px] opacity-80 hover:opacity-100 ">
                            
                            <Link 
                              href={archivo.slice(-4) === ".pdf" ? 
                                archivo.replace(".pdf", ".png") 
                                : 
                                archivo
                              } 
                              target="_blank">
                              <img 
                                src={archivo.slice(-4) === ".pdf" ? 
                                  archivo.replace(".pdf", ".png") 
                                  : 
                                  archivo
                                } 
                                alt="imagen archivo"
                                width={96}
                                height={96}
                                className="rounded border border-[#777] " />
                            </Link>
                          </div> 
                        ))}
                      </div>
                    ) : (
                      <div className="text-[#ffffffaa] ">No tiene archivos adjuntos</div>
                    )}
                  {/* </div> */}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </Frente>

        <div className="text-sm mb-6 sm:text-[15px] border-y border-[#1d021514]">
          {tramite.created_at && (
            <div className="my-2">- Solicitó presupuesto el día <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(tramite.created_at)}</span>
            </div>)}
          {tramite.budgeted_at && (
            <div className="my-2">- Presupuesto enviado el día <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(tramite.budgeted_at!)}</span> Precio: <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px] ">{formatCurrency(Number(tramite.presupuesto))}</span>
            </div>)}
          {tramite.started_at && (
            <div className="my-2">- Se chequeó el pago el día <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(tramite.started_at!)}</span>
            </div>)}
          {tramite.canceled_at && (
            <div className="my-2">- Se canceló el día <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(tramite.canceled_at!)}</span>
            </div>)}
          {tramite.finished_at && (
            <div className="my-2">- Trámite terminado el día <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(tramite.finished_at!)}</span>
            </div>)}
        </div>

        {/* Tramite estado*/}
        <div className="">
          <div>
            <div className="">
              <div>
                { tramite.estado === "presupuestar" && (
                  <div className="mb-4">
                    {/* <label
                      htmlFor="presupuesto"
                      className="mb-1 ml-3 block text-sm font-medium"
                    >
                      Presupuestar
                    </label> */}
                    <div className={`flex items-center `}>
                      <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "presupuestar" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                        <div>Enviar presupuesto</div>
                    </div>
                    <div className="relative mt-1 rounded-md">
                      <div className="relative ">
                        <textarea
                          id="presupuesto"
                          name="presupuesto"
                          rows={4}
                          // defaultValue={tramite.presupuesto}
                          // placeholder="Edite el presupuesto"
                          className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                          aria-describedby="respuesta-error"
                          required
                        />
                      </div>
                    </div>
                  </div>
                 )/* : (
                  ""
                ) */}
              </div>

              <div>
                { tramite.estado === "presupuestado" && (
                  <div className="mb-4">
                    {/* <label
                      htmlFor="presupuesto"
                      className="mb-1 ml-3 block text-sm font-medium"
                    >
                      Chequear pago
                    </label> */}
                    <div className={`flex items-center `}>
                      <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "presupuestado" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                        <div>Chequear pago</div>
                    </div>
                    <div className="relative mt-1 rounded-md">
                      <div className="relative ">
                        <textarea
                          id="presupuesto"
                          name="presupuesto"
                          rows={4}
                          defaultValue="Chequear pago"
                          placeholder="Edite el presupuesto"
                          className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                          aria-describedby="respuesta-error"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )/*  : (
                  ""
                ) */}
              </div>

              <div>
                { tramite.estado === "iniciado" && (
                  <div className="mb-4">
                    {/* <label
                      htmlFor="presupuesto"
                      className="mb-1 ml-3 block text-sm font-medium"
                    >
                      Realizar el trámite
                    </label> */}
                    <div className={`flex items-center `}>
                      <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "iniciado" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                        <div>Realizar el trámite</div>
                    </div>
                    <div className="relative mt-1 rounded-md">
                      <div className="relative ">
                        <textarea
                          id="presupuesto"
                          name="presupuesto"
                          rows={4}
                          defaultValue="Novedades del trámite"
                          placeholder="Edite el presupuesto"
                          className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                          aria-describedby="respuesta-error"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )/*  : (
                  ""
                ) */}
              </div>

              <div>
                { tramite.estado === "terminado" && (
                  ""
                  // <div className={`flex items-center `}>
                  //   <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "terminado" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                  //   <div>Observaciones</div>
                  // </div>
                  // <div className="mb-4">
                  //   <label
                  //     htmlFor="presupuesto"
                  //     className="mb-1 ml-3 block text-sm font-medium"
                  //   >
                  //     Trámite terminado
                  //   </label>
                  //   <div className="relative mt-1 rounded-md">
                  //     <div className="relative ">
                  //       <textarea
                  //         id="presupuesto"
                  //         name="presupuesto"
                  //         rows={4}
                  //         defaultValue="Observaciones"
                  //         placeholder="Edite el presupuesto"
                  //         className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                  //         aria-describedby="respuesta-error"
                  //         required
                  //       />
                  //     </div>
                  //   </div>
                  // </div>
                )/*  : (
                  ""
                ) */}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 ">
              <div className="sm:w-1/2 ">
                <input 
                  name="estado" 
                  id="estado"
                  type="text"
                  defaultValue= {
                    tramite.estado === "presupuestar" ? "presupuestado" : 
                    tramite.estado === "presupuestado" ? "iniciado" : 
                    tramite.estado === "iniciado" ? "terminado" : ""
                    // tramite.estado === "terminado" ?  "" : ""
                    // tramite.estado === "iniciado" ? "terminado" : null
                    // tramite.estado === "iniciado" ? "terminado" : null
                  }
                  className="h-8 pl-12 !placeholder:text-[#1d0215] "
                  readOnly
                  >
                  {/* <CalendarDaysIcon className="absolute w-4 top-1.5 left-2.5" />
                  <div className="absolute rounded-l-[4px] h-[32px] w-[40px] left-0 top-0 bg-[#00000014]" >
                  </div> */}
                </input>
              </div>
              <div className="sm:w-1/2   ">
                <input 
                  name="budgeted_at" 
                  id="budgeted_at" 
                  type="text"
                  defaultValue={formatDateToLocal(`${new Date()}`)}
                  className="h-8 pl-12">
                  {/* <CalendarDaysIcon className="absolute w-4 top-1.5 left-2.5" />
                  <div className="absolute rounded-l-[4px] h-[32px] w-[40px] left-0 top-0 bg-[#00000014]" >
                  </div> */}
                </input>
              </div>
            </div>
          </div>
        </div>
        
        <div aria-live="polite" aria-atomic="true">
          {statex.message ? (
            <p className="mt-2 text-sm text-red-500">{statex.message}</p>
          ) : null}
        </div>

        <div className="flex justify-end gap-4" >
          <Link
            href="/dashboard/tramites"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit" className={`${tramite.estado === "terminado" && "hidden"}`}>Editar Tramite</Button>
        </div>
      </div>
    </form>
  );
}



{/* Tramite budgeted */}
          {/* <div className="mb-4">
            <label
              htmlFor="budgeted_at"
              className="mb-1 ml-3 block text-sm font-medium"
            >
              Editar fecha envío presupuesto
            </label>
            <div className="relative mt-1 rounded-md">
              <div className="relative ">
                <textarea
                  id="budgeted_at"
                  name="budgeted_at"
                  rows={1}
                  defaultValue={tramite.budgeted_at ? formatDateToLocal(tramite.budgeted_at!) : undefined }
                  className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                  aria-describedby="respuesta-error"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="started_at"
              className="mb-1 ml-3 block text-sm font-medium"
            >
              Editar fecha envío presupuesto
            </label>
            <div className="relative mt-1 rounded-md">
              <div className="relative ">
                <textarea
                  id="started_at"
                  name="started_at"
                  rows={1}
                  defaultValue={tramite.started_at ? formatDateToLocal(tramite.started_at!) : undefined }
                  className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                  aria-describedby="respuesta-error"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="canceled_at"
              className="mb-1 ml-3 block text-sm font-medium"
            >
              Editar fecha envío presupuesto
            </label>
            <div className="relative mt-1 rounded-md">
              <div className="relative ">
                <textarea
                  id="canceled_at"
                  name="canceled_at"
                  rows={1}
                defaultValue={tramite.finished_at ? formatDateToLocal(tramite.finished_at!) : undefined}
                  className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                  aria-describedby="respuesta-error"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="finished_at"
              className="mb-1 ml-3 block text-sm font-medium"
            >
              Editar fecha envío presupuesto
            </label>
            <div className="relative mt-1 rounded-md">
              <div className="relative ">
                <textarea
                  id="finished_at"
                  name="finished_at"
                  rows={1}
                  defaultValue={tramite.finished_at ? formatDateToLocal(tramite.finished_at!) : undefined}
                  className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                  aria-describedby="respuesta-error"
                />
              </div>
            </div>
          </div> */}