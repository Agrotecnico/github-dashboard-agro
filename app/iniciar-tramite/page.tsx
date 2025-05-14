import { Metadata } from 'next';
import { auth } from 'auth';


import {Frente} from '@/app/ui/marcos'
import { ButtonB, ButtonA } from '@/app/ui/button';
import  IconCambio  from "@/app/ui/logosIconos/icon-cambio";
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import * as Tabs  from "@radix-ui/react-tabs";
import { fetchUserById } from '@/app/lib/data';


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

export default async function Page({ params }: Params) {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email)

  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center h-[34px] pb-3">
          <img 
            src= "/dnrpa.png" 
            alt="icono trámites" 
            width={26} 
            height={"auto"}
            className=" opacity-50 h-[20px] w-[20px] mr-3 " 
          />
        </div>

        <Frente className="!bg-[#1d021514]  h-[240px] ">
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
                Adjuntar Documentos
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
              <p className=" mb-5">
                Descripción general del trámite
              </p>
              <p className="mb-2 mt-1 text-base font-medium text-[#50073a88] ">
                Selecciona un trámite
              </p>
            </Tabs.Content>

            <Tabs.Content
              className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb] md:text-[15px]"
              value="tab2"
            >
              <p className="mb-5">
                 Adjuntá los siguientes documentos para realizar el presupuesto:
              </p>
              <p className="mb-2 mt-1 text-base font-medium text-[#50073a88] ">
                Selecciona un trámite
              </p>
            </Tabs.Content>

            <Tabs.Content
              className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb] md:text-[15px]"
              value="tab3"
            >
              <p className="mb-5">
                Información necesaria para realizar el presupuesto
              </p>
              <p className="mb-2 mt-1 text-base font-medium text-[#50073a88] ">
                Selecciona un trámite
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </Frente>
  
        <div className="w-full flex justify-end mt-4 opacity-80">
          <ButtonA
            className={`w-[200px] h-8 text-sm !justify-start`}
            type="submit"
            disabled
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
