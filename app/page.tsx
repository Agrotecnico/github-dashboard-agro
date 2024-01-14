import LogoCNP from '@/app/ui/logoCNP'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import styles from '@/app/ui/home.module.css'
import { lusitana, } from '@/app/ui/fonts'
import Image from 'next/image'
import clsx from 'clsx'

export default function Page() {
  return (
    <main className="flex h-full flex-col p-4 max-w-[964px] mx-auto bg-white">
      <div className="flex h-32 w-full justify-between shrink-0 items-center rounded-lg bg-[#ff8fe7] p-4">
        <LogoCNP  color={"#444"} colorIcon={"white"} className="w-[140px] md:w-[180px]" />
        <div className="text-[32px] font-extrabold text-[#cd70b9] [text-shadow:_1px_1px_#954d86] mr-8">2024</div>
      </div>
      <div className="mt-4 flex flex-col justify-between grow flex-col gap-4 [min-height:_calc(100%_-_160px)]">

        <div className="flex md:[height:_calc(100%_-_157px)] [height:_calc(100%_-_213px)] gap-6 rounded-lg ">
          <div className="p-4 bg-[#fff5fdfa] rounded-lg flex flex-col justify-evenly md:w-[45%]">
            <div className={` text-[18px] text-gray-800 md:text-[20px] min-[940px]:text-[24px] min-[1048px]:text-[26px]  md:leading-normal`}>
              <div className="flex flex-col mb-6 md:mb-9">
                <strong>Bienvenido a </strong>
                <LogoCNP  color={"#888"} colorIcon={"#222"}  className="w-[120px] md:w-[150px]" />           
              </div>
            </div>
            <p className="text-center mb-10 px-8 text-[18px] min-[375px]:text-[20px] min-[500px]:text-[22px] md:text-[18px] min-[940px]:text-[24px] ">Este es un sitio donde hará consultas y encontrará soluciones</p>
            <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-[#bd53a6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9f3488] md:text-base"
            >
              <span>Ingrese</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          <div className="imageHero p-4 bg-[#fff5fdfa] rounded-lg flex flex-col justify-evenly hidden md:flex w-[60%]">
            
          </div>
        </div>

        <div className="flex items-start justify-center h-[213px] md:h-[157px]">
          {/* Add Hero Images Here */}
          <div className="flex w-full flex-col justify-center bg-[#ffd7f7] rounded-lg [box-shadow:_inset_0px_0px_8px_1px_#ff8fe7]">
            <div  className="flex flex-col justify-evenly md:items-center p-4 h-full">
              
              <div className="flex flex-col w-full">
                <div className="w-full mb-2 flex flex-col items-center md:justify-around md:flex-row text-[15px] font-semibold leading-6">
                  <div className="flex flex-col items-start text-[16px] mb-2 border-b-[#ff8fe799] border-b">
                    <div>C<span className="font-normal mr-1">arina</span>N<span className="font-normal mr-1">oemi</span>P<span className="font-normal">acheco</span></div>
                    <div className="text-[#222] font-normal">Mandataria Nacional del Automotor</div>
                  </div>
                  <div className="flex flex-col mr-[18px] md:mr-0">
                    <div className="text-[#333]"><span className="font-normal">Mat Nac: </span>M202427306151350</div>
                    <div className="text-[#333]"><span className="font-normal">Email: </span>cnp.mandataria@gmail.com</div>
                    <div className="text-[#333]"><span className="font-normal">Cel: </span>3476 606595</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between justify-between w-full items-center pt-2 border border-t-[#b75fa444]">
                <div className="flex flex-col items-center border border-[#aaac] rounded-md">
                  <Image
                    src="/dnrpa-cedula1.png"
                    width={80}
                    height={63}
                    alt="Logo cnp"
                    className="w-[100px] max-[500px]:w-[88px] max-[375px]:w-[74px] rounded-md"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/dnrpa.png"
                    width={80}
                    height={63}
                    alt="Logo cnp"
                    className="w-[100px] max-[500px]:w-[88px] max-[375px]:w-[74px] rounded"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/patente-9.png"
                    width={130}
                    height={38}
                    alt="Logo cnp"
                    className="w-[100px] max-[500px]:w-[88px] max-[375px]:w-[74px] rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
