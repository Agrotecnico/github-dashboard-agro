'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import NavInicio from '@/app/ui/navInicio';
import FooterInicio from '@/app/ui/footerInicio';
import IconTiempo from '@/app/ui/logosIconos/icon-tiempo';
import IconConocimiento from '@/app/ui/logosIconos/icon-conocimiento';
import IconSeguridad from '@/app/ui/logosIconos/icon-seguridad';
import { agrotecnico, agrotecnico2, tramites1, tramites2, tramites3, } from '@/app/constant';
import Image from 'next/image'
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  A11y,
  Mousewheel,
  Autoplay,
  EffectFade,
  Parallax,
} from 'swiper/modules';
import { Frente, Fondo } from './ui/marcos';
import { useSession } from "next-auth/react"
import { User } from '@/app/lib/definitions';
import  IconWhatsApp  from "@/app/ui/logosIconos/icon-whatsApp";
import { ChevronRightIcon, } from '@heroicons/react/24/outline';
import { ButtonA } from '@/app/ui/button';
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: 'CNP Mandataria',
  };


export default function CNPMandataria({
  user,
  linkDatos,
}: {
  user: User | undefined 
  linkDatos: {
    slug: string;
    excerpt: string;
  }[];
}) {
  const { data: session, update } = useSession()
  
  return (
    <Swiper
      className="swiper1 relative "
      centeredSlides={true}
      modules={[
        Keyboard,
        Scrollbar,
        Navigation,
        Pagination,
        A11y,
        Mousewheel,
        Parallax,
      ]}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            agrotecnico2[index] +
            '</span>'
          );
        },
      }}
      slidesPerView={1}
      spaceBetween={0}
      direction="vertical"
      mousewheel={true}
      speed={600}
      parallax={true}
      breakpoints={{
        640: {
          pagination: {
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '">' +
                agrotecnico[index] +
                '</span>'
              );
            },
          },
        },
      }}
    >
      <NavInicio user={user} />
      
      {/* <div className= "fixed z-20 flex justify-end top-[26px] right-[100px] w-full lg:max-w-5xl lg:mx-[calc((100vw_-_64rem)_/_2)]">
        <Link href= "https://api.whatsapp.com/send?phone=543476606595"  target="_blank"  className="opacity-70 hover:opacity-100 duration-200 rounded-md border-2 border-[#ffffffc7] " >
          <IconWhatsApp colorFondo="#0000" size="28"/>
        </Link>
      </div> */}

      {/* Inicio */}
      <SwiperSlide id="ini" className= "flex !justify-start flex-col">
        <div className="mb-8 flex flex-col w-full mt-24 sm:mt-32 ">
          <h2 className="font-bold  text-3xl mx-auto mb-5 ">
            CNP mandataria
          </h2>
          <p className="text-sm px-4 leading-snug max-w-[700px] my-0 mx-auto text-center md:text-base">
          Un servicio con la facultad de representación legal, asesoramiento y gestión en la compra y venta de vehículos terrestres o náuticos. 
          Esto incluye la transferencia de dominio, el trámite de la cédula verde y azul, y otras diligencias importantes
            {/* CNPmandataria es un sistema de gestion empresarial diseñado
            especificamente para mandatarios , nuestro objetivo es que puedas
            administrar tu negocio desde la comodidad de tu computadora o
            dispositivo movil, desde cualquier parte del mundo. */}
          </p>
        </div>
        <Swiper
          className="swiper2 mb-1 !h-[344px] "
          centeredSlides={true}
          grabCursor={false}
          modules={[
            Keyboard,
            Scrollbar,
            Navigation,
            Pagination,
            A11y,
            Mousewheel,
          ]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1.25}
          spaceBetween={10}
          speed={600}
          breakpoints={{
            425: {
              slidesPerView: 1.25,
              spaceBetween: 10,
              centeredSlides: true,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.75,
              spaceBetween: 10,
              centeredSlides: true,
            },
            880: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: true,
              keyboard: true,
            },
            1024: {
              slidesPerView: 2.15,
              spaceBetween: 10,
              centeredSlides: false,
              keyboard: true,
              grabCursor: true,
            },
          }}
        >
          {/* Manos */}
          <SwiperSlide className="">{/* ,url('https://res.cloudinary.com/dchmrl6fc/image/upload/v1740689220/mano-b_dq8ctv.jpg') */}
            <div
              className="absolute top-0 flex w-full h-[40vh] flex-col items-center justify-start rounded-xl text-4xl  bg-cover   bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005)]"/* h-[300px]  bg-fixed bg-center backdrop-blur */
              >{/* https://lh3.googleusercontent.com/pw/AP1GczNB_LOmDwneOypSdbXJYhH1BPPrHIOOo_VXGnGfQKpcPqU0qO9HHps0NgJyfMxdako6Tybj61v7ywgT-mNiom_VQWx_3kDB9WLjqc2SjD03oV3axhbT=w1920-h1080 */}




              <Image
                // src='/tramite7.jpg'
                src='https://res.cloudinary.com/dchmrl6fc/image/upload/v1740689220/mano-b_dq8ctv.jpg'
                alt="Reempadronamiento"
                width={960}
                height={720}
                objectFit={"container"}
                className="absolute -z-10 object-cover top-[0px] mb-2 flex h-full w-full items-center justify-center rounded-[10px]" /* h-[240px]  [border-radius:_0_10px_10px_0]*/
              >{/* */}
              </Image>




              <div className='h-[23vh] absolute mx-4 flex items-center justify-center'>
                <div className='flex flex-col'>
                  <h1 className="mb-2.5 text-xl min-[376px]:text-3xl">
                    Hola! Bienvenido
                  </h1>
                  <div className="flex flex-col items-start text-[#1d0215dd] text-sm min-[376px]:text-base sm:mx-10">
                    <p className="mb-1 w-full text-center">
                      Aqui podés<Link href={session ? '/dashboard/consultas' : '/realizar-consulta'}  className=" px-1.5 rounded-md duration-200 underline decoration-[#1d021581] underline-offset-2 hover:decoration-[#1d0215] hover:underline-offset-[3px] hover:text-[#1d0215] ">{session ? "Ver las consultas" : "Realizar consultas" } </Link>
                    </p>
                    <p className="w-full text-center">{/* {session ? 'o' : 'e'} */}o<Link href={session ? '/dashboard/tramites' : '/iniciar-tramite/baja-de-vehiculo'}  className="duration-200 underline decoration-[#1d021581] underline-offset-2 px-1.5 rounded-md hover:decoration-[#1d0215] hover:underline-offset-[3px] hover:text-[#1d0215] ">
                    {session ? "Ver los trámites" : "Iniciar trámites" } </Link>de registros y propiedad del automotor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Oficina */}
          <SwiperSlide className="">
            <div
              className="absolute top-0 flex h-[300px] w-full items-end justify-center rounded-xl bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('https://res.cloudinary.com/dchmrl6fc/image/upload/v1740689272/carina-oficina_whue5m.jpg')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
            >{/* https://lh3.googleusercontent.com/pw/AP1GczPpnEMmNa_UiSaqjOnb20pW4mEaVtPjGlIAa5K7tiHyeAizSCi6Sem_snmJyaNqaapQ_lOXnrJuongSiXqx_Y2fm8eNgdPxBm-RgKMp-vqeUx6zRT0b=w1920-h1080 */}
              <Link 
                href={"https://www.dnrpa.gov.ar/portal_dnrpa/mandatarios2.php?CONSULTAS2=true"} 
                target='_blank'
                className="w-full text-[#ffffffdd] decoration-[#ffffffdd] underline underline-offset-2 duration-150 opacity-60 hover:opacity-80">
                <p className="w-full h-7 leading-5 rounded-[0_0_12px_12px] border border-[#111] bg-[#000d] text-[12.5px] font-normal backdrop-blur-[1px] [font-variant-caps:_small-caps] [text-shadow:_1px_1px_black] min-[884px]:text-[15px]">
                  Mandataria Nacional{' '}
                  <span className="ml-2 text-[11px]">
                    {/* Mat:{' '} */}
                    CUIT{' '}&#160;
                    
                      {/* <span className="text-[12.5px]">M202427306151350 DN</span> */}
                      <span className="text-[12.5px]">27 30615135 0</span>
                    
                  </span>
                </p>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>

      {/* Trámites */}
      <SwiperSlide id="ev" className="flex flex-col">
        <Swiper
          className="swiper2 !h-[572px] !pb-8 !pl-2"
          centeredSlides={true}
          grabCursor={false}
          modules={[
            Keyboard,
            Scrollbar,
            Navigation,
            Pagination,
            A11y,
            Mousewheel,
          ]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={4}
          speed={600}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
              spaceBetween: 4,
              centeredSlides: true,
            },
            524: {
              slidesPerView: 1.5,
              spaceBetween: 4,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 4,
              centeredSlides: true,
            },
            880: {
              slidesPerView: 2.75,
              spaceBetween: 4,
              centeredSlides: true,
              keyboard: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 4,
              centeredSlides: false,
              keyboard: true,
              grabCursor: true,
            },
          }}
        >
          {/* Trámites 1 */}
          <SwiperSlide className="">
            <Swiper
              speed={600}
              loop={true}
              className="text-[#1d0215] swiper3"
              spaceBetween={30}
              effect={'fade'}
              navigation={false}
              pagination={{
                clickable: false,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' +
                    className +
                    '">' +
                    tramites1[index] +
                    '</span>'
                  );
                },
              }}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Image
                  src='/tramite1.jpg'
                  alt="Baja de vehículo"
                  width={960}
                  height={720}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center [border-radius:_10px_0_0_10px]"
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite2.jpg'
                  alt="Cambio de radicación y domicilio"
                  width={660}
                  height={490}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center [border-radius:_10px_0_0_10px]"
                ></Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite3.png'
                  alt="Denuncia de venta"
                  width={660}
                  height={490}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center [border-radius:_10px_0_0_10px]"
                ></Image>
              </SwiperSlide>  
            </Swiper>
            <div className="flex flex-col justify-center absolute z-10 top-[304px] items-center">
              <div className="flex items-center w-full mb-4 justify-center">
                <IconConocimiento size="33" />
              </div>
              <div className="px-4">
                <h4 className="font-bold text-base m-0">Conocimiento Especializado</h4>
                <p className="mt-2 mx-0 mb-0 font-normal text-sm text-center">
                Profesional matriculada  por la <dfn title="Dirección Nacional de Registros y Propiedad del Automotor" className="text-[#2e37e6] font-medium ">DNRPA</dfn>.
                Capacitada para realizar los trámites de la manera más eficiente en los Registros Seccionales.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Trámite 2 */}
          <SwiperSlide className="">
            <Swiper
              speed={600}
              loop={true}
              className="text-[#1d0215] swiper3"
              spaceBetween={30}
              effect={'fade'}
              navigation={false}
              pagination={{
                clickable: false,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' +
                    className +
                    '">' +
                    tramites2[index] +
                    '</span>'
                  );
                },
              }}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
            >
              <SwiperSlide>
                <Image
                  src='/tramite4.jpg'
                  alt="Duplicado de título o cédula"
                  width={960}
                  height={720}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center "
                >
                </Image>

              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite5.jpg'
                  alt="Informe de Estado de Dominio"
                  width={660}
                  height={490}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center"
                ></Image>
                  {/* <div className="absolute flex h-full w-full flex-col justify-center px-10 text-[11px] font-medium uppercase leading-none ">
                    <div className="mb-1.5 flex items-center rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur ">
                      <div className="flex">
                        <div className="mr-2 text-[15px] font-bold">04</div>
                      </div>
                      <div>Trámites Declaracion Deudas y Gravamenes</div>
                    </div>
                    <div className="mb-1.5 flex items-center rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <div className="flex">
                        <div className="mr-2 text-[15px] font-bold">08</div>
                      </div>
                      <div>
                        Contrato de Transferencia - Inscripción de Dominio
                      </div>
                    </div>
                    <div className="mb-1.5 flex items-center rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <div className="flex">
                        <div className="mr-2 text-[15px] font-bold">03</div>
                      </div>
                      <div>Inscripción Contrato Prendario</div>
                    </div>
                    <div className="mb-1.5 flex items-center rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <div className="flex">
                        <div className="mr-2 text-[15px] font-bold">05</div>
                      </div>
                      <div>Solicitud de Inscripción Inicial</div>
                    </div>
                    <div className="mb-1.5 flex items-center rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <div className="flex">
                        <div className="mr-2 text-[15px] font-bold">59</div>
                      </div>
                      <div>Mandatario, Mero Presentante y Comerciante</div>
                    </div>
                    <p className="mb-1.5 rounded-md text-[#221322] bg-[#ffffff00] px-1.5 py-[3px] text-start backdrop-blur">
                      <span className="font-bold">C</span>
                      onsultar por otros formularios...
                    </p>
                  </div> */}
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite6.png'
                  alt="Inscripción inicial"
                  width={660}
                  height={490}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center"
                ></Image>
                  {/* <div className=" z-10 w-full px-10 text-[14px] font-medium [line-height:_1] ">
                    <p className="mb-1.5 rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <span className="font-bold ">I</span>
                      nscripción inicial
                    </p>
                    <p className="mb-1.5 rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <span className="font-bold ">B</span>
                      aja por destrucción total, robo, hurto e incendio
                    </p>
                    <p className="mb-1.5 rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur ">
                      <span className="font-bold ">D</span>
                      enuncia de compra y poseción - Venta
                    </p>
                    <p className="mb-1.5 rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <span className="font-bold ">A</span>
                      ltas/Bajas municipales
                    </p>
                    <p className="mb-1.5 rounded-sm bg-[#ffffffc9] px-1.5 py-[3px] text-start backdrop-blur">
                      <span className="font-bold ">D</span>
                      uplicado de chapa patente
                    </p>
                    <p className="mb-1.5 text-[#291a29] rounded-sm bg-[#ffffff00] px-1.5 py-[3px] text-start text-[13px] backdrop-blur">
                      <span className="font-medium">C</span>
                      onsultar por otras gestiones...
                    </p>
                  </div> */}
              </SwiperSlide>  

            </Swiper>
            <div className="flex flex-col justify-center absolute top-[304px] items-center">
              <div className="flex items-center w-full mb-4 justify-center">
                <IconTiempo />
              </div>
              <div className="px-4">
                <h4 className="font-bold text-base m-0">Ahorra Tiempo y Esfuerzo</h4>
                <p className="mt-2 mx-0 mb-0 font-normal text-sm text-center">
                Si no estás familiarizado con los procedimientos o si no tenés tiempo para gestionarlos tú mismo, 
                me encargaré de todos los detalles administrativos y legales.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Trámites 3 */}
          <SwiperSlide className="">
            <Swiper
              speed={600}
              loop={true}
              className="text-[#1d0215] swiper3"
              spaceBetween={30}
              effect={'fade'}
              navigation={false}
              pagination={{
                clickable: false,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' +
                    className +
                    '">' +
                    tramites3[index] +
                    '</span>'
                  );
                },
              }}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
            >
              <SwiperSlide>
                <Image
                  src='/tramite7.jpg'
                  alt="Reempadronamiento"
                  width={960}
                  height={720}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center [border-radius:_0_10px_10px_0] "
                >{/* */}
                </Image>

              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite8.jpg'
                  alt="Renovación de Cédula"
                  width={660}
                  height={490}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center [border-radius:_0_10px_10px_0]"
                ></Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite9.jpg'
                  alt="Transferencia de dominio"
                  width={660}
                  height={490}
                  className="absolute top-[0px] mb-2 flex h-[240px] w-full items-center justify-center [border-radius:_0_10px_10px_0] "
                ></Image>
              </SwiperSlide>      
            </Swiper>
            <div className="flex flex-col justify-center absolute top-[304px] items-center">
              <div className="flex items-center w-full mb-4 justify-center">
                <IconSeguridad size="33" />
              </div>
              <div className="px-4">
                <h4 className="font-bold text-base m-0">Seguridad y Legalidad</h4>
                <p className="mt-2 mx-0 mb-0 font-normal text-sm text-center">
                Debidamente habilitada y registrada, garantizo que todos los trámites se realizan de manera legal y segura,
                  evitando posibles problemas a futuro.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <div className={`absolute z-10 text-sm flex justify-center gap-[1px] ${user?.role !== "admin" && user?.role !== "memberAccount"  ? "ml-[calc(100%_/_2_-_162px)]" : "ml-[calc(100%_/_2_-_122px)]"  } `}>
            <Link href={session ? '/dashboard/tramites' : '/iniciar-tramite/baja-de-vehiculo'}>
              <ButtonA className={`h-[26px] !opacity-75 pl-3 pr-2 w-full rounded-none rounded-l-md !justify-start hover:!opacity-100`}>
                <div className="flex gap-2 items-center ">
                  <p>{session ? "Trámites" : "Iniciar trámite" }</p>
                  <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
                </div>
              </ButtonA>
            </Link>

            <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'}>
              <ButtonA className={`h-[26px] !opacity-75 pl-3 pr-2 bg-[#b2439a] w-full rounded-none rounded-r-md !justify-start hover:!opacity-100`}>
                <div className="flex gap-2 items-center ">
                  <p>{session ? "Consultas" : "Realizar consulta" }</p>
                  <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
                </div>
              </ButtonA>
            </Link>
          </div>
        </Swiper>
      </SwiperSlide>

      {/* Consultas */}
      <SwiperSlide id="cp">
        <div className="w-full absolute top-0 z-10 flex h-full flex-col items-center justify-center px-4 [border-radius:_12px_12px_0_0] min-[500px]:px-6 md:px-9 ">
          <Fondo className="p-4">
            <div className="mb-4 mt-2.5 w-full text-xl text-center font-medium ">
              CONSULTAS FRECUENTES
            </div>
            
            <div className=" flex flex-col gap-2 ">
              {linkDatos.length ? (
                linkDatos.map((linkDato) => (
                  <div key={linkDato.slug}>
                    <Link
                      as={`/faq/${linkDato.slug}`}
                      href="/faq/[slug]"
                      className=" "
                    >
                      <Frente className="py-2.5 px-4 gap-5 text-[#1d0215cc] flex justify-between items-center duration-200 hover:bg-[#ffffffbb] hover:text-[#1d0215] ">
                        <p className="text-sm text-start max-[512px]:text-sm">
                          {linkDato.excerpt}
                        </p>
                        <div>
                          <ChevronRightIcon className="w-4 min-[512px]:w-4 "  />
                        </div>
                      </Frente>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Ninguna consulta publicado todavía</p>
              )}
            </div>
          </Fondo>

          <div className="flex gap-[1px] text-[14px] mt-10">
            <Link href={session ? '/dashboard/tramites' : '/iniciar-tramite/baja-de-vehiculo'}>
              <ButtonA className={`h-[26px] !opacity-75 pl-3 pr-2 w-full rounded-none rounded-l-md !justify-start hover:!opacity-100`}>
                <div className="flex gap-2 items-center ">
                  <p>{session ? "Trámites" : "Iniciar trámite" }</p>
                  <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
                </div>
              </ButtonA>
            </Link>

            <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'}>
              <ButtonA className={`h-[26px] !opacity-75 pl-3 pr-2 bg-[#b2439a] w-full rounded-none rounded-r-md !justify-start hover:!opacity-100`}>
                <div className="flex gap-2 items-center ">
                  <p>{session ? "Consultas" : "Realizar consulta" }</p>
                  <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
                </div>
              </ButtonA>
            </Link>
          </div>
        </div>
        <FooterInicio />
      </SwiperSlide>
    </Swiper>
  );
}
