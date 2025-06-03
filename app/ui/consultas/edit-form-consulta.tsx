'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import clsx from 'clsx';
import { useState, useRef } from 'react';

import { Consulta } from '@/app/lib/definitions';
import { Button, ButtonA } from '@/app/ui/button';
import { handleFormRespuesta, updateConsulta } from '@/app/lib/actions';
import { User } from '@/app/lib/definitions';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { Frente } from '@/app/ui/marcos';
import { TextareaCnp } from "@/app/ui/uiRadix/textarea-cnp";
import IconEnvioEmail from '../logosIconos/icon-envio-email';
import IconConsulta from '@/app/ui/logosIconos/icon-consulta';
import IconRespuesta from '@/app/ui/logosIconos/icon-respuesta';
import {InputCnp} from "@/app/ui/uiRadix/input-cnp"
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2";
import { handleForm } from "@/app/pruebas/action";


export default function EditConsultaForm({
  consulta,
  userMember,
}: { 
  consulta: Consulta;
  userMember: User | undefined
}) {

  const [estado, setEstado] = useState(false)
  const [estadoRespuesta, setEstadoRespuesta] = useState(false)
  const [estadoRegistrar, setEstadoRegistrar] = useState(false)

  const [consultaEmail, setConsultaEmail] = useState("")
  const [respuestaEmail, setRespuestaEmail] = useState("")

  const consultaAsunto= `${consultaEmail}:   ${consulta.consulta}`

  const id= consulta.id

  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClickButton= () => {
    if (buttonRef.current) buttonRef.current.click()
  };

  const initialState = { message: null, errors: {} };
  const updateConsultaWithId = updateConsulta.bind(null, id);
  const [state, dispatch] = useFormState(updateConsultaWithId, initialState);


  return (
    <>
      <div className="flex flex-col justify-between rounded-xl ">
        <div className="flex items-center mb-6 ">
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

        {/* Editar consulta */}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-center flex gap-3 justify-end sm:mb-0">
            <div className={`flex gap-4 w-full text-[15px] sm:text-base`}>
              <IconConsulta  className="w-6 h-6 fill-[#50073aaa]" color="#50073a88" />
              <p className={`font-medium text-[14px] text-[#50073a88]`}>
                CONSULTA 
                <span className="text-[13px]" > - {formatDateToLocal(consulta.created_at)}</span>
              </p>
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { setEstado(!estado)}}
              data-testid="edit-button"
              data-active={estado}
              type='button'
            >
              {estado ? "Cerrar" : consulta.respuesta ? <div><span className="text-[12px] uppercase">Ver</span></div> : <div><span className="text-[12px] uppercase">Editar</span></div> }
            </Button>
          </div>

          <div
            className={clsx(
              "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
              {
                "max-h-[1000px] opacity-100 ": estado,
                "max-h-0 opacity-0 ": !estado,
                "invisible": !estado,
              }
            )}
          >
            <div className={`px-10 mb-6 ${estado && "mt-4"} `}>
              {consulta.consulta}
            </div>
            {!consulta.respuesta && (
              <div className="">
                <label
                  htmlFor="consulta"
                  className="mb-1 ml-3 block text-[#50073a88] text-sm font-medium"
                >
                  ASUNTO
                </label>
                <TextareaCnp
                  id="consulta"
                  name="consulta"
                  rows={2}
                  value={consultaEmail}
                  className="!text-sm "
                  aria-describedby="consulta-error"
                  placeholder='Asunto...'
                  onChange={(e) => setConsultaEmail(e.target.value)}
                />
              </div>
            )} 
          </div>
        </Frente>

        {/* Editar respuesta */}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-center flex gap-3 justify-end sm:mb-0">
            <div className={`flex gap-4 w-full text-[15px] sm:text-base`}>
              <IconRespuesta  className="w-6 h-6 fill-[#50073aaa]" color="#50073a88"/>
              <p className={`font-medium text-[14px] text-[#50073a88]`}>
                RESPUESTA
                {!consulta.updated_at ? <span className="text-[13px]"> <span className={`ml-2 text-sm  px-[5px] rounded-[4px] text-[#ffffff] bg-[#e580d0]`}>&#10003;</span> Enviar respuesta</span> : <span className="text-[13px]"> - {formatDateToLocal(consulta.updated_at)}</span> } 
              </p>
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { setEstadoRespuesta(!estadoRespuesta)}}
              data-testid="edit-button"
              data-active={estadoRespuesta}
              type='button'
            >
              {estadoRespuesta ? "Cerrar" : consulta.respuesta ? <div><span className="text-[12px] uppercase">Ver</span></div> : <div><span className="text-[12px] uppercase">Editar</span></div> }
            </Button>
          </div>

          <div
            className={clsx(
              "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
              {
                "max-h-[1000px] opacity-100 ": estadoRespuesta,
                "max-h-0 opacity-0 ": !estadoRespuesta,
                "invisible": !estadoRespuesta,
              }
            )}
          >
            <div className={`px-10 ${estadoRespuesta ? "mt-4 mb-6" : "mt-0 mb-0"} `}>
              {consulta.respuesta}
            </div>
            {!consulta.respuesta && (
              <div className="relative ">
                <label
                  htmlFor="respuesta"
                  className="mb-1 ml-3 block text-[#50073a88] text-sm  font-medium"
                >
                  EDITAR
                </label>
                <TextareaCnp
                  id="respuesta"
                  name="respuesta"
                  rows={4}
                  defaultValue={consulta.respuesta}
                  placeholder={consulta.respuesta}
                  className={`!text-sm `}
                  aria-describedby="respuesta-error"
                  onChange={(e) => setRespuestaEmail(e.target.value)}
                  required
                />
              </div>
            )}
          </div>
        </Frente>

        {!consulta.respuesta && (
          <Frente className={` py-4 mb-4 px-4 text-sm sm:px-4 `} >
            <div className="w-full items-start flex gap-3 justify-end sm:items-center sm:mb-0">
              <div className={`flex items-center gap-4 w-full text-[15px] sm:text-base`}>
                <IconEnvioEmail  className="w-9 h-4 fill-[#50073aaa]" size={32} />
                <p>Email - Respuesta</p>
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
            <div
              className={clsx(
                "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                {
                  "max-h-[1000px] opacity-100 pt-4": estadoRegistrar,
                  "max-h-0 opacity-0": !estadoRegistrar,
                  "invisible": !estadoRegistrar,
                }
              )}
            >
              <form action={handleFormRespuesta} method="POST"  className="rounded-lg w-full p-4 ">
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
                      Consulta
                    </label>
                    <TextareaCnp 
                      name="title" 
                      placeholder="Consulta..." 
                      className="!pl-4 !text-sm"
                      rows={3}
                      value={consultaAsunto}
                      required
                      readOnly
                      >
                      <div className="w-0" >
                      </div>
                    </TextareaCnp>
                  </fieldset>

                  
                  <fieldset>
                    <label
                      className="text-start text-[13px] "
                      htmlFor="content"
                    >
                      Respuesta
                    </label>
                    <TextareaCnp
                      name="content" 
                      placeholder="Respuesta..." 
                      className=" !pl-4 !text-sm"
                      value={respuestaEmail}
                      rows={3}
                      required
                      readOnly
                    />
                  </fieldset>
                </div>

                <button 
                  type="submit" 
                  ref={buttonRef}
                  className="hidden py-1">
                  Enviar
                </button>
              </form>
            </div>
          </Frente>
        )}
      </div>

      <form action={dispatch}>
        {/* Campos datos*/}
        <div className="flex flex-col ">
          <textarea
            id="consulta"
            name="consulta"
            value={consultaAsunto}
            aria-describedby="consulta-error"
            required
            readOnly
          />

          <textarea
            id="respuesta"
            name="respuesta"
            value={respuestaEmail}
            aria-describedby="respuesta-error"
            required
            readOnly
          />

          <input 
            name="updated_at" 
            id="updated_at" 
            type="text"
            defaultValue= { new Date().toISOString() }
            // readOnly
          />
        </div>

        {/* msj error*/}
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>

        <div className="flex justify-end gap-4">
          <Link
            href="/dashboard/consultas"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            {!consulta.respuesta ? "Cancelar" : "Consultas"} 
          </Link>
          {!consulta.respuesta && (
            <ButtonA 
              type="submit"
              onClick={() => {
              handleClickButton()
              }}
              disabled= {!respuestaEmail || !consultaEmail ? true : false}
              >
              Editar Consulta</ButtonA>
          )}
        </div>
      </form>
    </>
  );
}
