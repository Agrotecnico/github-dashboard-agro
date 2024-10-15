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
          className="text-[#ffffffdd] bg-[#a74994] flex items-center text-sm duration-150 text-center px-3 h-[26px] rounded-xl hover:bg-[#883b79] hover:text-white active:bg-[#843a75cc] ">
          {session ? "Ver tus consultas" : "Realizá tu consulta" } 
        </Link>
        <Link  
          href={session ? '/dashboard/inicioTramite' : '/login'} 
          className="text-[#ffffffdd] bg-[#a74994] flex items-center text-sm duration-150 text-center px-3 h-[26px] rounded-xl hover:bg-[#883b79] hover:text-white active:bg-[#843a75cc] ">
          {session ? "Ver tus Trámites" : "Iniciá tu trámite" } 
        </Link>
      </div>
    </div>
  );
}
