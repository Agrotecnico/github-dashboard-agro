import React from "react"

export type IconProps = {
  size?: string | number
  color?: string
  colorC?: string
  colorN?: string
  colorP?: string
  sombraX?: string | number
  sombraY?: string | number
  filter?: string | number
} & React.SVGAttributes<SVGElement>

const LogoCNP: React.FC<IconProps> = ({
  size= 160,
  color= "#ddd",
  colorC="#ab3aab",
  colorN="#ba6ddb",
  colorP="#de35de",
  sombraX= "1",
  sombraY= "1",
  filter="filter1",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      viewBox="0 0 160 42"
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
          d="m 27.799415,24.962148 c 2.791601,0 5.039062,1.89626 5.039062,4.251708 v 6.613767 c 0,2.355447 -2.247422,4.251711 -5.039062,4.251711 -2.79168,0 -5.039062,-1.896264 -5.039062,-4.251711 v -6.613767 c 0,-2.355448 2.247382,-4.251708 5.039062,-4.251708 z m 0,-20.716149 c 2.791601,0 5.039062,1.89626 5.039062,4.251708 v 6.613775 c 0,2.355448 -2.247422,4.251708 -5.039062,4.251708 -2.79168,0 -5.039062,-1.89626 -5.039062,-4.251708 V 8.497707 c 0,-2.355448 2.247382,-4.251708 5.039062,-4.251708 z m -11.309986,0 h 0.784123 c 2.574385,0 4.646957,1.884151 4.646957,4.224553 v 27.384234 c 0,2.340394 -2.072572,4.224548 -4.646957,4.224548 h -0.784123 c -2.574468,0 -4.647039,-1.884154 -4.647039,-4.224548 V 8.470552 c 0,-2.340402 2.072571,-4.224553 4.647039,-4.224553 z"
          fill={colorC}
        />
        <path
          d="m 50.083176,4.245999 h 0.784123 c 2.574384,0 4.646961,1.884151 4.646961,4.224553 v 27.384234 c 0,2.340394 -2.072577,4.224548 -4.646961,4.224548 h -0.784123 c -2.574468,0 -4.64704,-1.884154 -4.64704,-4.224548 V 8.470552 c 0,-2.340402 2.072572,-4.224553 4.64704,-4.224553 z m -10.917969,0 h 0.784124 c 2.574383,0 4.646961,1.884151 4.646961,4.224553 v 27.384234 c 0,2.340394 -2.072578,4.224548 -4.646961,4.224548 h -0.784124 c -2.57447,0 -4.647042,-1.884154 -4.647042,-4.224548 V 8.470552 c 0,-2.340402 2.072572,-4.224553 4.647042,-4.224553 z"
          fill={colorN}
        />
        <path
          d="m 61.840988,4.245999 h 0.784123 c 2.57438,0 4.646963,1.884151 4.646963,4.224553 v 27.384234 c 0,2.340394 -2.072583,4.224548 -4.646963,4.224548 h -0.784123 c -2.574468,0 -4.64704,-1.884154 -4.64704,-4.224548 V 8.470552 c 0,-2.340402 2.072572,-4.224553 4.64704,-4.224553 z m 11.310048,0 c 2.791612,0 5.039008,2.24742 5.039008,5.039066 V 19.36319 c 0,2.791646 -2.247396,5.039059 -5.039008,5.039059 -2.791688,0 -5.039117,-2.247413 -5.039117,-5.039059 V 9.285065 c 0,-2.791646 2.247395,-5.039066 5.039117,-5.039066 z"
          fill={colorP}
        />
        <path
          d="m 145.71634,32.280987 h 1.76104 v 7.261682 h -1.76104 v -0.767553 q -0.51795,0.507248 -1.04237,0.734178 -0.51797,0.220247 -1.12655,0.220247 -1.36611,0 -2.36317,-1.087906 -0.99705,-1.094601 -0.99705,-2.716459 0,-1.681941 0.96469,-2.756506 0.96467,-1.074576 2.34373,-1.074576 0.6345,0 1.19129,0.246953 0.55679,0.246953 1.02943,0.740859 z m -1.85814,1.495048 q -0.82225,0 -1.36611,0.600693 -0.54385,0.594013 -0.54385,1.528412 0,0.941095 0.55032,1.54846 0.55679,0.607364 1.3661,0.607364 0.83519,0 1.38552,-0.594023 0.55032,-0.600683 0.55032,-1.568459 0,-0.947765 -0.55032,-1.535106 -0.55033,-0.587341 -1.39198,-0.587341 z m -5.83346,-5.148916 c 0.31078,0 0.57623,0.115683 0.79637,0.347059 0.22443,0.231377 0.33668,0.511706 0.33668,0.840976 0,0.324812 -0.11008,0.602906 -0.33021,0.834284 -0.22013,0.226928 -0.48341,0.340387 -0.78989,0.340387 -0.31508,0 -0.58484,-0.115693 -0.80928,-0.34707 -0.22014,-0.235823 -0.3302,-0.520589 -0.3302,-0.854306 0,-0.320365 0.11006,-0.594012 0.3302,-0.820941 0.22012,-0.22693 0.48557,-0.340389 0.79633,-0.340389 z m -0.88699,3.653868 h 1.774 v 7.261682 h -1.774 z m -4.91202,0 h 1.515 v 0.914377 q 0.24603,-0.540613 0.65391,-0.820953 0.4079,-0.280317 0.89347,-0.280317 0.34314,0 0.71866,0.186893 l -0.55032,1.568471 q -0.31077,-0.160199 -0.51148,-0.160199 -0.40788,0 -0.69277,0.52061 -0.27839,0.520589 -0.27839,2.042343 l 0.007,0.35374 v 2.936717 h -1.75456 z m -3.35921,0 h 1.76104 v 7.261682 h -1.76104 v -0.767553 q -0.51796,0.507248 -1.04239,0.734178 -0.51794,0.220247 -1.12653,0.220247 -1.36611,0 -2.36316,-1.087906 -0.99707,-1.094601 -0.99707,-2.716459 0,-1.681941 0.9647,-2.756506 0.96468,-1.074576 2.34373,-1.074576 0.6345,0 1.19129,0.246953 0.55679,0.246953 1.02943,0.740859 z m -1.85816,1.495048 q -0.82225,0 -1.36609,0.600693 -0.54386,0.594013 -0.54386,1.528412 0,0.941095 0.55032,1.54846 0.55682,0.607364 1.36611,0.607364 0.83521,0 1.38552,-0.594023 0.55032,-0.600683 0.55032,-1.568459 0,-0.947765 -0.55032,-1.535106 -0.55031,-0.587341 -1.392,-0.587341 z m -7.10889,-5.27773 h 1.76104 v 1.57014 h 1.04886 v 1.568471 h -1.04886 v 7.905753 h -1.76104 v -7.905753 h -0.90643 v -1.568471 h 0.90643 z m -3.76164,3.782682 h 1.76104 v 7.261682 h -1.76104 v -0.767553 q -0.51794,0.507248 -1.04237,0.734178 -0.51796,0.220247 -1.12653,0.220247 -1.36613,0 -2.36318,-1.087906 -0.99705,-1.094601 -0.99705,-2.716459 0,-1.681941 0.9647,-2.756506 0.96466,-1.074576 2.34373,-1.074576 0.63447,0 1.19129,0.246953 0.55679,0.246953 1.02941,0.740859 z m -1.85814,1.495048 q -0.82225,0 -1.36611,0.600693 -0.54385,0.594013 -0.54385,1.528412 0,0.941095 0.55033,1.54846 0.5568,0.607364 1.3661,0.607364 0.83522,0 1.38553,-0.594023 0.55031,-0.600683 0.55031,-1.568459 0,-0.947765 -0.55031,-1.535106 -0.55031,-0.587341 -1.392,-0.587341 z m -6.89525,-5.183287 h 1.76104 v 10.949921 h -1.76104 v -0.767553 c -0.34529,0.338166 -0.69275,0.582895 -1.04237,0.734178 -0.34531,0.146834 -0.72081,0.220247 -1.12655,0.220247 -0.91074,0 -1.69846,-0.362636 -2.36316,-1.087906 -0.6647,-0.729731 -0.99705,-1.635224 -0.99705,-2.716459 0,-1.121295 0.32156,-2.04013 0.96467,-2.756506 0.64313,-0.716387 1.42437,-1.074576 2.34374,-1.074576 0.42299,0 0.82009,0.08232 1.19128,0.246953 0.37122,0.164634 0.71435,0.411587 1.02944,0.740859 z m -1.85815,5.183287 c -0.54816,0 -1.00353,0.200234 -1.3661,0.600693 -0.36258,0.396012 -0.54386,0.905483 -0.54386,1.528412 0,0.627401 0.18345,1.143552 0.55034,1.54846 0.37119,0.404906 0.82656,0.607364 1.36608,0.607364 0.5568,0 1.01865,-0.198011 1.38553,-0.594023 0.36688,-0.400459 0.55033,-0.923272 0.55033,-1.568459 0,-0.631848 -0.18345,-1.143541 -0.55033,-1.535106 -0.36688,-0.391565 -0.83088,-0.587341 -1.39199,-0.587341 z M 94.221974,32.280987 h 1.761038 v 0.740847 q 0.602124,-0.5206 1.087708,-0.720834 0.492047,-0.206906 1.00353,-0.206906 1.048852,0 1.780459,0.754212 0.615071,0.640729 0.615071,1.895505 v 4.798858 h -1.748085 v -3.18367 q 0,-1.301494 -0.116555,-1.728658 -0.110062,-0.427153 -0.394928,-0.6474 -0.278402,-0.226931 -0.692765,-0.226931 -0.537383,0 -0.925833,0.373766 -0.381999,0.367093 -0.530904,1.021177 -0.0777,0.340387 -0.0777,1.475023 v 2.916693 h -1.761038 z m -3.547975,0 h 1.761038 v 7.261682 h -1.761038 v -0.767553 q -0.517948,0.507248 -1.042373,0.734178 -0.517962,0.220247 -1.12655,0.220247 -1.366096,0 -2.363162,-1.087906 -0.997053,-1.094601 -0.997053,-2.716459 0,-1.681941 0.964689,-2.756506 0.964689,-1.074576 2.343727,-1.074576 0.634502,0 1.191291,0.246953 0.556804,0.246953 1.029431,0.740859 z m -1.858158,1.495048 q -0.822248,0 -1.366095,0.600693 -0.543847,0.594013 -0.543847,1.528412 0,0.941095 0.550325,1.54846 0.55679,0.607364 1.366096,0.607364 0.835205,0 1.38553,-0.594023 0.550326,-0.600683 0.550326,-1.568459 0,-0.947765 -0.550326,-1.535106 -0.550325,-0.587341 -1.392009,-0.587341 z m -11.036747,-1.358227 0.807214,1.127794 0.953824,-0.386946 c 0.401421,-0.347068 0.763986,-0.587345 1.087708,-0.720835 0.328037,-0.137937 0.662537,-0.206906 1.003531,-0.206906 0.699229,0 1.292725,0.251403 1.780459,0.754211 0.410049,0.427153 0.615067,1.058989 0.615067,1.895507 v 4.798857 h -1.748081 v -3.183669 c 0,-0.867664 -0.03886,-1.443883 -0.116555,-1.728658 -0.07337,-0.284771 -0.205018,-0.500571 -0.394928,-0.647402 -0.185597,-0.151286 -0.416528,-0.226929 -0.692766,-0.226929 -0.35825,0 -0.666866,0.124589 -0.925832,0.373764 -0.254667,0.244731 -0.431635,0.585122 -0.530904,1.021177 -0.0518,0.226926 -0.0777,0.7186 -0.0777,1.475024 v 2.916693 h -1.761038 z m -4.486764,0 h 1.761038 v 0.740848 q 0.602124,-0.5206 1.087708,-0.720835 0.492047,-0.206906 1.003531,-0.206906 1.048851,0 1.780458,0.754211 0.615067,0.64073 0.615067,1.895507 v 4.798857 h -1.748081 v -3.183669 q 0,-1.301495 -0.116555,-1.728658 -0.110062,-0.427155 -0.394928,-0.647402 -0.278402,-0.226929 -0.692765,-0.226929 -0.537383,0 -0.925832,0.373764 -0.382,0.367095 -0.530905,1.021177 -0.0777,0.340389 -0.0777,1.475024 V 39.67949 H 73.29233 Z"
          fill={color}
          stroke= {color}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 61.840988,4.245999 h 0.784123 c 2.57438,0 4.646963,1.88415 4.646963,4.22455 v 27.38423 c 0,2.3404 -2.072583,4.224545 -4.646963,4.224545 h -0.784123 c -2.574468,0 -4.64704,-1.884145 -4.64704,-4.224545 V 8.470549 c 0,-2.3404 2.072572,-4.22455 4.64704,-4.22455 z m 11.310048,0 c 2.791612,0 5.039008,2.24742 5.039008,5.03906 v 10.07813 c 0,2.79164 -2.247396,5.03906 -5.039008,5.03906 -2.791688,0 -5.039117,-2.24742 -5.039117,-5.03906 V 9.285059 c 0,-2.79164 2.247395,-5.03906 5.039117,-5.03906 z m -23.06786,0 h 0.784123 c 2.574384,0 4.646961,1.88415 4.646961,4.22455 v 27.38423 c 0,2.3404 -2.072577,4.224545 -4.646961,4.224545 h -0.784123 c -2.574468,0 -4.64704,-1.884145 -4.64704,-4.224545 V 8.470549 c 0,-2.3404 2.072572,-4.22455 4.64704,-4.22455 z m -10.917969,0 h 0.784124 c 2.574383,0 4.646961,1.88415 4.646961,4.22455 v 27.38423 c 0,2.3404 -2.072578,4.224545 -4.646961,4.224545 h -0.784124 c -2.57447,0 -4.647042,-1.884145 -4.647042,-4.224545 V 8.470549 c 0,-2.3404 2.072572,-4.22455 4.647042,-4.22455 z m -11.365792,20.71615 c 2.791601,0 5.039062,1.89626 5.039062,4.2517 v 6.61377 c 0,2.35545 -2.247422,4.251705 -5.039062,4.251705 -2.79168,0 -5.039062,-1.896255 -5.039062,-4.251705 v -6.61377 c 0,-2.35544 2.247382,-4.2517 5.039062,-4.2517 z m 0,-20.71615 c 2.791601,0 5.039062,1.89626 5.039062,4.25171 v 6.61377 c 0,2.35545 -2.247422,4.25171 -5.039062,4.25171 -2.79168,0 -5.039062,-1.89626 -5.039062,-4.25171 v -6.61377 c 0,-2.35545 2.247382,-4.25171 5.039062,-4.25171 z m -11.309985,0 h 0.784122 c 2.574385,0 4.646957,1.88415 4.646957,4.22455 v 27.38423 c 0,2.3404 -2.072572,4.224545 -4.646957,4.224545 H 16.48943 c -2.574469,0 -4.64704,-1.884145 -4.64704,-4.224545 V 8.470549 c 0,-2.3404 2.072571,-4.22455 4.64704,-4.22455 z m 129.22691,28.03499 h 1.76104 v 7.261685 h -1.76104 v -0.76757 q -0.51795,0.50725 -1.04237,0.73419 -0.51797,0.22024 -1.12655,0.22024 -1.36611,0 -2.36317,-1.087905 -0.99705,-1.0946 -0.99705,-2.71646 0,-1.68194 0.96469,-2.7565 0.96467,-1.07458 2.34373,-1.07458 0.6345,0 1.19129,0.24696 0.55679,0.24695 1.02943,0.74085 z m -1.85814,1.49504 q -0.82225,0 -1.36611,0.60069 -0.54385,0.59402 -0.54385,1.52842 0,0.94109 0.55032,1.54846 0.55679,0.60736 1.3661,0.60736 0.83519,0 1.38552,-0.59402 0.55032,-0.60069 0.55032,-1.56846 0,-0.94777 -0.55032,-1.53511 -0.55033,-0.58734 -1.39198,-0.58734 z m -5.83346,-5.14891 c 0.31078,0 0.57623,0.11568 0.79637,0.34706 0.22443,0.23137 0.33668,0.5117 0.33668,0.84097 0,0.32481 -0.11008,0.60291 -0.33021,0.83429 -0.22013,0.22692 -0.48341,0.34038 -0.78989,0.34038 -0.31508,0 -0.58484,-0.11569 -0.80928,-0.34707 -0.22014,-0.23582 -0.3302,-0.52059 -0.3302,-0.8543 0,-0.32037 0.11006,-0.59401 0.3302,-0.82094 0.22012,-0.22693 0.48557,-0.34039 0.79633,-0.34039 z m -0.88699,3.65387 h 1.774 v 7.261685 h -1.774 z m -4.91202,0 h 1.515 v 0.91437 q 0.24603,-0.54061 0.65391,-0.82095 0.4079,-0.28032 0.89347,-0.28032 0.34314,0 0.71866,0.1869 l -0.55032,1.56846 q -0.31077,-0.16019 -0.51148,-0.16019 -0.40788,0 -0.69277,0.52061 -0.27839,0.52058 -0.27839,2.04234 l 0.007,0.35374 v 2.936715 h -1.75456 z m -3.35921,0 h 1.76104 v 7.261685 h -1.76104 v -0.76757 q -0.51796,0.50725 -1.04239,0.73419 -0.51794,0.22024 -1.12653,0.22024 -1.36611,0 -2.36316,-1.087905 -0.99707,-1.0946 -0.99707,-2.71646 0,-1.68194 0.9647,-2.7565 0.96468,-1.07458 2.34373,-1.07458 0.6345,0 1.19129,0.24696 0.55679,0.24695 1.02943,0.74085 z m -1.85816,1.49504 q -0.82225,0 -1.36609,0.60069 -0.54386,0.59402 -0.54386,1.52842 0,0.94109 0.55032,1.54846 0.55682,0.60736 1.36611,0.60736 0.83521,0 1.38552,-0.59402 0.55032,-0.60069 0.55032,-1.56846 0,-0.94777 -0.55032,-1.53511 -0.55031,-0.58734 -1.392,-0.58734 z m -7.10889,-5.27773 h 1.76104 v 1.57014 h 1.04886 v 1.56847 h -1.04886 v 7.905755 h -1.76104 v -7.905755 h -0.90643 v -1.56847 h 0.90643 z m -3.76164,3.78269 h 1.76104 v 7.261685 h -1.76104 v -0.76757 q -0.51794,0.50725 -1.04237,0.73419 -0.51796,0.22024 -1.12653,0.22024 -1.36613,0 -2.36318,-1.087905 -0.99705,-1.0946 -0.99705,-2.71646 0,-1.68194 0.9647,-2.7565 0.96466,-1.07458 2.34373,-1.07458 0.63447,0 1.19129,0.24696 0.55679,0.24695 1.02941,0.74085 z m -1.85814,1.49504 q -0.82225,0 -1.36611,0.60069 -0.54385,0.59402 -0.54385,1.52842 0,0.94109 0.55033,1.54846 0.5568,0.60736 1.3661,0.60736 0.83522,0 1.38553,-0.59402 0.55031,-0.60069 0.55031,-1.56846 0,-0.94777 -0.55031,-1.53511 -0.55031,-0.58734 -1.392,-0.58734 z m -6.89525,-5.18328 h 1.76104 v 10.949915 h -1.76104 v -0.76756 c -0.34529,0.33817 -0.69275,0.5829 -1.04237,0.73418 -0.34531,0.14683 -0.72081,0.22025 -1.12655,0.22025 -0.91074,0 -1.69846,-0.36264 -2.36317,-1.087905 -0.6647,-0.72973 -0.99705,-1.63522 -0.99705,-2.71646 0,-1.12129 0.32156,-2.04013 0.96468,-2.7565 0.64313,-0.71639 1.42437,-1.07458 2.34374,-1.07458 0.42299,0 0.82009,0.0823 1.19128,0.24696 0.37122,0.16463 0.71435,0.41158 1.02944,0.74085 z m -1.85815,5.18328 c -0.54816,0 -1.00353,0.20024 -1.3661,0.60069 -0.36258,0.39602 -0.54386,0.90549 -0.54386,1.52842 0,0.6274 0.18344,1.14355 0.55034,1.54846 0.37119,0.4049 0.82656,0.60736 1.36608,0.60736 0.5568,0 1.01865,-0.19801 1.38553,-0.59402 0.36688,-0.40046 0.55033,-0.92327 0.55033,-1.56846 0,-0.63185 -0.18345,-1.14354 -0.55033,-1.53511 -0.36688,-0.39156 -0.83088,-0.58734 -1.39199,-0.58734 z m -11.30432,-1.49504 h 1.761038 v 0.74084 q 0.602124,-0.5206 1.087708,-0.72083 0.492047,-0.20691 1.00353,-0.20691 1.048852,0 1.780459,0.75421 0.615065,0.64073 0.615065,1.89551 v 4.798855 h -1.748079 v -3.183665 q 0,-1.3015 -0.116555,-1.72866 -0.110062,-0.42716 -0.394928,-0.6474 -0.278402,-0.22693 -0.692765,-0.22693 -0.537383,0 -0.925833,0.37376 -0.381999,0.3671 -0.530904,1.02118 -0.0777,0.34039 -0.0777,1.47502 v 2.916695 h -1.761038 z m -3.547975,0 h 1.761038 v 7.261685 h -1.761038 v -0.76757 q -0.517948,0.50725 -1.042373,0.73419 -0.517962,0.22024 -1.12655,0.22024 -1.366096,0 -2.363162,-1.087905 -0.997053,-1.0946 -0.997053,-2.71646 0,-1.68194 0.964689,-2.7565 0.964689,-1.07458 2.343727,-1.07458 0.634502,0 1.191291,0.24696 0.556804,0.24695 1.029431,0.74085 z m -1.858158,1.49504 q -0.822248,0 -1.366095,0.60069 -0.543847,0.59402 -0.543847,1.52842 0,0.94109 0.550325,1.54846 0.55679,0.60736 1.366096,0.60736 0.835205,0 1.38553,-0.59402 0.550326,-0.60069 0.550326,-1.56846 0,-0.94777 -0.550326,-1.53511 -0.550325,-0.58734 -1.392009,-0.58734 z m -11.036747,-1.35822 0.807214,1.12779 0.953824,-0.38695 c 0.401421,-0.34707 0.763986,-0.58734 1.087708,-0.72083 0.328037,-0.13794 0.662537,-0.20691 1.003531,-0.20691 0.699229,0 1.292725,0.25141 1.780459,0.75421 0.410049,0.42715 0.615067,1.05899 0.615067,1.89551 v 4.798855 h -1.748081 v -3.183665 c 0,-0.86767 -0.03886,-1.44389 -0.116555,-1.72866 -0.07337,-0.28477 -0.205018,-0.50057 -0.394928,-0.6474 -0.185597,-0.15129 -0.416528,-0.22693 -0.692766,-0.22693 -0.35825,0 -0.666866,0.12459 -0.925832,0.37376 -0.254667,0.24473 -0.431635,0.58512 -0.530904,1.02118 -0.0518,0.22692 -0.0777,0.7186 -0.0777,1.47502 v 2.916695 h -1.761038 z m -4.486764,0 h 1.761038 v 0.74084 q 0.602124,-0.5206 1.087708,-0.72083 0.492047,-0.20691 1.003531,-0.20691 1.048851,0 1.780458,0.75421 0.615067,0.64073 0.615067,1.89551 v 4.798855 h -1.748081 v -3.183665 q 0,-1.3015 -0.116555,-1.72866 -0.110062,-0.42716 -0.394928,-0.6474 -0.278402,-0.22693 -0.692765,-0.22693 -0.537383,0 -0.925832,0.37376 -0.382,0.3671 -0.530905,1.02118 -0.0777,0.34039 -0.0777,1.47502 v 2.916695 h -1.761036 z"
          fill="white"
          stroke= "white"
          strokeWidth="0"
          filter={`url(#${filter})`}
          opacity="0.7"
        />
      </g>
    </svg>
  )
}

export default LogoCNP