'use client';

import Image from 'next/image';
import tim from '../../../public/tim.jpeg'
import patentamiento1 from '../../../public/patentamiento1.jpg'

export default function Page() {
  return (
    <>
      <article className="mt-0 md:mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
          Ante la compra / venta de un vehículo, ¿que documentación tengo que solicitar al vendedor o entregar?
        </h1>

        <div className="hidden md:block md:mb-6">
          <div className="flex items-center">
            <Image src={tim} width={100} height={100} className="w-12 h-12 rounded-full mr-4" alt="Nombre" />
            <div className="text-md font-semibold">Tomás Straufor</div>
          </div>
        </div>

        <div className="mb-4 md:mb-8 sm:mx-0">
          <div className="sm:mx-0">
            <Image
              src={patentamiento1}
              alt={`Cover Image for Titulo`}
              width={481}
              height={361}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
          <div className="flex items-center">
            <Image src={tim} width={100} height={100} className="w-12 h-12 rounded-full mr-4" alt="Nombre" />
            <div className="text-xl font-bold">Tomás Straufor</div>
          </div>
          </div>
          <div className="mb-6 text-md">
            febrero 01, 2024
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ol className="mb-4">
            <li>
              - Título y Cédula del automotor
            </li>
            <li>
              - Formulario 08 firmado por titular y cónyuge debidamente certificado por autoridad competente
            </li>
            <li>
              - Verificación policial
            </li>
            <li>
              - Informe de Estado de Dominio
            </li>
            <li>
              - Informe de Infracciones de Tránsito
            </li>
            <li>
              - Libre de Deuda de patentes
            </li>
            <li>
              - Formulario CETA
            </li>
          </ol>
          <p className="text-gray-700">
            La compra / venta es una situación de riesgo, siempre es conveniente que concurra a un Mandatario Matriculado para ser asesorado correctamente.
          </p>
        </div>
      </article>
      
      
    </>
  );
}