import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { auth } from 'auth';

import { getTramiteBySlug } from '@/app/lib/getTramite';
import markdownToHtml from '@/app/lib/markdownToHtml';
import {Frente} from '@/app/ui/marcos'
import  TabsTramite  from '@/app/ui/tramites/tabsTramite';
import  RegistrarEmail  from "@/app/ui/registrar-email";
import { ButtonB, ButtonA } from '@/app/ui/button';
import  IconCambio  from "@/app/ui/logosIconos/icon-cambio";
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
  const tramite = getTramiteBySlug(params.slug);

  if (!tramite) {
    return notFound();
  }
  const content = await markdownToHtml(tramite.content || '');

  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center pb-3">
          <img 
            src= "/dnrpa.png" 
            alt="icono trámites" 
            width={26} 
            height={"auto"}
            className="opacity-50 h-[20px] w-[20px] mr-3 " 
          />
          <h1 className=" text-start text-[20px] text-[#50073a88] font-semibold leading-tight tracking-tighter sm:text-[22px] md:leading-none ">
            {tramite.tramite}
          </h1>
        </div>

        <Frente className="!bg-[#1d021514]  min-h-[200px]">{/* !bg-[#e6e0e3] */}
          <TabsTramite tramite={tramite} content={content} />
        </Frente>

        {/* <Frente className="hidden !bg-[#e6e0e3] p-4 mt-2">
          <div className="flex flex-col gap-y-1">
            <div className=" text-[15px] text-[#1d0215bb]">Información adicional y comentarios</div>
            <textarea
              className={`w-full rounded-[4px] p-2 border border-[#e9dae9] bg-[#ffffff] text-[15px] text-[#000000cc] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]`}
              id="consulta"
              name="consulta"
              placeholder= "información adicional..."
              required
              rows={2}
              maxLength={1024}
              wrap="hard"
              value={consulta}
              disabled={ !state }
              onChange={(e) => {
                setConsulta(e.target.value);
              }}
            />
          </div>
        </Frente> */}

        {!user && <RegistrarEmail registroEmail="el presupuesto" />}

        <div className="w-full flex justify-end mt-4">
          <ButtonA
            className={`w-[200px] h-8 text-sm !justify-start`}
            type="submit"
            // disabled={!consulta && true  }
            // onClick={() => {
            //   setSpin(true);
            // }}
          >
            <IconCambio
              className={` mr-2 w-[22px] h-[22px] `}
              fill2="#fffc"
              fill="#ff00ff"
            />{/* ${spin && "animate-spin"} */}
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
