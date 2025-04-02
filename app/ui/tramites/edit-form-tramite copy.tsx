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
    const [estado, setEstado] = useState(false)
    const [estadox, setEstadox] = useState(false)


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

  // console.log("infos:", infos)
  // console.log("infoAdjuntos:", infoAdjuntos)


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

        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
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
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </Frente>

        {/* estado*/}
        {/* <Frente className="text-sm mb-4 px-4 py-2 sm:text-[15px] border-y border-[#1d021514]">
          <div className="text-base">Estado</div>
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
        </Frente> */}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
            <div className={`flex items-center w-full text-[15px] sm:text-base `}>{/* ${estadox && "hidden"} */}
              Estado 
              <div className="flex gap-0.5 w-32 h-4 ml-4 bg-[#ffffff] rounded-lg">
                <div className="flex items-center justify-center text-[10px] text-white text-center z-10 w-8 h-4 bg-[#e580d0] rounded-l-lg ">
                  1
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center z-10 w-8 h-4  ${tramite.estado === "presupuestado" || tramite.estado === "iniciado" || tramite.estado === "cancelado" || tramite.estado === "terminado"  ? "bg-[#e580d0] text-white" : "bg-white text-[#1d0215cc]" } `}>
                  2
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center z-10 w-8 h-4 ${ tramite.estado === "iniciado" || tramite.estado === "cancelado" || tramite.estado === "terminado" ? "bg-[#e580d0] text-white" : "bg-white text-[#1d0215cc]" } `}>
                  3
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center z-10 w-8 h-4 ${ tramite.estado === "cancelado" || tramite.estado === "terminado"  ? "bg-[#e580d0] text-white" : "bg-white text-[#1d0215cc]" } rounded-r-lg `}>
                  4
                </div>
              </div>
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { /* handleToggle(); */ setEstadox(!estadox)}}
              data-testid="edit-button"
              data-active={state}
              type='button'
            >
              {estadox ? "Cerrar" :  <div><span className="text-[12px] uppercase">Ver</span></div> }
            </Button>
          </div>
          <Disclosure>
            <DisclosurePanel
              static
              className={clsx(
                "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                {
                  "max-h-[1000px] opacity-100": estadox,
                  "max-h-0 opacity-0": !estadox,
                  "invisible": !estadox,
                }
              )}
            >
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
            </DisclosurePanel>
          </Disclosure>
        </Frente>

        {/* Tarea estado*/}
        {/* <div className="flex flex-col sm:flex-row gap-4 ">
          { tramite.estado === "presupuestar" && (
            <div className="mb-4 w-full">
              <div className={`flex items-center `}>
                <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "presupuestar" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                  <div>Calcular presupuesto</div>
              </div>
              <div className=" mt-1 rounded-md">
                <div className="p-4 mb-4 bg-[#ffffff65] h-28 ">
                  Planilla Presupuesto
                </div>
              </div>
            </div>
          )}

          { tramite.estado === "presupuestado" && (
            <div className="mb-4">
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
          )}

          { tramite.estado === "iniciado" && (
            <div className="mb-4">
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
          )}

          { tramite.estado === "terminado" && (
            ""
          )}
        </div> */}

        <Frente  className={`py-4 mb-4 px-4 text-sm sm:px-4 ${tramite.estado === "cancelado" || tramite.estado === "terminado" && "hidden"}`} >
          <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
            <div className={`flex w-full text-[15px] sm:text-base ${estado && "hidden"}`}>
              {tramite.estado === 'presupuestar' && (
                <div className="flex ">
                  <div className={`mr-2 text-[12.5px] px-[5px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>2</div>Calcular Presupuesto
                </div>
              )}
              {tramite.estado === 'presupuestado' && (
                <div className="flex ">
                  <div className={`mr-2 text-[12.5px] px-[5px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>3</div>Chequear pago
                </div>
                )}
              {tramite.estado === 'iniciado' && (
                <div className="flex ">
                  <div className={`mr-2 text-[12.5px] px-[5px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>4</div>Realizar el trámite
                </div>
              )}
              {/* {tramite.estado === 'cancelado' && (
                <div className="flex ">
                  <div className={`mr-2 px-[5px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>&#10003;</div>Cancelado
                </div>
              )}
              {tramite.estado === 'terminado' && (
                <div className="flex ">
                <div className={`mr-2 px-[5px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>&#10003;</div>Terminado
              </div>
              )} */}
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { /* handleToggle(); */ setEstado(!estado)}}
              data-testid="edit-button"
              data-active={state}
              type='button'
            >
              {estado ? "Cerrar" :  <div><span className="text-[12px] uppercase">Ver</span></div> }
            </Button>
          </div>
          <Disclosure>
            <DisclosurePanel
              static
              className={clsx(
                "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                {
                  "max-h-[1000px] opacity-100": estado,
                  "max-h-0 opacity-0": !estado,
                  "invisible": !estado,
                }
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4 ">
                { tramite.estado === "presupuestar" && (
                  <div className="mb-4 w-full">

                    <div className={`flex items-center mb-2 `}>
                       {/* <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "presupuestar" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>  */}
                        <div>Planilla Presupuesto</div>
                    </div>
                    {/* <div className=" mt-1 rounded-md"> */}
                      <div className="p-4 mb-4 bg-[#ffffff65] h-28 ">
                        Presupuesto
                      </div>
                    {/* </div> */}
                  </div>
                )}

                { tramite.estado === "presupuestado" && (
                  <div className="mb-4">
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
                )}

                { tramite.estado === "iniciado" && (
                  <div className="mb-4">
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
                )}

                { tramite.estado === "terminado" && (
                  ""
                )}
              </div>

              {/* <div className="flex flex-col mb-4" >
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
                </div>
              </div> */}
            </DisclosurePanel>
          </Disclosure>
        </Frente>
        
        {/* Campos datos*/}
        <div className="hidden flex-col ">
          <input
            name="presupuesto"
            id="presupuesto"
            type= "number"
            // rows={4}
            value={24500}
            // placeholder="Edite el presupuesto"
            // className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
            aria-describedby="respuesta-error"
            required
            readOnly
          />

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
            readOnly
            >
          </input>

          <input 
            name="budgeted_at" 
            id="budgeted_at" 
            type="text"
            // defaultValue={formatDateToLocal(`${new Date()}`)}
            // defaultValue= {tramite.estado === "presupuestar" ? formatDateToLocal(`${new Date()}`) : " "}
            defaultValue= {formatDateToLocal(`${new Date()}`)}
            readOnly>
          </input>

          <input 
            name="started_at" 
            id="started_at" 
            type="text"
            // value= {tramite.estado === "presupuestado" ? formatDateToLocal(`${new Date()}`) : " "}
            defaultValue= {formatDateToLocal(`${new Date()}`)}
            readOnly
          />
          <input 
            name="canceled_at" 
            id="canceled_at" 
            type="text"
            // value= {tramite.estado === "iniciado" ? formatDateToLocal(`${new Date()}`) : " "}
            defaultValue= {formatDateToLocal(`${new Date()}`)}
            readOnly
          />
          <input 
            name="finished_at" 
            id="finished_at" 
            type="text"
            // value= {tramite.estado === "iniciado" ? formatDateToLocal(`${new Date()}`) : " "}
            defaultValue= {formatDateToLocal(`${new Date()}`)}
            readOnly
          />
        </div>
        
        {/* msj error*/}
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
