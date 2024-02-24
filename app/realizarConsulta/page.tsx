'use client';

import Image from 'next/image';
import infobae from '../../public/infobae.jpg'
import intervencion from '../../public/intervencion.jpg'
import Link from 'next/link'
import LogoCNP from '@/app/ui/logoCNP'
import LogoCNP2 from '@/app/ui/logoCNP2'

export default function Page() {
  return (
    <>
      <div className="p-3 md:p-6 flex flex-col mx-auto bg-[#f7f2f7] flex min-h-screen max-w-[1024px]">
      <Link
        className="mb-4 flex h-20 items-center leading-6 justify-between rounded-md bg-[#e580d0] p-4 md:h-32 md:flex-col-reverse"
        href="/"
        >
        <div className="text-white w-full">
          <LogoCNP2 className="md:hidden w-[96px]" colorC="white" colorN="#ddd" colorP="#ccc" color="#eee" />
          <LogoCNP className="hidden md:block w-[208px]" colorC="white" colorN="#ddd" colorP="#ccc" color="#eee" />
        </div>
        <div className="flex flex-col md:flex-row opacity-30 text-[22px] font-black text-center">
          <span className="mr-1.5"></span><span>2024</span>  
        </div>
      </Link>
      <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
        Realizá tu Consulta
      </h1>
      <article className="mx-1 mb-1 mt-0 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

        {/* <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
            Realizá tu Consulta
        </h1> */}

        <div className="hidden md:block md:mb-6">
          <div className="flex items-center">
            <Image src={infobae} width={100} height={29} className="w-[83px] h-[24px]" alt="Nombre" />
            <div className="text-md font-semibold"></div>
          </div>
        </div>

        <div className="mb-4 md:mb-8 sm:mx-0">
          <div className="sm:mx-0">
            <Image
              src={intervencion}
              alt={`Cover Image for Titulo`}
              width={533}
              height={400}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
          <div className="flex items-center">
            <Image src={infobae} width={100} height={29} className="w-[83px] h-[24px] mr-4" alt="Nombre" />
            <div className="text-xl font-bold"></div>
          </div>
          </div>
          <div className="mb-6 text-md">
            07 febrero, 2024
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-500">
            El sistema registral depende de la Dirección Nacional de Registro Automotor (DNRPA) y funciona en la órbita del Ministerio de Justicia. Desde hace tiempo es cuestionado no sólo por ser parte de un sistema burocrático, poco eficiente, costoso y muy complejo, sino también porque se lo sindica como una caja política, ya que una parte de las asignaciones están relacionadas con exfuncionarios, o familiares directos o indirectos.
          </p>
        </div>
      </article>
      </div>
      
    </>
  );
}