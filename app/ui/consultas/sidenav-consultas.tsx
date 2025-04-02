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
      </Fondo> 

      <div className="flex justify-center gap-2 pb-6 pt-8 sm:gap-8 lg:gap-2 ">
        <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'} >
          <ButtonA className={`h-7 pl-3 pr-2 text-[14.5px] w-max`}>
            <div className="flex gap-2 items-center ">
            <p>{session ? "Consultas" : "Realizar consulta" }</p>
            <ChevronRightIcon className="w-4 stroke-[3] opacity-60" />
            </div>
          </ButtonA>
        </Link>
        {/* <Link href={session ? '/dashboard/consultas' : '/realizar-consulta'} >
          <ButtonA 
            className={`h-8 text-[14.5px] w-max`}>
            {session ? "Tus consultas" : "Realizar consulta" } 
            <ChevronRightIcon className="ml-3 w-4 stroke-[3] opacity-60" />
          </ButtonA>
        </Link> */}
      </div>
    </div>
  );
}
