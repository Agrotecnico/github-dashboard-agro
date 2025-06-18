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
import  IconWhatsApp  from "@/app/ui/logosIconos/icon-whatsApp2";
import { ChevronRightIcon, } from '@heroicons/react/24/outline';
import { ButtonA } from '@/app/ui/button';
import { Metadata } from 'next';
import IconPresupuesto from './ui/logosIconos/icon-presupuesto';
import IconConsulta from './ui/logosIconos/icon-consulta';
import IconLink from './ui/logosIconos/icon-link';


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
      
      <div className= "fixed z-20 flex justify-end bottom-[24px] right-[8px] rounded-xl lg:max-w-5xl lg:mx-[calc((100vw_-_64rem)_/_2)] shadow-[0_20px_25px_-5px_rgb(0_0_0_/_0.2),_0_8px_10px_-6px_rgb(0_0_0_/_0.2)]">
        <Link 
          href= "https://api.whatsapp.com/send?phone=543476606595"
          // href= "https://wa.me/543476606595?text=CNPmandataria"  
          target="_blank"  
          className="duration-150 bg-[#57c061] rounded-lg hover:bg-[#49a352] " >
          <IconWhatsApp size="38" colorFondo="#0000"  className="sm:w-[42px] " />
        </Link>
      </div>

      {/* Inicio */}
      <SwiperSlide id="ini" className= "flex flex-col !justify-start">
        <div className="mb-8 flex flex-col w-full pt-24 sm:pt-32 ">
          <h1 className="font-bold  text-3xl mx-auto mb-5 ">
            CNP mandataria
          </h1>
          <p className="text-sm px-4 leading-snug max-w-[700px] my-0 mx-auto text-center md:text-base">
          Un servicio con la facultad de representación legal, asesoramiento y gestión en la compra/venta de vehículos automotores y náuticos. 
          Esto incluye la transferencia de dominio, cédula de identificación y otros trámites más.
          </p>
        </div>
        <Swiper
          className="swiper2 !h-[50vh] "
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
          <SwiperSlide className="">
            <div
              className="absolute top-0 flex w-full h-[40vh] flex-col items-center justify-start rounded-xl text-4xl  bg-cover   bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005)]"
              >
              <Image
                src='https://res.cloudinary.com/dchmrl6fc/image/upload/v1740689220/mano-b_dq8ctv.jpg'
                alt="Reempadronamiento"
                width={960}
                height={720}
                priority
                // objectFit={"container"}
                className="absolute -z-10 object-cover top-[0px] flex h-full w-full items-center justify-center rounded-[10px]"
              >{/* */}
              </Image>

              <div className='h-[23vh] absolute mx-4 flex items-center justify-center'>
                <div className='flex flex-col'>
                  <h1 className="mb-2.5 text-xl min-[376px]:text-3xl">
                    Hola! Bienvenido
                  </h1>
                  <div className="flex flex-col items-start text-[#1d0215dd] text-sm min-[376px]:text-base sm:mx-10">
                    <p className="flex mb-1 w-full text-center">
                      Aqui podés
                      <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'}  className="flex px-1.5 rounded-md duration-200 underline decoration-[#1d021581] underline-offset-2 hover:decoration-[#1d0215] hover:underline-offset-[3px] hover:text-[#1d0215] ">
                        {session ? "Ver las consultas" : "Realizar consultas" }
                        <IconLink size="13px" className="ml-1"/>
                      </Link>
                    </p>
                    <p className="flex w-full text-center">
                      o
                      <Link href={session ? '/dashboard/tramites' : '/iniciar-tramite/baja-de-vehiculo'}  className="flex duration-200 underline decoration-[#1d021581] underline-offset-2 px-1.5 rounded-md hover:decoration-[#1d0215] hover:underline-offset-[3px] hover:text-[#1d0215] ">
                        {session ? "Ver los trámites" : "Pedí presupuesto"}
                        <IconLink size="13px" className='ml-1'/>
                      </Link> 
                      <span className={`${user && "hidden" }`}>por tu trámite</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Oficina */}
          <SwiperSlide className="">
            <div
              className="absolute top-0 flex w-full h-[40vh] flex-col items-center justify-start rounded-xl text-4xl bg-cover bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005)]"
            >
              <Image
                src='https://res.cloudinary.com/dchmrl6fc/image/upload/v1740689272/carina-oficina_whue5m.jpg'
                alt="Reempadronamiento"
                width={960}
                height={720}
                // objectFit={"container"}
                className="absolute -z-10 object-cover top-[0px] mb-2 flex h-full w-full items-center justify-center rounded-[10px]"
              >
              </Image>

              <Link 
                href={"https://www.dnrpa.gov.ar/portal_dnrpa/mandatarios2.php?CONSULTAS2=true"} 
                target='_blank'
                className="w-full text-[#ffffffdd] decoration-[#ffffff77] underline underline-offset-2 duration-150 opacity-60 hover:opacity-80 hover:decoration-[#ffffffdd]">
                <p className="flex justify-center items-center gap-2 w-full h-6 leading-5 rounded-t-xl border border-[#111] bg-[#000d] text-[12.5px] font-normal backdrop-blur-[1px] [font-variant-caps:_small-caps] [text-shadow:_1px_1px_black] min-[884px]:text-[15px]">
                  Mandataria Nacional{' '}
                  <span className="text-[11px]">
                    CUIT{' '}&#160;<span className="text-[12.5px]">27 30615135 0
                  </span></span><IconLink size="12px" color="#ffffff"/*#d400aa" */ color2="#ffffff" />
                </p>
              </Link>
              <div className="text-[12.5px] text-[#ffffff99] absolute -bottom-2.5">Mat: <span className="text-[12px] ">M202427306151350 DN</span></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>

      {/* Trámites */}
      <SwiperSlide id="ev" className="flex flex-col !justify-start">
        <Swiper
          className="swiper2 !pt-[88px] sm:!pt-32"
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
          spaceBetween={0}
          speed={600}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
              spaceBetween: 0,
              centeredSlides: true,
            },
            524: {
              slidesPerView: 1.5,
              spaceBetween: 0,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 0,
              centeredSlides: true,
            },
            880: {
              slidesPerView: 2.75,
              spaceBetween: 0,
              centeredSlides: true,
              keyboard: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
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
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <h2 className="text-lg absolute z-10 left-3 top-[25vh] text-[#ffffff96] [text-shadow:_1px_1px_0_#00000082] font-extrabold md:top-[26vh]">TRÁMITES</h2>
              <SwiperSlide>
                <Image
                  src='/tramite1.jpg'
                  alt="Baja de vehículo"
                  width={960}
                  height={720}
                  className="absolute object-cover h-[30vh] top-[0px] flex w-full items-center justify-center rounded-l-[10px]"
                >
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite2.jpg'
                  alt="Cambio de radicación y domicilio"
                  width={660}
                  height={490}
                  className="absolute object-cover h-[30vh] top-[0px] flex w-full items-center justify-center rounded-l-[10px]"
                ></Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite3.png'
                  alt="Denuncia de venta"
                  width={660}
                  height={490}
                  className="absolute object-fill h-[30vh] top-[0px] flex w-full items-center justify-center rounded-l-[10px]"
                ></Image>
              </SwiperSlide>  
            </Swiper>
            <div className="flex flex-col justify-start pt-[2vh] h-[36%] absolute z-10 bottom-[16%] items-center sm:pt-[4vh]">
              <div className="flex items-center w-full justify-center">
                <IconConocimiento size="33" className="h-9 sm:h-10" />
              </div>
              <div className="px-4">
                <h4 className="font-bold text-base m-0">Conocimiento Especializado</h4>
                <p className="mt-[1vh] mx-0 mb-0 font-normal text-sm text-center sm:text-[15px] sm:mt-[2vh]">
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
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <h2 className="text-lg absolute z-10 left-3 top-[25vh] text-[#ffffff96] [text-shadow:_1px_1px_0_#00000082] font-extrabold md:top-[26vh]">TRÁMITES</h2>
              <SwiperSlide>
                <Image
                  src='/tramite4.jpg'
                  alt="Duplicado de título o cédula"
                  width={960}
                  height={720}
                  className="absolute object-cover  h-[30vh] top-[0px] flex w-full items-center justify-center"
                >
                </Image>

              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite5.jpg'
                  alt="Informe de Estado de Dominio"
                  width={660}
                  height={490}
                  className="absolute object-cover  h-[30vh] top-[0px] flex w-full items-center justify-center"
                ></Image>
                  
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite6.png'
                  alt="Inscripción inicial"
                  width={660}
                  height={490}
                  className="absolute object-cover  h-[30vh] top-[0px] flex w-full items-center justify-center"
                ></Image>
                  
              </SwiperSlide>  

            </Swiper>
            <div className="flex flex-col justify-start pt-[2vh] h-[36%] absolute z-10 bottom-[16%] items-center sm:pt-[4vh]">
              <div className="flex items-center w-full justify-center">
                <IconTiempo  className="h-9 sm:h-10"/>
              </div>
              <div className="px-2">
                <h4 className="font-bold text-base m-0">Ahorra Tiempo y Esfuerzo</h4>
                <p className="mt-[1vh] mx-0 mb-0 font-normal text-sm text-center sm:text-[15px] sm:mt-[2vh]">
                Si no estás familiarizado con los procedimientos o si no tenés tiempo para gestionarlos tú mismo, 
                nos encargaremos de los detalles para cursar el trámite.{/* todos los detalles administrativos y legales */}
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
                  delay: 2500,
                  disableOnInteraction: false,
                }}
            >
              <h2 className="text-lg absolute z-10 left-3 top-[25vh] text-[#ffffff96] [text-shadow:_1px_1px_0_#00000082] font-extrabold md:top-[26vh]">TRÁMITES</h2>
              <SwiperSlide>
                <Image
                  src='/tramite7.jpg'
                  alt="Reempadronamiento"
                  width={960}
                  height={720}
                  className="absolute object-cover h-[30vh] top-[0px] flex w-full items-center justify-center rounded-r-[10px]"
                >
                </Image>

              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite8.jpg'
                  alt="Renovación de Cédula"
                  width={660}
                  height={490}
                  className="absolute object-cover h-[30vh] top-[0px] flex w-full items-center justify-center rounded-r-[10px]"
                ></Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src='/tramite9.jpg'
                  alt="Transferencia de dominio"
                  width={660}
                  height={490}
                  className="absolute object-cover h-[30vh] top-[0px] flex w-full items-center justify-center rounded-r-[10px]"
                ></Image>
              </SwiperSlide>      
            </Swiper>
            <div className="flex flex-col justify-start pt-[2vh] h-[36%] absolute z-10 bottom-[16%] items-center sm:pt-[4vh]">
              <div className="flex items-center w-full justify-center">
                <IconSeguridad size="33"  className="h-9 sm:h-10"/>
              </div>
              <div className="px-4">
                <h4 className="font-bold text-base m-0">Seguridad y Legalidad</h4>
                <p className="mt-[1vh] mx-0 mb-0 font-normal text-sm text-center sm:text-[15px] sm:mt-[2vh]">
                Debidamente habilitada y registrada, se garantiza que todos los trámites se realizán de manera legal y segura, evitando posibles problemas a futuro.
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          <div className={` absolute z-10 bottom-[2vh] text-sm flex flex-col justify-center gap-[1px] ${user?.role !== "admin" && user?.role !== "memberAccount"  ? "ml-[calc(100%_/_2_-_84px)] sm:ml-[calc(100%_/_2_-_180px)]" : "ml-[calc(100%_/_2_-_65px)] sm:ml-[calc(100%_/_2_-_130px)]"} sm:bottom-[4vh] sm:flex-row sm:text-[15px] `}>
            <Link href={session ? '/dashboard/tramites' : '/iniciar-tramite/baja-de-vehiculo'} >
              <ButtonA className="relative pl-9 h-6 w-full !rounded-none !rounded-t-[5px] !justify-start sm:h-[26px] sm:!rounded-none sm:!rounded-l-[5px]">
                <IconPresupuesto className="absolute w-[15px] h-[15px] left-[9px] bottom-[3px] sm:w-[16px] sm:h-[16px] sm:bottom-1"/>
                <p>{session ? "Trámites" : "Pedir presupuesto" }</p>
              </ButtonA>
            </Link>

            <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'} >
              <ButtonA className="relative !bg-[#b2439a] pl-9 h-6 w-full !rounded-none !rounded-b-[5px] !justify-start sm:h-[26px] sm:!rounded-none sm:!rounded-r-[5px]">
                <IconConsulta className="absolute w-[15px] h-[15px] left-[9px] bottom-[3px] sm:w-[16px] sm:h-[16px] sm:bottom-1"/>
                <p>{session ? "Consultas" : "Realizar consulta" }</p>
              </ButtonA>
            </Link>
          </div>
        </Swiper>
      </SwiperSlide>

      {/* Consultas */}
      <SwiperSlide id="cp">
        <div className="w-full absolute top-0 z-10 flex h-full flex-col items-center justify-start pt-24 px-2 [border-radius:_12px_12px_0_0] sm:px-4 md:px-9 sm:pt-[24vh] ">
          <Fondo className="p-2 sm:p-4">
            <div className="mb-1.5 w-full text-[17px] text-center font-medium sm:text-xl sm:mt-2.5 sm:mb-4">
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

          <div className="flex flex-col gap-[1px] absolute bottom-[11vh] text-sm sm:text-[15px] sm:flex-row">
            <Link href={session ? '/dashboard/tramites' : '/iniciar-tramite/baja-de-vehiculo'} >
              <ButtonA className="relative pl-9 h-6 w-full !rounded-none !rounded-t-[5px] !justify-start sm:h-[26px] sm:!rounded-none sm:!rounded-l-[5px]">
                <IconPresupuesto className="absolute w-[15px] h-[15px] left-[9px] bottom-[3px] sm:w-[16px] sm:h-[16px] sm:bottom-1"/>
                <p>{session ? "Trámites" : "Pedir presupuesto" }</p>
              </ButtonA>
            </Link>

            <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'} >
              <ButtonA className="relative !bg-[#b2439a] pl-9 h-6 w-full !rounded-none !rounded-b-[5px] !justify-start sm:h-[26px] sm:!rounded-none sm:!rounded-r-[5px]">
                <IconConsulta className="absolute w-[15px] h-[15px] left-[9px] bottom-[3px] sm:w-[16px] sm:h-[16px] sm:bottom-1"/>
                <p>{session ? "Consultas" : "Realizar consulta" }</p>
              </ButtonA>
            </Link>
          </div>
        </div>
        <FooterInicio />
      </SwiperSlide>
    </Swiper>
  );
}
