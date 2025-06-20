'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import NavInicio from '@/app/ui/navInicio';
import FooterInicio from '@/app/ui/footerInicio';
import IconWhatsApp from '@/app/ui/logosIconos/icon-whatsApp';
import IconEmail from '@/app/ui/logosIconos/icon-Email';
import LogoCnp from '@/app/ui/logosIconos/logo-cnp';
import type { Session } from 'next-auth';
import { agrotecnico, agrotecnico2 } from '@/app/constant';
import { User } from '@/app/lib/definitions';

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
          500: {
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
        <SwiperSlide id="ini">
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
              <Swiper
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
                <SwiperSlide>
                  <div
                    className="absolute top-0 flex h-[300px] w-full flex-col items-center justify-start rounded-xl 
                            bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('https://lh3.googleusercontent.com/pw/AP1GczNB_LOmDwneOypSdbXJYhH1BPPrHIOOo_VXGnGfQKpcPqU0qO9HHps0NgJyfMxdako6Tybj61v7ywgT-mNiom_VQWx_3kDB9WLjqc2SjD03oV3axhbT=w1920-h1080')]
                            bg-cover bg-fixed bg-center text-4xl text-[#333] backdrop-blur "
                  >
                    <p className="mt-8 text-[34px]">Hola Bienvenido!</p>
                    <p className="px-9 py-2 text-[18px] leading-7">
                      Aquí harás consultas y obtendrás respuestas
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>

            {/* Oficina */}
            <SwiperSlide className="">
              <Swiper
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
                <SwiperSlide>
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
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        {/* Trámites */}
        <SwiperSlide id="ev">
          <Swiper
            className="swiper2 mb-1 mt-8 !h-[339px] !pb-8 !pl-2"
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
                slidesPerView: 1.2,
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
            <SwiperSlide className="bg-[#00000068]">
              <Swiper
                className="swiper3"
                grabCursor={false}
                loop={true}
                modules={[
                  Pagination,
                  Autoplay,
                  EffectFade,
                  Keyboard,
                  Mousewheel,
                  Navigation,
                ]}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                cssMode={true}
                speed={1}
              >
                <div className="absolute left-[0px] top-[0px] flex h-7 w-full items-center justify-center pl-14 text-[17px] font-normal [font-variant-caps:_small-caps] [text-shadow:1px_1px_1px_#222] ">
                  Gestiones en <span className="ml-1 text-[15px]"> DNRPA</span>{' '}
                </div>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/vehicular-4.jpg')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Altas y Bajas de Dominio
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/vehicular-3.jpg')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Verificaciones
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/e4.png')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  >
                    <div className=" z-10 w-full px-10 text-[14px] font-medium text-[#523852] [line-height:_1] ">
                      <p className="mb-1.5 rounded-md bg-[#ffffffbb] px-1.5 py-[3px] text-start backdrop-blur">
                        <span className="font-bold ">I</span>
                        nscripción inicial
                      </p>
                      <p className="mb-1.5 rounded-md bg-[#ffffffbb] px-1.5 py-[3px] text-start backdrop-blur">
                        <span className="font-bold ">B</span>
                        aja por destrucción total, robo, hurto e incendio
                      </p>
                      <p className="mb-1.5 rounded-md bg-[#ffffffbb] px-1.5 py-[3px] text-start backdrop-blur ">
                        <span className="font-bold ">D</span>
                        enuncia de compra y poseción - Venta
                      </p>
                      <p className="mb-1.5 rounded-md bg-[#ffffffbb] px-1.5 py-[3px] text-start backdrop-blur">
                        <span className="font-bold ">A</span>
                        ltas/Bajas municipales
                      </p>
                      <p className="mb-1.5 rounded-md bg-[#ffffffbb] px-1.5 py-[3px] text-start backdrop-blur">
                        <span className="font-bold ">D</span>
                        uplicado de chapa patente
                      </p>
                      <p className="mb-1.5 rounded-md bg-[#ffffffbb] px-1.5 py-[3px] text-start backdrop-blur">
                        <span className="font-bold ">C</span>
                        ancelacion de prenda
                      </p>
                      <p className="mb-1.5 rounded-md bg-[#ffffff00] px-1.5 py-[3px] text-start text-[13px] backdrop-blur">
                        <span className="font-medium">C</span>
                        onsultar por otras gestiones...
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Otras gestiones
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>

            {/* Trámites 2 */}
            <SwiperSlide className="bg-[#00000068]">
              <Swiper
                className="swiper3"
                grabCursor={false}
                loop={true}
                modules={[
                  Pagination,
                  Autoplay,
                  EffectFade,
                  Keyboard,
                  Mousewheel,
                  Navigation,
                ]}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                cssMode={true}
                speed={1}
              >
                <div className="absolute  left-[0px] top-[0px] flex h-7 w-full items-center justify-center pl-14 text-[17px] font-normal [font-variant-caps:_small-caps] [text-shadow:1px_1px_1px_#222] ">
                  Formularios
                </div>
                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                            border
                            border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/usados.jpg')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    08-Transferencias
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                            border
                            border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/verificacion.jpg')] bg-cover bg-fixed bg-top text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    03-Inscripción Contrato Prendario
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                            border
                            border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/hero.png')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  >
                    <div className="absolute flex h-full w-full flex-col justify-center px-10 text-[11px] font-medium uppercase leading-none text-[#523852]">
                      <div className="mb-2 flex items-center rounded-md bg-[#ffffffb8] px-1.5 py-[3px] text-start backdrop-blur ">
                        <div className="flex">
                          <div className="mr-2 text-[15px] font-bold">04</div>
                        </div>
                        <div>Trámites Declaracion Deudas y Gravamenes</div>
                      </div>
                      <div className="mb-2 flex items-center rounded-md bg-[#ffffffb8] px-1.5 py-[3px] text-start backdrop-blur">
                        <div className="flex">
                          <div className="mr-2 text-[15px] font-bold">08</div>
                        </div>
                        <div>
                          Contrato de Transferencia - Inscripción de Dominio
                        </div>
                      </div>
                      <div className="mb-2 flex items-center rounded-md bg-[#ffffffb8] px-1.5 py-[3px] text-start backdrop-blur">
                        <div className="flex">
                          <div className="mr-2 text-[15px] font-bold">03</div>
                        </div>
                        <div>Inscripción Contrato Prendario</div>
                      </div>
                      <div className="mb-2 flex items-center rounded-md bg-[#ffffffb8] px-1.5 py-[3px] text-start backdrop-blur">
                        <div className="flex">
                          <div className="mr-2 text-[15px] font-bold">05</div>
                        </div>
                        <div>Solicitud de Inscripción Inicial</div>
                      </div>
                      <div className="mb-2 flex items-center rounded-md bg-[#ffffffb8] px-1.5 py-[3px] text-start backdrop-blur">
                        <div className="flex">
                          <div className="mr-2 text-[15px] font-bold">59</div>
                        </div>
                        <div>Mandatario, Mero Presentante y Comerciante</div>
                      </div>
                      <p className="mb-1.5 rounded-md bg-[#ffffff00] px-1.5 py-[3px] text-start backdrop-blur">
                        <span className="font-bold">C</span>
                        onsultar por otros formularios...
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Otros formularios
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>

            {/* Trámites 3 */}
            <SwiperSlide className="bg-[#00000068]">
              <Swiper
                className="swiper3"
                grabCursor={false}
                loop={true}
                modules={[
                  Pagination,
                  Autoplay,
                  EffectFade,
                  Keyboard,
                  Mousewheel,
                  Navigation,
                ]}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                cssMode={true}
                speed={1}
              >
                <div className="absolute  left-[0px] top-[0px] flex h-7 w-full items-center justify-center pl-14 text-[17px] font-normal [font-variant-caps:_small-caps] [text-shadow:1px_1px_1px_#222] ">
                  Automotores
                </div>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/vehiculos-p.png')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Parque Vehículos
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/infracciones.jpg')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Resolución de Infracciones
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="absolute top-[24px] mb-2 flex h-[255px] w-full items-center justify-center 
                                border
                                border-[#858585] bg-[#fff9] bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url('/patentamiento1.jpg')] bg-cover bg-fixed bg-center text-4xl font-bold backdrop-blur "
                  ></div>
                  <div className="absolute -bottom-[5px] flex h-9 w-full items-center justify-center pb-1 text-center text-[15px] font-normal duration-300 [text-shadow:1px_1px_1px_#222] max-[500px]:text-base max-[375px]:text-sm ">
                    Patentamiento
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        {/* Consultas */}
        <SwiperSlide id="cp">
          <Swiper
            className="swiper2 !mx-3 !h-[356px] rounded-xl bg-[#00000061] text-[14px] text-[#ffffffcc] [backdrop-filter:_blur(1px)]  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_3px_0_#00000082_inset] [text-shadow:_1px_1px_#000] md:!mx-24 md:!h-[322px] md:text-[15px] "
             centeredSlides={true}
            grabCursor={false}
            modules={[Keyboard, Scrollbar, Navigation, A11y, Mousewheel]}
            slidesPerView={1}
            spaceBetween={10}
            speed={600} 
          >
            <div className="w-full] absolute top-0 z-10 flex h-full flex-col items-start justify-center bg-cover bg-fixed bg-center px-4 [border-radius:_12px_12px_0_0] min-[500px]:px-6 md:px-9 ">
              <div className="mb-2 w-full pb-2 text-left font-medium leading-4 min-[500px]:mb-3 min-[500px]:pb-3 ">
                CONSULTAS FRECUENTES
              </div>

              {linkDatos.length ? (
                linkDatos.map((linkDato) => (
                  <article key={linkDato.slug} className="w-full">
                    <Link
                      as={`/consultas/${linkDato.slug}`}
                      href="/consultas/[slug]"
                      className="!ml-0 flex grow flex-col justify-start pb-3 text-start leading-[18px] duration-200  hover:text-[#ffffff] md:flex-none "
                    >
                      <p className="border-b border-b-[#fff2] [letter-spacing:_0.5px] ">
                        {linkDato.excerpt}
                      </p>
                    </Link>
                  </article>
                ))
              ) : (
                <p>Ninguna consulta publicado todavía</p>
              )}

              <div className="mt-4 flex w-full flex-col items-start gap-3 text-left font-medium leading-4  min-[500px]:flex-row min-[500px]:items-end min-[500px]:gap-6 ">
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
          </Swiper>
          <FooterInicio />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
