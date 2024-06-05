import Link from 'next/link';
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import IconWhatsApp from '@/app/ui/logosIconos/icon-whatsApp';
import IconEmail from '@/app/ui/logosIconos/icon-Email';
import LogoCnp from '@/app/ui/logosIconos/logo-cnp';
import {auth} from "auth"


export default async function SideNavConsultas() {
  const session = await auth()
  return (
    <div className="flex h-max flex-col md:mt-6">
      <div className="px-3 pt-6 flex grow flex-col justify-between text-[#ffffffbb] text-[14px] [text-shadow:_1px_1px_#000] mx-1 !h-auto rounded-xl [backdrop-filter:_blur(1px)] bg-[#00000071] [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_3px_0_#00000082_inset] md:text-[15px] md:w-[280px] ">
        
        <NavLinksConsultas />

        <div className="!ml-0 mb-4 mt-2 flex flex-col w-full grow justify-start gap-4 rounded-md px-3 py-1.5 text-left text-sm font-normal leading-4 duration-200 min-[400px]:items-end min-[400px]:flex-row min-[500px]:mb-2.5 md:items-start md:flex-col ">
          <div className="flex items-center [font-variant-caps:_small-caps]">
            <div>Realizá Tu Consulta por:</div> 
          </div>
          <div className="flex gap-4 items-end">
            <Link
              href="https://api.whatsapp.com/send?phone=543476606595"
              target="_blank"
              data-title="whatsapp"
            >
              <IconWhatsApp
                filter="filterWhatsApp1"
                sombraX="-1.2"
                sombraY="1.2"
                size="32"
                className="opacity-70 duration-200 hover:opacity-95"
              />
            </Link>
            <Link
              href="mailto:cnp.mandataria@gmail.com?subject=Consulta&body=Cuerpo del mensaje"
              data-title="e-mail"
            >
              <IconEmail
                filter="filterEmail1"
                sombraX="-1.2"
                sombraY="1.2"
                size="43"
                className="opacity-70 duration-200 hover:opacity-95"
              />
            </Link>
            <Link href={session ? '/dashboard' : "/login"} data-title="cnp mandataria">
              <LogoCnp
                filter="filterCnp1"
                sombraX="-1.2"
                sombraY="1.2"
                size="62"
                className="opacity-70 duration-200 hover:opacity-95"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="!ml-0 mt-6">
        <Link
          href={'/'}
          className="flex h-[48px] w-full grow items-center justify-start gap-2 rounded-md p-3 text-sm font-medium text-[#000c] duration-200 hover:text-[#000] md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <ArrowLeftIcon className="h-4" />
          <div className="">Regresar</div>
        </Link>
      </div>
    </div>
  );
}
