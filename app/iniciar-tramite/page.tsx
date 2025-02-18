import { Metadata } from 'next';
import { auth } from 'auth';


import {Frente} from '@/app/ui/marcos'
import { ButtonB, ButtonA } from '@/app/ui/button';
import  IconCambio  from "@/app/ui/logosIconos/icon-cambio";
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import * as Tabs  from "@radix-ui/react-tabs";


export const metadata: Metadata = {
  title: 'Iniciar trámite',
  description:
    'En esta es una página donde enumeramos y detallamos los tramites más frecuentes ',
};

type Params = {
  params: {
    slug: string;
  };
};

export default async function TramitePage({ params }: Params) {
  const session = await auth();

  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center pb-3">
          <img 
            src= "/dnrpa.png" 
            alt="icono trámites" 
            width={26} 
            height={"auto"}
            className=" opacity-50 h-[22px] w-[22px] mr-3 " 
          />
        </div>

        <Frente className="!bg-[#e6e0e3]  h-[240px] ">
          <Tabs.Root
            className="flex  flex-col"
            defaultValue="tab1"
          >
            <Tabs.List
              className="flex shrink-0 text-sm md:text-[15px]"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 leading-none  text-[#1d021577] outline-none hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
                value="tab1"
              >
                Descripción
              </Tabs.Trigger>

              <Tabs.Trigger
                className="flex bg-[#ffffff63] border-x border-[#e6e0e3] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 leading-none  text-[#1d021577] outline-none hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
                value="tab2"
              >
                Documentos
              </Tabs.Trigger>

              <Tabs.Trigger
                className="flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 leading-none  text-[#1d021577] outline-none hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
                value="tab3"
              >
                Informacíon
              </Tabs.Trigger>

                    
            </Tabs.List>

            <Tabs.Content
              className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb] md:text-[15px]"
              value="tab1"
            >
              <p className=" mb-5 mt-1 underline decoration-[#0002]  underline-offset-4">
                Descripción general del trámite.
              </p>
              <p className="mb-2 mt-1 text-base font-medium text-[#50073a88] ">
                Selecciona un trámite
              </p>
            </Tabs.Content>

            <Tabs.Content
              className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb] md:text-[15px]"
              value="tab2"
            >
              <p className="mb-5 mt-1 underline decoration-[#0002]  underline-offset-4">
                Documentacion requerida para presupuestar el trámite.
              </p>
              <p className="mb-2 mt-1 text-base font-medium text-[#50073a88] ">
                Selecciona un trámite
              </p>
            </Tabs.Content>

            <Tabs.Content
              className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb] md:text-[15px]"
              value="tab3"
            >
              <p className="mb-5 mt-1 underline decoration-[#0002]  underline-offset-4">
                Informacion y datos necesarios para calcular el presupuesto.
              </p>
              <p className="mb-2 mt-1 text-base font-medium text-[#50073a88] ">
                Selecciona un trámite
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </Frente>

        <Frente className="!bg-[#e6e0e3] p-4 mt-2 opacity-60">
          <div className="flex flex-col gap-y-1">
            <div className=" text-[15px] text-[#1d0215bb]">Información adicional y comentarios</div>
            <textarea
              className={`w-full rounded-[4px] p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000] opacity-70 transition-[opacity,shadow]  duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]`}
              // id="consulta"
              // name="consulta"
              placeholder= "comentarios..."
              // required
              // rows={2}
              // maxLength={1024}
              // wrap="hard"
            />
          </div>{/* */}
        </Frente>

        <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#e6e0e3] opacity-60">
          <div className="flex items-center justify-between gap-5 h-[39px] min-[940px]:h-[32px] ">
            <div className="mt-1.5 ">
              <IconRegistro className="opacity-60 w-[24px] ml-3 " />
            </div>
            <ButtonB className={`h-8 text-[13px]  w-max`}>
              <div className="text-[12px] overflow-auto whitespace-nowrap">
                Registrar EMAIL
              </div>
            </ButtonB>
          </div>
        </Frente>

        <div className="w-full flex justify-end mt-4 opacity-40">
          <ButtonA
            className={`w-[200px] h-8 text-sm !justify-start`}
            type="submit"
          >
            <IconCambio
              className={` mr-2 w-[22px] h-[22px] `}
              fill2="#fffc"
              fill="#ff00ff"
            />
            <div
              className="w-full"
            >
              Pedir Presupuesto
            </div>
          </ButtonA>
        </div>
      </section>
    </>
  );
}
