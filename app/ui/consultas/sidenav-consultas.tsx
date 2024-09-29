import Link from 'next/link';
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas';
import {auth} from "auth"
import { Fondo } from '@/app/ui/marcos';
import { getAllPosts } from '@/app/lib/getPost';


export default async function SideNavConsultas() {
  const session = await auth()
  const allPosts = getAllPosts();
  return (
    <div className="flex h-max flex-col md:mt-6">
      <Fondo className=" p-3 lg:w-72">
        <div className="mb-4 mt-2.5 w-full text-base text-center font-medium ">
          CONSULTAS FRECUENTES
        </div>

        <NavLinksConsultas allPosts={allPosts} />

      </Fondo> 
      <div className="flex justify-center gap-2 pb-6 pt-8 sm:gap-8 lg:gap-2 ">
        <Link  
          href={session ? '/dashboard/tusConsultas' : '/login'} 
          className="text-[#ffffffcc] bg-[#300322] flex items-center text-sm duration-150 text-center px-2 py-0.5 rounded hover:bg-[#26021b] hover:text-white">
          {session ? "Ver consultas" : "Realizá tu consulta" } 
        </Link>
        <Link  
          href={session ? '/dashboard/inicioTramite' : '/login'} 
          className="text-[#ffffffcc] bg-[#300322] flex items-center text-sm duration-150 text-center px-2 py-0.5 rounded hover:bg-[#26021b] hover:text-white">
          {session ? "Ver Trámites" : "Iniciá tu trámite" } 
        </Link>
      </div>
    </div>
  );
}
