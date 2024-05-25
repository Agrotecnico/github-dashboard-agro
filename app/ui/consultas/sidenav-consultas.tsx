import Link from 'next/link';
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import IconWhatsApp from '@/app/ui/logosIconos/icon-whatsApp';
import IconEmail from '@/app/ui/logosIconos/icon-Email';
import IconWeb from '@/app/ui/logosIconos/icon-web';
import LogoCnp from '@/app/ui/logosIconos/logo-cnp';
import {auth} from "auth"
/* import { usePathname } from 'next/navigation'
import { getAllPosts } from '@/app/lib/getPost' */


export default async function SideNavConsultas() {
  /* const pathname = usePathname()
  const allPosts = getAllPosts(); */
  const session = await auth()
  return (
    <div className="flex h-full flex-col md:mt-6">
      <div className="text-white  px-3 pt-6 flex grow flex-col justify-between rounded-lg bg-[#0000001f]  backdrop-blur [box-shadow:_#00000040_0px_0px_6px_0px_inset] ">
        
        <NavLinksConsultas />

        <div className="!ml-0 mb-4 mt-2 text-[#000000c2] flex flex-col w-full grow justify-start gap-4 rounded-md px-3 py-1.5 text-left text-sm font-normal leading-4 duration-200 min-[400px]:items-end min-[400px]:flex-row min-[500px]:mb-2.5 md:items-start md:flex-col ">
          <div className="flex items-center [font-variant-caps:_small-caps] font-semibold [text-shadow:0_1px_#ffffff66]">
            <div>Realizá Tu Consulta por:</div> 
            {/* <ArrowRightIcon className="ml-1.5 h-4 " /> */}
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
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
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
