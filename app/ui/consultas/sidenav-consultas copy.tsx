import Link from 'next/link'
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import IconWhatsApp from "../logosIconos/icon-whatsApp"
import IconEmail from "../logosIconos/icon-Email"
import IconConsultas from "../logosIconos/icon-consultas"
import IconWeb from "../logosIconos/icon-web"


export default function SideNavConsultas() {
  return (
    <div className="flex h-full flex-col md:mt-6">
      <div className="mx-1 flex grow flex-col justify-between space-y-5 ">{/* md:space-x-0 md:space-y-2 */}
        <NavLinksConsultas />

        <div className="flex items-center mt-2 w-full leading-4 text-left font-normal mb-1.5 min-[500px]:mb-2.5      duration-200 text-[#333] !ml-0 text-start grow justify-start gap-4 rounded-md py-1.5 px-3 text-sm font-medium md:flex-none [box-shadow:_#00000069_0px_0px_12px_0px_inset,_#ffffff69_0px_0px_1px_1px] bg-[#00000068] ">
          <div className="text-white [font-variant-caps:_small-caps]">Realizá Tu Consulta</div> 
          <ArrowRightIcon className="h-5 ml-1.5 text-white " />
          {/*<Link href= "https://api.whatsapp.com/send?phone=543476606595"  target="_blank"  data-title="por whatsapp">
            <IconWhatsApp filter="filterWhatsApp1" sombraX="1.5" sombraY="1.5" size="32" className="opacity-80 hover:opacity-100 duration-200 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
          <Link href="mailto:cnp.mandataria@gmail.com?subject=Consulta&body=Cuerpo del mensaje"  data-title="por email">
            <IconEmail filter="filterEmail1" sombraX="" sombraY="" size="42" className="opacity-80 hover:opacity-100 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
          <Link href={"/register"} data-title="creá tu cuenta">
            <IconWeb filter="filterWeb1" sombraX="1" sombraY="1" size="34" fill="#444" className="opacity-80 hover:opacity-100 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
           <Link href={"/realizarConsulta"} >
            <IconConsultas filter="filterTramites1" sombraX="1" sombraY="1" size="28" className="opacity-70 hover:opacity-95 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link> */}
          <Link href= "https://api.whatsapp.com/send?phone=543476606595"  target="_blank" data-title="por whatsapp" >
            <IconWhatsApp filter="filterWhatsApp1" sombraX="1.2" sombraY="1.2"  size="32" className="opacity-70 hover:opacity-95 duration-200 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
          <Link href="mailto:cnp.mandataria@gmail.com?subject=Consulta&body=Cuerpo del mensaje"  data-title="por e-mail" /* target="_blank" */ >
            <IconEmail filter="filterEmail1" sombraX="1.2" sombraY="1.2" size="43" className="opacity-70 hover:opacity-95 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
          <Link href={"/register"} data-title="creá tu cuenta">
            <IconWeb filter="filterWeb1" sombraX="1.2" sombraY="1.2" size="34" className="opacity-70 hover:opacity-95 duration-200 bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
        </div> 
        
        <div
          className="!ml-0"
        >
          <Link href={"/"}  className="flex h-[48px] w-full text-[#555] hover:text-[#111] duration-200 grow items-center justify-start gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowLeftIcon className="h-4" />
            <div className="">Regresar</div>
          </Link>
        </div>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}