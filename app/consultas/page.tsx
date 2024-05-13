
import Image from 'next/image';
import infobae from '../../public/infobae.jpg'
import intervencion from '../../public/intervencion.jpg'
import { auth } from '@/auth'

export default async function Page() {
  const session = await auth()
  return (
    <>
      <div className=" flex flex-col mx-auto min-h-screen max-w-[1024px]">
        
        <article className="mx-1 mb-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
          <h1 className="mb-8 text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
            Realizá tu Consulta
          </h1>
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