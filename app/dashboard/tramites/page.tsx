import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative mb-2 flex h-[364px] flex-col justify-between">
      <h2 className="z-20 mt-3 text-center text-[17px] font-semibold">
        Gestiones del Automotor:
      </h2>
      <div className=" z-10 w-full px-12 text-[16px] text-[#222] [line-height:_1] [text-shadow:_1px_1px_white]">
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">I</span>nscripción
          inicial
        </p>
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">B</span>aja por
          destrucción total, robo, hurto e incendio
        </p>
        <p className="mb-3 ">
          <span className="font-extrabold text-[#d358b9]">D</span>enuncia de
          compra y poseción - Venta
        </p>
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">A</span>ltas/Bajas
          municipales
        </p>
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">D</span>uplicado de
          chapa patente
        </p>
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">C</span>ancelacion de
          prenda
        </p>
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">T</span>ransferencia
          de dominio de un auto, moto o maquinaria
        </p>
        <p className="mb-3">
          <span className="font-extrabold text-[#d358b9]">M</span>ás otras
          gestiones...
        </p>
      </div>
      <div className="z-20 mb-2 flex w-full justify-center">
        <Image
          src="/iconoAuto.png"
          width={412}
          height={561}
          className="h-[50px] w-[100px]"
          alt="iconoAuto"
        />
      </div>
      <div className="absolute h-full w-full">
        <Image
          src="/tramites-x.png"
          width={412}
          height={561}
          className="h-full w-full"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </div>
  );
}
