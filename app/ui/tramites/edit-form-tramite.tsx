'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import Image from 'next/image'
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Disclosure, DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx';
import { useState, useRef } from 'react';

import { Tramite } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateTramite } from '@/app/lib/actions';
import { User } from '@/app/lib/definitions';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import {InputCnp} from "@/app/ui/uiRadix/input-cnp"
import { TextareaCnp } from "@/app/ui/uiRadix/textarea-cnp";
import { Frente } from '@/app/ui/marcos';
import IconConsultaRight from "@/app/ui/logosIconos/icon-consulta-right"
import distanceToNow from '@/app/lib/dateRelative';
import useToggleState from "@/app/lib/hooks/use-toggle-state"
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import { ButtonA } from "@/app/ui/button";
import { PartyPopper } from 'lucide-react';
import  {FormatearInput}  from "@/app/ui/tramites/input-tramite-number";
import { setDefaultHighWaterMark } from 'stream';
// import { handleForm } from "@/app/pruebas/action";
import { handleFormPresupuesto } from "@/app/lib/actions";
// import { emailPresupuesto } from "@/app/lib/brevo/email-presupuesto";
import IconEmail2 from "@/app/ui/logosIconos/icon-email2";
import IconEnvioEmail from '../logosIconos/icon-envio-email';
import IconAdjunto from "@/app/ui/logosIconos/icon-adjunto";



export default function EditTramiteForm({
   tramite,
   userMember,
  }: { 
    tramite: Tramite;
    userMember: User | undefined
  }) {

    const [successState, setSuccessState] = useState(false)
    const [estado, setEstado] = useState(true)
    const [estadoRegistrar, setEstadoRegistrar] = useState(false)
    // const [presupuesto, setPresupuesto] = useState("")
    const [pago, setPago] = useState("pendiente")
    const [finalizado, setFinalizado] = useState("")

    const [aranceles, setAranceles] = useState("")
    const [viaticos, setViaticos] = useState("")
    const [honorarios, setHonorarios] = useState("")
    const [gastos, setGastos] = useState("")
    const [impuestos, setImpuestos] = useState("")

    const [validez, setValidez] = useState("7")

    const { state, close, toggle } = useToggleState()

    const presupuesto= Number(honorarios) + Number(aranceles) + Number(viaticos) + Number(gastos) + Number(impuestos)

    const clearState = () => {
      setSuccessState(false)
    }

    const handleToggle = () => {
      clearState()
      setTimeout(() => toggle(), 100)
    }

  const id= tramite.id

  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClickButton= () => {
    if (buttonRef.current) buttonRef.current.click()
  };

  const archivosAdjuntos= tramite?.documentos_url
  const archivos: string[] = JSON.parse(`${archivosAdjuntos}`)
  const infoAdjuntos: string[] = JSON.parse(tramite?.informacion!)

  const initialState = { message: null, errors: {} };
  const updateTramiteWithId = updateTramite.bind(null, id);
  const [statex, dispatch] = useFormState(updateTramiteWithId, initialState);


  // console.log("validez:", validez)


  return (
    <>
      <div className="flex flex-col justify-between rounded-xl ">
        <div className="flex flex-col">
          <div className=" flex items-center ">
            <div className=" relative mr-4" data-testid="image-container">
              {userMember?.image ? (
                  <img
                    decoding="async" 
                    src= {userMember?.image}
                    className="rounded-full bg-cover h-14 bject-cover w-full " alt="header-image-profile">
                    
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

          <div className="flex items-center flex-nowrap gap-2 my-5 leading-tight">
            <img 
                src= "/dnrpa.png" 
                alt="icono trámites" 
                width={26} 
                height={"auto"}
                className="opacity-50 mt-1 mb-auto w-3 sm:w-4 md:mt-0" 
              />

            <div className="flex flex-wrap gap-2 items-center">
              <h1 className=" text-start text-[#50073a88] font-semibold leading-tight tracking-tighter text-base sm:text-lg sm:text-[22px] md:leading-none ">
                {tramite.tramite}
              </h1>

              <div className="flex gap-[1px] w-28 h-[14px] bg-[#ffffff] rounded-lg">
                <div className="flex items-center justify-center text-[10px] text-white text-center w-7 bg-[#50073abf] rounded-l-lg ">
                  1
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center w-7  ${tramite.estado === "presupuestado" || tramite.estado === "iniciado" || tramite.estado === "cancelado" || tramite.estado === "terminado"  ? "bg-[#50073abf] text-white" : "bg-white text-[#1d0215cc]" } `}>
                  2
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center w-7 ${ tramite.estado === "iniciado" || tramite.estado === "cancelado" || tramite.estado === "terminado" ? "bg-[#50073abf] text-white" : "bg-white text-[#1d0215cc]" } `}>
                  3
                </div>
                <div className={`flex items-center justify-center text-[10px] text-center w-7 ${ tramite.estado === "cancelado" || tramite.estado === "terminado"  ? "bg-[#50073abf] text-white" : "bg-white text-[#1d0215cc]" } rounded-r-lg `}>
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* adjuntos*/}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
            <div className={`flex items-center gap-4 w-full text-[15px] sm:text-base`}>
              <IconAdjunto className="w-5 " />
              <p>Documentos e Información adjuntos</p>
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
              <div className={`flex flex-wrap mt-0 mb-3 text-[#1d0215cc] gap-2 ${state && "mt-4"}`}>
                <div className="bg-[#1d0215] p-2 rounded-lg flex flex-col gap-2 flex-wrap justify-start sm:p-3">
                  <div className="text-[15px] text-[#ffffffcc] sm:text-base">
                    Documentos
                  </div>
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
                            className="rounded w-14 border border-[#777] " />
                        </Link>
                      </div> 
                    ))}
                  </div>
                </div>
                <div className="bg-[#ffffffcc] p-2 rounded-lg flex flex-col gap-2 flex-wrap justify-start sm:p-3">
                  <div className="text-[15px] sm:text-base">
                    Información
                  </div>
                  <div className="flex flex-col gap-1 ">
                    {infoAdjuntos?.map((infoAdjunto, index) => (
                      <div key={index } className=" text-sm  ">
                        {infoAdjunto.startsWith("undefined") ? "" : infoAdjunto}
                      </div> 
                    ))}
                  </div>
                </div>
              </div>



              {/* <div className="flex flex-col mb-1" >
                <div className="w-full bg-[#1d0215] p-4 mt-4 rounded-lg flex flex-col gap-2.5 flex-wrap justify-start">
                  <div className="mb-1.5 text-white  text-[15px] sm:text-base">
                    Informacion adjunta
                  </div>
                  {infoAdjuntos ? (
                    <div className="text-[#ffffffdd] flex flex-col gap-1 ">
                      {infoAdjuntos?.map((infoAdjunto, index) => (
                        <div key={index } className=" text-sm sm:text-[15px] ">
                          {infoAdjunto.startsWith("undefined") ? "" : infoAdjunto}
                        </div> 
                      ))}
                    </div>
                  ) : (
                    <div className="text-[#ffffffaa] ">No tiene informacion adjunta</div>
                  )}
                </div>
              </div> */}

              {/* <div className={`flex flex-col `}>
                <div className="w-full bg-[#1d0215] p-4 rounded-lg flex flex-col gap-2.5 flex-wrap justify-center">
                  <div className="mb-1.5 text-white text-[15px] sm:text-base">Documentos adjuntos</div>
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
                </div>
              </div> */}
            </DisclosurePanel>
          </Disclosure>
        </Frente>

        {/* Tarea estado*/}
        {tramite.estado === "cancelado" || tramite.estado === "terminado" ? (
          <Frente className="py-4 mb-4 px-4 text-[15px] sm:text-base sm:px-4" >
            <p>Trámite {tramite.estado} </p> 
          </Frente>
        ) : (
          <Frente className={`py-4 mb-4 px-4 text-sm sm:px-4 `} >
            <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
              <div className={`flex w-full text-[15px] sm:text-base `}>
                {tramite.estado === 'presupuestar' && (
                  <div className="flex ">
                    <div className={`mr-2 text-[12.5px] px-[8px] rounded-[4px] text-[#ffffff] bg-[#50073abf]`}>2</div>Calcular el presupuesto
                  </div>
                )}
                {tramite.estado === 'presupuestado' && (
                  <div className="flex ">
                    <div className={`mr-2 text-[12.5px] px-[8px] rounded-[4px] text-[#ffffff] bg-[#50073abf]`}>3</div>Chequear pago
                  </div>
                )}
                {tramite.estado === 'iniciado' && (
                  <div className="flex ">
                    <div className={`mr-2 text-[12.5px] px-[8px] rounded-[4px] text-[#ffffff] bg-[#50073abf]`}>4</div>Trámite en ejecución
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
                { tramite.estado === "presupuestar" && (
                  <div className="p-4 w-full bg-[#ffffff29] ">
                    <fieldset className="flex my-2 items-end justify-between text-sm">
                      <label
                        className=""
                        htmlFor="aranceles"
                      >
                        Aranceles
                      </label>
                      <div className="h-7 border-dashed border-b border-b-[#50073a33] mx-4 w-full"></div>
                      <InputCnp
                        className="!px-3 h-7 !pb-0 !w-36 text-end !text-sm sm:text-[13px]"
                        ancho="w-max"
                        id="aranceles"
                        type="text"
                        name="aranceles"
                        value= {aranceles}
                        placeholder= "0.00"
                        required
                        onChange={(e) => {
                          setAranceles(e.target.value)
                        }}
                        onBlur={(e) => setAranceles(Number(e.target.value).toFixed(2))}
                      >
                        <div className={`absolute rounded-l-[4px] h-[28px] w-[32px] left-0 bg-[#1d02150b] $ `}>
                        </div>
                        <p className="text-sm text-[#1d0215aa] absolute left-2.5 top-1">$</p>
                      </InputCnp>
                    </fieldset>
                    <fieldset className="flex my-2 items-end justify-between text-sm">
                      <label
                        className=""
                        htmlFor="viaticos"
                      >
                        Viaticos
                      </label>
                      <div className="h-7 border-dashed border-b border-b-[#50073a33] mx-4  w-full"></div>
                      <InputCnp
                        className="!px-3 h-7 !pb-0 !w-36 text-end !text-sm sm:text-[13px]"
                        ancho="w-max"
                        id="viaticos"
                        type="text"
                        name="viaticos"
                        value= {viaticos}
                        placeholder= "0.00"
                        required
                        onChange={(e) => {
                          setViaticos(e.target.value)
                        }}
                        onBlur={(e) => setViaticos(Number(e.target.value).toFixed(2))}
                      >
                        <div className={`absolute rounded-l-[4px] h-[28px] w-[32px] left-0 bg-[#1d02150b] $ `}>
                        </div>
                        <p className="text-sm text-[#1d0215aa] absolute left-2.5 top-1">$</p>
                      </InputCnp>
                    </fieldset>
                    <fieldset className="flex my-2 items-end justify-between text-sm">
                      <label
                        className=""
                        htmlFor="honorarios"
                      >
                        Honorarios
                      </label>
                      <div className="h-7 border-dashed border-b border-b-[#50073a33] mx-4  w-full"></div>
                      <InputCnp
                        className="!px-3 h-7 !pb-0 !w-36 text-end !text-sm sm:text-[13px]"
                        ancho="w-max"
                        id="honorarios"
                        type="text"
                        name="honorarios"
                        value= {honorarios}
                        placeholder= "0.00"
                        required
                        onChange={(e) => {
                          setHonorarios(e.target.value)
                        }}
                        onBlur={(e) => setHonorarios(Number(e.target.value).toFixed(2))}
                      >
                        <div className={`absolute rounded-l-[4px] h-[28px] w-[32px] left-0 bg-[#1d02150b] $ `}>
                        </div>
                        <p className="text-sm text-[#1d0215aa] absolute left-2.5 top-1">$</p>
                      </InputCnp>
                    </fieldset>
                    <div className="flex my-2 items-end justify-end text-sm">
                        <p className="mr-4">Sub-total</p>
                        <p className="px-3 py-1 !w-36 text-end text-sm">
                          {(Number(honorarios) + Number(aranceles) + Number(viaticos)).toLocaleString("es-AR", {
                            style: 'currency',
                            currency: "ARS",
                          }) }
                        </p>
                    </div>

                    <fieldset className="flex my-2 items-end justify-between text-sm">
                      <label
                        className=""
                        htmlFor="gastos"
                      >
                        Gastos
                      </label>
                      <div className="h-7 border-dashed border-b border-b-[#50073a33] mx-4  w-full"></div>
                      <InputCnp
                        className="!px-3 h-7 !pb-0 !w-36 text-end !text-sm sm:text-[13px]"
                        ancho="w-max"
                        id="gastos"
                        type="text"
                        name="gastos"
                        value= {gastos}
                        placeholder= "0.00"
                        required
                        onChange={(e) => {
                          setGastos(e.target.value)
                        }}
                        onBlur={(e) => setGastos(Number(e.target.value).toFixed(2))}
                      >
                        <div className={`absolute rounded-l-[4px] h-[28px] w-[32px] left-0 bg-[#1d02150b] $ `}>
                        </div>
                        <p className="text-sm text-[#1d0215aa] absolute left-2.5 top-1">$</p>
                      </InputCnp>
                    </fieldset>
                    <fieldset className="flex my-2 items-end justify-between text-sm">
                      <label
                        className=""
                        htmlFor="impuestos"
                      >
                        Impuestos
                      </label>
                      <div className="h-7 border-dashed border-b border-b-[#50073a33] mx-4  w-full"></div>
                      <InputCnp
                        className="!px-3 h-7 !pb-0 !w-36 text-end !text-sm sm:text-[13px]"
                        ancho="w-max"
                        id="impuestos"
                        type="text"
                        name="impuestos"
                        value= {impuestos}
                        placeholder= "0.00"
                        required
                        onChange={(e) => {
                          setImpuestos(e.target.value)
                        }}
                        onBlur={(e) => setImpuestos(Number(e.target.value).toFixed(2))}
                      >
                        <div className={`absolute rounded-l-[4px] h-[28px] w-[32px] left-0 bg-[#1d02150b] $ `}>
                        </div>
                        <p className="text-sm text-[#1d0215aa] absolute left-2.5 top-1">$</p>
                      </InputCnp>
                    </fieldset>
                    <div className="flex my-2 items-end justify-end text-sm">
                        <p className="mr-4">Total</p>
                        <p className="px-3 py-1 !w-36 text-end text-sm">
                          {/* (Number(honorarios) + Number(formularios) + Number(viaticos) + Number(gastos) + Number(impuestos)) */presupuesto.toLocaleString("es-AR", {
                            style: 'currency',
                            currency: "ARS",
                          })}
                        </p>
                    </div>

                    {/* <fieldset className="hidden relative">
                      <InputCnp 
                        className={`h-8 text-sm  ${presupuesto && "bg-[#ffffffdd]"} `}
                        id="presupuestox"
                        type="number"
                        step="0.01"
                        name="presupuestox"
                        value={presupuesto}
                        placeholder= "Presupuesto"
                        required
                        disabled={ !estado }
                        onChange={(e) => {
                          setPresupuesto(e.target.value);
                        }} >
                        <div className={`absolute rounded-l-[4px] h-[32px] w-[32px] left-0 bg-[#1d02150b] $ `}></div>
                        <IconCuenta  className="absolute w-[20px] left-[6px] top-[6px] " color="#50073a66" />
                      </InputCnp>
                    </fieldset> */}
                  </div>
                )}

                { tramite.estado === "presupuestado" && (
                  // <div className="">
                    <fieldset>
                      <div className="rounded-md border-gray-200 bg-[#f7f7f700] px-[14px] py-3">
                        <div className="flex gap-8">
                          <div className={`px-2 border border-[#dbdbdb] rounded-lg flex items-center ${pago === "pagado" ? "bg-[#eaeaea] text-[#1d021577]" : " text-[#1d0215cc] border-[#ff000018] bg-[#ff000014]"}`}>
                            <input
                              id="pendiente"
                              name="status"
                              type="radio"
                              value="pendiente"
                              defaultChecked= {pago === 'pendiente'}
                              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                              onChange={(e) => {
                                setPago(e.target.value)
                              }}
                            />
                            <label
                              htmlFor="pendiente"
                              className={`flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-sm font-medium `}
                            >
                              Pendiente <ClockIcon className="h-4 w-4" />
                            </label>
                          </div>
                          <div className={`px-2 border rounded-lg flex items-center ${pago === "pendiente" ? "bg-[#eaeaea] text-[#1d021577] border-[#dbdbdb]" : " text-[#1d0215cc] border-[#22bb0028] bg-[#22bb0018]"}`}>
                            <input
                              id="pagado"
                              name="status"
                              type="radio"
                              value="pagado"
                              defaultChecked= {pago === 'pagado'}
                              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                              onChange={(e) => {
                                setPago(e.target.value)
                              }}
                            />
                            <label
                              htmlFor="pagado"
                              className={`ml-2 flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium `}
                            >
                              Pagado <CheckIcon className="h-4 w-4" />
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.status &&
                          state.errors.status.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                              {error}
                            </p>
                          ))}
                      </div> */}
                    </fieldset>
                  // </div>
                )}

                { tramite.estado === "iniciado" && (
                  <div className="flex flex-wrap items-center gap-1 mb-4">
                    <label htmlFor="select" className="mr-2">Selecciona una opción:</label>
                    <select 
                      id="select" 
                      // value={finalizado}
                      className="pl-4 w-max text-[13px] rounded-[4px] pr-4 pb-0.5 pt-0 border border-[#e9dae9] bg-[#ffffff] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in sm:text-sm sm:pb-1 hover:opacity-90 hover:border-[#c737c747] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c737c7cc] focus:outline-1 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-40 placeholder:text-sm  placeholder:text-[#858585] h-8   "
                      onChange={(e) => {
                        setFinalizado(e.target.value);
                      }}
                    >
                      <option value="">Selecciona</option>
                      <option value="terminado">Terminado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>

                  </div>
                )}

                {/* { tramite.estado === "terminado" && (
                  ""
                )} */}
              </DisclosurePanel>
            </Disclosure>
          </Frente>
        )}

        {tramite.estado === "presupuestar" && (
          <Frente className={`py-4 mb-4 px-4 text-sm sm:px-4 `} >
            <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
              <div className={`flex items-center gap-4 w-full text-[15px] sm:text-base`}>{/*  ${state && "hidden"} */}
                <IconEnvioEmail  className="w-9 h-4 fill-[#50073aaa]" size={32} />
                <p>Email - Presupuesto</p>
              </div>

              <Button
                className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
                onClick={() => { setEstadoRegistrar(!estadoRegistrar)}}
                data-testid="edit-button"
                data-active={state}
                type='button'
              >
                {estadoRegistrar ? "Cerrar" :  <div><span className="text-[12px] uppercase">Ver</span></div> }
              </Button>
            </div>
            <Disclosure>
              <DisclosurePanel
                static
                className={clsx(
                  "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                  {
                    "max-h-[1000px] opacity-100 pt-4": estadoRegistrar,
                    "max-h-0 opacity-0": !estadoRegistrar,
                    "invisible": !estadoRegistrar,
                  }
                )}
              >
                <form action= /*{emailPresupuesto} */ {handleFormPresupuesto} /* method="POST" */  className="rounded-lg w-full p-4 ">
                  <div className="flex items-start w-full mb-4 gap-3">
                    <p className="mt-2 leading-none text-[13px]">
                      Para
                    </p>
                    <div className="flex flex-col gap-1 w-full">
                      <InputCnp 
                        type="text" 
                        name="to_name" 
                        placeholder="Nombre" 
                        className="h-8 !text-sm "
                        value={userMember?.name}
                        autoFocus
                        required
                        readOnly
                        >
                        <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                          <span className={`absolute w-3 font-semibold left-[9px] top-1.5 opacity-40 text-[#1d021599]  `}>
                          </span>
                          <IconCuenta 
                            color="#50073a50"
                            className="w-5 absolute top-[7px] left-[5px]"
                          />
                        </div>
                      </InputCnp>
                      <InputCnp 
                        type="email" 
                        name="to_email" 
                        placeholder="Email" 
                        className="h-8 !text-sm " 
                        defaultValue={userMember?.email}
                        required
                        // readOnly
                        >
                        <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                          <span className={`absolute w-3 font-semibold left-[9px] top-1.5 opacity-40 text-[#1d021599] `}>
                          </span>
                          <IconEmail2 
                            color="#50073a50"
                            className="w-4 absolute top-[9px] left-1.5"
                            />
                        </div>
                      </InputCnp>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 mb-4">
                    <fieldset className="flex flex-col">
                      <label
                        className="text-start text-[13px] "
                        htmlFor="title"
                      >
                        Trámite
                      </label>
                      <InputCnp 
                        type="text" 
                        name="title" 
                        placeholder="Asunto" 
                        className="h-8 !pl-4 !text-sm"
                        value={tramite.tramite}
                        required
                        readOnly
                        >
                        <div className="w-0" >
                        </div>
                      </InputCnp>
                    </fieldset>

                    <fieldset className="flex flex-col">
                      <label
                        className="text-start text-[13px] "
                        htmlFor="content"
                      >
                        Precio $
                      </label>
                      <InputCnp 
                        type="text" 
                        name="content" 
                        placeholder="Asunto" 
                        className="h-8 !pl-4 !text-sm"
                        value={presupuesto.toLocaleString("es-Ar")}
                        required
                        readOnly
                        >
                        <div className="w-0" >
                        </div>
                      </InputCnp>
                    </fieldset>

                    <fieldset className="flex flex-col">
                      <label
                        className="text-start text-[13px]"
                        htmlFor="validez"
                      >
                        Validez (días)
                      </label>
                      <InputCnp
                        type="text" 
                        name="validez" 
                        placeholder="7" 
                        className="h-8 !pl-4 !text-sm"
                        value={validez}
                        onChange={(e) => {
                          setValidez(e.target.value)
                        }}
                        // required
                        // readOnly
                        >
                        <div className="w-0" >
                        </div>
                      </InputCnp>
                    </fieldset>

                    {/* <TextareaCnp
                      name="content" 
                      placeholder="Mensaje" 
                      value={presupuesto.toLocaleString("es-Ar")}
                      rows={6}
                      required
                      className=""
                    /> */}
                  </div>

                  <button 
                    type="submit" 
                    ref={buttonRef}
                    className="hidden py-1">
                    Enviar
                  </button>
                </form>
              </DisclosurePanel>
            </Disclosure>
          </Frente>
        )}
      </div>

      <form action={dispatch} >
        {/* Campos datos*/}
        <div className="hidden flex-col ">
          <input
            name="presupuesto"
            id="presupuesto"
            type= "number"
            // step="0.01"
            value={tramite.presupuesto ? tramite.presupuesto/100 :  presupuesto}
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
              tramite.estado === "iniciado" ? finalizado  : undefined
            }
            // readOnly
          />
          <input 
            name="budgeted_at" 
            id="budgeted_at" 
            type="text"
            defaultValue= { tramite.budgeted_at ? new Date(tramite.budgeted_at).toISOString() : tramite.estado === "presupuestar" ? new Date().toISOString()  : ""}
            // readOnly
          />
          <input 
            name="started_at" 
            id="started_at" 
            type="text"
            defaultValue= { tramite.started_at ? new Date(tramite.started_at).toISOString() : tramite.estado === "presupuestado" ? new Date().toISOString()  : ""}
            // readOnly
          />
          <input 
            name="finished_at" 
            id="finished_at" 
            type="text"
            defaultValue= { tramite.estado === "iniciado" && finalizado === "terminado" ? new Date().toISOString() : ""}
            // readOnly
          />
          <input 
            name="canceled_at" 
            id="canceled_at" 
            type="text"
            defaultValue= { tramite.estado === "iniciado" && finalizado === "cancelado" ? new Date().toISOString() : ""}
            // readOnly
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
          <ButtonA 
            type="submit" 
            className={`${tramite.estado === "cancelado" || tramite.estado === "terminado" && "hidden"}`}
            onClick={() => {
              handleClickButton()
            }}
            disabled= {pago === "pendiente" && !presupuesto && !finalizado ? true : false}
          >
            Editar Tramite
          </ButtonA>
        </div>
      </form>
    </>
  );
}
