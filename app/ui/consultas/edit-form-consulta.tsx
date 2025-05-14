'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import clsx from 'clsx';

import { Consulta } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateConsulta } from '@/app/lib/actions';
import { User } from '@/app/lib/definitions';
import distanceToNow from '@/app/lib/dateRelative';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { Frente } from '@/app/ui/marcos';
import { useState } from 'react';
import { Span } from 'next/dist/trace';


export default function EditConsultaForm({
  consulta,
  userMember,
}: { 
  consulta: Consulta;
  userMember: User | undefined
}) {

  const [estado, setEstado] = useState(false)
  const [estadoRespuesta, setEstadoRespuesta] = useState(false)
  const [palabrasConsulta, setTextconsulta] = useState(consulta.consulta.split(" "))

  const id= consulta.id
  const tituloConsulta= palabrasConsulta.slice(0, 12)

  const initialState = { message: null, errors: {} };
  const updateConsultaWithId = updateConsulta.bind(null, id);
  const [state, dispatch] = useFormState(updateConsultaWithId, initialState);


  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-between rounded-xl ">{/*  bg-[#0000000d]  [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0]*/}
        <div className="flex items-center mb-6 ">
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

        {/* Editar consulta */}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-center flex gap-3 justify-end sm:mb-0">
            <div className={`flex flex-col w-full text-[15px] sm:text-base`}>
              <p className={`font-medium text-[14px] text-[#50073a88]`}>
                CONSULTA 
                <span className="text-[13px]" >
                   - {formatDateToLocal(consulta.created_at)}
                </span>
              </p>
              {/* <div className={`w-full`}>
                <span className={` decoration-[#1d021544] underline underline-offset-[3px]`}>
                  {tituloConsulta.join(" ") }
                </span>
                <span className=" ">
                  { tituloConsulta.length < 12 ? "" :
                    !estado ? " ... " :
                    ` ${palabrasConsulta.slice(12).join(" ")}` 
                  }
                </span>
              </div> */}
              {/* <div className="px-4 ">
                {consulta.consulta}
              </div> */}
            </div>

            <Button
              className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
              onClick={() => { setEstado(!estado)}}
              data-testid="edit-button"
              data-active={estado}
              type='button'
            >
              {estado ? "Cerrar" :  <div><span className="text-[12px] uppercase">Editar</span></div> }
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
            <div className={`px-4 mb-4 ${estado && "mt-4"} `}>
              {consulta.consulta}
            </div>
            <div className="">
              <div className="relative rounded-md">
                <div className="relative ">
                  <label
                    htmlFor="consulta"
                    className="mb-1 ml-3 block text-sm font-medium"
                  >
                    Editar consulta
                  </label>
                  <textarea
                    id="consulta"
                    name="consulta"
                    rows={6}
                    defaultValue={consulta.consulta}
                    // placeholder="Editar consulta"
                    className={`w-full rounded-[4px] p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585] `}
                    aria-describedby="consulta-error"
                  />
                </div>
              </div>
            </div>
          </div>
        </Frente>

        {/* Editar respuesta */}
        <Frente className="py-4 mb-4 px-4 text-sm sm:px-4" >
          <div className="w-full items-center flex gap-3 justify-end sm:mb-0">
            <div className={`flex flex-col w-full text-[15px] sm:text-base`}>
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
              {estadoRespuesta ? "Cerrar" :  <div><span className="text-[12px] uppercase">Editar</span></div> }
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
            <div className={`px-4 ${estadoRespuesta && "mt-4"} `}>
              {consulta.respuesta}
            </div>
            <div className="">
              <div className="relative rounded-md">
                <div className="relative ">
                  <label
                    htmlFor="respuesta"
                    className="mb-1 ml-3 block text-sm font-medium"
                  >
                    Editar respuesta
                  </label>
                  <textarea
                    id="respuesta"
                    name="respuesta"
                    rows={6}
                    defaultValue={consulta.respuesta}
                    placeholder="Editar respuesta"
                    // className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                    className={`w-full rounded-[4px] p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585] `}
                    aria-describedby="respuesta-error"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </Frente>

        {/* Consulta actualizacion */}
        {/* <div className=" mb-4">
          <label
            htmlFor="respuesta"
            className="mb-1 ml-3 block text-sm font-medium"
          >
            Editar actualizacion
          </label>
          <div className="relative mt-1 rounded-md">
            <div className="relative ">
              <textarea
                id="updated_at"
                name="updated_at"
                rows={6}
                defaultValue={new Date().toISOString()}
                placeholder="Edite la actualizacion"
                className={`w-full rounded-[4px] p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585] `}
                aria-describedby="respuesta-error"
                required
              />
            </div>
          </div>
        </div> */}

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Link
          href="/dashboard/consultas"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Consulta</Button>
      </div>
    </form>
  );
}
