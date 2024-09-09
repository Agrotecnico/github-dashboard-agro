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
  ChevronRightIcon,
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
        className="swiper1 relative bg-cover bg-fixed bg-center bg-no-repeat "
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
          className="parallax-bg bg-[#1d021511]  "/* bg-[url('/ofi-c.jpg')] */
          data-swiper-parallax="-4%"
        ></div>

        {/* Inicio */}
        <SwiperSlide id="ini" className= "flex flex-col">
          <div className="mb-8 flex flex-col w-full ">
            <h2 className="font-bold  text-3xl mt-12 mx-auto mb-5 ">
              CNP mandataria
            </h2>
            <p className="text-sm px-4 leading-snug max-w-[700px] my-0 mx-auto text-center md:text-base">
            Un servicio con la facultad de representacion legal, asesoramiento y gestion en la compra y venta de vehículos. 
            Esto incluye la transferencia de dominio, el trámite de la cédula verde y azul, y otras diligencias importantes
              {/* Vission es el primer sistema de gestion empresarial diseñado
              especificamente para ópticas, nuestro objetivo es que puedas
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
                            bg-cover bg-fixed bg-center text-4xl backdrop-blur "
                  >
                    
                    <p className="mt-6 mb-4 mx-2 text-xl min-[376px]:text-3xl">Hola! Bienvenido</p>
                    <div className="flex flex-col items-start text-base min-[376px]:text-lg">
                      <p className="mb-1">
                        Realizar consulta
                        {/* Aquí harás consultas y obtendrás respuestas */}
                      </p>
                      <p className="">
                        Iniciar trámite
                      </p>
                    </div>
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
            className="swiper2 mb-1 mt-8 !h-[572px] !pb-8 !pl-2"
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



              524: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                centeredSlides: true,
              },
              /* 640: {
                slidesPerView: 2.25,
                spaceBetween: 10,
                centeredSlides: true,
              }, */


              /* 524: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
              }, */
              /* 768: {
                slidesPerView: 3, */
                /* slidesPerView: 2.5, */
               /*  spaceBetween: 10,
                centeredSlides: false,
              }, */
              880: {
                slidesPerView: 2.75,
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
                navigation={false}
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
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  }}
              >
                {/* <div className="absolute left-[0px] pl-6 -top-1 flex w-full text-lg items-center justify-start font-medium [font-variant-caps:_small-caps] ">
                  Gestiones en <span className="ml-1 text-[15px]"> DNRPA</span>{' '}
                </div> */}
                
                <SwiperSlide>
                  <Image
                    objectFit='cover'
                    src='/vehicular-4.jpg'
                    alt="Picture of the author"
                    width={960}
                    height={720}
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
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
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
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
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                </SwiperSlide>  
              </Swiper>
              <div className="flex flex-col justify-center absolute top-[316px] items-center">
                <div className="flex items-center w-full mb-2 justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_335_18)">
                      <path
                        d="M48.1184 6.71074C43.1043 2.99684 37.154 1.03453 30.9108 1.03453C25.2181 1.03453 19.5625 2.67316 15.3532 5.48484V1.03453C15.3532 0.463477 14.8898 0 14.3187 0C13.7477 0 13.2842 0.463477 13.2842 1.03453V7.54242C13.2842 7.94379 13.5159 8.30894 13.879 8.47863C14.2421 8.64937 14.6714 8.59453 14.9798 8.33789C18.9252 5.06063 24.8808 3.10336 30.9108 3.10336C36.707 3.10336 42.2311 4.92609 46.8873 8.3741C47.0725 8.51062 47.2877 8.57684 47.5019 8.57684C47.8184 8.57684 48.1308 8.43199 48.3336 8.15789C48.674 7.69863 48.5778 7.05105 48.1184 6.71074Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M59.836 12.4138H53.3281C52.9268 12.4138 52.5636 12.6465 52.393 13.0097C52.2222 13.3727 52.2771 13.8021 52.5337 14.1104C55.811 18.0549 57.7682 24.0104 57.7682 30.0415C57.7682 35.8377 55.9455 41.3618 52.4975 46.0169C52.1572 46.4762 52.2534 47.1238 52.7127 47.4642C52.8978 47.6007 53.113 47.6669 53.3272 47.6669C53.6437 47.6669 53.9561 47.5221 54.1599 47.248C57.8737 42.2339 59.8361 36.2834 59.8361 30.0404C59.8361 24.3477 58.1975 18.6911 55.3858 14.4828H59.8361C60.4072 14.4828 60.8707 14.0193 60.8707 13.4483C60.8705 12.8772 60.4071 12.4138 59.836 12.4138Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M47.8631 51.5224C47.5001 51.3527 47.0718 51.4055 46.7624 51.6632C42.8169 54.9404 36.8613 56.8977 30.8313 56.8977C25.0341 56.8977 19.51 55.075 14.8548 51.627C14.3955 51.2866 13.748 51.3829 13.4075 51.8421C13.0672 52.3014 13.1634 52.949 13.6227 53.2894C18.6368 57.0032 24.5872 58.9656 30.8303 58.9656C36.523 58.9656 42.1786 57.327 46.3879 54.5153V58.9656C46.3879 59.5366 46.8513 60.0001 47.4224 60.0001C47.9934 60.0001 48.4569 59.5366 48.4569 58.9656V52.4577C48.4569 52.0562 48.2252 51.6911 47.8631 51.5224Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M9.2085 45.8907C5.93123 41.9453 3.97396 35.9907 3.97396 29.9597C3.97396 24.1635 5.7967 18.6394 9.24365 13.9842C9.58396 13.5249 9.48775 12.8774 9.0285 12.5369C8.56924 12.1956 7.92166 12.2928 7.58123 12.7521C3.86744 17.7662 1.90514 23.7165 1.90514 29.9597C1.90514 35.6524 3.54377 41.308 6.35545 45.5172H1.90514C1.33408 45.5172 0.870605 45.9807 0.870605 46.5518C0.870605 47.1228 1.33408 47.5863 1.90514 47.5863H8.41303C8.81439 47.5863 9.1785 47.3546 9.34924 46.9915C9.51998 46.6283 9.46514 46.1989 9.2085 45.8907Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M31.9051 19.6531C31.9041 19.082 31.4406 18.6206 30.8706 18.6206C30.8706 18.6206 30.8695 18.6206 30.8685 18.6206C30.2964 18.6217 29.835 19.0861 29.8361 19.6572L29.8609 30.002C29.862 30.5731 30.3254 31.0344 30.8954 31.0344C30.8965 31.0344 30.8975 31.0344 30.8975 31.0344C31.4697 31.0334 31.931 30.569 31.93 29.9979L31.9051 19.6531Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8954 28.9655H24.6637C24.0926 28.9655 23.6292 29.4289 23.6292 30C23.6292 30.571 24.0926 31.0345 24.6637 31.0345H30.8954C31.4664 31.0345 31.9299 30.571 31.9299 30C31.9299 29.4289 31.4664 28.9655 30.8954 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 8.27594C18.8923 8.27594 9.14648 18.0208 9.14648 30C9.14648 41.9793 18.8923 51.7241 30.8706 51.7241C42.8498 51.7241 52.5947 41.9793 52.5947 30C52.5947 18.0208 42.8498 8.27594 30.8706 8.27594ZM30.8706 49.6552C20.0323 49.6552 11.2154 40.8384 11.2154 30C11.2154 19.1617 20.0323 10.3449 30.8706 10.3449C41.7089 10.3449 50.5257 19.1617 50.5257 30C50.5257 40.8384 41.7089 49.6552 30.8706 49.6552Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M16.3879 28.9655H14.319C13.7479 28.9655 13.2844 29.4289 13.2844 30C13.2844 30.571 13.7479 31.0345 14.319 31.0345H16.3879C16.959 31.0345 17.4224 30.571 17.4224 30C17.4224 29.4289 16.959 28.9655 16.3879 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M47.4222 28.9655H45.3533C44.7822 28.9655 44.3187 29.4289 44.3187 30C44.3187 30.571 44.7822 31.0345 45.3533 31.0345H47.4222C47.9933 31.0345 48.4567 30.571 48.4567 30C48.4567 29.4289 47.9933 28.9655 47.4222 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 43.4483C30.2995 43.4483 29.8361 43.9118 29.8361 44.4828V46.5518C29.8361 47.1228 30.2995 47.5863 30.8706 47.5863C31.4416 47.5863 31.9051 47.1228 31.9051 46.5518V44.4828C31.9051 43.9117 31.4416 43.4483 30.8706 43.4483Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 12.4138C30.2995 12.4138 29.8361 12.8772 29.8361 13.4483V15.5172C29.8361 16.0883 30.2995 16.5518 30.8706 16.5518C31.4416 16.5518 31.9051 16.0883 31.9051 15.5172V13.4483C31.9051 12.8772 31.4416 12.4138 30.8706 12.4138Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M21.2572 39.6135C20.8537 39.2089 20.1988 39.2089 19.7944 39.6135L18.4352 40.9718C18.0317 41.3753 18.0317 42.0301 18.4352 42.4345C18.6369 42.6362 18.9017 42.7376 19.1665 42.7376C19.4314 42.7376 19.6962 42.6373 19.8979 42.4345L21.2572 41.0762C21.6606 40.6727 21.6606 40.0179 21.2572 39.6135Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M43.3051 17.5655C42.9006 17.161 42.2468 17.161 41.8424 17.5655L40.4841 18.9238C40.0795 19.3283 40.0795 19.9821 40.4841 20.3865C40.6857 20.5882 40.9506 20.6896 41.2154 20.6896C41.4803 20.6896 41.7451 20.5882 41.9468 20.3865L43.3051 19.0282C43.7095 18.6238 43.7095 17.97 43.3051 17.5655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M43.3051 40.9717L41.9468 39.6134C41.5423 39.2088 40.8885 39.2088 40.4841 39.6134C40.0795 40.0179 40.0795 40.6717 40.4841 41.0761L41.8424 42.4344C42.0441 42.6361 42.3089 42.7375 42.5738 42.7375C42.8386 42.7375 43.1034 42.6372 43.3051 42.4344C43.7095 42.03 43.7095 41.3762 43.3051 40.9717Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M21.2571 18.9238L19.8978 17.5655C19.4944 17.161 18.8395 17.161 18.4351 17.5655C18.0306 17.97 18.0306 18.6247 18.4351 19.0282L19.7944 20.3865C19.9961 20.5882 20.2609 20.6896 20.5257 20.6896C20.7906 20.6896 21.0554 20.5882 21.2571 20.3865C21.6616 19.9821 21.6616 19.3273 21.2571 18.9238Z"
                        fill="#EF2A82"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_335_18">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0.870605)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="px-4">
                  <h4 className="font-bold text-base m-0">Conocimiento Especializado</h4>
                  <p className="mt-2 mx-0 mb-0 font-normal text-sm text-center">
                  Profesional matriculada por la Dirección Nacional Registros Propiedad del Automotor (DNRPA),
                   y capacitada para realizar los trámites de la manera más eficiente en los registros seccionales.
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
                      formularios[index] +
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
                {/* <div className="absolute left-[0px] pl-6 -top-1 flex w-full text-lg items-center justify-start text-[17px] font-medium [font-variant-caps:_small-caps] ">
                  Formularios
                </div> */}

                <SwiperSlide>
                  <Image
                    src='/usados.jpg'
                    alt="Picture of the author"
                    width={960}
                    height={720}
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
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
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
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
                    src='/e4.png'
                    alt="Picture of the author"
                    width={660}
                    height={490}
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
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
              <div className="flex flex-col justify-center absolute top-[316px] items-center">
                <div className="flex items-center w-full mb-2 justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_335_18)">
                      <path
                        d="M48.1184 6.71074C43.1043 2.99684 37.154 1.03453 30.9108 1.03453C25.2181 1.03453 19.5625 2.67316 15.3532 5.48484V1.03453C15.3532 0.463477 14.8898 0 14.3187 0C13.7477 0 13.2842 0.463477 13.2842 1.03453V7.54242C13.2842 7.94379 13.5159 8.30894 13.879 8.47863C14.2421 8.64937 14.6714 8.59453 14.9798 8.33789C18.9252 5.06063 24.8808 3.10336 30.9108 3.10336C36.707 3.10336 42.2311 4.92609 46.8873 8.3741C47.0725 8.51062 47.2877 8.57684 47.5019 8.57684C47.8184 8.57684 48.1308 8.43199 48.3336 8.15789C48.674 7.69863 48.5778 7.05105 48.1184 6.71074Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M59.836 12.4138H53.3281C52.9268 12.4138 52.5636 12.6465 52.393 13.0097C52.2222 13.3727 52.2771 13.8021 52.5337 14.1104C55.811 18.0549 57.7682 24.0104 57.7682 30.0415C57.7682 35.8377 55.9455 41.3618 52.4975 46.0169C52.1572 46.4762 52.2534 47.1238 52.7127 47.4642C52.8978 47.6007 53.113 47.6669 53.3272 47.6669C53.6437 47.6669 53.9561 47.5221 54.1599 47.248C57.8737 42.2339 59.8361 36.2834 59.8361 30.0404C59.8361 24.3477 58.1975 18.6911 55.3858 14.4828H59.8361C60.4072 14.4828 60.8707 14.0193 60.8707 13.4483C60.8705 12.8772 60.4071 12.4138 59.836 12.4138Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M47.8631 51.5224C47.5001 51.3527 47.0718 51.4055 46.7624 51.6632C42.8169 54.9404 36.8613 56.8977 30.8313 56.8977C25.0341 56.8977 19.51 55.075 14.8548 51.627C14.3955 51.2866 13.748 51.3829 13.4075 51.8421C13.0672 52.3014 13.1634 52.949 13.6227 53.2894C18.6368 57.0032 24.5872 58.9656 30.8303 58.9656C36.523 58.9656 42.1786 57.327 46.3879 54.5153V58.9656C46.3879 59.5366 46.8513 60.0001 47.4224 60.0001C47.9934 60.0001 48.4569 59.5366 48.4569 58.9656V52.4577C48.4569 52.0562 48.2252 51.6911 47.8631 51.5224Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M9.2085 45.8907C5.93123 41.9453 3.97396 35.9907 3.97396 29.9597C3.97396 24.1635 5.7967 18.6394 9.24365 13.9842C9.58396 13.5249 9.48775 12.8774 9.0285 12.5369C8.56924 12.1956 7.92166 12.2928 7.58123 12.7521C3.86744 17.7662 1.90514 23.7165 1.90514 29.9597C1.90514 35.6524 3.54377 41.308 6.35545 45.5172H1.90514C1.33408 45.5172 0.870605 45.9807 0.870605 46.5518C0.870605 47.1228 1.33408 47.5863 1.90514 47.5863H8.41303C8.81439 47.5863 9.1785 47.3546 9.34924 46.9915C9.51998 46.6283 9.46514 46.1989 9.2085 45.8907Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M31.9051 19.6531C31.9041 19.082 31.4406 18.6206 30.8706 18.6206C30.8706 18.6206 30.8695 18.6206 30.8685 18.6206C30.2964 18.6217 29.835 19.0861 29.8361 19.6572L29.8609 30.002C29.862 30.5731 30.3254 31.0344 30.8954 31.0344C30.8965 31.0344 30.8975 31.0344 30.8975 31.0344C31.4697 31.0334 31.931 30.569 31.93 29.9979L31.9051 19.6531Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8954 28.9655H24.6637C24.0926 28.9655 23.6292 29.4289 23.6292 30C23.6292 30.571 24.0926 31.0345 24.6637 31.0345H30.8954C31.4664 31.0345 31.9299 30.571 31.9299 30C31.9299 29.4289 31.4664 28.9655 30.8954 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 8.27594C18.8923 8.27594 9.14648 18.0208 9.14648 30C9.14648 41.9793 18.8923 51.7241 30.8706 51.7241C42.8498 51.7241 52.5947 41.9793 52.5947 30C52.5947 18.0208 42.8498 8.27594 30.8706 8.27594ZM30.8706 49.6552C20.0323 49.6552 11.2154 40.8384 11.2154 30C11.2154 19.1617 20.0323 10.3449 30.8706 10.3449C41.7089 10.3449 50.5257 19.1617 50.5257 30C50.5257 40.8384 41.7089 49.6552 30.8706 49.6552Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M16.3879 28.9655H14.319C13.7479 28.9655 13.2844 29.4289 13.2844 30C13.2844 30.571 13.7479 31.0345 14.319 31.0345H16.3879C16.959 31.0345 17.4224 30.571 17.4224 30C17.4224 29.4289 16.959 28.9655 16.3879 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M47.4222 28.9655H45.3533C44.7822 28.9655 44.3187 29.4289 44.3187 30C44.3187 30.571 44.7822 31.0345 45.3533 31.0345H47.4222C47.9933 31.0345 48.4567 30.571 48.4567 30C48.4567 29.4289 47.9933 28.9655 47.4222 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 43.4483C30.2995 43.4483 29.8361 43.9118 29.8361 44.4828V46.5518C29.8361 47.1228 30.2995 47.5863 30.8706 47.5863C31.4416 47.5863 31.9051 47.1228 31.9051 46.5518V44.4828C31.9051 43.9117 31.4416 43.4483 30.8706 43.4483Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 12.4138C30.2995 12.4138 29.8361 12.8772 29.8361 13.4483V15.5172C29.8361 16.0883 30.2995 16.5518 30.8706 16.5518C31.4416 16.5518 31.9051 16.0883 31.9051 15.5172V13.4483C31.9051 12.8772 31.4416 12.4138 30.8706 12.4138Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M21.2572 39.6135C20.8537 39.2089 20.1988 39.2089 19.7944 39.6135L18.4352 40.9718C18.0317 41.3753 18.0317 42.0301 18.4352 42.4345C18.6369 42.6362 18.9017 42.7376 19.1665 42.7376C19.4314 42.7376 19.6962 42.6373 19.8979 42.4345L21.2572 41.0762C21.6606 40.6727 21.6606 40.0179 21.2572 39.6135Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M43.3051 17.5655C42.9006 17.161 42.2468 17.161 41.8424 17.5655L40.4841 18.9238C40.0795 19.3283 40.0795 19.9821 40.4841 20.3865C40.6857 20.5882 40.9506 20.6896 41.2154 20.6896C41.4803 20.6896 41.7451 20.5882 41.9468 20.3865L43.3051 19.0282C43.7095 18.6238 43.7095 17.97 43.3051 17.5655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M43.3051 40.9717L41.9468 39.6134C41.5423 39.2088 40.8885 39.2088 40.4841 39.6134C40.0795 40.0179 40.0795 40.6717 40.4841 41.0761L41.8424 42.4344C42.0441 42.6361 42.3089 42.7375 42.5738 42.7375C42.8386 42.7375 43.1034 42.6372 43.3051 42.4344C43.7095 42.03 43.7095 41.3762 43.3051 40.9717Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M21.2571 18.9238L19.8978 17.5655C19.4944 17.161 18.8395 17.161 18.4351 17.5655C18.0306 17.97 18.0306 18.6247 18.4351 19.0282L19.7944 20.3865C19.9961 20.5882 20.2609 20.6896 20.5257 20.6896C20.7906 20.6896 21.0554 20.5882 21.2571 20.3865C21.6616 19.9821 21.6616 19.3273 21.2571 18.9238Z"
                        fill="#EF2A82"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_335_18">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0.870605)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="px-4">
                  <h4 className="font-bold text-base m-0">Ahorra Tiempo y Esfuerzo</h4>
                  <p className="mt-2 mx-0 mb-0 font-normal text-sm text-center">
                  Si no estás familiarizado con los procedimientos o si no tienes tiempo para gestionarlos tú mismo, 
                  nos encargaremos de todos los detalles administrativos y legales.
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
                      parqueAutomotor[index] +
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
                {/* <div className="absolute left-[0px] pl-6 -top-1 flex w-full text-lg items-center justify-start text-[17px] font-medium [font-variant-caps:_small-caps] ">
                  Automotores
                </div> */}

                <SwiperSlide>
                  <Image
                    src='/vehiculos-p.png'
                    alt="Picture of the author"
                    width={960}
                    height={720}
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
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
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
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
                    className="absolute top-[0px] mb-2 flex h-[262px] w-full items-center justify-center [border-radius:_12px_12px_0_0]
                                border
                                border-[#858585] bg-[#fff9]  text-4xl font-bold backdrop-blur "
                  ></Image>
                </SwiperSlide>      
              </Swiper>
              <div className="flex flex-col justify-center absolute top-[316px] items-center">
                <div className="flex items-center w-full mb-2 justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_335_18)">
                      <path
                        d="M48.1184 6.71074C43.1043 2.99684 37.154 1.03453 30.9108 1.03453C25.2181 1.03453 19.5625 2.67316 15.3532 5.48484V1.03453C15.3532 0.463477 14.8898 0 14.3187 0C13.7477 0 13.2842 0.463477 13.2842 1.03453V7.54242C13.2842 7.94379 13.5159 8.30894 13.879 8.47863C14.2421 8.64937 14.6714 8.59453 14.9798 8.33789C18.9252 5.06063 24.8808 3.10336 30.9108 3.10336C36.707 3.10336 42.2311 4.92609 46.8873 8.3741C47.0725 8.51062 47.2877 8.57684 47.5019 8.57684C47.8184 8.57684 48.1308 8.43199 48.3336 8.15789C48.674 7.69863 48.5778 7.05105 48.1184 6.71074Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M59.836 12.4138H53.3281C52.9268 12.4138 52.5636 12.6465 52.393 13.0097C52.2222 13.3727 52.2771 13.8021 52.5337 14.1104C55.811 18.0549 57.7682 24.0104 57.7682 30.0415C57.7682 35.8377 55.9455 41.3618 52.4975 46.0169C52.1572 46.4762 52.2534 47.1238 52.7127 47.4642C52.8978 47.6007 53.113 47.6669 53.3272 47.6669C53.6437 47.6669 53.9561 47.5221 54.1599 47.248C57.8737 42.2339 59.8361 36.2834 59.8361 30.0404C59.8361 24.3477 58.1975 18.6911 55.3858 14.4828H59.8361C60.4072 14.4828 60.8707 14.0193 60.8707 13.4483C60.8705 12.8772 60.4071 12.4138 59.836 12.4138Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M47.8631 51.5224C47.5001 51.3527 47.0718 51.4055 46.7624 51.6632C42.8169 54.9404 36.8613 56.8977 30.8313 56.8977C25.0341 56.8977 19.51 55.075 14.8548 51.627C14.3955 51.2866 13.748 51.3829 13.4075 51.8421C13.0672 52.3014 13.1634 52.949 13.6227 53.2894C18.6368 57.0032 24.5872 58.9656 30.8303 58.9656C36.523 58.9656 42.1786 57.327 46.3879 54.5153V58.9656C46.3879 59.5366 46.8513 60.0001 47.4224 60.0001C47.9934 60.0001 48.4569 59.5366 48.4569 58.9656V52.4577C48.4569 52.0562 48.2252 51.6911 47.8631 51.5224Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M9.2085 45.8907C5.93123 41.9453 3.97396 35.9907 3.97396 29.9597C3.97396 24.1635 5.7967 18.6394 9.24365 13.9842C9.58396 13.5249 9.48775 12.8774 9.0285 12.5369C8.56924 12.1956 7.92166 12.2928 7.58123 12.7521C3.86744 17.7662 1.90514 23.7165 1.90514 29.9597C1.90514 35.6524 3.54377 41.308 6.35545 45.5172H1.90514C1.33408 45.5172 0.870605 45.9807 0.870605 46.5518C0.870605 47.1228 1.33408 47.5863 1.90514 47.5863H8.41303C8.81439 47.5863 9.1785 47.3546 9.34924 46.9915C9.51998 46.6283 9.46514 46.1989 9.2085 45.8907Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M31.9051 19.6531C31.9041 19.082 31.4406 18.6206 30.8706 18.6206C30.8706 18.6206 30.8695 18.6206 30.8685 18.6206C30.2964 18.6217 29.835 19.0861 29.8361 19.6572L29.8609 30.002C29.862 30.5731 30.3254 31.0344 30.8954 31.0344C30.8965 31.0344 30.8975 31.0344 30.8975 31.0344C31.4697 31.0334 31.931 30.569 31.93 29.9979L31.9051 19.6531Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8954 28.9655H24.6637C24.0926 28.9655 23.6292 29.4289 23.6292 30C23.6292 30.571 24.0926 31.0345 24.6637 31.0345H30.8954C31.4664 31.0345 31.9299 30.571 31.9299 30C31.9299 29.4289 31.4664 28.9655 30.8954 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 8.27594C18.8923 8.27594 9.14648 18.0208 9.14648 30C9.14648 41.9793 18.8923 51.7241 30.8706 51.7241C42.8498 51.7241 52.5947 41.9793 52.5947 30C52.5947 18.0208 42.8498 8.27594 30.8706 8.27594ZM30.8706 49.6552C20.0323 49.6552 11.2154 40.8384 11.2154 30C11.2154 19.1617 20.0323 10.3449 30.8706 10.3449C41.7089 10.3449 50.5257 19.1617 50.5257 30C50.5257 40.8384 41.7089 49.6552 30.8706 49.6552Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M16.3879 28.9655H14.319C13.7479 28.9655 13.2844 29.4289 13.2844 30C13.2844 30.571 13.7479 31.0345 14.319 31.0345H16.3879C16.959 31.0345 17.4224 30.571 17.4224 30C17.4224 29.4289 16.959 28.9655 16.3879 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M47.4222 28.9655H45.3533C44.7822 28.9655 44.3187 29.4289 44.3187 30C44.3187 30.571 44.7822 31.0345 45.3533 31.0345H47.4222C47.9933 31.0345 48.4567 30.571 48.4567 30C48.4567 29.4289 47.9933 28.9655 47.4222 28.9655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 43.4483C30.2995 43.4483 29.8361 43.9118 29.8361 44.4828V46.5518C29.8361 47.1228 30.2995 47.5863 30.8706 47.5863C31.4416 47.5863 31.9051 47.1228 31.9051 46.5518V44.4828C31.9051 43.9117 31.4416 43.4483 30.8706 43.4483Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M30.8706 12.4138C30.2995 12.4138 29.8361 12.8772 29.8361 13.4483V15.5172C29.8361 16.0883 30.2995 16.5518 30.8706 16.5518C31.4416 16.5518 31.9051 16.0883 31.9051 15.5172V13.4483C31.9051 12.8772 31.4416 12.4138 30.8706 12.4138Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M21.2572 39.6135C20.8537 39.2089 20.1988 39.2089 19.7944 39.6135L18.4352 40.9718C18.0317 41.3753 18.0317 42.0301 18.4352 42.4345C18.6369 42.6362 18.9017 42.7376 19.1665 42.7376C19.4314 42.7376 19.6962 42.6373 19.8979 42.4345L21.2572 41.0762C21.6606 40.6727 21.6606 40.0179 21.2572 39.6135Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M43.3051 17.5655C42.9006 17.161 42.2468 17.161 41.8424 17.5655L40.4841 18.9238C40.0795 19.3283 40.0795 19.9821 40.4841 20.3865C40.6857 20.5882 40.9506 20.6896 41.2154 20.6896C41.4803 20.6896 41.7451 20.5882 41.9468 20.3865L43.3051 19.0282C43.7095 18.6238 43.7095 17.97 43.3051 17.5655Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M43.3051 40.9717L41.9468 39.6134C41.5423 39.2088 40.8885 39.2088 40.4841 39.6134C40.0795 40.0179 40.0795 40.6717 40.4841 41.0761L41.8424 42.4344C42.0441 42.6361 42.3089 42.7375 42.5738 42.7375C42.8386 42.7375 43.1034 42.6372 43.3051 42.4344C43.7095 42.03 43.7095 41.3762 43.3051 40.9717Z"
                        fill="#EF2A82"
                      />
                      <path
                        d="M21.2571 18.9238L19.8978 17.5655C19.4944 17.161 18.8395 17.161 18.4351 17.5655C18.0306 17.97 18.0306 18.6247 18.4351 19.0282L19.7944 20.3865C19.9961 20.5882 20.2609 20.6896 20.5257 20.6896C20.7906 20.6896 21.0554 20.5882 21.2571 20.3865C21.6616 19.9821 21.6616 19.3273 21.2571 18.9238Z"
                        fill="#EF2A82"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_335_18">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0.870605)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="px-4">
                  <h4 className="font-bold text-base m-0">Seguridad y Legalidad</h4>
                  <p className="mt-2 mx-0 mb-0 font-normal text-sm text-center">
                  Debidamente habilitada y registrada, garantizamos que todos los trámites se realicen de manera legal y segura,
                   evitando posibles problemas futuros.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col mt-10 md:flex-row">

            {/* <div className="flex flex-col justify-cente items-center mt-8">
              <div className="flex">
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_335_18)">
                    <path
                      d="M48.1184 6.71074C43.1043 2.99684 37.154 1.03453 30.9108 1.03453C25.2181 1.03453 19.5625 2.67316 15.3532 5.48484V1.03453C15.3532 0.463477 14.8898 0 14.3187 0C13.7477 0 13.2842 0.463477 13.2842 1.03453V7.54242C13.2842 7.94379 13.5159 8.30894 13.879 8.47863C14.2421 8.64937 14.6714 8.59453 14.9798 8.33789C18.9252 5.06063 24.8808 3.10336 30.9108 3.10336C36.707 3.10336 42.2311 4.92609 46.8873 8.3741C47.0725 8.51062 47.2877 8.57684 47.5019 8.57684C47.8184 8.57684 48.1308 8.43199 48.3336 8.15789C48.674 7.69863 48.5778 7.05105 48.1184 6.71074Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M59.836 12.4138H53.3281C52.9268 12.4138 52.5636 12.6465 52.393 13.0097C52.2222 13.3727 52.2771 13.8021 52.5337 14.1104C55.811 18.0549 57.7682 24.0104 57.7682 30.0415C57.7682 35.8377 55.9455 41.3618 52.4975 46.0169C52.1572 46.4762 52.2534 47.1238 52.7127 47.4642C52.8978 47.6007 53.113 47.6669 53.3272 47.6669C53.6437 47.6669 53.9561 47.5221 54.1599 47.248C57.8737 42.2339 59.8361 36.2834 59.8361 30.0404C59.8361 24.3477 58.1975 18.6911 55.3858 14.4828H59.8361C60.4072 14.4828 60.8707 14.0193 60.8707 13.4483C60.8705 12.8772 60.4071 12.4138 59.836 12.4138Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M47.8631 51.5224C47.5001 51.3527 47.0718 51.4055 46.7624 51.6632C42.8169 54.9404 36.8613 56.8977 30.8313 56.8977C25.0341 56.8977 19.51 55.075 14.8548 51.627C14.3955 51.2866 13.748 51.3829 13.4075 51.8421C13.0672 52.3014 13.1634 52.949 13.6227 53.2894C18.6368 57.0032 24.5872 58.9656 30.8303 58.9656C36.523 58.9656 42.1786 57.327 46.3879 54.5153V58.9656C46.3879 59.5366 46.8513 60.0001 47.4224 60.0001C47.9934 60.0001 48.4569 59.5366 48.4569 58.9656V52.4577C48.4569 52.0562 48.2252 51.6911 47.8631 51.5224Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M9.2085 45.8907C5.93123 41.9453 3.97396 35.9907 3.97396 29.9597C3.97396 24.1635 5.7967 18.6394 9.24365 13.9842C9.58396 13.5249 9.48775 12.8774 9.0285 12.5369C8.56924 12.1956 7.92166 12.2928 7.58123 12.7521C3.86744 17.7662 1.90514 23.7165 1.90514 29.9597C1.90514 35.6524 3.54377 41.308 6.35545 45.5172H1.90514C1.33408 45.5172 0.870605 45.9807 0.870605 46.5518C0.870605 47.1228 1.33408 47.5863 1.90514 47.5863H8.41303C8.81439 47.5863 9.1785 47.3546 9.34924 46.9915C9.51998 46.6283 9.46514 46.1989 9.2085 45.8907Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M31.9051 19.6531C31.9041 19.082 31.4406 18.6206 30.8706 18.6206C30.8706 18.6206 30.8695 18.6206 30.8685 18.6206C30.2964 18.6217 29.835 19.0861 29.8361 19.6572L29.8609 30.002C29.862 30.5731 30.3254 31.0344 30.8954 31.0344C30.8965 31.0344 30.8975 31.0344 30.8975 31.0344C31.4697 31.0334 31.931 30.569 31.93 29.9979L31.9051 19.6531Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8954 28.9655H24.6637C24.0926 28.9655 23.6292 29.4289 23.6292 30C23.6292 30.571 24.0926 31.0345 24.6637 31.0345H30.8954C31.4664 31.0345 31.9299 30.571 31.9299 30C31.9299 29.4289 31.4664 28.9655 30.8954 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 8.27594C18.8923 8.27594 9.14648 18.0208 9.14648 30C9.14648 41.9793 18.8923 51.7241 30.8706 51.7241C42.8498 51.7241 52.5947 41.9793 52.5947 30C52.5947 18.0208 42.8498 8.27594 30.8706 8.27594ZM30.8706 49.6552C20.0323 49.6552 11.2154 40.8384 11.2154 30C11.2154 19.1617 20.0323 10.3449 30.8706 10.3449C41.7089 10.3449 50.5257 19.1617 50.5257 30C50.5257 40.8384 41.7089 49.6552 30.8706 49.6552Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M16.3879 28.9655H14.319C13.7479 28.9655 13.2844 29.4289 13.2844 30C13.2844 30.571 13.7479 31.0345 14.319 31.0345H16.3879C16.959 31.0345 17.4224 30.571 17.4224 30C17.4224 29.4289 16.959 28.9655 16.3879 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M47.4222 28.9655H45.3533C44.7822 28.9655 44.3187 29.4289 44.3187 30C44.3187 30.571 44.7822 31.0345 45.3533 31.0345H47.4222C47.9933 31.0345 48.4567 30.571 48.4567 30C48.4567 29.4289 47.9933 28.9655 47.4222 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 43.4483C30.2995 43.4483 29.8361 43.9118 29.8361 44.4828V46.5518C29.8361 47.1228 30.2995 47.5863 30.8706 47.5863C31.4416 47.5863 31.9051 47.1228 31.9051 46.5518V44.4828C31.9051 43.9117 31.4416 43.4483 30.8706 43.4483Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 12.4138C30.2995 12.4138 29.8361 12.8772 29.8361 13.4483V15.5172C29.8361 16.0883 30.2995 16.5518 30.8706 16.5518C31.4416 16.5518 31.9051 16.0883 31.9051 15.5172V13.4483C31.9051 12.8772 31.4416 12.4138 30.8706 12.4138Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M21.2572 39.6135C20.8537 39.2089 20.1988 39.2089 19.7944 39.6135L18.4352 40.9718C18.0317 41.3753 18.0317 42.0301 18.4352 42.4345C18.6369 42.6362 18.9017 42.7376 19.1665 42.7376C19.4314 42.7376 19.6962 42.6373 19.8979 42.4345L21.2572 41.0762C21.6606 40.6727 21.6606 40.0179 21.2572 39.6135Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.3051 17.5655C42.9006 17.161 42.2468 17.161 41.8424 17.5655L40.4841 18.9238C40.0795 19.3283 40.0795 19.9821 40.4841 20.3865C40.6857 20.5882 40.9506 20.6896 41.2154 20.6896C41.4803 20.6896 41.7451 20.5882 41.9468 20.3865L43.3051 19.0282C43.7095 18.6238 43.7095 17.97 43.3051 17.5655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.3051 40.9717L41.9468 39.6134C41.5423 39.2088 40.8885 39.2088 40.4841 39.6134C40.0795 40.0179 40.0795 40.6717 40.4841 41.0761L41.8424 42.4344C42.0441 42.6361 42.3089 42.7375 42.5738 42.7375C42.8386 42.7375 43.1034 42.6372 43.3051 42.4344C43.7095 42.03 43.7095 41.3762 43.3051 40.9717Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M21.2571 18.9238L19.8978 17.5655C19.4944 17.161 18.8395 17.161 18.4351 17.5655C18.0306 17.97 18.0306 18.6247 18.4351 19.0282L19.7944 20.3865C19.9961 20.5882 20.2609 20.6896 20.5257 20.6896C20.7906 20.6896 21.0554 20.5882 21.2571 20.3865C21.6616 19.9821 21.6616 19.3273 21.2571 18.9238Z"
                      fill="#EF2A82"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_335_18">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0.870605)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="ml-6">
                <h4 className="font-bold text-base leading-5 m-0">Control absoluto</h4>
                <p className="mt-2 mx-0 mb-0 font-normal text-sm leading-5">
                  Gestiona tu stock, clientela, proveedores y mucho mas desde la
                  comodidad de tu dispositivo favorito.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-cente items-center mt-8">
              <div className="flex">
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_335_18)">
                    <path
                      d="M48.1184 6.71074C43.1043 2.99684 37.154 1.03453 30.9108 1.03453C25.2181 1.03453 19.5625 2.67316 15.3532 5.48484V1.03453C15.3532 0.463477 14.8898 0 14.3187 0C13.7477 0 13.2842 0.463477 13.2842 1.03453V7.54242C13.2842 7.94379 13.5159 8.30894 13.879 8.47863C14.2421 8.64937 14.6714 8.59453 14.9798 8.33789C18.9252 5.06063 24.8808 3.10336 30.9108 3.10336C36.707 3.10336 42.2311 4.92609 46.8873 8.3741C47.0725 8.51062 47.2877 8.57684 47.5019 8.57684C47.8184 8.57684 48.1308 8.43199 48.3336 8.15789C48.674 7.69863 48.5778 7.05105 48.1184 6.71074Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M59.836 12.4138H53.3281C52.9268 12.4138 52.5636 12.6465 52.393 13.0097C52.2222 13.3727 52.2771 13.8021 52.5337 14.1104C55.811 18.0549 57.7682 24.0104 57.7682 30.0415C57.7682 35.8377 55.9455 41.3618 52.4975 46.0169C52.1572 46.4762 52.2534 47.1238 52.7127 47.4642C52.8978 47.6007 53.113 47.6669 53.3272 47.6669C53.6437 47.6669 53.9561 47.5221 54.1599 47.248C57.8737 42.2339 59.8361 36.2834 59.8361 30.0404C59.8361 24.3477 58.1975 18.6911 55.3858 14.4828H59.8361C60.4072 14.4828 60.8707 14.0193 60.8707 13.4483C60.8705 12.8772 60.4071 12.4138 59.836 12.4138Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M47.8631 51.5224C47.5001 51.3527 47.0718 51.4055 46.7624 51.6632C42.8169 54.9404 36.8613 56.8977 30.8313 56.8977C25.0341 56.8977 19.51 55.075 14.8548 51.627C14.3955 51.2866 13.748 51.3829 13.4075 51.8421C13.0672 52.3014 13.1634 52.949 13.6227 53.2894C18.6368 57.0032 24.5872 58.9656 30.8303 58.9656C36.523 58.9656 42.1786 57.327 46.3879 54.5153V58.9656C46.3879 59.5366 46.8513 60.0001 47.4224 60.0001C47.9934 60.0001 48.4569 59.5366 48.4569 58.9656V52.4577C48.4569 52.0562 48.2252 51.6911 47.8631 51.5224Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M9.2085 45.8907C5.93123 41.9453 3.97396 35.9907 3.97396 29.9597C3.97396 24.1635 5.7967 18.6394 9.24365 13.9842C9.58396 13.5249 9.48775 12.8774 9.0285 12.5369C8.56924 12.1956 7.92166 12.2928 7.58123 12.7521C3.86744 17.7662 1.90514 23.7165 1.90514 29.9597C1.90514 35.6524 3.54377 41.308 6.35545 45.5172H1.90514C1.33408 45.5172 0.870605 45.9807 0.870605 46.5518C0.870605 47.1228 1.33408 47.5863 1.90514 47.5863H8.41303C8.81439 47.5863 9.1785 47.3546 9.34924 46.9915C9.51998 46.6283 9.46514 46.1989 9.2085 45.8907Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M31.9051 19.6531C31.9041 19.082 31.4406 18.6206 30.8706 18.6206C30.8706 18.6206 30.8695 18.6206 30.8685 18.6206C30.2964 18.6217 29.835 19.0861 29.8361 19.6572L29.8609 30.002C29.862 30.5731 30.3254 31.0344 30.8954 31.0344C30.8965 31.0344 30.8975 31.0344 30.8975 31.0344C31.4697 31.0334 31.931 30.569 31.93 29.9979L31.9051 19.6531Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8954 28.9655H24.6637C24.0926 28.9655 23.6292 29.4289 23.6292 30C23.6292 30.571 24.0926 31.0345 24.6637 31.0345H30.8954C31.4664 31.0345 31.9299 30.571 31.9299 30C31.9299 29.4289 31.4664 28.9655 30.8954 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 8.27594C18.8923 8.27594 9.14648 18.0208 9.14648 30C9.14648 41.9793 18.8923 51.7241 30.8706 51.7241C42.8498 51.7241 52.5947 41.9793 52.5947 30C52.5947 18.0208 42.8498 8.27594 30.8706 8.27594ZM30.8706 49.6552C20.0323 49.6552 11.2154 40.8384 11.2154 30C11.2154 19.1617 20.0323 10.3449 30.8706 10.3449C41.7089 10.3449 50.5257 19.1617 50.5257 30C50.5257 40.8384 41.7089 49.6552 30.8706 49.6552Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M16.3879 28.9655H14.319C13.7479 28.9655 13.2844 29.4289 13.2844 30C13.2844 30.571 13.7479 31.0345 14.319 31.0345H16.3879C16.959 31.0345 17.4224 30.571 17.4224 30C17.4224 29.4289 16.959 28.9655 16.3879 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M47.4222 28.9655H45.3533C44.7822 28.9655 44.3187 29.4289 44.3187 30C44.3187 30.571 44.7822 31.0345 45.3533 31.0345H47.4222C47.9933 31.0345 48.4567 30.571 48.4567 30C48.4567 29.4289 47.9933 28.9655 47.4222 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 43.4483C30.2995 43.4483 29.8361 43.9118 29.8361 44.4828V46.5518C29.8361 47.1228 30.2995 47.5863 30.8706 47.5863C31.4416 47.5863 31.9051 47.1228 31.9051 46.5518V44.4828C31.9051 43.9117 31.4416 43.4483 30.8706 43.4483Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 12.4138C30.2995 12.4138 29.8361 12.8772 29.8361 13.4483V15.5172C29.8361 16.0883 30.2995 16.5518 30.8706 16.5518C31.4416 16.5518 31.9051 16.0883 31.9051 15.5172V13.4483C31.9051 12.8772 31.4416 12.4138 30.8706 12.4138Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M21.2572 39.6135C20.8537 39.2089 20.1988 39.2089 19.7944 39.6135L18.4352 40.9718C18.0317 41.3753 18.0317 42.0301 18.4352 42.4345C18.6369 42.6362 18.9017 42.7376 19.1665 42.7376C19.4314 42.7376 19.6962 42.6373 19.8979 42.4345L21.2572 41.0762C21.6606 40.6727 21.6606 40.0179 21.2572 39.6135Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.3051 17.5655C42.9006 17.161 42.2468 17.161 41.8424 17.5655L40.4841 18.9238C40.0795 19.3283 40.0795 19.9821 40.4841 20.3865C40.6857 20.5882 40.9506 20.6896 41.2154 20.6896C41.4803 20.6896 41.7451 20.5882 41.9468 20.3865L43.3051 19.0282C43.7095 18.6238 43.7095 17.97 43.3051 17.5655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.3051 40.9717L41.9468 39.6134C41.5423 39.2088 40.8885 39.2088 40.4841 39.6134C40.0795 40.0179 40.0795 40.6717 40.4841 41.0761L41.8424 42.4344C42.0441 42.6361 42.3089 42.7375 42.5738 42.7375C42.8386 42.7375 43.1034 42.6372 43.3051 42.4344C43.7095 42.03 43.7095 41.3762 43.3051 40.9717Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M21.2571 18.9238L19.8978 17.5655C19.4944 17.161 18.8395 17.161 18.4351 17.5655C18.0306 17.97 18.0306 18.6247 18.4351 19.0282L19.7944 20.3865C19.9961 20.5882 20.2609 20.6896 20.5257 20.6896C20.7906 20.6896 21.0554 20.5882 21.2571 20.3865C21.6616 19.9821 21.6616 19.3273 21.2571 18.9238Z"
                      fill="#EF2A82"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_335_18">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0.870605)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="ml-6">
                <h4 className="font-bold text-base leading-5 text-gray-800 m-0">Control absoluto</h4>
                <p className="mt-2 mx-0 mb-0 font-normal text-sm leading-5 text-gray-500">
                  Gestiona tu stock, clientela, proveedores y mucho mas desde la
                  comodidad de tu dispositivo favorito.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-cente items-center mt-8">
              <div className="flex">
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_335_18)">
                    <path
                      d="M48.1184 6.71074C43.1043 2.99684 37.154 1.03453 30.9108 1.03453C25.2181 1.03453 19.5625 2.67316 15.3532 5.48484V1.03453C15.3532 0.463477 14.8898 0 14.3187 0C13.7477 0 13.2842 0.463477 13.2842 1.03453V7.54242C13.2842 7.94379 13.5159 8.30894 13.879 8.47863C14.2421 8.64937 14.6714 8.59453 14.9798 8.33789C18.9252 5.06063 24.8808 3.10336 30.9108 3.10336C36.707 3.10336 42.2311 4.92609 46.8873 8.3741C47.0725 8.51062 47.2877 8.57684 47.5019 8.57684C47.8184 8.57684 48.1308 8.43199 48.3336 8.15789C48.674 7.69863 48.5778 7.05105 48.1184 6.71074Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M59.836 12.4138H53.3281C52.9268 12.4138 52.5636 12.6465 52.393 13.0097C52.2222 13.3727 52.2771 13.8021 52.5337 14.1104C55.811 18.0549 57.7682 24.0104 57.7682 30.0415C57.7682 35.8377 55.9455 41.3618 52.4975 46.0169C52.1572 46.4762 52.2534 47.1238 52.7127 47.4642C52.8978 47.6007 53.113 47.6669 53.3272 47.6669C53.6437 47.6669 53.9561 47.5221 54.1599 47.248C57.8737 42.2339 59.8361 36.2834 59.8361 30.0404C59.8361 24.3477 58.1975 18.6911 55.3858 14.4828H59.8361C60.4072 14.4828 60.8707 14.0193 60.8707 13.4483C60.8705 12.8772 60.4071 12.4138 59.836 12.4138Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M47.8631 51.5224C47.5001 51.3527 47.0718 51.4055 46.7624 51.6632C42.8169 54.9404 36.8613 56.8977 30.8313 56.8977C25.0341 56.8977 19.51 55.075 14.8548 51.627C14.3955 51.2866 13.748 51.3829 13.4075 51.8421C13.0672 52.3014 13.1634 52.949 13.6227 53.2894C18.6368 57.0032 24.5872 58.9656 30.8303 58.9656C36.523 58.9656 42.1786 57.327 46.3879 54.5153V58.9656C46.3879 59.5366 46.8513 60.0001 47.4224 60.0001C47.9934 60.0001 48.4569 59.5366 48.4569 58.9656V52.4577C48.4569 52.0562 48.2252 51.6911 47.8631 51.5224Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M9.2085 45.8907C5.93123 41.9453 3.97396 35.9907 3.97396 29.9597C3.97396 24.1635 5.7967 18.6394 9.24365 13.9842C9.58396 13.5249 9.48775 12.8774 9.0285 12.5369C8.56924 12.1956 7.92166 12.2928 7.58123 12.7521C3.86744 17.7662 1.90514 23.7165 1.90514 29.9597C1.90514 35.6524 3.54377 41.308 6.35545 45.5172H1.90514C1.33408 45.5172 0.870605 45.9807 0.870605 46.5518C0.870605 47.1228 1.33408 47.5863 1.90514 47.5863H8.41303C8.81439 47.5863 9.1785 47.3546 9.34924 46.9915C9.51998 46.6283 9.46514 46.1989 9.2085 45.8907Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M31.9051 19.6531C31.9041 19.082 31.4406 18.6206 30.8706 18.6206C30.8706 18.6206 30.8695 18.6206 30.8685 18.6206C30.2964 18.6217 29.835 19.0861 29.8361 19.6572L29.8609 30.002C29.862 30.5731 30.3254 31.0344 30.8954 31.0344C30.8965 31.0344 30.8975 31.0344 30.8975 31.0344C31.4697 31.0334 31.931 30.569 31.93 29.9979L31.9051 19.6531Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8954 28.9655H24.6637C24.0926 28.9655 23.6292 29.4289 23.6292 30C23.6292 30.571 24.0926 31.0345 24.6637 31.0345H30.8954C31.4664 31.0345 31.9299 30.571 31.9299 30C31.9299 29.4289 31.4664 28.9655 30.8954 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 8.27594C18.8923 8.27594 9.14648 18.0208 9.14648 30C9.14648 41.9793 18.8923 51.7241 30.8706 51.7241C42.8498 51.7241 52.5947 41.9793 52.5947 30C52.5947 18.0208 42.8498 8.27594 30.8706 8.27594ZM30.8706 49.6552C20.0323 49.6552 11.2154 40.8384 11.2154 30C11.2154 19.1617 20.0323 10.3449 30.8706 10.3449C41.7089 10.3449 50.5257 19.1617 50.5257 30C50.5257 40.8384 41.7089 49.6552 30.8706 49.6552Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M16.3879 28.9655H14.319C13.7479 28.9655 13.2844 29.4289 13.2844 30C13.2844 30.571 13.7479 31.0345 14.319 31.0345H16.3879C16.959 31.0345 17.4224 30.571 17.4224 30C17.4224 29.4289 16.959 28.9655 16.3879 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M47.4222 28.9655H45.3533C44.7822 28.9655 44.3187 29.4289 44.3187 30C44.3187 30.571 44.7822 31.0345 45.3533 31.0345H47.4222C47.9933 31.0345 48.4567 30.571 48.4567 30C48.4567 29.4289 47.9933 28.9655 47.4222 28.9655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 43.4483C30.2995 43.4483 29.8361 43.9118 29.8361 44.4828V46.5518C29.8361 47.1228 30.2995 47.5863 30.8706 47.5863C31.4416 47.5863 31.9051 47.1228 31.9051 46.5518V44.4828C31.9051 43.9117 31.4416 43.4483 30.8706 43.4483Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M30.8706 12.4138C30.2995 12.4138 29.8361 12.8772 29.8361 13.4483V15.5172C29.8361 16.0883 30.2995 16.5518 30.8706 16.5518C31.4416 16.5518 31.9051 16.0883 31.9051 15.5172V13.4483C31.9051 12.8772 31.4416 12.4138 30.8706 12.4138Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M21.2572 39.6135C20.8537 39.2089 20.1988 39.2089 19.7944 39.6135L18.4352 40.9718C18.0317 41.3753 18.0317 42.0301 18.4352 42.4345C18.6369 42.6362 18.9017 42.7376 19.1665 42.7376C19.4314 42.7376 19.6962 42.6373 19.8979 42.4345L21.2572 41.0762C21.6606 40.6727 21.6606 40.0179 21.2572 39.6135Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.3051 17.5655C42.9006 17.161 42.2468 17.161 41.8424 17.5655L40.4841 18.9238C40.0795 19.3283 40.0795 19.9821 40.4841 20.3865C40.6857 20.5882 40.9506 20.6896 41.2154 20.6896C41.4803 20.6896 41.7451 20.5882 41.9468 20.3865L43.3051 19.0282C43.7095 18.6238 43.7095 17.97 43.3051 17.5655Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.3051 40.9717L41.9468 39.6134C41.5423 39.2088 40.8885 39.2088 40.4841 39.6134C40.0795 40.0179 40.0795 40.6717 40.4841 41.0761L41.8424 42.4344C42.0441 42.6361 42.3089 42.7375 42.5738 42.7375C42.8386 42.7375 43.1034 42.6372 43.3051 42.4344C43.7095 42.03 43.7095 41.3762 43.3051 40.9717Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M21.2571 18.9238L19.8978 17.5655C19.4944 17.161 18.8395 17.161 18.4351 17.5655C18.0306 17.97 18.0306 18.6247 18.4351 19.0282L19.7944 20.3865C19.9961 20.5882 20.2609 20.6896 20.5257 20.6896C20.7906 20.6896 21.0554 20.5882 21.2571 20.3865C21.6616 19.9821 21.6616 19.3273 21.2571 18.9238Z"
                      fill="#EF2A82"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_335_18">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0.870605)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="ml-6">
                <h4 className="font-bold text-base leading-5 text-gray-800 m-0">Control absoluto</h4>
                <p className="mt-2 mx-0 mb-0 font-normal text-sm leading-5 text-gray-500">
                  Gestiona tu stock, clientela, proveedores y mucho mas desde la
                  comodidad de tu dispositivo favorito.
                </p>
              </div>
            </div> */}

            {/* <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_335_11)">
                    <path
                      d="M33.8706 41H27.8706C27.3186 41 26.8706 41.448 26.8706 42C26.8706 42.5519 27.3186 43 27.8706 43H33.8706C34.4225 43 34.8705 42.5519 34.8705 42C34.8705 41.448 34.4225 41 33.8706 41Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M56.8696 1H4.87162C2.66557 1 0.870605 2.79508 0.870605 5.00102V38C0.870605 38.5519 1.31861 38.9999 1.87057 38.9999H59.8705C60.4225 38.9999 60.8705 38.5519 60.8705 38V5.00102C60.8706 2.79508 59.0756 1 56.8696 1ZM58.8706 37H2.87064V5.00102C2.87064 3.89699 3.76865 3.00004 4.87162 3.00004H56.8696C57.9726 3.00004 58.8706 3.89699 58.8706 5.00102V37Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M59.8706 36.9999H1.87057C1.31861 36.9999 0.870605 37.448 0.870605 38V42.9989C0.870605 45.2049 2.66557 46.9999 4.87162 46.9999H56.8696C59.0756 46.9999 60.8706 45.2049 60.8706 42.9989L60.8705 38C60.8705 37.448 60.4226 36.9999 59.8706 36.9999ZM58.8706 42.999C58.8706 44.103 57.9726 45 56.8696 45H4.87162C3.76865 45 2.87064 44.103 2.87064 42.999V39H58.8707L58.8706 42.999Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M55.8705 5.00005H5.87061C5.31866 5.00005 4.87065 5.44806 4.87065 6.00001V38C4.87065 38.552 5.31866 39 5.87061 39H55.8707C56.4226 39 56.8706 38.552 56.8706 38V6.00001C56.8706 5.44806 56.4226 5.00005 55.8705 5.00005ZM54.8706 37H6.87058V6.99997H54.8706V37Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M43.8705 53.0001H17.8706C16.2166 53.0001 14.8706 54.3461 14.8706 56.0001C14.8706 57.6541 16.2166 59.0001 17.8706 59.0001H43.8706C45.5246 59.0001 46.8706 57.6541 46.8706 56.0001C46.8706 54.3461 45.5245 53.0001 43.8705 53.0001ZM43.8705 57H17.8706C17.3187 57 16.8706 56.5511 16.8706 56.0001C16.8706 55.4491 17.3187 55.0001 17.8706 55.0001H43.8706C44.4226 55.0001 44.8706 55.4491 44.8706 56.0001C44.8706 56.5511 44.4226 57 43.8705 57Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M41.8706 53.0001C38.5525 53.0001 36.8705 50.6451 36.8705 46.0001C36.8705 45.4482 36.4225 45.0001 35.8706 45.0001H25.8706C25.3187 45.0001 24.8707 45.4482 24.8707 46.0001C24.8707 50.6451 23.1887 53.0001 19.8706 53.0001C19.3187 53.0001 18.8707 53.4481 18.8707 54C18.8707 54.552 19.3187 55 19.8706 55H41.8706C42.4225 55 42.8705 54.552 42.8705 54C42.8705 53.4481 42.4225 53.0001 41.8706 53.0001ZM24.7415 53.0001C25.9726 51.6361 26.6975 49.605 26.8435 47.0001H34.8985C35.0435 49.605 35.7685 51.6361 37.0005 53.0001H24.7415Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M48.6546 30.464L46.2406 28.05L47.5836 26.707C47.8326 26.458 47.9326 26.096 47.8466 25.755C47.7605 25.414 47.5016 25.144 47.1645 25.042L37.1646 22.042C36.8116 21.936 36.4306 22.033 36.1706 22.2931C35.9096 22.5531 35.8136 22.935 35.9196 23.287L38.9196 33.287C39.0206 33.625 39.2915 33.884 39.6325 33.97C39.9725 34.054 40.3355 33.9559 40.5846 33.707L41.9986 32.292L44.4125 34.707C44.5995 34.8949 44.8545 34.9999 45.1195 34.9999C45.3845 34.9999 45.6395 34.8949 45.8265 34.707L48.6544 31.8779C49.0455 31.487 49.0455 30.855 48.6546 30.464ZM45.1195 32.586L42.9215 30.387C42.6665 30.132 42.3325 30.0049 41.9986 30.0049C41.6635 30.0049 41.3295 30.1329 41.0756 30.3859L40.3536 31.1079L38.3686 24.4909L44.9855 26.4759L44.2115 27.25C43.9985 27.464 43.8815 27.748 43.8815 28.05C43.8815 28.3531 43.9995 28.639 44.2135 28.851L46.5335 31.1709L45.1195 32.586Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M42.8705 8.99997H14.8706C14.3186 8.99997 13.8706 9.44798 13.8706 9.99993V15C13.8706 15.5519 14.3186 15.9999 14.8706 15.9999H42.8705C43.4225 15.9999 43.8705 15.5519 43.8705 15V9.99993C43.8705 9.44798 43.4225 8.99997 42.8705 8.99997ZM41.8706 14H15.8705V11H41.8706V14Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M26.8707 20.0001H18.8707C18.3187 20.0001 17.8707 20.4481 17.8707 21V25C17.8707 25.5519 18.3187 25.9999 18.8707 25.9999H26.8707C27.4227 25.9999 27.8707 25.5519 27.8707 25V21C27.8707 20.4481 27.4227 20.0001 26.8707 20.0001ZM25.8707 24H19.8707V22H25.8707V24Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M42.8705 8.99997H14.8706C14.3186 8.99997 13.8706 9.44798 13.8706 9.99993V28.9999C13.8706 29.5518 14.3186 29.9999 14.8706 29.9999H38.6766C38.9936 29.9999 39.2906 29.8509 39.4787 29.5968C39.6677 29.3429 39.7257 29.0149 39.6346 28.7118L38.3687 24.4909L42.5837 25.7559C42.8867 25.847 43.2147 25.789 43.4676 25.5999C43.7215 25.412 43.8706 25.114 43.8706 24.7979L43.8705 9.99993C43.8705 9.44798 43.4225 8.99997 42.8705 8.99997ZM41.8706 23.454L37.1635 22.042C36.8105 21.9359 36.4296 22.033 36.1695 22.293C35.9085 22.554 35.8126 22.935 35.9185 23.2881L37.3325 28H15.8705V11H41.8706V23.454Z"
                      fill="#EF2A82"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_335_11">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0.870605)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4 className={styles.featureH4}>Tecnologia en tu negocio</h4>
                <p className={styles.featureP}>
                  Olvidate del lapiz y el papel, la era digital está aquí y ser
                  parte hace la diferencia.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_335_64)">
                    <path
                      d="M19.9341 23.3911C19.7741 23.0771 19.4611 22.8711 19.1101 22.8481L10.6978 22.2872C10.2619 22.2442 9.85887 22.5142 9.69985 22.9201L3.63534 38.4189C3.47233 38.8349 3.60534 39.3079 3.96135 39.5788C4.13935 39.7148 4.35334 39.7829 4.56626 39.7829C4.7772 39.7829 4.98825 39.7169 5.16626 39.5829L10.1999 35.8083L13.1307 36.3942C13.6087 36.4892 14.0866 36.2272 14.2606 35.7703C15.8346 31.6476 17.7293 27.8139 19.8901 24.3772C20.0772 24.079 20.0942 23.704 19.9341 23.3911ZM12.6986 34.2682L10.1529 33.7593C9.87492 33.7043 9.58489 33.7703 9.35696 33.9402L6.77816 35.874L11.2948 24.3309L17.3323 24.7329C15.5924 27.6777 14.0386 30.8754 12.6986 34.2682Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M38.5836 50.1741L38.0226 41.7607C37.9986 41.4086 37.7926 41.0957 37.4787 40.9357C37.1657 40.7757 36.7907 40.7916 36.4928 40.9796C33.055 43.1404 29.2223 45.0353 25.0997 46.6091C24.6437 46.7821 24.3797 47.2601 24.4758 47.739L25.0617 50.6699L21.287 55.7024C21.019 56.0604 21.0201 56.5524 21.291 56.9084C21.484 57.1623 21.781 57.3033 22.0869 57.3033C22.2089 57.3033 22.332 57.2803 22.4519 57.2363L37.9507 51.1718C38.3566 51.013 38.6126 50.6089 38.5836 50.1741ZM24.9956 54.0908L26.9294 51.512C27.0995 51.285 27.1654 50.9951 27.1094 50.716L26.6005 48.1712C29.9942 46.8313 33.1909 45.2774 36.1357 43.5376L36.5387 49.5741L24.9956 54.0908Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M29.8684 30.0005H23.1309C22.768 30.0005 22.434 30.1975 22.257 30.5145L13.8006 45.7094C13.5806 46.1054 13.6545 46.6013 13.9806 46.9153C14.1716 47.0993 14.4225 47.1953 14.6745 47.1953C14.8525 47.1953 15.0315 47.1483 15.1914 47.0503L30.3863 37.8551C30.6852 37.6741 30.8683 37.3501 30.8683 37.0002V31.0005C30.8684 30.4486 30.4204 30.0005 29.8684 30.0005ZM28.8686 36.4371L17.3805 43.3896L23.718 32.0014V32.0003H28.8686V36.4371Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M60.8202 0.96374C60.7792 0.47683 60.3933 0.0908184 59.9063 0.0498031C59.5743 0.0237878 26.6458 -2.27506 12.3929 35.0562C12.252 35.4252 12.3409 35.8411 12.6199 36.1201L17.3745 40.8747C17.5975 41.0977 17.9095 41.1997 18.2225 41.1577C18.5335 41.1127 18.8055 40.9248 18.9575 40.6497L23.7211 32.0004H28.8687V36.4491L20.1674 41.9426C19.9104 42.1056 19.7415 42.3756 19.7075 42.6776C19.6735 42.9796 19.7794 43.2805 19.9945 43.4956L24.7491 48.2502C24.9401 48.4412 25.1951 48.5432 25.456 48.5432C25.576 48.5432 25.697 48.5222 25.813 48.4772C63.146 34.2232 60.8482 1.29479 60.8202 0.96374ZM55.5746 18.7045C52.0658 27.3857 44.0364 39.1879 25.7028 46.3764L22.2931 42.9666L30.4025 37.847C30.6924 37.663 30.8684 37.344 30.8684 37.001V31.0014C30.8684 30.4495 30.4204 30.0015 29.8685 30.0015H23.129C22.764 30.0015 22.429 30.2004 22.253 30.5194L17.8463 38.5208L14.4936 35.167C27.0057 3.24758 53.6757 1.94166 58.8602 2.01467C58.8973 4.34656 58.6833 11.012 55.5746 18.7045Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M17.9993 44.1645C17.7822 43.8766 17.4363 43.7365 17.0973 43.7725C17.1323 43.4325 16.9923 43.0876 16.7053 42.8705C15.1975 41.7307 13.2516 41.3517 11.3648 41.8296C9.36194 42.3385 7.72402 43.7044 6.87208 45.5793L0.96061 58.5853C0.787643 58.9652 0.868619 59.4123 1.16358 59.7062C1.35459 59.8982 1.61053 59.9992 1.87056 59.9992C2.0106 59.9992 2.15158 59.9692 2.28458 59.9092L15.2906 53.9967C17.1644 53.1458 18.5304 51.5079 19.0393 49.505C19.5182 47.6202 19.1393 45.6734 17.9993 44.1645ZM17.1014 49.0131C16.7434 50.424 15.7815 51.5769 14.4636 52.1769L3.88441 56.9855L8.69304 46.4053C9.29198 45.0875 10.4459 44.1255 11.8568 43.7676C12.2278 43.6736 12.6007 43.6275 12.9687 43.6275C13.5917 43.6275 14.2006 43.7606 14.7556 44.0195L13.8036 45.7044C13.5826 46.0954 13.6497 46.5864 13.9676 46.9034C14.2855 47.2224 14.7765 47.2883 15.1665 47.0673L16.8514 46.1144C17.2614 46.9963 17.3544 48.0151 17.1014 49.0131Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M60.8201 0.964828C60.7791 0.477918 60.3931 0.0919066 59.9062 0.0508914C59.5162 0.019837 50.2469 -0.682109 39.3457 4.33956C39.0488 4.4755 38.8377 4.74948 38.7797 5.07151C38.7217 5.39353 38.8258 5.72341 39.0567 5.95439L54.9156 21.8132C55.1046 22.0022 55.3596 22.1062 55.6226 22.1062C55.6815 22.1062 55.7406 22.1011 55.7995 22.0912C56.1215 22.0332 56.3945 21.8222 56.5314 21.5252C61.5541 10.624 60.8521 1.35377 60.8201 0.964828ZM55.2985 19.3664L41.5036 5.57142C49.484 2.20267 56.4724 1.97064 58.8612 2.01072C58.9012 4.40155 58.6762 11.368 55.2985 19.3664Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M45.0311 15.8387C41.6683 12.4759 36.1979 12.4759 32.8351 15.8387C29.4723 19.2014 29.4723 24.6719 32.8351 28.0347C34.516 29.7166 36.7248 30.5566 38.9326 30.5566C41.1415 30.5566 43.3493 29.7156 45.0311 28.0347C48.3939 24.6719 48.3939 19.2013 45.0311 15.8387ZM43.6173 26.6207C41.0345 29.2035 36.8318 29.2035 34.249 26.6207C31.6663 24.038 31.6663 19.8353 34.249 17.2525C35.54 15.9616 37.2368 15.3157 38.9327 15.3157C40.6287 15.3157 42.3255 15.9616 43.6174 17.2525C46.2001 19.8353 46.2001 24.038 43.6173 26.6207Z"
                      fill="#EF2A82"
                    />
                    <path
                      d="M40.9206 23.925C39.8246 25.0229 38.0408 25.0219 36.9438 23.925C35.8479 22.8282 35.8479 21.0453 36.9438 19.9483C38.0398 18.8524 39.8236 18.8514 40.9206 19.9483C41.3106 20.3392 41.9445 20.3392 42.3344 19.9483C42.7254 19.5574 42.7254 18.9254 42.3344 18.5344C40.4596 16.6586 37.4058 16.6586 35.53 18.5344C33.6541 20.4102 33.6541 23.4631 35.53 25.3389C36.4679 26.2768 37.7009 26.7458 38.9327 26.7458C40.1656 26.7458 41.3975 26.2768 42.3344 25.3389C42.7254 24.9479 42.7254 24.316 42.3344 23.925C41.9444 23.5341 41.3106 23.5341 40.9206 23.925Z"
                      fill="#EF2A82"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_335_64">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0.870605)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4 className={styles.featureH4}>Innovacion constante</h4>
                <p className={styles.featureP}>
                  Sé parte del desarrollo proponiendo funcionalidades que
                  resuelvan tus necesidades mas especificas.
                </p>
              </div>
            </div> */}

          </div>
        </SwiperSlide>

        {/* Consultas */}
        <SwiperSlide id="cp">
          <div className="w-full] absolute top-0 z-10 flex h-full flex-col items-start justify-center bg-cover bg-fixed bg-center px-4 [border-radius:_12px_12px_0_0] min-[500px]:px-6 md:px-9 ">
            <div className=" bg-[#1d021519] p-4 rounded-xl [box-shadow:inset_0_1px_#0000002e,inset_0_-1px_#ffffff]">
              <div className="my-4 w-full text-xl text-center font-medium ">
                CONSULTAS FRECUENTES
              </div>
              
              <div className=" flex flex-col  gap-2 rounded-xl ">
                {linkDatos.length ? (
                  linkDatos.map((linkDato) => (
                    <article key={linkDato.slug} className="w-full">
                      <Link
                        as={`/consultas/${linkDato.slug}`}
                        href="/consultas/[slug]"
                        className="!ml-0 flex text-base grow flex-col justify-start text-start leading-[18px] duration-200 opacity-80  hover:opacity-100 md:flex-none "
                      >
                        <div className="py-2 px-4 rounded-md flex bg-[#ffffff94] justify-between border-b border-[#1d021522] [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e] ">
                          <div className="pb-1 border-b border-b-[#fff2] [letter-spacing:_0.5px] items-center ">
                            {linkDato.excerpt}
                          </div>
                          {/* <div className="pl-4">o</div> */}
                          <ChevronRightIcon   className="w-8 pl-4"/>
                        </div>
                      </Link>
                    </article>
                  ))
                ) : (
                  <p>Ninguna consulta publicado todavía</p>
                )}
              </div>
              
              <div className="mt-8 mb-4 flex w-full flex-col place-items-center pl-4 gap-3 text-left font-medium min-[500px]:flex-row min-[500px]:items-end min-[500px]:gap-6 ">
                <div className=" text-[16px] [font-variant-caps:_small-caps] ">
                  Realizá Tu Consulta Por:
                </div>
                <div className="flex items-end gap-6">
                  <Link
                    href="https://api.whatsapp.com/send?phone=543476606595"
                    target="_blank"
                    data-title="whatsapp"
                  >
                    <IconWhatsApp
                      filter="filterWhatsApp2"
                      sombraX="0"
                      sombraY="1.2"
                      size="32"
                      className="opacity-70 duration-200 hover:opacity-95 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
                    />
                  </Link>
                  {/* <Link
                    href="mailto:cnp.mandataria@gmail.com?subject=Consulta&body=Cuerpo del mensaje"
                    data-title="e-mail"
                  >
                    <IconEmail
                      filter="filterEmail2"
                      sombraX="0"
                      sombraY="1.2"
                      size="43"
                      className="bottom-[72px] right-4 opacity-70 duration-200 hover:opacity-95 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
                    />
                  </Link> */}
                  <Link
                    href={session ? '/dashboard' : '/login'}
                    data-title="cnp mandataria"
                  >
                    <LogoCnp
                      filter="filterCnp2"
                      sombraX="0"
                      sombraY="1.2"
                      size="64"
                      className="bottom-[72px] right-4 opacity-70 duration-200 hover:opacity-95 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <Faq /> */}
          <FooterInicio />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
