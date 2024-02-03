'use client';

import Image from 'next/image';
import carinaBlog from '../../../public/carina-blog.jpg'
import form08 from '../../../public/form-08.png'

export default function Page() {
  return (
    <>
      <article className="mt-0 md:mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
          Validez del formulario 08
        </h1>

        <div className="hidden md:block md:mb-6">
          <div className="flex items-center">
            <Image src={carinaBlog} width={300} height={300} className="w-12 h-12 rounded-full mr-4" alt="Nombre" />
            <div className="text-md font-semibold">Carina Noemi Pacheco</div>
          </div>
        </div>

        <div className="mb-4 md:mb-8 sm:mx-0">
          <div className="sm:mx-0">
            <Image
              src={form08}
              alt={`Cover Image for Titulo`}
              width={481}
              height={361}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
          <div className="flex items-center">
            <Image src={carinaBlog} width={300} height={300} className="w-12 h-12 rounded-full mr-4" alt="Nombre" />
            <div className="text-xl font-bold">Carina Noemi Pacheco</div>
          </div>
          </div>
          <div className="mb-6 text-md">
            diciembre 17, 2023
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Si posee el formulario 08 firmado por el titular y certificado ante escribano público o registro del automotor, tenga en cuenta que de no efectivizar la transferencia en tiempo y forma dicho formulario pierde toda validez y tendrá que volver a tramitarlo.
          <p> En caso de fallecimiento del titular antes de realizar la transferencia, el formulario 08 pierde toda validez y es necesaria la convocatoria de herederos o sucesión.</p>
          <p> Los vendedores deben exigir la inmediata transferencia ante el registro del automotor a nombre del nuevo propietario, única forma legal existente para dicha transacción</p>
        </p>
        </div>
      </article>
      
      
    </>
  );
}