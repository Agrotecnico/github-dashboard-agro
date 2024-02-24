import React from "react"

export type IconProps = {
  size?: string | number
  color?: string
  sombraX?: string | number
  sombraY?: string | number
  filter?: string | number
} & React.SVGAttributes<SVGElement>

const IconCuenta: React.FC<IconProps> = ({
  size=36,
  color= "white",
  sombraX= "1",
  sombraY= "1",
  filter="filterCuenta1",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <defs>
        <filter
          id={filter}>
          <feGaussianBlur
            result="result0"
            in="SourceAlpha"
            stdDeviation="1.01"
            id="feGaussianBlur877" />
          <feOffset
            dx={sombraX}
            dy={sombraY}
            result="result4"
            id="feOffset879"
            preserveAlpha="false" />
          <feComposite
            in="SourceGraphic"
            in2="result4"
            operator="xor"
            result="result3"
            id="feComposite881" />
        </filter> 
      </defs>
      <g>
        <path
          d="M 16.925842,20.497862 C 15.923326,20.326511 14.89003,19.900918 13.933383,19.26533 12.840035,18.538919 11.822094,17.291438 11.127252,15.826438 10.48957,14.48195 10.24685,13.373046 10.247312,11.806273 c 7.36e-4,-2.5011723 0.794337,-4.5848576 2.429407,-6.3786725 1.425856,-1.5642889 3.343655,-2.4300982 5.377211,-2.4275944 3.702043,0.00456 6.910271,3.0331828 7.586484,7.1617799 0.147375,0.899787 0.150043,2.416927 0.0057,3.255005 -0.618735,3.593155 -3.011515,6.293254 -6.217376,7.015907 -0.69094,0.155748 -1.803476,0.184714 -2.502926,0.06516 z M 4.2865311,32.901947 C 3.884786,32.770761 3.4924584,32.455109 3.2277117,32.050063 L 2.9999988,31.701676 v -1.933862 -1.933863 l 0.2207458,-0.468138 c 0.2919233,-0.619084 0.8169452,-1.133349 1.5019002,-1.471125 0.2915664,-0.143786 1.429651,-0.751803 2.5290774,-1.351158 1.099426,-0.599356 2.0154599,-1.089737 2.0356304,-1.089737 0.03516,0 3.0119864,-1.601461 3.5297884,-1.899986 0,0 0.227209,-0.159268 0.569136,-0.158928 0.369687,3.76e-4 0.718591,0.154632 0.718591,0.154632 1.324847,0.610787 2.153876,0.821555 3.469849,0.882156 1.553386,0.07153 2.84143,-0.197143 4.257807,-0.888145 0,0 0.358393,-0.140717 0.679063,-0.146425 0.286549,-0.0051 0.617985,0.158565 0.617985,0.158565 0.342752,0.187492 1.498694,0.807024 2.568757,1.376737 1.070066,0.569715 2.485437,1.335475 3.145272,1.70169 0.659839,0.366215 1.596304,0.864782 2.081037,1.107922 1.019786,0.511529 1.510286,0.955083 1.843763,1.667312 l 0.200221,0.427624 0.02216,1.791808 c 0.02128,1.717871 0.01594,1.806916 -0.12873,2.158038 -0.197838,0.480129 -0.712725,0.966236 -1.175375,1.109675 -0.304609,0.09444 -1.985058,0.107028 -13.73183,0.102843 -10.7774148,-0.0038 -13.4399859,-0.0228 -13.6683231,-0.09736 z"
          fill={color}
        />
        <path
          d="m 16.925841,20.497863 c -1.002516,-0.171351 -2.035812,-0.596944 -2.992459,-1.232532 -1.093347,-0.726411 -2.111289,-1.973892 -2.80613,-3.438892 -0.637683,-1.344488 -0.880402,-2.453392 -0.879941,-4.020166 7.36e-4,-2.5011726 0.794338,-4.5848576 2.429407,-6.3786726 1.425856,-1.564289 3.343655,-2.430098 5.377211,-2.427595 3.702043,0.0046 6.910271,3.033183 7.586484,7.1617806 0.147375,0.899788 0.150043,2.416927 0.0057,3.255006 -0.618735,3.593155 -3.011515,6.293254 -6.217376,7.015907 -0.69094,0.155748 -1.803476,0.184714 -2.502926,0.06516 z M 4.2865313,32.901948 c -0.401745,-0.131186 -0.794073,-0.446838 -1.05882,-0.851884 l -0.227713,-0.348387 v -1.933862 -1.933863 l 0.220746,-0.468138 c 0.291923,-0.619084 0.816945,-1.133349 1.5019,-1.471125 0.291567,-0.143786 1.429651,-0.751803 2.529078,-1.351158 1.099426,-0.599356 2.01546,-1.089737 2.03563,-1.089737 0.03516,0 3.0119867,-1.601461 3.5297877,-1.899986 0,0 0.227209,-0.159268 0.569136,-0.158928 0.369687,3.76e-4 0.718591,0.154632 0.718591,0.154632 1.324847,0.610787 2.153876,0.821555 3.469849,0.882156 1.553386,0.07153 2.84143,-0.197143 4.257807,-0.888145 0,0 0.358393,-0.140717 0.679063,-0.146425 0.286549,-0.0051 0.617985,0.158565 0.617985,0.158565 0.342752,0.187492 1.498694,0.807024 2.568757,1.376737 1.070066,0.569715 2.485437,1.335475 3.145272,1.70169 0.659839,0.366215 1.596304,0.864782 2.081037,1.107922 1.019786,0.511529 1.510286,0.955083 1.843763,1.667312 l 0.200221,0.427624 0.02216,1.791808 c 0.02128,1.717871 0.01594,1.806916 -0.12873,2.158038 -0.197838,0.480129 -0.712725,0.966236 -1.175375,1.109675 -0.304609,0.09444 -1.985058,0.107027 -13.73183,0.102842 -10.7774137,-0.0038 -13.4399847,-0.0228 -13.6683227,-0.09736 z"
          filter={`url(#${filter})`}
          fill="#ffffff"
          opacity="0.5" />
      </g>
    </svg>
  )
}

export default IconCuenta