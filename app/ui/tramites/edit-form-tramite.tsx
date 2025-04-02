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
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import { ButtonA } from "@/app/ui/button";


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

    const [presupuesto, setPresupuesto] = useState/* <number | undefined> */("")

    // const [x, setX] = useState("")


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

  const infoAdjuntos: string[] = JSON.parse(tramite?.informacion!)
  // infoAdjuntos.map((info, index) => {
  //   info.slice(0 11)
  // })

  const initialState = { message: null, errors: {} };
  const updateTramiteWithId = updateTramite.bind(null, id);
  const [statex, dispatch] = useFormState(updateTramiteWithId, initialState);

  // const polo= new Date().toString()

  // console.log("infos:", infos)
  // console.log("polo:", polo)
  // console.log("create:", tramite.created_at)
  console.log("archivosAdjuntos:", archivosAdjuntos)


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
            <h1 className=" text-start text-[#50073a88] font-semibold leading-tight tracking-tighter text-[16px] sm:text-lg sm:text-[23px] md:leading-none ">
              {tramite.tramite}
            </h1>
          </div>
        </div>
        
        {/* adjuntos*/}
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
                  "max-h-[1000px] opacity-100 ": state,
                  "max-h-0 opacity-0 ": !state,
                  "invisible": !state,
                }
              )}
            >
              <div className="flex flex-col mb-1" >
                <div className="w-full bg-[#1d0215] p-4 mt-4 rounded-lg flex flex-col gap-2.5 flex-wrap justify-start">
                  <div className="mb-1.5 text-white  text-[15px] sm:text-base">Informacion adjunta</div>
                    {infoAdjuntos ? (
                      <div className="text-[#ffffffdd] flex flex-col gap-1 ">
                        {infoAdjuntos?.map((infoAdjunto, index) => (
                          <div key={index } className=" text-sm sm:text-[15px] ">
                            {/* {infoAdjunto} */}

                            {infoAdjunto.startsWith("undefined") ? "" : infoAdjunto}
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
                    {/* {archivos ? ( */}
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
                    {/* ) : (
                      <div className="text-[#ffffffaa] ">No tiene archivos adjuntos</div>
                    )} */}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </Frente>

        {/* estados*/}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
            <div className={`flex items-center w-full text-[15px] sm:text-base `}>
              Estado 
              <div className="flex gap-0.5 w-32 h-4 ml-4 bg-[#ffffff] rounded-lg">
                <div className="flex items-center justify-center text-[10px] text-white text-center w-8 h-4 bg-[#e580d0] rounded-l-lg ">
                  1
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center w-8 h-4  ${tramite.estado === "presupuestado" || tramite.estado === "iniciado" || tramite.estado === "cancelado" || tramite.estado === "terminado"  ? "bg-[#e580d0] text-white" : "bg-white text-[#1d0215cc]" } `}>
                  2
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center w-8 h-4 ${ tramite.estado === "iniciado" || tramite.estado === "cancelado" || tramite.estado === "terminado" ? "bg-[#e580d0] text-white" : "bg-white text-[#1d0215cc]" } `}>
                  3
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center w-8 h-4 ${ tramite.estado === "cancelado" || tramite.estado === "terminado"  ? "bg-[#e580d0] text-white" : "bg-white text-[#1d0215cc]" } rounded-r-lg `}>
                  4
                </div>
              </div>
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { setEstadox(!estadox)}}
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
                  "max-h-[1000px] opacity-100 pt-4": estadox,
                  "max-h-0 opacity-0": !estadox,
                  "invisible": !estadox,
                }
              )}
            >
              {tramite.created_at && (
                <div className={`${estadox ? "my-2" : "my-0"}`}>- Solicitó presupuesto el día <span className="font-medium bg-[#ffffff64] px-1.5 py-0.5 mr-1 rounded-[4px]" > {formatDateToLocal(tramite.created_at)}</span>
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
        <Frente  className={`py-4 mb-4 px-4 text-sm sm:px-4 ${tramite.estado === "cancelado" || tramite.estado === "terminado" && "hidden"}`} >
          <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
            <div className={`flex w-full text-[15px] sm:text-base `}>{/* ${estado && "hidden"} */}
              {tramite.estado === 'presupuestar' && (
                <div className="flex ">
                  <div className={`mr-2 text-[12.5px] px-[8px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>2</div>Calcular Presupuesto
                </div>
              )}
              {tramite.estado === 'presupuestado' && (
                <div className="flex ">
                  <div className={`mr-2 text-[12.5px] px-[8px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>3</div>Chequear pago
                </div>
              )}
              {tramite.estado === 'iniciado' && (
                <div className="flex ">
                  <div className={`mr-2 text-[12.5px] px-[8px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>4</div>Realizar el trámite
                </div>
              )}
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { setEstado(!estado)}}
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
                  "max-h-[1000px] opacity-100 pt-4": estado,
                  "max-h-0 opacity-0": !estado,
                  "invisible": !estado,
                }
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4 ">
                { tramite.estado === "presupuestar" && (
                  <div className="w-full">

                    <div className={`flex items-center mt-3 `}>
                        Planilla
                    </div>
                    <div className="p-4 bg-[#ffffff65] ">
                      {/* Presupuesto */}
                      {/* <form className="flex flex-col" onInput= {() => {
                        x=parseInt(a.value)+parseInt(b.value)
                      } } >
                        <fieldset className="mb-3">
                          <legend>Radios:</legend>
                          <input type="radio" id="html" name="fav_language" value="HTML"/>
                          <label htmlFor="html">HTML</label>
                          <input type="radio" id="css" name="fav_language" value="CSS"/>
                          <label htmlFor="css">CSS</label>
                          <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                          <label htmlFor="javascript">JavaScript</label>
                        </fieldset>

                        <fieldset className="mb-3">
                          <legend>Checkbox:</legend>
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                          <label htmlFor="vehicle1"> I have a bike</label>
                          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                          <label htmlFor="vehicle2"> I have a car</label>
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                          <label htmlFor="vehicle3"> I have a boat</label>
                        </fieldset>

                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" value="John"/>
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value="Doe"/>

                        <label htmlFor="cars">Choose a car:</label>
                        <select id="cars" name="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>

                        <textarea name="message" rows={10} cols={30}>
                        The cat was playing in the garden.
                        </textarea>

                        
                        <input type="number" id="a" name="a" defaultValue="50"/>
                        -
                        <input type="number" id="b" name="b" defaultValue="50"/>
                        =
                        <output name="x" htmlFor="a b"></output>

                        <input type="submit"></input>
                      </form> */}
                      <div className="relative">
                        <InputCnp 
                          className={`h-8 text-sm  ${presupuesto && "bg-[#ffffffdd]"} `}
                          id="presupuestox"
                          type="number"
                          step="0.01"
                          name="presupuestox"
                          value={presupuesto}
                          placeholder= /* {user?.name} */"Presupuesto"
                          required
                          disabled={ !estado }
                          onChange={(e) => {
                            setPresupuesto(e.target.value);
                          }} >
                          <div className={`absolute rounded-l-[4px] h-[32px] w-[32px] left-0 bg-[#1d02150b] $ `}></div>
                          {/* <IconCuenta className={`w-[26px] ${state ? "opacity-0" : "opacity-80" } `} color="#50073aaa" /> */}
                          <IconCuenta  className="absolute w-[20px] left-[6px] top-[6px] " color="#50073a66" />
                        </InputCnp>
                      </div>
                    </div>
                  </div>
                )}

                { tramite.estado === "presupuestado" && (
                  <div className="">
                    <div className={`flex items-center `}>
                      {/* <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "presupuestado" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div> */}
                        {/* <div>Chequear pago</div> */}
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
                    {/* <div className={`flex items-center `}>
                      <div className={`mr-2 px-[5px] rounded-[4px]  ${tramite.estado === "iniciado" && "text-[#ffffff] bg-[#e580d0]"}`}>&#10003;</div>
                        <div>Realizar el trámite</div>
                    </div> */}
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
            </DisclosurePanel>
          </Disclosure>
        </Frente>
        
        {/* Campos datos*/}
        <div className="hidden flex-col ">
          <input
            name="presupuesto"
            id="presupuesto"
            type= "number"
            step="0.01"
            value={presupuesto}
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
            // defaultValue= {tramite.estado === "presupuestar" ? formatDateToLocal(`${new Date()}`) : undefined}
            // value= {
            //   tramite.budgeted_at ? tramite.budgeted_at :
            //   tramite.estado === "presupuestar" ? new Date().toString() : ""}
            // value= { tramite.budgeted_at ? tramite.budgeted_at : " "}
            value= { tramite.budgeted_at ? new Date(tramite.budgeted_at).toISOString().split('T')[0] : ""}
            // defaultValue= {formatDateToLocal(`${new Date()}`)}
            readOnly>
          </input>

          <input 
            name="started_at" 
            id="started_at" 
            type="text"
            // value= {tramite.estado === "presupuestado" ? formatDateToLocal(`${new Date()}`) : undefined}
            // value= {
            //   tramite.started_at ? tramite.started_at :
            //   tramite.estado === "presupuestado" ? new Date().toString() : ""}
            // value= { tramite.started_at ? tramite.started_at : " "}
            value= { tramite.started_at ? new Date(tramite.started_at).toISOString().split('T')[0] : ""}
            readOnly
          />
          <input 
            name="canceled_at" 
            id="canceled_at" 
            type="text"
            // value= {tramite.estado === "iniciado" ? formatDateToLocal(`${new Date()}`) : undefined}
            // value= {
            //   tramite.canceled_at ? tramite.canceled_at :
            //   tramite.estado === "iniciado" ? new Date().toString() : ""}
            value= { tramite.canceled_at ? new Date(tramite.canceled_at).toISOString().split('T')[0] : ""}
            readOnly
          />
          <input 
            name="finished_at" 
            id="finished_at" 
            type="text"
            // value= {tramite.estado === "cancelado" || tramite.estado === "terminado" ? formatDateToLocal(`${new Date()}`) : undefined}
            // value= {
            //   tramite.finished_at ? tramite.finished_at :
            //   tramite.estado === "terminado" ? new Date().toString() : ""}
            value= { tramite.finished_at ? new Date(tramite.finished_at).toISOString().split('T')[0] : ""}
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
            className="flex h-8 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <ButtonA type="submit" className={`${tramite.estado === "terminado" && "hidden"}`}>
            Editar Tramite
          </ButtonA>
        </div>
      </div>
    </form>
  );
}
