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
          <Link href="/iniciar-tramite/baja-de-vehiculo" >
            <ButtonA className="relative pl-9 h-[26px] w-full !rounded-none !rounded-t-[4px] !justify-start">
              <IconPresupuesto className="absolute w-[16px] h-[16px] bottom-1 left-[9px] "/>
              <p className="">Pedir presupuesto</p>
            </ButtonA>
          </Link>

          <Link href="/realizar-consulta" >
            <ButtonA className="!bg-[#b2439a] relative pl-9 h-[26px] w-full !rounded-none !rounded-b-[4px] !justify-start ">
              <IconConsulta className="absolute w-[16px] h-[16px] bottom-1 left-[9px] "/>
              <p className="">Realizar consulta</p>
            </ButtonA>
          </Link>
        </div>
      </Fondo> 
    </div>
  );
}
