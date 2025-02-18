"use client"

// import React from "react";
import { useState } from "react"
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

import type { Tramite } from "@/app/lib/definitions"
import markdownStyles from './markdown-styles.module.css';
import { ButtonA } from "@/app/ui/button";


export function AcordeonTramite({allTramites, content }:{allTramites:Tramite[]; content:string[]}) {

    const [clicked, setClicked] = useState<number | boolean>(false);
    const [tramitex, setTramite] = useState("");

    console.log("allTramites:",allTramites )

    const toggle = (index: number) => {
    if (clicked === index) {
        return setClicked(true);
        }
        setClicked(index);
    }

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    const d = new Date();
    const date= `${months[d.getMonth()]}-${d.getFullYear()}`
    

    return (
    <Accordion.Root
		className="flex flex-col"
		type="single"
		collapsible
	>
        {allTramites?.map((tramite:Tramite, index:number) => {
          return (
            <Accordion.Item value={`item-${index}`} className={`tramite-global`} key={index}>
                <Accordion.Trigger 
                    className={`relative group py-[7px] px-4 w-full text-[#1d0215cc] flex justify-between items-center bg-[#e6e0e3] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] ${allTramites.length == index + 1  && clicked === index && "!rounded-none"  } hover:bg-[#e6e0e3c5] hover:text-[#1d0215ee] `}
                    onClick={() => toggle(index)}
                    id="accordion-trigger"
                    >
                    <div className="flex ">
                        <img 
                            src= "/dnrpa.png" 
                            alt="icono trámites" 
                            width={26} 
                            height={"auto"}
                            className="opacity-50 h-[22px] "  />
                        {allTramites.length === index + 1 ? (
                            <p className="text-[14.5px] ml-3 text-start md:text-[15.5px] ">
                                Otro... <span className="text-[13.5px] ">(detallá el trámite que nesecites realizar)</span>
                            </p>
                        ) : (
                            <p className="text-[14.5px] ml-4 text-start md:text-[15.5px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                                {`(${tramite.estado})`}</span>}
                            </p>
                        )}
                    </div>
                    { clicked !== index ? (
                        <ChevronDownIcon className={`mx-4 w-4 stroke-2 duration-200 rounded-b-md opacity-60 group-hover:stroke-[3] `} />
                    ) : (
                        <ChevronDownIcon className={`mx-4 w-4 stroke-[3px]  duration-200 rounded-b-md rotate-180 `} />
                    )}
                </Accordion.Trigger>
                <Accordion.Content className="p-4 bg-[#ffffffee] rounded-b-lg ">
                    {allTramites.length === index + 1 ? (
                        <div className="flex flex-col gap-y-2 pt-3">
                            <textarea
                            className={`w-full rounded-[4px] p-3 border border-[#c3d0d5] bg-[#d9e3e82d] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-100 focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#3e93bd] focus:outline-2 focus:outline-[#398cb536] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585] `}
                            id="consulta"
                            name="consulta"
                            placeholder= "tramite..."
                            required
                            rows={4}
                            maxLength={1024}
                            wrap="hard"
                            value={tramitex}
                            onChange={(e) => {
                                setTramite(e.target.value);
                            }}
                            />
                        </div>
                    ) : (
                        <div
                        className={` text-[14.5px] sm:text-[15px] text-[#1d0215cc]  ${markdownStyles['markdown']}`}
                        dangerouslySetInnerHTML={{ __html: content[index] }}
                        />
                    )}

                    <div className="w-full flex justify-between items-end mt-4 ">
                        <div className="flex items-center text-sm opacity-90 ">
                            <ArrowPathIcon className="h-4 w-4 mr-2.5 text-[#50073a9d] stroke-2 " />
                            <p className="text-[#50073a7d] font-medium ">{tramite.date !== "actual" ? tramite.date : date }</p>
                        </div>
                        <Accordion.Trigger asChild >
                            <ButtonA
                                className={`h-8 text-[14px] w-max`}
                                disabled={tramite.estado === "Derogado" ? true : false }
                                onClick={() => toggle(index)} >
                                Seleccionar
                            </ButtonA>
                        </Accordion.Trigger>
                        
                    </div>
                </Accordion.Content>
            </Accordion.Item>
          );
        })}
        
	</Accordion.Root>
)};

export default AcordeonTramite;