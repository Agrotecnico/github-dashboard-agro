"use client"

import { handleForm } from "@/app/pruebas/action";
import { Fondo, Frente } from "@/app/ui/marcos"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import { TextareaCnp } from "@/app/ui/uiRadix/textarea-cnp";
import { FormEvent, useState, useEffect, useRef } from "react"
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta";
import IconEmail2 from "@/app/ui/logosIconos/icon-email2";
import { ImageUp } from "lucide-react";
import { ButtonA } from "@/app/ui/button";


export default function EnviarEmailConsulta() {

  return (
    <>
      <Frente className="text-sm my-10 text-center rounded-lg !bg-[#1d021511] w-full mx-auto max-w-lg shadow-xl pt-[1px] ">
        <div className="relative ">
          <div className="text-start w-full px-4 py-2 mb-3 rounded-t-lg bg-[#1d02151c]">
            Nuevo mensaje
          </div>
          <div className="text-base absolute top-1.5 right-5 font-semibold ">
            x
          </div>
        </div>

        <form action={handleForm} method="POST"  className="rounded-lg w-full p-4 ">
          <div className="flex items-start w-full mb-4 gap-3">
            <p className="mt-2 leading-none">
              Para
            </p>
            <div className="flex flex-col gap-1 w-full">
              <InputCnp 
                type="text" 
                name="to_name" 
                placeholder="Nombre" 
                className="h-8 text-sm "
                autoFocus
                required
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
                className="h-8 text-sm  " 
                required
                >
                <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                  <span className={`absolute w-3 font-semibold left-[9px] top-1.5 opacity-40 text-[#1d021599]  `}>
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
            <InputCnp 
              type="text" 
              name="title" 
              placeholder="Asunto" 
              className="h-8 !pl-4"
              required
              >
              <div className="w-0" >
              </div>
            </InputCnp>

            <TextareaCnp
              name="content" 
              placeholder="Mensaje" 
              rows={6}
              required
              className=""
            />
          </div>

          <ButtonA className="py-1">
            Enviar
          </ButtonA>
        </form>
      </Frente>
    </>
  );
}
