import Image from 'next/image'

export default function Page() {
    return (
      <div className="fondo-automotores flex flex-col relative justify-between h-[400px] mb-2">{/* [height:_calc(100%_-_100px)] */}
        <div className="z-10 bg-[#bd59a8ff] text-[14px] leading-6 text-white text-center">
          REPÚBLICA ARGENTINA
          <div className="absolute top-0 w-[24px] h-full top-[3px] right-2">
          <Image
          src="/banderaArg.png"
          width={412}
          height={561}
          className="w-full object-contain"
          alt="bandera argentina"
          />
        </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <Image
          src="/automotores-2.png"
          width={412}
          height={561}
          objectFit='scale-down'
          className="h-full w-full object-scale-down"
          alt="ilustración patente"
          />
        </div>
        <div className="absolute top-0 w-[106px] md:w-[136px] top-[122px] left-8 max-[500px]:left-4 h-full">
          <Image
          src="/patente.png"
          width={152}
          height={52}
          className="h-full w-full object-contain"
          alt="ilustración patente"
          />
        </div>
        <div className="absolute bottom-0 w-full z-10 bg-[#bd59a8ff] leading-6 text-[18px] text-white text-center [font-variant:_small-caps]">Mandataria Nacional</div>
      </div>
    ) 
  }