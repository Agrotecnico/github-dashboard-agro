import React from "react"

export type IconProps = {
  size?: string | number
  color?: string
  fill?: string | number
  sombraX?: string | number
  sombraY?: string | number
  filter?: string | number
} & React.SVGAttributes<SVGElement>

const IconConsultas: React.FC<IconProps> = ({
  size=48,
  color= "#666",
  fill= "#ddd",
  sombraX= "1",
  sombraY= "1",
  filter="filterConsultas1",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      viewBox="0 0 48 58"
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
          d="m 43.999999,24.935464 c 0,8.918757 -5.837868,16.474002 -13.900819,19.052956 -1.464891,1.244725 -2.598367,9.133046 -6.041937,9.075802 -3.183515,-0.04046 -4.64771,-8.248509 -6.044439,-9.040348 C 9.8919777,41.479306 3.9999992,33.895458 3.9999992,24.935464 c 0,-11.045695 8.9543038,-19.999997 19.9999998,-19.999997 11.045696,0 20,8.954302 20,19.999997 z"
          fill={fill}
        />
        <path
          d="m 23.860307,39.678865 c -2.0502,-0.559254 -2.768125,-2.839389 -1.342798,-4.264717 0.581029,-0.581028 0.994478,-0.72982 2.027954,-0.72982 1.721575,0 2.574755,0.838718 2.551713,2.508451 -0.02524,1.82816 -1.49905,2.96013 -3.236869,2.486086 z m -1.334406,-8.224198 c -0.291969,-0.291969 -0.214512,-2.809366 0.09228,-2.998971 0.152255,-0.0941 0.276825,-0.412159 0.276825,-0.7068 0,-0.520742 1.176692,-1.771287 3.728228,-3.962228 1.326512,-1.139044 1.844842,-2.329093 1.598749,-3.670623 -0.182123,-0.992801 -1.088663,-2.318231 -1.585578,-2.318231 -0.205327,0 -0.41851,-0.135564 -0.473739,-0.301254 -0.05997,-0.179888 -0.902542,-0.301254 -2.091452,-0.301254 -2.486541,0 -3.39565,0.567636 -4.455082,2.781704 l -0.745493,1.557984 -1.470638,0.08445 c -0.846248,0.04859 -1.637398,-0.05394 -1.863409,-0.241517 -0.440842,-0.365867 -0.520692,-1.676833 -0.146633,-2.407352 0.135373,-0.264382 0.477947,-0.963584 0.761275,-1.553785 1.399725,-2.915779 4.302095,-4.601885 7.921421,-4.601885 4.073551,0 7.233499,2.068791 8.437809,5.524162 0.398342,1.142904 0.459704,3.680545 0.105823,4.376199 -0.134492,0.264382 -0.414778,0.851296 -0.622865,1.304253 -0.445687,0.970181 -2.870033,3.536395 -3.78429,4.005737 -0.772195,0.396417 -1.712903,1.869572 -1.714324,2.684651 -5.15e-4,0.326285 -0.198083,0.66886 -0.438916,0.761278 -0.591265,0.226887 -3.299254,0.214214 -3.529987,-0.01652 z"
          fill={color}
        />
        
        <path
          d="m 43.999998,24.935465 c 0,8.918757 -5.83787,16.474002 -13.900818,19.052956 -1.464891,1.244725 -2.598367,9.133046 -6.041937,9.075802 -3.183515,-0.04046 -4.64771,-8.248509 -6.044439,-9.040348 C 9.8919781,41.479307 3.9999991,33.895459 3.9999991,24.935465 c 0,-11.045696 8.9543049,-20.0000002 19.9999999,-20.0000002 11.045689,0 19.999999,8.9543042 19.999999,20.0000002 z"
          filter={`url(#${filter})`}
          fill="#ffffff"
          opacity="0.5" />
      </g>
    </svg>
  )
}

export default IconConsultas