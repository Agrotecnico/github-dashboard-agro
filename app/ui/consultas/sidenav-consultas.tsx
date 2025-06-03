import Link from 'next/link';
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas';
import { Fondo } from '@/app/ui/marcos';
import { getAllPosts } from '@/app/lib/getPost';
import { ButtonA } from '@/app/ui/button';
import IconPresupuesto from '@/app/ui/logosIconos/icon-presupuesto';
import IconConsulta from '@/app/ui/logosIconos/icon-consulta';


export default async function SideNavConsultas() {
  const allPosts = getAllPosts();
  return (
    <div className="hidden h-max flex-col lg:flex lg:fixed">
      <Fondo className=" p-3 lg:w-72">
        <div className="mb-4 mt-2.5 w-full text-base text-center font-medium ">
          CONSULTAS FRECUENTES
        </div>

        <NavLinksConsultas allPosts={allPosts} />

        <div className="flex flex-col gap-[1px] text-[14px] mt-3" >
          <ButtonA className="relative h-6 !pr-4 !pl-[52px] !rounded-none !rounded-t-[4px] !justify-start sm:h-[26px]">
            <Link 
              href="/iniciar-tramite/baja-de-vehiculo"
              className="relative"
              >
              <IconPresupuesto  color="#ffffff" className="absolute w-[18px] h-[18px] bottom-[2px] -left-[36px] "/>
              <p className="w-full">Pedir presupuesto</p>
            </Link>
          </ButtonA>
          
          <ButtonA className="relative h-6 !pr-4 !pl-[52px] !bg-[#b2439a] !rounded-none !rounded-b-[4px] !justify-start sm:h-[26px]">
            <Link href="/realizar-consulta">
              <IconConsulta color="#ffffff" className="absolute w-[18px] h-[18px] bottom-[3px] left-[16px] " />
              <p className="w-full">Realizar consulta</p>
            </Link>
          </ButtonA>
        </div>
      </Fondo> 
    </div>
  );
}
