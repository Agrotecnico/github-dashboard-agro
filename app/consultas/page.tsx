'use client';

import Image from 'next/image';
import { Button, Accordion  } from 'flowbite-react'

export default function Page() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto w-full text-[13px] min-[500px]:text-[14px] md:text-[15px] bg-[#efe5ed] p-9 relative mb-2 h-full">
        <Accordion >

          <Accordion.Panel>
            <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59] focus:ring-0">
              <p className="mr-2">¿Cuál es la diferencia entre un gestor y un mandatario nacional del automotor?</p>
            </Accordion.Title>
            <Accordion.Content className="bg-white p-2 min-[500px]:p-4 ">
              <p className="text-gray-500">
                El Mandatario del Automotor brinda servicios especializados en el mercado automotriz, asesorando y realizando diversas gestiones ante los Registros Seccionales del Automotor y de Créditos Prendarios. 
              </p>
              <p className="text-gray-500">
                Debe abogar por el cumplimiento de las leyes y normas establecidas para la registración de un bien automotor.
              </p>
              <p className="text-gray-500">
                Es plenamente reconocido por la DNRPA (Dirección Nacional de Registros de la Propiedad del Automotor) y para llevar adelante su labor, se le otorga una Matrícula Nacional Oficial que le permitirá desarrollar sus actividades en todo el país.
              </p>
              <p className="text-gray-500">
                El gestor puede realizar trámites para particulares y/o contribuyentes ante la administración pública de las distintas provincias y organismos dependientes tanto del Estado Nacional, Provincial o Municipal. Si bien es necesaria una capacitación, su labor no requiere especialización sobre temas relacionados con el mercado automotor y su accionar no conlleva ningún tipo de responsabilidad civil.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel aria-expanded={true}>
            <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59] focus:ring-0  ">
              <p className="mr-2"> Ante la compra / venta de un vehículo, ¿que documentación tengo que solicitar al vendedor o entregar?</p>
            </Accordion.Title>
            <Accordion.Content className="bg-white p-2 min-[500px]:p-4">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Título y Cédula del automotor
              Formulario 08 firmado por titular y cónyuge debidamente certificado por autoridad competente
              Verificación policial
              Informe de Estado de Dominio
              Informe de Infracciones de Tránsito
              Libre de Deuda de patentes
              Formulario CETA
              La compra / venta es una situación de riesgo, siempre es conveniente que concurra a un Mandatario Matriculado para ser asesorado correctamente.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59] focus:ring-0">
              <p className="mr-2"> ¿Qué es el formulario 08?</p>
            </Accordion.Title>
            <Accordion.Content className="bg-white p-2 min-[500px]:p-4">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Formulario 08 es un documento legal que permite al propietario actual de un automóvil, motocicleta o equipo agrícola usado transferir todos sus derechos y propiedad a un adquirente o comprador, asumiendo que el vehículo se transferiría a su nombre. Esto podría tomar la forma de una venta, un premio, una donación o una sucesión.
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59]  focus:ring-0">
              <p className="mr-2"> Validez del formulario 08</p>
            </Accordion.Title>
            <Accordion.Content className="bg-white p-2 min-[500px]:p-4">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Si posee el formulario 08 firmado por el titular y certificado ante escribano público o registro del automotor, tenga en cuenta que de no efectivizar la transferencia en tiempo y forma dicho formulario pierde toda validez y tendrá que volver a tramitarlo.
                En caso de fallecimiento del titular antes de realizar la transferencia, el formulario 08 pierde toda validez y es necesaria la convocatoria de herederos o sucesión.
                Los vendedores deben exigir la inmediata transferencia ante el registro del automotor a nombre del nuevo propietario, única forma legal existente para dicha transacción
              </p>
            </Accordion.Content>
          </Accordion.Panel>

        </Accordion>
      </div>
      
    </>
  );
}