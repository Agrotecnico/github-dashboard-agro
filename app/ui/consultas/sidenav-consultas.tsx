import Link from 'next/link';
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas';
import {auth} from "auth"
import { Fondo } from '@/app/ui/marcos';
import { getAllPosts } from '@/app/lib/getPost';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';
import { ButtonA } from '@/app/ui/button';


export default async function SideNavConsultas() {
  const session = await auth()
  const allPosts = getAllPosts();
  return (
    <div className="hidden h-max flex-col md:mt-6 lg:flex lg:fixed">
      <Fondo className=" p-3 lg:w-72">
        <div className="mb-4 mt-2.5 w-full text-base text-center font-medium ">
          CONSULTAS FRECUENTES
        </div>

        <NavLinksConsultas allPosts={allPosts} />

        <div className="flex flex-col gap-[1px] text-[14px] mt-10">
          <Link href="/iniciar-tramite/baja-de-vehiculo">
            <ButtonA className={`h-[26px] pb-0.5 !opacity-75 pl-3 pr-2 w-full rounded-none rounded-t-[4px] !justify-start hover:!opacity-100`}>
              <div className="flex gap-2 items-center ">
                <p>Iniciar trámite</p>
                <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
              </div>
            </ButtonA>
          </Link>

          <Link href="/realizar-consulta">
            <ButtonA className={`h-[26px] pb-0.5 !opacity-75 pl-3 pr-2 bg-[#b2439a] w-full rounded-none rounded-b-[4px] !justify-start hover:!opacity-100`}>
              <div className="flex gap-2 items-center ">
                <p>Realizar consulta</p>
                <ChevronRightIcon className="w-4 stroke-[3] opacity-80" />
              </div>
            </ButtonA>
          </Link>
        </div>
      </Fondo> 
    </div>
  );
}
