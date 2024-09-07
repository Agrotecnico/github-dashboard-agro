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
import IconWhatsApp from '@/app/ui/logosIconos/icon-whatsApp';
import IconEmail from '@/app/ui/logosIconos/icon-Email';
import LogoCnp from '@/app/ui/logosIconos/logo-cnp';
import type { Session } from 'next-auth';
import { agrotecnico, agrotecnico2, tramites, formularios, parqueAutomotor, } from '@/app/constant';
import { User } from '@/app/lib/definitions';
import Image from 'next/image'
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

import Faq from "@/app/ui/uiRadix/FAQ";

// import required modules
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  A11y,
  Mousewheel,
  Autoplay,
  EffectFade,
  EffectCube,
  Parallax,
} from 'swiper/modules';

export default function GaleriaFotosCnp({
  session,
  linkDatos,
  user,
}: {
  session: Session | null;
  linkDatos: {
    slug: string;
    excerpt: string;
  }[];
  user: User | undefined;
}) {
  return (
    <>
      <Swiper
        className="swiper1 relative bg-cover bg-fixed bg-center bg-no-repeat text-[#fffc] "
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
        <NavInicio session={session} user={user} />

        <div
          slot="container-start"
          className="parallax-bg bg-[url('/ofi-c.jpg')] "
          data-swiper-parallax="-4%"
        ></div>

        {/* Inicio */}
        <SwiperSlide id="ini" className= " text-[#1d0215] flex flex-col">
          <div className="mb-8 flex flex-col w-full ">
            <h2 className="font-bold  text-3xl mt-12 mx-auto mb-5 ">
              CNP mandataria
            </h2>
            <p className="text-sm px-4 leading-snug max-w-[700px] my-0 mx-auto text-center ">
              Vission es el primer sistema de gestion empresarial diseñado
              especificamente para ópticas, nuestro objetivo es que puedas
              administrar tu negocio desde la comodidad de tu computadora o
              dispositivo movil, desde cualquier parte del mundo.
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
            <SwiperSlide className="">
              {/* <Swiper
                className="swiper3 relative"
                loop={true}
                modules={[
                  Pagination,
                  Autoplay,
                  EffectFade,
                  Keyboard,
                  Mousewheel,
                  EffectCube,
                ]}
                pagination={{
                  clickable: false,
                }}
                spaceBetween={0}
                speed={1}
              >
                <SwiperSlide> */}
                  <div
                    className="absolute top-0 flex h-[300px] w-full flex-col items-center justify-start rounded-xl 
                            bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('https://lh3.googleusercontent.com/pw/AP1GczNB_LOmDwneOypSdbXJYhH1BPPrHIOOo_VXGnGfQKpcPqU0qO9HHps0NgJyfMxdako6Tybj61v7ywgT-mNiom_VQWx_3kDB9WLjqc2SjD03oV3axhbT=w1920-h1080')]
                            bg-cover bg-fixed bg-center text-4xl text-[#333] backdrop-blur "
                  >
                    <p className="mt-8 text-[34px]">Hola!</p>
                    <p className="px-9 py-2 text-[18px] leading-7">
                      Aquí harás consultas y obtendrás respuestas
                    </p>
                  </div>
                {/* </SwiperSlide>
              </Swiper> */}
            </SwiperSlide>

            {/* Oficina */}
            <SwiperSlide className="">
              {/* <Swiper
                className="swiper3 relative"
                loop={true}
                modules={[
                  Pagination,
                  Autoplay,
                  EffectFade,
                  Keyboard,
                  Mousewheel,
                ]}
                pagination={{
                  clickable: false,
                }}
                spaceBetween={0}
                speed={1}
              >
                <SwiperSlide> */}
                  <div
                    className="absolute top-0 flex h-[300px] w-full items-end justify-center
                            rounded-xl bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('https://lh3.googleusercontent.com/pw/AP1GczPpnEMmNa_UiSaqjOnb20pW4mEaVtPjGlIAa5K7tiHyeAizSCi6Sem_snmJyaNqaapQ_lOXnrJuongSiXqx_Y2fm8eNgdPxBm-RgKMp-vqeUx6zRT0b=w1920-h1080')] 
                            bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  >
                    <p className="w-full rounded-[0_0_12px_12px] border border-[#444] bg-[#00000085] text-[13.5px] font-extralight leading-5 text-[#fffb] backdrop-blur-[1px] [font-variant-caps:_small-caps] [text-shadow:_1px_1px_black] min-[884px]:text-[15px]">
                      Mandataria Nacional{' '}
                      <span className="ml-2 text-[12px]">
                        Mat:{' '}
                        <span className="text-[11px]">M202427306151350 DN</span>
                      </span>
                    </p>
                  </div>
                {/* </SwiperSlide>
              </Swiper> */}
            </SwiperSlide>
          </Swiper>
          
        </SwiperSlide>

        {/* Trámites */}
        <SwiperSlide id="ev" className="flex flex-col">
          <Swiper
            className="swiper2 mb-1 mt-8 !h-[374px] !pb-8 !pl-2"
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
            spaceBetween={10}
            speed={600}
            breakpoints={{
              320: {
                slidesPerView: 1.25,
                spaceBetween: 10,
                centeredSlides: true,
              },



              376: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
              },
              512: {
                slidesPerView: 1.75,
                spaceBetween: 10,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2.25,
                spaceBetween: 10,
                centeredSlides: true,
              },


              /* 524: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
              }, */
              768: {
                slidesPerView: 3,
                /* slidesPerView: 2.5, */
                spaceBetween: 10,
                centeredSlides: false,
              },
              880: {
                slidesPerView: 3/* 2.75 */,
                spaceBetween: 10,
                centeredSlides: true,
                keyboard: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
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
                navigation={true}
                pagination={{
                  clickable: false,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      tramites[index] +
                      '</span>'
                    );
                  },
                }}
                 modules={[EffectFade, Navigation, Pagination, Autoplay]}
                /*autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  }} */
              >
                <div className="absolute left-[0px] pl-6 -top-1 flex w-full text-lg items-center justify-start font-medium [font-variant-caps:_small-caps] ">
                  Gestiones en <span className="ml-1 text-[15px]"> DNRPA</span>{' '}
                </div>
                
                <SwiperSlide>
                  <Image
                    objectFit='cover'
                    src='/vehicular-4.jpg'
                    alt="Picture of the author"
                    width={960}
                    height={720}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border border-[#8a848b] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  >
                  </Image>

                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src='/vehicular-3.jpg'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src='/verificacion.jpg'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                </SwiperSlide>  
              </Swiper>
            </SwiperSlide>

            {/* Trámite 2 */}
            <SwiperSlide className="">
              <Swiper
                speed={600}
                loop={true}
                className="text-[#1d0215] swiper3"
                spaceBetween={30}
                /* effect={'fade'} */
                navigation={true}
                pagination={{
                  clickable: false,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      formularios[index] +
                      '</span>'
                    );
                  },
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                /* autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                  }} */
              >
                <div className="absolute left-[0px] pl-6 -top-1 flex w-full text-lg items-center justify-start text-[17px] font-medium [font-variant-caps:_small-caps] ">
                  Formularios
                </div>

                <SwiperSlide>
                  <Image
                    src='/usados.jpg'
                    alt="Picture of the author"
                    width={960}
                    height={720}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border border-[#8a848b] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  >
                  </Image>

                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src='/hero.png'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                    <div className="absolute flex h-full w-full flex-col justify-center px-10 text-[11px] font-medium uppercase leading-none ">
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
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src='/e4.png'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                    <div className=" z-10 w-full px-10 text-[14px] font-medium [line-height:_1] ">
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
                    </div>
                </SwiperSlide>  

              </Swiper>
            </SwiperSlide>

            {/* Trámites 3 */}
            <SwiperSlide className="">
              <Swiper
                speed={600}
                loop={true}
                className="text-[#1d0215] swiper3"
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                  clickable: false,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      parqueAutomotor[index] +
                      '</span>'
                    );
                  },
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                /* autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }} */
              >
                <div className="absolute left-[0px] pl-6 -top-1 flex w-full text-lg items-center justify-start text-[17px] font-medium [font-variant-caps:_small-caps] ">
                  Automotores
                </div>

                <SwiperSlide>
                  <Image
                    src='/vehiculos-p.png'
                    alt="Picture of the author"
                    width={960}
                    height={720}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border border-[#8a848b] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  >
                  </Image>

                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src='/infracciones.jpg'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src='/patentamiento1.jpg'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="rounded-lg absolute top-[24px] mb-2 flex h-[172px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                </SwiperSlide>      
              </Swiper>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        {/* Consultas */}
        <SwiperSlide id="cp">
          <Faq />
          <FooterInicio />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
