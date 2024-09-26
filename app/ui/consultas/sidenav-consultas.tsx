import Link from 'next/link';
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import IconWhatsApp from '@/app/ui/logosIconos/icon-whatsApp';
import IconEmail from '@/app/ui/logosIconos/icon-Email';
import LogoCnp from '@/app/ui/logosIconos/logo-cnp';
import {auth} from "auth"
import { Fondo } from '@/app/ui/marcos';
import IconCnpColor from '@/app/ui/logosIconos/icon-cnp-color';

import { getAllPosts } from '@/app/lib/getPost';


export default async function SideNavConsultas() {
  const session = await auth()
  /* const allPosts = getAllPosts(); */
  return (
    <div className="flex h-max flex-col md:mt-6">
      {/* <div className="px-3 pt-6 flex grow flex-col justify-between text-[#ffffffbb] text-[14px] [text-shadow:_1px_1px_#000] mx-1 !h-auto rounded-xl [backdrop-filter:_blur(1px)] bg-[#00000071] [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_3px_0_#00000082_inset] md:text-[15px] min-[1024px]:w-[280px] "> */}
      <Fondo className=" p-3 lg:w-72">
        {/* <div className="mb-2 w-full pb-2 pl-2 text-left text-[14px] leading-4 min-[500px]:mb-3 min-[500px]:pb-3 ">
          CONSULTAS FRECUENTES:
        </div> */}
        <div className="mb-4 mt-2.5 w-full text-base text-center font-medium ">
          CONSULTAS FRECUENTES
        </div>

        <NavLinksConsultas /* allPosts={allPosts} */ />

        {/* <div className="!ml-0 mb-4 mt-2 flex flex-col w-full grow justify-start gap-4 rounded-md px-3 py-1.5 text-left text-sm font-normal leading-4 duration-200 min-[400px]:items-end min-[400px]:flex-row min-[500px]:mb-2.5 md:items-start md:flex-col ">
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
        </div> */}
        {/* <div className="mt-8 mb-4 flex flex-col items-center pl-4 gap-3 ">
          <div className="text-white bg-[#1d0215] text-sm duration-150 text-center px-2 py-[2px] rounded ">
            Realizá tu consulta:
          </div>
          <div className="flex items-end gap-8">
            <Link
              href="https://api.whatsapp.com/send?phone=543476606595"
              target="_blank"
              data-title="whatsapp"
            >
              <IconWhatsApp
                filter="filterWhatsApp2"
                sombraX="1"
                sombraY="1"
                size="34"
                className="opacity-80 duration-200 hover:opacity-100 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
              />
            </Link>
            <Link
              href={session ? '/dashboard' : '/login'}
              data-title="cnp mandataria"
            >
              <IconCnpColor
                filter="filterCnp1"
                sombraX="0.8"
                sombraY="0.8"
                size="58"
                className="bottom-[72px] right-4 opacity-80 duration-200 hover:opacity-100 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
              />
            </Link>
          </div>
        </div> */}
      </Fondo> 
      <div className="flex justify-center gap-2 pb-6 pt-8 sm:gap-8 lg:gap-2 ">
        <Link  
          href={session ? '/dashboard/' : '/login'} 
          className="text-white bg-[#50073ae8] text-sm duration-150 text-center px-2 py-[2px] rounded opacity-80 hover:opacity-100 ">
          Realizá tu consulta
        </Link>
        <Link  
          href={session ? '/dashboard/inicioTramite' : '/login'} 
          className="text-white bg-[#50073ae8] text-sm duration-150 text-center px-2 py-[2px] rounded opacity-80 hover:opacity-100 ">
          Iniciá tu trámite
        </Link>
      </div>
      {/* </div> */}
      {/* <div className="!ml-0 mt-6">
        <Link
          href={'/'}
          className="flex h-[48px] w-full grow items-center justify-start gap-2 rounded-md p-3 text-sm font-medium text-[#000c] duration-200 hover:text-[#000] md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <ArrowLeftIcon className="h-4" />
          <div className="">Regresar</div>
        </Link>
      </div> */}
    </div>
  );
}
