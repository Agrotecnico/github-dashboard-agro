'use client';

import Image from 'next/image';
import carinaBlog from '../../public/carina-blog.jpg'
import verificacion from '../../public/verificacion.jpg'

export default function Page() {
  return (
    <article className="mx-1 mb-1 mt-0 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

      <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
        ¿Cuál es la diferencia entre un gestor y un mandatario nacional del automotor?
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
            src={verificacion}
            alt={`Cover Image for Titulo`}
            width={533}
            height={400}
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
          28 enero, 2024
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2>Mandatario</h2>
        <p className="text-gray-500">
          El Mandatario del Automotor brinda servicios especializados en el mercado automotriz, asesorando y realizando diversas gestiones ante los Registros Seccionales del Automotor y de Créditos Prendarios. 
        </p>
        <p className="text-gray-500">
          Debe abogar por el cumplimiento de las leyes y normas establecidas para la registración de un bien automotor.
        </p>
        <p className="text-gray-500 mb-4">
          Es plenamente reconocido por la DNRPA (Dirección Nacional de Registros de la Propiedad del Automotor) y para llevar adelante su labor, se le otorga una Matrícula Nacional Oficial que le permitirá desarrollar sus actividades en todo el país.
        </p>
        <h2>Gestor</h2>
        <p className="text-gray-500">
          El gestor puede realizar trámites para particulares y/o contribuyentes ante la administración pública de las distintas provincias y organismos dependientes tanto del Estado Nacional, Provincial o Municipal. Si bien es necesaria una capacitación, su labor no requiere especialización sobre temas relacionados con el mercado automotor y su accionar no conlleva ningún tipo de responsabilidad civil.
        </p>
      </div>
    </article>
  );
}