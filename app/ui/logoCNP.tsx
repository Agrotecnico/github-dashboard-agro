import React from "react"
import clsx from "clsx"
/* import { IconProps } from "types/icon" */
import { inter } from '@/app/ui/fonts';

export type IconProps = {
  size?: string | number
  color?: string
  colorC?: string
  colorN?: string
  colorP?: string
} & React.SVGAttributes<SVGElement>

const LogoCNP: React.FC<IconProps> = ({
  size= 160,
  color= "#ddd",/* currentColor",*/
  colorC="#ab3aab",
  colorN="#ba6ddb",
  colorP="#de35de",/*= "black", */
  ...attributes
}) => {
  return (
    <svg
      width={size}
      /* height={size} */
      viewBox="0 0 160 42"
      /* fill={colorIcon} */
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <g>
        <path
          d="m 18.803897,24.79893 c 3.289647,0 5.938074,2.234571 5.938074,5.010251 v 7.793723 c 0,2.775681 -2.648381,5.010251 -5.938074,5.010251 -3.28974,0 -5.938075,-2.23457 -5.938075,-5.010251 v -7.793723 c 0,-2.77568 2.648335,-5.010251 5.938075,-5.010251 z m 0,-24.41208494 c 3.289647,0 5.938074,2.23457014 5.938074,5.01025064 v 7.7937233 c 0,2.77568 -2.648381,5.01025 -5.938074,5.01025 -3.28974,0 -5.938075,-2.23457 -5.938075,-5.01025 V 5.3970957 c 0,-2.7756805 2.648335,-5.01025064 5.938075,-5.01025064 z m -13.3277849,0 h 0.9240172 c 3.0336766,0 5.4760137,2.22029894 5.4760137,4.97824444 V 37.63491 c 0,2.757946 -2.4423371,4.978245 -5.4760137,4.978245 H 5.4761121 C 2.4423365,42.613155 -3.0922189e-7,40.392856 -3.0922189e-7,37.63491 V 5.3650895 C -3.0922189e-7,2.607144 2.4423365,0.38684506 5.4761121,0.38684506 Z"
          fill={colorC}
          stroke=  {colorC}
          strokeWidth="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 45.063274,0.38684506 h 0.924017 c 3.033677,0 5.47602,2.22029894 5.47602,4.97824444 V 37.63491 c 0,2.757946 -2.442343,4.978245 -5.47602,4.978245 h -0.924017 c -3.033775,0 -5.476112,-2.220299 -5.476112,-4.978245 V 5.3650895 c 0,-2.7579455 2.442337,-4.97824444 5.476112,-4.97824444 z m -12.865829,0 h 0.924018 c 3.033676,0 5.47602,2.22029894 5.47602,4.97824444 V 37.63491 c 0,2.757946 -2.442344,4.978245 -5.47602,4.978245 h -0.924018 c -3.033778,0 -5.476115,-2.220299 -5.476115,-4.978245 V 5.3650895 c 0,-2.7579455 2.442337,-4.97824444 5.476115,-4.97824444 z"
          fill={colorN}
          stroke= {colorN}
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 58.918782,0.38684506 h 0.924017 c 3.033677,0 5.47602,2.22029894 5.47602,4.97824444 V 37.63491 c 0,2.757946 -2.442343,4.978245 -5.47602,4.978245 h -0.924017 c -3.033776,0 -5.476112,-2.220299 -5.476112,-4.978245 V 5.3650895 c 0,-2.7579455 2.442336,-4.97824444 5.476112,-4.97824444 z m 13.327863,0 c 3.289653,0 5.938002,2.64838134 5.938002,5.93807484 V 18.201069 c 0,3.289701 -2.648349,5.938075 -5.938002,5.938075 -3.289753,0 -5.938147,-2.648374 -5.938147,-5.938075 V 6.3249199 c 0,-3.2896935 2.648354,-5.93807484 5.938147,-5.93807484 z"
          fill={colorP}
          stroke= {colorP}
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
        <path
          d="m 157.56312,32.80214 h 2.09042 v 8.748275 h -2.09042 v -0.924689 q -0.61485,0.611092 -1.23731,0.884472 -0.61486,0.265341 -1.3373,0.265341 -1.62158,0 -2.80511,-1.310622 -1.18355,-1.31868 -1.18355,-3.272565 0,-2.026259 1.14513,-3.3208 1.14509,-1.294564 2.78205,-1.294564 0.75317,0 1.41409,0.297511 0.66094,0.297506 1.222,0.892524 z m -2.20568,1.80111 q -0.97602,0 -1.62162,0.723666 -0.64556,0.715618 -0.64556,1.841306 0,1.133748 0.65327,1.865448 0.66093,0.731709 1.62158,0.731709 0.9914,0 1.64467,-0.715633 0.65327,-0.723652 0.65327,-1.889549 0,-1.141786 -0.65327,-1.849368 -0.65327,-0.707579 -1.65234,-0.707579 z m -6.92449,-6.202984 c 0.36887,0 0.68396,0.139369 0.94531,0.41811 0.2664,0.278743 0.39963,0.61646 0.39963,1.01314 0,0.391305 -0.13065,0.726331 -0.39196,1.005073 -0.26131,0.273383 -0.57383,0.410069 -0.93761,0.410069 -0.37402,0 -0.69425,-0.139378 -0.96065,-0.41812 -0.2613,-0.284102 -0.39196,-0.627162 -0.39196,-1.029197 0,-0.385947 0.13066,-0.715616 0.39196,-0.989 0.26131,-0.273388 0.5764,-0.410075 0.94528,-0.410075 z m -1.0529,4.401874 h 2.10579 v 8.748275 h -2.10579 z m -5.83072,0 h 1.79836 v 1.10157 q 0.292,-0.651285 0.77621,-0.989015 0.48416,-0.337707 1.06056,-0.337707 0.40732,0 0.85308,0.225152 l -0.65322,1.889566 q -0.36894,-0.192993 -0.60715,-0.192993 -0.4842,0 -0.82238,0.627184 -0.33043,0.627162 -0.33043,2.460447 l 0.008,0.426158 v 3.537913 h -2.08271 z m -3.98751,0 h 2.09042 v 8.748275 h -2.09042 v -0.924689 q -0.61486,0.611092 -1.23733,0.884472 -0.61485,0.265341 -1.33723,0.265341 -1.62163,0 -2.80518,-1.310622 -1.18355,-1.31868 -1.18355,-3.272565 0,-2.026259 1.14514,-3.3208 1.14509,-1.294564 2.78209,-1.294564 0.75317,0 1.4141,0.297511 0.66094,0.297506 1.22196,0.892524 z m -2.20569,1.80111 q -0.97601,0 -1.62158,0.723666 -0.6456,0.715618 -0.6456,1.841306 0,1.133748 0.65327,1.865448 0.66093,0.731709 1.62162,0.731709 0.9914,0 1.64462,-0.715633 0.65326,-0.723652 0.65326,-1.889549 0,-1.141786 -0.65326,-1.849368 -0.65322,-0.707579 -1.65233,-0.707579 z m -8.43851,-6.358168 h 2.09042 v 1.891574 h 1.24503 v 1.889565 h -1.24503 v 9.524194 h -2.09042 v -9.524194 h -1.07593 v -1.889565 h 1.07593 z m -4.46516,4.557058 h 2.09041 v 8.748275 h -2.09041 v -0.924689 q -0.61482,0.611092 -1.23734,0.884472 -0.61485,0.265341 -1.33722,0.265341 -1.62164,0 -2.80519,-1.310622 -1.18353,-1.31868 -1.18353,-3.272565 0,-2.026259 1.14514,-3.3208 1.14507,-1.294564 2.78208,-1.294564 0.75312,0 1.41411,0.297511 0.66091,0.297506 1.22195,0.892524 z m -2.2057,1.80111 q -0.97601,0 -1.62162,0.723666 -0.64556,0.715618 -0.64556,1.841306 0,1.133748 0.65327,1.865448 0.66093,0.731709 1.62158,0.731709 0.99145,0 1.64467,-0.715633 0.65327,-0.723652 0.65327,-1.889549 0,-1.141786 -0.65327,-1.849368 -0.65322,-0.707579 -1.65234,-0.707579 z m -8.18486,-6.244392 h 2.09041 v 13.191557 h -2.09041 v -0.924689 c -0.40991,0.407393 -0.82233,0.702225 -1.23733,0.884472 -0.40991,0.176894 -0.85564,0.265341 -1.33729,0.265341 -1.08106,0 -2.0161,-0.436878 -2.80512,-1.310622 -0.78901,-0.879119 -1.18355,-1.969977 -1.18355,-3.272565 0,-1.350838 0.38168,-2.457773 1.14509,-3.3208 0.76346,-0.863047 1.69079,-1.294564 2.78214,-1.294564 0.5021,0 0.97345,0.09917 1.41405,0.297511 0.44066,0.198337 0.84794,0.495844 1.22201,0.892524 z m -2.20569,6.244392 c -0.65069,0 -1.19125,0.24123 -1.62163,0.723666 -0.43036,0.47708 -0.64555,1.090852 -0.64555,1.841306 0,0.755838 0.21775,1.377653 0.65327,1.865448 0.4406,0.487804 0.98116,0.731709 1.62158,0.731709 0.66092,0 1.20914,-0.238547 1.64467,-0.715633 0.4355,-0.482438 0.65326,-1.112284 0.65326,-1.889549 0,-0.761197 -0.21776,-1.377642 -0.65326,-1.849368 -0.43553,-0.471723 -0.98632,-0.707579 -1.65234,-0.707579 z M 96.437591,32.80214 h 2.09041 v 0.892515 q 0.71476,-0.627178 1.291155,-0.868401 0.584064,-0.249266 1.191204,-0.249266 1.24505,0 2.1135,0.908617 0.7301,0.771893 0.7301,2.283541 v 5.781269 h -2.07504 V 37.71499 q 0,-1.567929 -0.13837,-2.08254 -0.13065,-0.514599 -0.46878,-0.779935 -0.33046,-0.273387 -0.82233,-0.273387 -0.637894,0 -1.099009,0.450282 -0.45341,0.442244 -0.63019,1.230225 -0.0922,0.41007 -0.0922,1.776985 v 3.513795 h -2.09041 z m -4.21157,0 h 2.09041 v 8.748275 h -2.09041 v -0.924689 q -0.614809,0.611092 -1.237329,0.884472 -0.61481,0.265341 -1.337236,0.265341 -1.62158,0 -2.805175,-1.310622 -1.183496,-1.31868 -1.183496,-3.272565 0,-2.026259 1.145086,-3.3208 1.145136,-1.294564 2.782089,-1.294564 0.753175,0 1.414105,0.297511 0.660931,0.297506 1.221956,0.892524 z m -2.20569,1.80111 q -0.976022,0 -1.621579,0.723666 -0.645557,0.715618 -0.645557,1.841306 0,1.133748 0.65322,1.865448 0.660931,0.731709 1.621627,0.731709 0.991397,0 1.644665,-0.715633 0.653269,-0.723652 0.653269,-1.889549 0,-1.141786 -0.653269,-1.849368 -0.653268,-0.707579 -1.652376,-0.707579 z m -13.100965,-1.636274 0.958176,1.358672 1.132235,-0.466164 c 0.476493,-0.418115 0.906864,-0.707581 1.291163,-0.8684 0.389342,-0.166174 0.786443,-0.249261 1.191209,-0.249261 0.829994,0 1.534476,0.302867 2.113446,0.908607 0.486775,0.514598 0.730137,1.275783 0.730137,2.283546 v 5.781266 h -2.075035 v -3.835421 c 0,-1.045289 -0.04607,-1.739467 -0.138365,-2.082541 -0.08711,-0.343071 -0.243364,-0.60305 -0.468782,-0.779936 -0.220326,-0.182254 -0.494438,-0.273386 -0.822332,-0.273386 -0.425279,0 -0.791634,0.150096 -1.099014,0.450283 -0.302288,0.294829 -0.512383,0.704904 -0.630183,1.230225 -0.0615,0.273383 -0.09224,0.865709 -0.09224,1.776984 v 3.513792 H 76.91937 Z m -5.325955,0 h 2.09041 v 0.892508 q 0.714764,-0.627176 1.291163,-0.8684 0.584063,-0.249261 1.191209,-0.249261 1.245041,0 2.113495,0.908607 0.730089,0.771899 0.730089,2.283546 v 5.781266 h -2.075036 v -3.835421 q 0,-1.567935 -0.138366,-2.082541 -0.130652,-0.514603 -0.468781,-0.779936 -0.330465,-0.273386 -0.822332,-0.273386 -0.637895,0 -1.099015,0.450283 -0.453408,0.442243 -0.630181,1.230225 -0.09224,0.410075 -0.09224,1.776984 v 3.513792 h -2.09041 z"
          fill={color}
          stroke= {color}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
      </g>
    </svg>
  )
}

export default LogoCNP