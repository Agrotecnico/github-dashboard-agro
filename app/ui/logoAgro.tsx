import React from "react"
import clsx from "clsx"
/* import { IconProps } from "types/icon" */

export type IconProps = {
  color?: string
  size?: string | number
} & React.SVGAttributes<SVGElement>

const LogoAgro: React.FC<IconProps> = ({
  size = "226",
  color= "black" /*currentColor" */,
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 113 24"
      fill="#27d627"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <g>
        <text style={{fill:color}} className="translate-x-[2px] translate-y-[18px] text-[12.5px] font-extrabold ">
          AGRO
        </text>
        <text style={{fill:color}}  className="translate-x-[62px] translate-y-[18px] text-[12.5px] font-extrabold ">
          ECNICO
        </text>
        <path
          d="m 1.3115293,23.999888 c -0.64756389,0 -0.99955146,-0.52367 -0.99955146,-0.999585 v -1.999167 c 0,-0.601449 0.43748102,-0.977394 0.99955146,-0.999583 l 110.3769407,1.11e-4 c 0.68841,0.07246 0.99955,0.426391 0.99955,0.999584 v 1.999167 C 112.68802,23.605838 112.28224,24 111.68847,24 Z M 40.640606,9.5059139 c -0.155805,-6.004582 5.380125,-9.72338812 9.509949,-9.49605114 5.545927,0 9.428168,4.20485354 9.495726,9.49605114 0.140268,5.4226431 -4.768407,9.0281311 -7.492439,9.2869311 0,-2.001962 -0.0094,-4.73807 -0.0041,-6.787969 h 3.298513 c 0.674935,-0.07761 1.143367,-0.679945 1.199464,-1.199501 0.01579,-0.702351 0.0066,-0.869748 0,-1.5993373 -0.01563,-0.5166115 -0.545235,-1.1581207 -1.199464,-1.1995006 -3.494332,0.034821 -7.101661,0.058983 -10.595225,0 -0.691737,0.031447 -1.154339,0.6560785 -1.199463,1.1995006 0.0033,0.7643249 0.0025,0.9876603 0,1.5993373 0.02324,0.555287 0.598305,1.175891 1.199463,1.199501 l 3.284085,-0.01006 c 0.005,2.134607 0.01108,4.542257 0.01108,6.781438 -4.061133,-0.481828 -7.439865,-4.66395 -7.507547,-9.2703446 z"
          stroke=  "#333" /*{color}*/
          strokeWidth="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
      </g>
    </svg>
  )
}

export default LogoAgro