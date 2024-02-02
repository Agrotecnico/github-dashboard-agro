'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import Image from 'next/image'
import NavHome from "./navHome"
import FooterInicio from "./footerInicio"
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import IconWhatsApp from "./ui/icon-whatsApp"
import IconEmail from "./ui/icon-Email"

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
} from "swiper/modules"

export default function GaleriaFotosCnp() {
  const agrotecnico = [
    `<svg
      width="160"
      height="42"
      viewBox="0 0 160 42"
      fill={colorIcon}
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <g>
        <path
          d="m 18.803897,24.79893 c 3.289647,0 5.938074,2.234571 5.938074,5.010251 v 7.793723 c 0,2.775681 -2.648381,5.010251 -5.938074,5.010251 -3.28974,0 -5.938075,-2.23457 -5.938075,-5.010251 v -7.793723 c 0,-2.77568 2.648335,-5.010251 5.938075,-5.010251 z m 0,-24.41208494 c 3.289647,0 5.938074,2.23457014 5.938074,5.01025064 v 7.7937233 c 0,2.77568 -2.648381,5.01025 -5.938074,5.01025 -3.28974,0 -5.938075,-2.23457 -5.938075,-5.01025 V 5.3970957 c 0,-2.7756805 2.648335,-5.01025064 5.938075,-5.01025064 z m -13.3277849,0 h 0.9240172 c 3.0336766,0 5.4760137,2.22029894 5.4760137,4.97824444 V 37.63491 c 0,2.757946 -2.4423371,4.978245 -5.4760137,4.978245 H 5.4761121 C 2.4423365,42.613155 -3.0922189e-7,40.392856 -3.0922189e-7,37.63491 V 5.3650895 C -3.0922189e-7,2.607144 2.4423365,0.38684506 5.4761121,0.38684506 Z"
          fill="white"
          stroke=  ""
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 45.063274,0.38684506 h 0.924017 c 3.033677,0 5.47602,2.22029894 5.47602,4.97824444 V 37.63491 c 0,2.757946 -2.442343,4.978245 -5.47602,4.978245 h -0.924017 c -3.033775,0 -5.476112,-2.220299 -5.476112,-4.978245 V 5.3650895 c 0,-2.7579455 2.442337,-4.97824444 5.476112,-4.97824444 z m -12.865829,0 h 0.924018 c 3.033676,0 5.47602,2.22029894 5.47602,4.97824444 V 37.63491 c 0,2.757946 -2.442344,4.978245 -5.47602,4.978245 h -0.924018 c -3.033778,0 -5.476115,-2.220299 -5.476115,-4.978245 V 5.3650895 c 0,-2.7579455 2.442337,-4.97824444 5.476115,-4.97824444 z"
          fill="#ddd"
          stroke= ""
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 58.918782,0.38684506 h 0.924017 c 3.033677,0 5.47602,2.22029894 5.47602,4.97824444 V 37.63491 c 0,2.757946 -2.442343,4.978245 -5.47602,4.978245 h -0.924017 c -3.033776,0 -5.476112,-2.220299 -5.476112,-4.978245 V 5.3650895 c 0,-2.7579455 2.442336,-4.97824444 5.476112,-4.97824444 z m 13.327863,0 c 3.289653,0 5.938002,2.64838134 5.938002,5.93807484 V 18.201069 c 0,3.289701 -2.648349,5.938075 -5.938002,5.938075 -3.289753,0 -5.938147,-2.648374 -5.938147,-5.938075 V 6.3249199 c 0,-3.2896935 2.648354,-5.93807484 5.938147,-5.93807484 z"
          fill="#eee"
          stroke= ""
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
        <path
          d="m 157.56312,32.80214 h 2.09042 v 8.748275 h -2.09042 v -0.924689 q -0.61485,0.611092 -1.23731,0.884472 -0.61486,0.265341 -1.3373,0.265341 -1.62158,0 -2.80511,-1.310622 -1.18355,-1.31868 -1.18355,-3.272565 0,-2.026259 1.14513,-3.3208 1.14509,-1.294564 2.78205,-1.294564 0.75317,0 1.41409,0.297511 0.66094,0.297506 1.222,0.892524 z m -2.20568,1.80111 q -0.97602,0 -1.62162,0.723666 -0.64556,0.715618 -0.64556,1.841306 0,1.133748 0.65327,1.865448 0.66093,0.731709 1.62158,0.731709 0.9914,0 1.64467,-0.715633 0.65327,-0.723652 0.65327,-1.889549 0,-1.141786 -0.65327,-1.849368 -0.65327,-0.707579 -1.65234,-0.707579 z m -6.92449,-6.202984 c 0.36887,0 0.68396,0.139369 0.94531,0.41811 0.2664,0.278743 0.39963,0.61646 0.39963,1.01314 0,0.391305 -0.13065,0.726331 -0.39196,1.005073 -0.26131,0.273383 -0.57383,0.410069 -0.93761,0.410069 -0.37402,0 -0.69425,-0.139378 -0.96065,-0.41812 -0.2613,-0.284102 -0.39196,-0.627162 -0.39196,-1.029197 0,-0.385947 0.13066,-0.715616 0.39196,-0.989 0.26131,-0.273388 0.5764,-0.410075 0.94528,-0.410075 z m -1.0529,4.401874 h 2.10579 v 8.748275 h -2.10579 z m -5.83072,0 h 1.79836 v 1.10157 q 0.292,-0.651285 0.77621,-0.989015 0.48416,-0.337707 1.06056,-0.337707 0.40732,0 0.85308,0.225152 l -0.65322,1.889566 q -0.36894,-0.192993 -0.60715,-0.192993 -0.4842,0 -0.82238,0.627184 -0.33043,0.627162 -0.33043,2.460447 l 0.008,0.426158 v 3.537913 h -2.08271 z m -3.98751,0 h 2.09042 v 8.748275 h -2.09042 v -0.924689 q -0.61486,0.611092 -1.23733,0.884472 -0.61485,0.265341 -1.33723,0.265341 -1.62163,0 -2.80518,-1.310622 -1.18355,-1.31868 -1.18355,-3.272565 0,-2.026259 1.14514,-3.3208 1.14509,-1.294564 2.78209,-1.294564 0.75317,0 1.4141,0.297511 0.66094,0.297506 1.22196,0.892524 z m -2.20569,1.80111 q -0.97601,0 -1.62158,0.723666 -0.6456,0.715618 -0.6456,1.841306 0,1.133748 0.65327,1.865448 0.66093,0.731709 1.62162,0.731709 0.9914,0 1.64462,-0.715633 0.65326,-0.723652 0.65326,-1.889549 0,-1.141786 -0.65326,-1.849368 -0.65322,-0.707579 -1.65233,-0.707579 z m -8.43851,-6.358168 h 2.09042 v 1.891574 h 1.24503 v 1.889565 h -1.24503 v 9.524194 h -2.09042 v -9.524194 h -1.07593 v -1.889565 h 1.07593 z m -4.46516,4.557058 h 2.09041 v 8.748275 h -2.09041 v -0.924689 q -0.61482,0.611092 -1.23734,0.884472 -0.61485,0.265341 -1.33722,0.265341 -1.62164,0 -2.80519,-1.310622 -1.18353,-1.31868 -1.18353,-3.272565 0,-2.026259 1.14514,-3.3208 1.14507,-1.294564 2.78208,-1.294564 0.75312,0 1.41411,0.297511 0.66091,0.297506 1.22195,0.892524 z m -2.2057,1.80111 q -0.97601,0 -1.62162,0.723666 -0.64556,0.715618 -0.64556,1.841306 0,1.133748 0.65327,1.865448 0.66093,0.731709 1.62158,0.731709 0.99145,0 1.64467,-0.715633 0.65327,-0.723652 0.65327,-1.889549 0,-1.141786 -0.65327,-1.849368 -0.65322,-0.707579 -1.65234,-0.707579 z m -8.18486,-6.244392 h 2.09041 v 13.191557 h -2.09041 v -0.924689 c -0.40991,0.407393 -0.82233,0.702225 -1.23733,0.884472 -0.40991,0.176894 -0.85564,0.265341 -1.33729,0.265341 -1.08106,0 -2.0161,-0.436878 -2.80512,-1.310622 -0.78901,-0.879119 -1.18355,-1.969977 -1.18355,-3.272565 0,-1.350838 0.38168,-2.457773 1.14509,-3.3208 0.76346,-0.863047 1.69079,-1.294564 2.78214,-1.294564 0.5021,0 0.97345,0.09917 1.41405,0.297511 0.44066,0.198337 0.84794,0.495844 1.22201,0.892524 z m -2.20569,6.244392 c -0.65069,0 -1.19125,0.24123 -1.62163,0.723666 -0.43036,0.47708 -0.64555,1.090852 -0.64555,1.841306 0,0.755838 0.21775,1.377653 0.65327,1.865448 0.4406,0.487804 0.98116,0.731709 1.62158,0.731709 0.66092,0 1.20914,-0.238547 1.64467,-0.715633 0.4355,-0.482438 0.65326,-1.112284 0.65326,-1.889549 0,-0.761197 -0.21776,-1.377642 -0.65326,-1.849368 -0.43553,-0.471723 -0.98632,-0.707579 -1.65234,-0.707579 z M 96.437591,32.80214 h 2.09041 v 0.892515 q 0.71476,-0.627178 1.291155,-0.868401 0.584064,-0.249266 1.191204,-0.249266 1.24505,0 2.1135,0.908617 0.7301,0.771893 0.7301,2.283541 v 5.781269 h -2.07504 V 37.71499 q 0,-1.567929 -0.13837,-2.08254 -0.13065,-0.514599 -0.46878,-0.779935 -0.33046,-0.273387 -0.82233,-0.273387 -0.637894,0 -1.099009,0.450282 -0.45341,0.442244 -0.63019,1.230225 -0.0922,0.41007 -0.0922,1.776985 v 3.513795 h -2.09041 z m -4.21157,0 h 2.09041 v 8.748275 h -2.09041 v -0.924689 q -0.614809,0.611092 -1.237329,0.884472 -0.61481,0.265341 -1.337236,0.265341 -1.62158,0 -2.805175,-1.310622 -1.183496,-1.31868 -1.183496,-3.272565 0,-2.026259 1.145086,-3.3208 1.145136,-1.294564 2.782089,-1.294564 0.753175,0 1.414105,0.297511 0.660931,0.297506 1.221956,0.892524 z m -2.20569,1.80111 q -0.976022,0 -1.621579,0.723666 -0.645557,0.715618 -0.645557,1.841306 0,1.133748 0.65322,1.865448 0.660931,0.731709 1.621627,0.731709 0.991397,0 1.644665,-0.715633 0.653269,-0.723652 0.653269,-1.889549 0,-1.141786 -0.653269,-1.849368 -0.653268,-0.707579 -1.652376,-0.707579 z m -13.100965,-1.636274 0.958176,1.358672 1.132235,-0.466164 c 0.476493,-0.418115 0.906864,-0.707581 1.291163,-0.8684 0.389342,-0.166174 0.786443,-0.249261 1.191209,-0.249261 0.829994,0 1.534476,0.302867 2.113446,0.908607 0.486775,0.514598 0.730137,1.275783 0.730137,2.283546 v 5.781266 h -2.075035 v -3.835421 c 0,-1.045289 -0.04607,-1.739467 -0.138365,-2.082541 -0.08711,-0.343071 -0.243364,-0.60305 -0.468782,-0.779936 -0.220326,-0.182254 -0.494438,-0.273386 -0.822332,-0.273386 -0.425279,0 -0.791634,0.150096 -1.099014,0.450283 -0.302288,0.294829 -0.512383,0.704904 -0.630183,1.230225 -0.0615,0.273383 -0.09224,0.865709 -0.09224,1.776984 v 3.513792 H 76.91937 Z m -5.325955,0 h 2.09041 v 0.892508 q 0.714764,-0.627176 1.291163,-0.8684 0.584063,-0.249261 1.191209,-0.249261 1.245041,0 2.113495,0.908607 0.730089,0.771899 0.730089,2.283546 v 5.781266 h -2.075036 v -3.835421 q 0,-1.567935 -0.138366,-2.082541 -0.130652,-0.514603 -0.468781,-0.779936 -0.330465,-0.273386 -0.822332,-0.273386 -0.637895,0 -1.099015,0.450283 -0.453408,0.442243 -0.630181,1.230225 -0.09224,0.410075 -0.09224,1.776984 v 3.513792 h -2.09041 z"
          fill="white"
          stroke=  "white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
      </g>
    </svg>`,
    "Trámites",
    "Consultas",
  ]
  const agrotecnico2 = [
    `<svg
      width="88"
      height="60"
      viewBox="0 0 88 60"
      fill={colorIcon}
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <g>
        <path
          d="m 23.711575,24.630474 c 3.289647,0 5.938074,2.234571 5.938074,5.010251 v 7.793723 c 0,2.775681 -2.648381,5.010251 -5.938074,5.010251 -3.28974,0 -5.938075,-2.23457 -5.938075,-5.010251 v -7.793723 c 0,-2.77568 2.648335,-5.010251 5.938075,-5.010251 z m 0,-24.41208506 c 3.289647,0 5.938074,2.23457016 5.938074,5.01025066 v 7.7937234 c 0,2.77568 -2.648381,5.01025 -5.938074,5.01025 -3.28974,0 -5.938075,-2.23457 -5.938075,-5.01025 V 5.2286396 c 0,-2.7756805 2.648335,-5.01025066 5.938075,-5.01025066 z m -13.327785,0 h 0.924017 c 3.033677,0 5.476014,2.22029896 5.476014,4.97824446 V 37.466454 c 0,2.757946 -2.442337,4.978245 -5.476014,4.978245 H 10.38379 c -3.0337755,0 -5.4761123,-2.220299 -5.4761123,-4.978245 V 5.1966334 c 0,-2.7579455 2.4423368,-4.97824446 5.4761123,-4.97824446 z"
          fill=white
          stroke=  "" 
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 49.970952,0.21838894 h 0.924017 c 3.033677,0 5.47602,2.22029896 5.47602,4.97824446 V 37.466454 c 0,2.757946 -2.442343,4.978245 -5.47602,4.978245 h -0.924017 c -3.033775,0 -5.476112,-2.220299 -5.476112,-4.978245 V 5.1966334 c 0,-2.7579455 2.442337,-4.97824446 5.476112,-4.97824446 z m -12.865829,0 h 0.924018 c 3.033676,0 5.47602,2.22029896 5.47602,4.97824446 V 37.466454 c 0,2.757946 -2.442344,4.978245 -5.47602,4.978245 h -0.924018 c -3.033778,0 -5.476115,-2.220299 -5.476115,-4.978245 V 5.1966334 c 0,-2.7579455 2.442337,-4.97824446 5.476115,-4.97824446 z"
          fill="#ddd"
          stroke= ""
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 63.82646,0.21838894 h 0.924017 c 3.033677,0 5.47602,2.22029896 5.47602,4.97824446 V 37.466454 c 0,2.757946 -2.442343,4.978245 -5.47602,4.978245 H 63.82646 c -3.033776,0 -5.476112,-2.220299 -5.476112,-4.978245 V 5.1966334 c 0,-2.7579455 2.442336,-4.97824446 5.476112,-4.97824446 z m 13.327863,0 c 3.289653,0 5.938002,2.64838136 5.938002,5.93807486 V 18.032613 c 0,3.289701 -2.648349,5.938075 -5.938002,5.938075 -3.289753,0 -5.938147,-2.648374 -5.938147,-5.938075 V 6.1564638 c 0,-3.2896935 2.648354,-5.93807486 5.938147,-5.93807486 z"
          fill="#eee"
          stroke= ""
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
        <path
          d="m 85.480145,50.690679 h 2.067517 v 8.749675 h -2.067517 v -0.924837 q -0.608114,0.61119 -1.223754,0.884613 -0.608124,0.265384 -1.322649,0.265384 -1.603813,0 -2.774376,-1.310832 -1.170583,-1.318891 -1.170583,-3.273089 0,-2.026583 1.132584,-3.321331 1.132544,-1.294771 2.751569,-1.294771 0.744918,0 1.398597,0.297558 0.653699,0.297554 1.208612,0.892667 z m -2.181515,1.801398 q -0.965326,0 -1.603853,0.723782 -0.638487,0.715732 -0.638487,1.8416 0,1.13393 0.646113,1.865747 0.653688,0.731826 1.603813,0.731826 0.980538,0 1.626651,-0.715748 0.646113,-0.723767 0.646113,-1.889851 0,-1.141969 -0.646113,-1.849664 -0.646113,-0.707692 -1.634237,-0.707692 z M 76.450006,46.2881 c 0.364829,0 0.676467,0.139391 0.934953,0.418177 0.263482,0.278788 0.395252,0.616559 0.395252,1.013302 0,0.391368 -0.129219,0.726447 -0.387666,1.005234 -0.258447,0.273427 -0.567543,0.410135 -0.927337,0.410135 -0.369922,0 -0.686644,-0.139401 -0.950125,-0.418187 -0.258437,-0.284148 -0.387666,-0.627263 -0.387666,-1.029362 0,-0.386009 0.129229,-0.715731 0.387666,-0.989158 0.258447,-0.273432 0.570085,-0.410141 0.934923,-0.410141 z m -1.041364,4.402579 h 2.082719 v 8.749675 h -2.082719 z m -5.766838,0 h 1.778657 v 1.101746 q 0.288801,-0.651389 0.767706,-0.989173 0.478855,-0.337761 1.04894,-0.337761 0.402858,0 0.843734,0.225188 l -0.646063,1.889868 q -0.364898,-0.193024 -0.600498,-0.193024 -0.478895,0 -0.81337,0.627284 -0.32681,0.627263 -0.32681,2.460841 l 0.0079,0.426226 v 3.53848 h -2.059891 z m -3.943822,0 h 2.067517 v 8.749675 h -2.067517 v -0.924837 q -0.608123,0.61119 -1.223773,0.884613 -0.608114,0.265384 -1.322579,0.265384 -1.603864,0 -2.774446,-1.310832 -1.170583,-1.318891 -1.170583,-3.273089 0,-2.026583 1.132593,-3.321331 1.132545,-1.294771 2.751609,-1.294771 0.744918,0 1.398607,0.297558 0.653699,0.297554 1.208572,0.892667 z m -2.181524,1.801398 q -0.965317,0 -1.603814,0.723782 -0.638526,0.715732 -0.638526,1.8416 0,1.13393 0.646112,1.865747 0.653689,0.731826 1.603854,0.731826 0.980538,0 1.626601,-0.715748 0.646103,-0.723767 0.646103,-1.889851 0,-1.141969 -0.646103,-1.849664 -0.646063,-0.707692 -1.634227,-0.707692 z m -8.346056,-6.359186 h 2.067517 v 1.891877 h 1.231389 v 1.889867 h -1.231389 v 9.525719 H 55.170402 V 49.914635 H 54.10626 v -1.889867 h 1.064142 z m -4.416239,4.557788 h 2.067507 v 8.749675 h -2.067507 v -0.924837 q -0.608084,0.61119 -1.223784,0.884613 -0.608113,0.265384 -1.322569,0.265384 -1.603873,0 -2.774456,-1.310832 -1.170563,-1.318891 -1.170563,-3.273089 0,-2.026583 1.132594,-3.321331 1.132524,-1.294771 2.751599,-1.294771 0.744869,0 1.398617,0.297558 0.653669,0.297554 1.208562,0.892667 z m -2.181534,1.801398 q -0.965317,0 -1.603853,0.723782 -0.638487,0.715732 -0.638487,1.8416 0,1.13393 0.646112,1.865747 0.653689,0.731826 1.603814,0.731826 0.980587,0 1.626651,-0.715748 0.646112,-0.723767 0.646112,-1.889851 0,-1.141969 -0.646112,-1.849664 -0.646064,-0.707692 -1.634237,-0.707692 z m -8.095185,-6.245392 h 2.067507 v 13.193669 h -2.067507 v -0.924837 c -0.405419,0.407458 -0.813321,0.702337 -1.223774,0.884613 -0.405419,0.176923 -0.846265,0.265384 -1.322638,0.265384 -1.069216,0 -1.994012,-0.436948 -2.774387,-1.310832 -0.780365,-0.87926 -1.170583,-1.970292 -1.170583,-3.273089 0,-1.351054 0.377498,-2.458166 1.132544,-3.321331 0.755096,-0.863185 1.672266,-1.294771 2.751659,-1.294771 0.496599,0 0.962785,0.09918 1.398557,0.297558 0.435832,0.198369 0.83865,0.495924 1.208622,0.892667 z m -2.181524,6.245392 c -0.643561,0 -1.178199,0.241268 -1.603864,0.723782 -0.425644,0.477156 -0.638477,1.091026 -0.638477,1.8416 0,0.755959 0.215364,1.377874 0.646113,1.865747 0.435773,0.487882 0.97041,0.731826 1.603814,0.731826 0.653678,0 1.195892,-0.238585 1.62665,-0.715748 0.430729,-0.482515 0.646103,-1.112462 0.646103,-1.889851 0,-0.761319 -0.215374,-1.377862 -0.646103,-1.849664 -0.430758,-0.471798 -0.975513,-0.707692 -1.634236,-0.707692 z m -13.2716,-1.801398 h 2.067503 v 0.892657 q 0.706929,-0.627278 1.277014,-0.86854 0.577661,-0.249305 1.178149,-0.249305 1.231409,0 2.090344,0.908762 0.722101,0.772017 0.722101,2.283906 v 5.782195 h -2.052305 v -3.836039 q 0,-1.56818 -0.136854,-2.082873 -0.129219,-0.514682 -0.463644,-0.78006 -0.32684,-0.273431 -0.813321,-0.273431 -0.630901,0 -1.086969,0.450354 -0.448442,0.442315 -0.623285,1.230422 -0.09119,0.410136 -0.09119,1.777269 v 3.514358 h -2.067505 z m -4.165427,0 H 22.9264 v 8.749675 h -2.067507 v -0.924837 q -0.608073,0.61119 -1.223773,0.884613 -0.608074,0.265384 -1.322585,0.265384 -1.603813,0 -2.774441,-1.310832 -1.170529,-1.318891 -1.170529,-3.273089 0,-2.026583 1.13254,-3.321331 1.13259,-1.294771 2.751608,-1.294771 0.744923,0 1.398612,0.297558 0.65369,0.297554 1.208568,0.892667 z m -2.181524,1.801398 q -0.965329,0 -1.603813,0.723782 -0.638484,0.715732 -0.638484,1.8416 0,1.13393 0.646063,1.865747 0.65369,0.731826 1.60386,0.731826 0.980535,0 1.626646,-0.715748 0.646112,-0.723767 0.646112,-1.889851 0,-1.141969 -0.646112,-1.849664 -0.646111,-0.707692 -1.634272,-0.707692 z m -12.9574284,-1.636536 0.9476781,1.358889 1.11983,-0.466238 c 0.4712725,-0.418182 0.8969283,-0.707694 1.2770168,-0.868539 0.3850763,-0.166201 0.7778266,-0.249301 1.1781575,-0.249301 0.8209,0 1.517664,0.302915 2.090291,0.908752 0.481442,0.514681 0.722137,1.275988 0.722137,2.283912 v 5.782191 h -2.0523 v -3.836035 c 0,-1.045456 -0.04557,-1.739745 -0.136849,-2.082874 -0.08616,-0.343126 -0.240698,-0.603147 -0.463646,-0.780061 -0.217912,-0.182283 -0.4890208,-0.27343 -0.8133223,-0.27343 -0.4206196,0 -0.7829607,0.15012 -1.086973,0.450355 -0.2989761,0.294877 -0.5067693,0.705017 -0.6232786,1.230422 -0.060826,0.273427 -0.091229,0.865848 -0.091229,1.777269 v 3.514354 H 5.7199446 Z m -5.26760295,0 H 2.5198448 v 0.892651 q 0.7069329,-0.627277 1.2770168,-0.868539 0.5776639,-0.249301 1.1781579,-0.249301 1.2314001,0 2.0903392,0.908752 0.72209,0.772023 0.72209,2.283912 v 5.782191 H 5.7351472 v -3.836035 q 0,-1.568186 -0.1368501,-2.082874 -0.1292205,-0.514685 -0.4636449,-0.780061 -0.3268444,-0.27343 -0.8133224,-0.27343 -0.6309061,0 -1.086974,0.450355 -0.4484404,0.442314 -0.6232767,1.230422 -0.091229,0.410141 -0.091229,1.777269 v 3.514354 H 0.452343 Z"
          fill="white"
          stroke= "white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
      </g>
    </svg>`,
    "Trámites",
    "Consultas",
  ]

  return (
    <>
      <Swiper
      className= "swiper1 text-[#fffc] bg-fixed bg-center bg-cover bg-no-repeat relative "
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
              '<span class="' + className + '">' + agrotecnico2[index] + "</span>" 
          )
        },
      }}
      slidesPerView={1}
      spaceBetween={0}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      direction="vertical"
      mousewheel={true}
      speed={600}
      parallax={true}
      breakpoints= {{
        500: {
          pagination:{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                  '<span class="' + className + '">' + agrotecnico[index] + "</span>" 
              )
            },
          }
        },
      }}
    >
      <NavHome />

      {/* <div
        slot="container-start"
        className="parallax-bg bg-[url(../../public/cp.jpg)]"
        data-swiper-parallax="-4%"
      ></div> */}

      <div
        slot="container-start"
        className="parallax-bg bg-[url(../../public/ofi-c.jpg)] min-[880px]:bg-[url(../../public/ofi-c.jpg)]"
        data-swiper-parallax="-4%"
      ></div>
    
      {/* Inicio */}
      <SwiperSlide id="ini">
        <Swiper 
          className="swiper2 !h-[300px] mb-1 "
          centeredSlides={true}
          grabCursor= {false}
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
          /* grid={{
            rows: 2,
          }} */
          slidesPerView={1}
          spaceBetween={10}
          speed={600}
          breakpoints= {{
            /* 320: {
              slidesPerView: 1.3,
              spaceBetween: 10,
              centeredSlides: true,
            }, */
            425: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            500: {
              slidesPerView: 1.75,
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
              keyboard:true,
            },
            1024: {
              slidesPerView: 2.15,
              spaceBetween: 10,
              centeredSlides: false, 
              keyboard:true,
              grabCursor: true,
            },
          }}
          >
          {/* Espacios verdes */}
          <SwiperSlide className="">
              <Swiper
                className="swiper3 relative"
                loop= {true} 
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
                /* autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }} */
                speed={1}
                >
                  <SwiperSlide>
                    <div className="absolute flex-col justify-start text-[#333] top-0 rounded-xl bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/mano-b.jpg)]
                      text-4xl bg-cover h-[300px] w-full flex items-center backdrop-blur ">
                        <p className="mt-8 text-[34px]">Hola!</p>
                        <p className="leading-7 py-2 px-9 text-[18px]">Aquí harás consultas y obtendrás respuestas</p>
                    </div>
                  </SwiperSlide>

              </Swiper>
          </SwiperSlide>
        
          {/* Control Plagas */}
          <SwiperSlide className="">
              <Swiper
                className="swiper3 relative"
                loop= {true} 
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
                slidesPerView={1}
                spaceBetween={0}
                /* autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }} */
                speed={1}
                >
                  <SwiperSlide>
                    <div className="absolute top-0 rounded-xl bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),linear-gradient(180deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/carina-oficina.jpg)]
                      text-4xl font-bold bg-cover h-[300px] w-full flex items-center justify-center backdrop-blur ">
                    </div>
                  </SwiperSlide>
                
              </Swiper>
          </SwiperSlide>

        </Swiper>
      </SwiperSlide>

      {/* Espacios verdes */}
      <SwiperSlide id="ev">
        <Swiper 
          className="swiper2 !h-[308px] mb-1 !pl-2"
          centeredSlides={true}
          grabCursor= {false}
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
          breakpoints= {{
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
              keyboard:true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: false, 
              keyboard:true,
              grabCursor: true,
            },
          }}
          >
          {/* Trámites 1 */}
          <SwiperSlide className="bg-[#00000068]">
            <Swiper
              className="swiper3"
              grabCursor= {false}
              loop= {true}
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

                <div className="[font-variant-caps:_small-caps] text-[17px] absolute top-[0px] pl-14 h-7 w-full left-[0px] font-normal [text-shadow:1px_1px_1px_#222] flex items-center justify-center ">Gestiones en <span className="text-[15px] ml-1"> DNRPA</span> </div>
                
                <SwiperSlide >
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/Vehicular-4.jpg)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Altas y Bajas de Dominio</div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/verificacion.jpg)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Denuncia de Venta</div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/Vehicular-2.jpg)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Radicaciones</div>
                </SwiperSlide>

                

            </Swiper>
          </SwiperSlide>

          {/* Trámites 2 */}
          <SwiperSlide className="bg-[#00000068]">
            <Swiper
              className="swiper3"
              grabCursor= {false}
              loop= {true} 
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
        
                <div className="[font-variant-caps:_small-caps]  text-[17px] absolute top-[0px] pl-14 h-7 w-full left-[0px] font-normal [text-shadow:1px_1px_1px_#222] flex items-center justify-center ">Formularios</div>
                {/* <div className="pb-1 text-[17px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute bottom-[0px] w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Fumigaciones Control Plagas</div> */}
                <SwiperSlide>
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/usados.jpg)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">08-Transferencias</div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/hero.png)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Informes de Dominios</div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/e4.png)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">

                      <div className="absolute flex text-[#000] font-normal h-full w-full flex-col justify-center px-5 text-[12px] uppercase leading-none text-[#222] [text-shadow:_1px_1px_white]">
                        <div className="mb-3 flex text-start">
                          <div className="flex">
                            <div className="mr-2 text-[15px] font-extrabold text-[#b3409a]">
                              04
                            </div>
                          </div>
                          <div>Trámites Declaracion Deudas y Gravamenes</div>
                        </div>
                        <div className="mb-3 flex text-start">
                          <div className="flex">
                            <div className="mr-2 text-[15px] font-extrabold text-[#b3409a]">
                              08
                            </div>
                          </div>
                          <div>Contrato de Transferencia - Inscripción de Dominio</div>
                        </div>
                        <div className="mb-3 flex text-start">
                          <div className="flex">
                            <div className="mr-2 text-[15px] font-extrabold text-[#b3409a]">
                              03
                            </div>
                          </div>
                          <div>Inscripción Contrato Prendario</div>
                        </div>
                        <div className="mb-3 flex text-start">
                          <div className="flex">
                            <div className="mr-2 text-[15px] font-extrabold text-[#b3409a]">
                              05
                            </div>
                          </div>
                          <div>Solicitud de Inscripción Inicial</div>
                        </div>
                        <div className="mb-3 flex text-start">
                          <div className="flex">
                            <div className="mr-2 text-[15px] font-extrabold text-[#b3409a]">
                              59
                            </div>
                          </div>
                          <div>Mandatario, Mero Presentante y Comerciante</div>
                        </div>
                        <div className="flex">
                          <div className="flex">
                            <div className="text-[14px] font-extrabold normal-case text-[#b3409a]">
                              Otros
                            </div>
                            <div className="">...</div>
                          </div>
                        </div>
                      </div>

                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Inscripcion Inicial</div>
                </SwiperSlide>

            </Swiper>
          </SwiperSlide>

          {/* Trámites 3 */}
          <SwiperSlide className="bg-[#00000068]">
            <Swiper
              className="swiper3"
              grabCursor= {false}
              loop= {true} 
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
        
                <div className="[font-variant-caps:_small-caps]  text-[17px] absolute top-[0px] pl-14 h-7 w-full left-[0px] font-normal [text-shadow:1px_1px_1px_#222] flex items-center justify-center ">Automotores</div>
                <SwiperSlide>
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/patentamiento1.jpg)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Patentamiento</div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/vehiculos-p.png)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Duplicado chapa Patente</div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="border border-[#858585] absolute top-[24px] mb-2 bg-fixed bg-cover bg-center 
                    bg-[linear-gradient(90deg,#0005,transparent_1.5%,transparent_98.5%,#0005),url(../../public/infracciones.jpg)]
                      text-4xl font-bold bg-cover h-[255px] bg-[#fff9] w-full flex items-center justify-center backdrop-blur ">
                  </div>
                  <div className="-bottom-[5px] duration-300 pb-1 text-[15px] max-[500px]:text-base h-9 max-[375px]:text-sm absolute w-full text-center flex items-center justify-center font-normal [text-shadow:1px_1px_1px_#222] ">Resolución de Infracciones</div>
                </SwiperSlide>

            </Swiper>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>

      {/* Control Plagas */}
      
        <SwiperSlide id="cp">
          <Swiper 
            className="swiper2 !h-[308px] !mx-3 min-[500px]:!mx-8 md:!mx-24 [box-shadow:_#00000069_0px_0px_12px_0px_inset,_#ffffff69_0px_0px_1px_1px] rounded-xl bg-[#00000068]"
            centeredSlides={true}
            grabCursor= {false}
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
            breakpoints= {{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
                centeredSlides: true,
              },
              524: {
                slidesPerView: 1.75,
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
                keyboard:true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: false, 
                keyboard:true,
                grabCursor: true,
              },
              }}>
           
              <div className="absolute z-10 top-[24px] text-[13px] min-[500px]:text-[14px] md:text-[15px] [border-radius:_12px_12px_0_0]  mb-2 bg-fixed bg-cover bg-center text-4xl font-bold bg-cover h-[255px] w-full flex flex-col items-center justify-center px-4 min-[500px]:px-6 md:px-9 ">
                <div className="w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-2 min-[500px]:mb-3 pb-2 min-[500px]:pb-3 ">
                  PREGUNTAS FRECUENTES
                </div>
                <Link href={"/consultas"} className="duration-200 hover:text-[#ffffffe9] w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-1.5 min-[500px]:mb-2.5 pb-1.5 min-[500px]:pb-2.5 border-b-[#fdfdfd17] border-b ">
                  ¿Cuál es la diferencia entre un gestor y un mandatario nacional del automotor?
                </Link>
                <Link href={"/consultas"} className="duration-200 hover:text-[#ffffffe9] w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-1.5 min-[500px]:mb-2.5 pb-1.5 min-[500px]:pb-2.5 border-b-[#fdfdfd17] border-b ">
                  ¿Qué es el formulario 08?
                </Link> 
                <Link href={"/consultas"} className="duration-200 hover:text-[#ffffffe9] w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-1.5 min-[500px]:mb-2.5 pb-1.5 min-[500px]:pb-2.5 border-b-[#fdfdfd17] border-b ">
                  ¿Validez del formulario 08?
                </Link> 
                <Link href={"/consultas"} className="duration-200 hover:text-[#ffffffe9] w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-1.5 min-[500px]:mb-2.5 pb-1.5 min-[500px]:pb-2.5 border-b-[#fdfdfd17] border-b ">
                  Ante la compra o venta de un vehículo, ¿que documentación tengo que solicitar o entregar al vendedor?
                </Link> 
                <div className="flex items-center mt-2 [font-variant-caps:_small-caps] w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-1.5 min-[500px]:mb-2.5 pb-1.5 min-[500px]:pb-2.5 ">
                  Realizá Tu Consulta 
                  <ArrowRightIcon className="h-4 ml-3" />
                  <Link href= "https://api.whatsapp.com/send?phone=543476604071"  target="_blank" >
                    <IconWhatsApp size="36" className="ml-6 opacity-70 hover:opacity-95 duration-200 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
                  </Link>
                  <Link href="mailto:agrotecnicog@gmail.com?subject=Consulta&body=Cuerpo del mensaje" /* target="_blank" */ >
                    <IconEmail size="48" className="ml-4 opacity-70 hover:opacity-95 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
                  </Link>
                  {/* <IconWhatsApp size="36" className="ml-6 opacity-70 hover:opacity-95 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" /> */}
                  
                </div> 
              </div>
 
          </Swiper>
        </SwiperSlide>
      

      <FooterInicio />

      </Swiper>
    </>
  );
}



