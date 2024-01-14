import React from "react"
import clsx from "clsx"
/* import { IconProps } from "types/icon" */
import { inter } from '@/app/ui/fonts';

export type IconProps = {
  color?: string
  colorIcon?: string
  size?: string | number
} & React.SVGAttributes<SVGElement>

const LogoCNP: React.FC<IconProps> = ({
  size,
  color,/* currentColor",*/
  colorIcon,/*= "black", */
  ...attributes
}) => {
  return (
    <svg
      width={size}
      /* height={size} */
      viewBox="0 0 128 45"
      fill={colorIcon}
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <g>
        <path
          d="m 37.36431,2.772115 c 0.14638,-3.32379 7.8408,-3.42471 7.70524,0 l -0.33232,39.43594 c 0.11893,3.44575 -7.56652,3.28183 -7.70525,0 l -7.54009,-19.72178 h 7.70664 z m 0,0 c 0.14638,-3.32379 7.8408,-3.42471 7.70524,0 l -0.33232,39.43594 c 0.11893,3.44575 -7.56652,3.28183 -7.70525,0 l -7.54009,-19.72178 h 7.70664 z m -15.41329,0 c 0.14637,-3.32379 7.84083,-3.42471 7.70526,0 l 7.54225,19.71416 h -7.70664 l -0.1679,19.72178 c 0.119,3.44575 -7.56649,3.28183 -7.70524,0 z m 27.0483,0 c 0.1464,-3.32379 7.84082,-3.42472 7.70527,0 l -0.33233,39.43594 c 0.11894,3.44575 -7.56651,3.28184 -7.70525,0 z m 9.95598,-0.30633 c 0.0256,-2.966 7.73229,-2.966 7.70731,0 l -0.15234,17.89306 c -0.0239,2.83657 -7.73055,2.83657 -7.70524,0 z m -48.734,30.40145 c 0.0121,-2.97242 7.71844,-2.9596 7.70664,0 l -0.0813,9.63954 c -0.0126,1.483 -2.33075,2.2245 -3.89671,2.2245 -1.5167,0 -3.82244,-0.7415 -3.80993,-2.2245 z m 0.25621,-30.40144 c 0.012,-2.97243 7.71844,-2.95961 7.70663,0 l -0.0812,9.63955 c -0.0125,1.483 -2.33077,2.2245 -3.89669,2.22448 -1.51674,2e-5 -3.82246,-0.74148 -3.80994,-2.22448 z m -9.95563,0.30632 c 0.14636,-3.32379 7.8408,-3.42472 7.70525,0 l -0.33235,39.43594 c 0.11899,3.44575 -7.56649,3.28184 -7.70523,0 z"
          fill={colorIcon}
          stroke=  "#black" 
          strokeWidth="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 92.109093,44.633878 c -0.0186,-0.05354 -0.0898,-0.255224 -0.15827,-0.448102 -0.0685,-0.192877 -0.17187,-0.508494 -0.22968,-0.701371 -0.12725,-0.424495 -0.2504,-0.776421 -0.44141,-1.261329 -0.0791,-0.200825 -0.14382,-0.40594 -0.14382,-0.455806 0,-0.04984 -0.0503,-0.201175 -0.11176,-0.336239 -0.0615,-0.135064 -0.14682,-0.368312 -0.18965,-0.518327 -0.0429,-0.150016 -0.22253,-0.676042 -0.39934,-1.168951 -0.17679,-0.49291 -0.36658,-1.055627 -0.42174,-1.250478 -0.0552,-0.194858 -0.14037,-0.429264 -0.18935,-0.520907 -0.049,-0.09164 -0.0902,-0.230304 -0.0917,-0.308127 -10e-4,-0.07783 -0.0703,-0.28178 -0.15301,-0.453227 -0.0827,-0.171447 -0.15156,-0.359024 -0.15302,-0.416837 -0.001,-0.05779 -0.058,-0.221818 -0.12554,-0.364459 -0.0676,-0.142635 -0.111378,-0.340813 -0.09729,-0.44039 0.02549,-0.180189 0.03181,-0.181159 1.32261,-0.202394 l 1.29699,-0.02135 0.16228,0.228187 c 0.0892,0.125507 0.16227,0.276513 0.16227,0.335559 0,0.05907 0.0537,0.299123 0.11934,0.533481 0.0656,0.234366 0.16802,0.618996 0.22753,0.854735 0.0595,0.23574 0.15064,0.586425 0.20251,0.779303 0.0519,0.192878 0.1556,0.578633 0.23053,0.857234 0.26099,0.970462 0.38607,1.443746 0.4634,1.753436 0.0429,0.171447 0.15223,0.432974 0.24314,0.581172 0.15713,0.256146 0.17063,0.262147 0.27335,0.121486 0.0595,-0.08139 0.10805,-0.221387 0.10805,-0.311124 0,-0.08973 0.07,-0.362702 0.15566,-0.606597 0.0856,-0.243902 0.15566,-0.516771 0.15566,-0.606381 0,-0.08962 0.0351,-0.228634 0.078,-0.308929 0.0429,-0.0803 0.12914,-0.367308 0.19162,-0.637806 0.0625,-0.270492 0.18291,-0.737283 0.26764,-1.037315 0.0847,-0.300032 0.19365,-0.703318 0.24204,-0.896196 0.21424,-0.853859 0.41954,-1.449087 0.53087,-1.539128 0.085,-0.06872 0.48234,-0.09741 1.34932,-0.09741 1.22405,0 1.22906,6.73e-4 1.27467,0.182648 0.0281,0.112151 -0.0634,0.495637 -0.23715,0.993611 -0.15561,0.446027 -0.32076,0.951234 -0.367,1.122681 -0.0462,0.171447 -0.10792,0.346793 -0.13705,0.389655 -0.0291,0.04284 -0.15033,0.393547 -0.26932,0.779303 -0.119,0.385755 -0.2529,0.770715 -0.29758,0.855475 -0.0447,0.08475 -0.12641,0.312701 -0.18166,0.506548 -0.0552,0.193841 -0.31483,0.966146 -0.57685,1.716225 -0.26203,0.75008 -0.50537,1.468983 -0.54077,1.597568 -0.0354,0.128585 -0.12124,0.365301 -0.19076,0.526032 l -0.12639,0.292239 h -1.59685 c -1.20764,0 -1.60508,-0.02377 -1.63056,-0.09741 z m -9.534209,-4.302905 c 0,-4.270712 0.0047,-4.402698 0.150538,-4.480993 0.0828,-0.04438 0.625645,-0.08067 1.206326,-0.08067 1.290483,0 1.3671,0.04317 1.3671,0.769757 0,0.562934 0.170542,0.787123 0.324523,0.426604 0.175559,-0.411019 0.612825,-0.87816 1.008093,-1.076951 0.314124,-0.157988 0.507218,-0.197341 0.968207,-0.197341 0.698853,0 0.671666,-0.05792 0.64016,1.36378 l -0.02246,1.013089 -0.946825,0.04041 c -0.792177,0.03381 -0.9765,0.06553 -1.128497,0.194292 -0.314488,0.26635 -0.413813,0.380084 -0.611722,0.700442 l -0.192576,0.311724 -0.02321,2.708078 -0.02321,2.708079 h -1.358229 -1.358228 z m -6.542398,4.564156 c -0.109703,-0.03556 -0.431489,-0.08951 -0.715089,-0.119917 -0.290596,-0.03118 -0.555855,-0.103827 -0.607801,-0.166503 -0.05071,-0.06115 -0.142937,-0.111209 -0.204986,-0.111209 -0.06202,0 -0.264861,-0.08922 -0.450705,-0.198286 -0.293474,-0.172208 -0.488808,-0.350686 -1.052505,-0.96168 -0.195227,-0.211601 -0.424621,-0.64337 -0.625827,-1.177942 -0.175007,-0.464973 -0.190659,-0.615278 -0.190659,-1.83136 0,-1.207846 0.01655,-1.36954 0.187558,-1.831368 0.103152,-0.278601 0.234487,-0.561909 0.291854,-0.629576 0.05737,-0.06767 0.104295,-0.158455 0.104295,-0.201754 0,-0.07508 0.368425,-0.545093 0.628188,-0.801414 0.441947,-0.436093 1.053642,-0.807725 1.485999,-0.902816 0.127117,-0.02795 0.325074,-0.09991 0.439909,-0.159897 0.345851,-0.18068 1.945474,-0.148197 2.577032,0.05233 0.281253,0.0893 0.563899,0.194588 0.628107,0.233974 0.06423,0.0394 0.192999,0.104763 0.28621,0.145281 0.586903,0.255123 1.402507,1.238564 1.709966,2.061833 0.142547,0.381674 0.334618,1.510363 0.336965,1.980077 0.0034,0.681766 0.206735,0.6378 -2.949874,0.6378 -2.598367,0 -2.80266,0.0099 -2.968117,0.144075 -0.169599,0.137509 -0.17307,0.161472 -0.07623,0.526032 0.09867,0.371457 0.435215,0.966429 0.546653,0.966429 0.03047,0 0.131483,0.06614 0.224559,0.146965 0.323366,0.280823 1.733272,0.282736 2.065307,0.0027 0.07228,-0.06095 0.257975,-0.242306 0.412662,-0.403037 l 0.281247,-0.29224 0.82414,0.0047 c 1.181917,0.0067 1.440819,0.06297 1.470777,0.321233 0.06744,0.581442 -0.845764,1.669222 -1.775128,2.114461 -0.759683,0.363954 -2.374292,0.616517 -2.88451,0.451213 z m 2.117199,-5.546904 c 0.13346,-0.07152 0.14854,-0.131501 0.10285,-0.409132 -0.0717,-0.435723 -0.49123,-0.940337 -0.953955,-1.147419 -0.947477,-0.42403 -2.093234,0.08244 -2.38537,1.054428 -0.06343,0.211103 -0.107894,0.389062 -0.09876,0.395454 0.22316,0.156266 0.500519,0.186021 1.753376,0.188102 0.872776,0.0013 1.486106,-0.0301 1.581859,-0.08143 z m -12.580108,5.534761 c -0.214025,-0.03724 -0.634295,-0.09986 -0.93393,-0.139072 -1.171216,-0.153269 -2.148826,-0.708632 -2.840703,-1.613765 -0.296489,-0.387877 -0.801083,-2.064459 -0.663056,-2.203093 0.02919,-0.0293 0.635351,-0.05334 1.347009,-0.05334 h 1.293927 l 0.04816,0.233793 c 0.09255,0.449294 0.692476,1.20792 0.955232,1.20792 0.04439,0 0.143294,0.05678 0.219844,0.126127 0.110759,0.100365 0.318677,0.126376 1.017886,0.127352 0.750624,0.0013 0.925147,-0.02324 1.197347,-0.166638 0.583694,-0.30748 0.863097,-0.780043 0.765192,-1.294188 -0.107625,-0.56523 -0.889808,-1.037908 -2.010496,-1.214965 -0.252829,-0.03994 -0.501259,-0.107167 -0.552068,-0.149389 -0.05078,-0.04223 -0.299232,-0.108946 -0.552061,-0.148278 -0.670656,-0.104333 -1.572187,-0.458298 -2.090645,-0.820838 -0.76423,-0.534404 -1.081145,-1.011405 -1.246333,-1.875913 -0.193827,-1.014361 0.07533,-2.00317 0.764803,-2.80973 0.26542,-0.310498 1.14957,-0.969318 1.300834,-0.969318 0.04318,0 0.215788,-0.07014 0.383599,-0.155861 0.16781,-0.08572 0.402814,-0.15624 0.52223,-0.156704 0.119423,-4.65e-4 0.389053,-0.05307 0.599178,-0.116893 0.490746,-0.149073 1.546951,-0.149073 2.03769,0 0.210131,0.06385 0.477024,0.116428 0.593104,0.116893 0.385495,0.0013 1.375622,0.540829 1.900375,1.035072 0.272685,0.256826 0.49579,0.503416 0.49579,0.547981 0,0.04459 0.04675,0.136385 0.103818,0.204051 0.152798,0.181078 0.440979,1.037423 0.440979,1.31038 0,0.306389 -0.09489,0.329888 -1.337458,0.331228 -1.128545,0.0013 -1.344232,-0.05348 -1.421152,-0.360337 -0.0561,-0.223859 -0.338769,-0.535663 -0.701106,-0.773383 -0.166505,-0.109248 -0.381183,-0.136081 -1.088706,-0.136081 -0.758116,0 -0.918084,0.02276 -1.144492,0.16288 -0.654029,0.404748 -0.815658,1.103082 -0.372332,1.608674 0.257934,0.294158 0.961784,0.668269 1.257276,0.668269 0.100442,0 0.381917,0.07013 0.625491,0.155855 0.24358,0.08572 0.550547,0.155862 0.682158,0.155862 0.13161,0 0.333865,0.04849 0.449454,0.107679 0.115588,0.0592 0.356989,0.132108 0.536449,0.161957 0.179454,0.02984 0.367611,0.104131 0.418124,0.165076 0.05051,0.06095 0.148836,0.111579 0.218505,0.112535 0.06967,6.74e-4 0.214227,0.07031 0.32124,0.154125 0.107013,0.08382 0.222777,0.153174 0.257255,0.154131 0.112003,0.0034 0.956362,0.890302 1.114144,1.170688 0.08442,0.150016 0.219299,0.563917 0.299723,0.919775 0.121864,0.539172 0.131416,0.708039 0.05731,1.013096 -0.0489,0.201336 -0.112037,0.506345 -0.140267,0.677792 -0.02825,0.171447 -0.09528,0.364324 -0.149004,0.428617 -0.05374,0.06432 -0.120438,0.191854 -0.148257,0.28347 -0.04406,0.145032 -0.538219,0.691168 -0.838494,0.926652 -0.253468,0.198784 -0.843747,0.504345 -0.974281,0.504345 -0.07917,0 -0.215351,0.05011 -0.302642,0.11131 -0.08729,0.06122 -0.524101,0.150043 -0.970703,0.19739 -0.446602,0.04735 -0.934576,0.09925 -1.084394,0.115324 -0.149818,0.0161 -0.44751,-0.0013 -0.661536,-0.03852 z"
          fill={color}
          stroke= {color} /*"#888" {color}*/
          strokeWidth="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 122.88432,44.930293 c -0.0237,-0.02371 -0.30363,-0.07927 -0.6221,-0.12346 -0.51315,-0.07121 -0.85872,-0.183422 -1.24057,-0.402849 -0.0642,-0.03691 -0.20429,-0.107787 -0.31131,-0.157539 -0.36961,-0.17183 -1.14369,-1.069016 -1.42235,-1.648558 -0.27595,-0.573898 -0.52406,-1.677101 -0.52253,-2.323401 10e-4,-0.576026 0.27098,-1.715552 0.5388,-2.277165 0.28594,-0.599619 1.13088,-1.528035 1.57061,-1.725789 0.14494,-0.0652 0.31606,-0.15013 0.38026,-0.188776 0.0642,-0.03866 0.34686,-0.143328 0.62811,-0.232627 0.63196,-0.20065 2.30702,-0.234049 2.65375,-0.05294 0.11421,0.05967 0.35043,0.13264 0.52492,0.162159 0.1745,0.0295 0.33736,0.08622 0.36191,0.125999 0.0246,0.0398 0.16798,0.123931 0.31873,0.187005 0.40091,0.167736 1.28166,1.09333 1.52003,1.597433 0.45983,0.972456 0.49124,1.127341 0.48983,2.415839 -10e-4,1.247993 -0.0849,1.672467 -0.48242,2.451023 -0.54169,1.060941 -1.69387,1.884782 -2.90176,2.074851 -0.75898,0.119426 -1.42965,0.173104 -1.48391,0.118766 z m 1.16059,-2.26905 c 0.38172,-0.252947 0.5634,-0.509248 0.78363,-1.105513 0.15943,-0.431661 0.17499,-0.585853 0.14548,-1.441713 -0.0242,-0.702085 -0.0679,-1.020867 -0.16328,-1.192146 -0.0716,-0.128585 -0.13045,-0.26243 -0.13072,-0.297439 -2.6e-4,-0.03502 -0.0948,-0.187489 -0.21011,-0.338859 -0.31457,-0.412964 -1.31572,-0.811307 -1.45833,-0.580256 -0.0235,0.03812 -0.13941,0.09322 -0.25753,0.122457 -0.79876,0.197706 -1.31867,1.722872 -1.07695,3.15925 0.15242,0.905706 0.34836,1.263194 0.92903,1.69499 0.34512,0.256638 1.03517,0.246677 1.43878,-0.02074 z m -8.74358,-8.16022 c -0.58563,-0.209224 -0.89378,-0.630116 -0.8945,-1.22174 -6.2e-4,-0.506359 0.20075,-0.817463 0.73021,-1.128157 0.60987,-0.357879 1.23461,-0.230365 1.77921,0.363159 0.18778,0.204644 0.21403,0.295553 0.21403,0.741365 0,0.427923 -0.0321,0.550291 -0.20359,0.775383 -0.35473,0.465679 -1.06364,0.670673 -1.62536,0.46999 z m -0.89501,5.82634 c 0,-4.308064 0.003,-4.402058 0.15433,-4.483033 0.095,-0.05092 0.61115,-0.07444 1.34253,-0.06115 l 1.18818,0.02148 0.0201,4.461508 0.0201,4.461515 h -1.36262 -1.36262 z m -6.15368,4.603718 c -0.0243,-0.02485 -0.32011,-0.08359 -0.65731,-0.130552 -0.33721,-0.04694 -0.68409,-0.135165 -0.77084,-0.196009 -0.0867,-0.06082 -0.20072,-0.11063 -0.25325,-0.11063 -0.3454,0 -1.50974,-1.087686 -1.80762,-1.688605 -0.10266,-0.207102 -0.22258,-0.446687 -0.2665,-0.53241 -0.11259,-0.219771 -0.35658,-1.567496 -0.35977,-1.987222 -0.004,-0.575138 0.26265,-1.716502 0.53534,-2.288332 0.28594,-0.599619 1.13088,-1.528035 1.57061,-1.725789 0.14494,-0.0652 0.31606,-0.148002 0.38027,-0.184055 0.0642,-0.03603 0.34438,-0.140735 0.62262,-0.232641 0.63301,-0.209095 2.30612,-0.242077 2.66887,-0.0526 0.11953,0.06243 0.34717,0.136788 0.50588,0.16525 0.15871,0.02849 0.3411,0.09576 0.40531,0.149558 0.0642,0.05381 0.18726,0.119217 0.27344,0.145389 0.22654,0.06879 0.82731,0.648455 1.14091,1.10084 0.30106,0.434287 0.45548,0.888928 0.50955,1.500158 l 0.0362,0.409133 h -1.20458 c -1.16371,0 -1.20842,-0.0061 -1.31796,-0.17534 -0.0623,-0.09644 -0.13685,-0.270795 -0.16553,-0.387459 -0.0287,-0.116657 -0.18774,-0.350612 -0.35345,-0.51989 -0.23215,-0.237153 -0.38372,-0.320156 -0.6606,-0.361724 -1.15668,-0.17369 -1.81642,0.393985 -2.04097,1.756137 -0.17828,1.081503 0.038,2.167525 0.54091,2.71579 0.23115,0.252018 0.8533,0.557282 1.13576,0.557282 0.51469,0 1.29405,-0.557518 1.3737,-0.982686 0.0889,-0.474341 0.18463,-0.504629 1.51934,-0.480598 l 1.19789,0.02155 -0.0213,0.264491 c -0.0343,0.426637 -0.29585,1.132898 -0.59009,1.593473 -0.276,0.432031 -1.2043,1.220285 -1.43709,1.220285 -0.0652,0 -0.17375,0.04816 -0.24133,0.107019 -0.18472,0.160893 -2.1536,0.447468 -2.26842,0.330171 z m -8.477887,-4.60192 c 0,-4.27249 0.005,-4.404496 0.15054,-4.482791 0.0847,-0.04539 0.664237,-0.08067 1.324987,-0.08067 h 1.17445 l 0.0766,0.20164 c 0.0477,0.125703 0.069,1.805848 0.0564,4.461508 l -0.0201,4.259868 -1.38144,0.02128 -1.381427,0.02128 z m 0.895007,-5.828138 c -0.57273,-0.204617 -0.893887,-0.632062 -0.894207,-1.190133 -2.8e-4,-0.499078 0.19469,-0.823114 0.678207,-1.127133 0.61704,-0.387971 1.24063,-0.287242 1.8038,0.291357 0.20619,0.211851 0.34472,0.776919 0.26913,1.097816 -0.17182,0.729389 -1.10609,1.196335 -1.85693,0.928093 z"
          fill={color}
          stroke=  "#888" /*{color}*/
          strokeWidth="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          /* className="scale-10" */
        />
      </g>
    </svg>
  )
}

export default LogoCNP