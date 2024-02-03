'use client';

import Image from 'next/image';
import carinaBlog from '../../public/carina-blog.jpg'
import verificacion from '../../public/verificacion.jpg'
import usados from '../../public/usados.jpg'
import form08 from '../../public/form-08.png'
import patentamiento1 from '../../public/patentamiento1.jpg'
import tim from '../../public/tim.jpeg'
import { Button, Accordion  } from 'flowbite-react'

export default function Page() {
  return (
    <>
      {/* <main className="block md:hidden">
        <div className="max-w-[1024px] mx-auto w-full text-[13px] min-[500px]:text-[14px] md:text-[15px] bg-[#efe5ed] p-9 relative mb-2 h-full">
          <Accordion >

            <Accordion.Panel>
              <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59] focus:ring-0">
                <p className="mr-2">¿Cuál es la diferencia entre un gestor y un mandatario nacional del automotor?</p>
              </Accordion.Title>
              <Accordion.Content className="bg-white p-2 min-[500px]:p-4 ">
                <article className=" mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

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
                      enero 28, 2024
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
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59] focus:ring-0">
                <p className="mr-2"> ¿Qué es el formulario 08?</p>
              </Accordion.Title>
              <Accordion.Content className="bg-white p-2 min-[500px]:p-4">
                <article className="mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

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
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59]  focus:ring-0">
                <p className="mr-2"> Validez del formulario 08</p>
              </Accordion.Title>
              <Accordion.Content className="bg-white p-2 min-[500px]:p-4">
                <article className="mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
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
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel aria-expanded={true}>
              <Accordion.Title className="duration-200 p-2 min-[500px]:p-3 [text-shadow:_1px_1px_#222] duration-200 text-white bg-[#7f3c70] hover:bg-[#652e59] focus:ring-0  ">
                <p className="mr-2"> Ante la compra / venta de un vehículo, ¿que documentación tengo que solicitar al vendedor o entregar?</p>
              </Accordion.Title>
              <Accordion.Content className="bg-white p-2 min-[500px]:p-4">
                <article className="mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

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
              </Accordion.Content>
            </Accordion.Panel>

          </Accordion>
        </div>
      </main> */}
      <article className="mt-0 md:mt-4 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

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
              /* className={cn("shadow-sm w-full", {
                "hover:shadow-lg transition-shadow duration-200": slug,
              })} */
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
            enero 28, 2024
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
          {/* <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          /> */}
        </div>
      </article>
      
      
    </>
  );
}