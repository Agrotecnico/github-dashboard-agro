'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { Consulta } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { Frente } from '@/app/ui/marcos';
import IconConsultaRight from "@/app/ui/logosIconos/icon-consulta-right"
import { Disclosure, DisclosurePanel } from '@headlessui/react'
import useToggleState from "@/app/lib/hooks/use-toggle-state"
import { formatDateToLocal } from '@/app/lib/utils';
import distanceToNow from '@/app/lib/dateRelative';


export default function TableConsultaMember( { 
  consulta,
  idx,
  lengthConsultas,
}: { 
  consulta: Consulta;
  idx: number;
  lengthConsultas: number;
} ) {
  
  const [palabrasConsulta, setTextconsulta] = useState(consulta.consulta.split(" "))
  const [successState, setSuccessState] = useState(false)

  const { state, close, toggle } = useToggleState()


  const archivosAdjuntos= consulta?.archivos_url
  const archivos: string[] = JSON.parse(archivosAdjuntos!)

  const clearState = () => {
    setSuccessState(false)
  }

  const handleToggle = () => {
    clearState()
    setTimeout(() => toggle(), 100)
  }

  useEffect(() => {
    if (successState) {
      close()
    }
  }, [successState, close])

  const tituloConsulta= palabrasConsulta.slice(0, 12)


  return (
    <Frente  className="py-4 px-4 text-sm sm:px-4" >
      <div className="flex flex-col items-center " >
        <div className="w-full items-start flex gap-3 justify-between sm:items-center sm:mb-0">
          <div className="flex w-full ">
            <div className="relative">
              <IconConsultaRight className="opacity-[0.55] text-[#50073a] mr-4 w-8 "/>
              <span className="text-white absolute -top-0.5 left-[20px] text-[11px]  ">
                {(lengthConsultas - idx) }
              </span>
            </div>
            <div className=" text-sm  ">
              <div className="flex items-start flex-col leading-tight">
                <p className=""><span className="text-[12.5px] ">CONSULTA-</span>00{(lengthConsultas - idx) }</p>
                <p className="text-[13px] text-[#50073a7d] font-medium  ">
                  Realizada {distanceToNow(new Date(`${consulta.created_at}`))} - {`${formatDateToLocal(consulta.created_at)}`}
                </p>
              </div>
            </div>
          </div>

          <Button
            className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[72px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
            onClick={() => { handleToggle()}}
            data-testid="edit-button"
            data-active={state}
          >
            {state ? "Cerrar" :  <div><span className="text-[12px] uppercase">Ver</span></div> }
          </Button>
        </div>
        <div className={`w-full pb-1.5 pt-3 px-5 sm:px-12`}>
          <span className={` decoration-[#1d021544] underline underline-offset-[3px]`}>{/*  */}
            {tituloConsulta.join(" ") }
          </span>
          <span className=" ">
            { tituloConsulta.length < 12 ? "" :
              !state ? " ... " :
              ` ${palabrasConsulta.slice(12).join(" ")}` 
            }
          </span>
        </div>
      </div>
      <Disclosure>
        <DisclosurePanel
          static
          className={clsx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
            {
              "max-h-[1000px] opacity-100": state,
              "max-h-0 opacity-0": !state,
            }
          )}
        >
          <div className={`flex flex-col gap-4 mb-4 text-sm cursor-default transition-[visibility] duration-300 ease-in-out ${!state && "invisible"}`}>
            <div className="mt-4 text-[14.5px]">
              <div className="text-[#50073a7d] mb-0.5 font-medium text-[13.5px] ">
                RESPUESTA
              </div>
              <div>
                { consulta.respuesta ? (
                  <p className="p-4 border border-[#50073a22] bg-[#ffffffdd] rounded-[2px]">{ consulta.respuesta } </p>
                ) : (
                  <p className="p-4  border border-[#50073a22] bg-[#ffffffdd] rounded-[2px]">
                    Hemos recibido tu consulta.<br></br>
                    Te responderemos a la brevedad.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className={`flex flex-col items-center transition-[visibility] duration-300 ease-in-out ${!state && "invisible"} `}>
            <div className="mb-1.5 text-base">Archivos Adjuntos</div>
            <div className="w-full bg-[#1d0215] pt-6 pb-4 px-3 rounded-lg flex gap-6 flex-wrap justify-center">


              <div className="">
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
          </div>
        </DisclosurePanel>
      </Disclosure>
    </Frente>
  );
}

