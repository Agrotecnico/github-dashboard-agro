'use client';

import Image from 'next/image';
import carinaBlog from '../../../public/carina-blog.jpg'
import usados from '../../../public/usados.jpg'

export default function Page() {
  return (
    <>
      <article className="mt-0 md:mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
          ¿Qué es y cómo funciona el 08 para transferir un vehículo?
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
              src={usados}
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
            enero 12, 2024
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="mb-2 text-gray-500 dark:text-gray-400 mb-2">En Argentina, el trámite de transferencia de vehículos es un proceso legal que implica la manifestación de voluntad del titular del vehículo registrado para transferirlo a otra persona.</p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            El Formulario 08 es un documento legal que permite al propietario actual de un automóvil, motocicleta o equipo agrícola usado transferir todos sus derechos y propiedad a un adquirente o comprador, asumiendo que el vehículo se transferiría a su nombre. Esto podría tomar la forma de una venta, un premio, una donación o una sucesión.
          </p>
        </div>
      </article>
      
      
    </>
  );
}