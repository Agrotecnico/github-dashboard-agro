'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import Dropdown from '@/app/ui/Dropdown';
import type { Post } from "@/app/lib/definitions"
import { ButtonA } from '@/app/ui/button';
import IconPresupuesto from '@/app/ui/logosIconos/icon-presupuesto';
import IconConsulta from '@/app/ui/logosIconos/icon-consulta';


export default  function UserButtonMenuFaq({allPosts}:{allPosts:Post}) {

  const pathname = usePathname();

  return (
    <div className={`${pathname.startsWith('/faq') ? "block" : "hidden" }  min-[1024px]:hidden`}>
      <Dropdown>
        <Dropdown.Button>
          <p className="text-sm text-[#fff] font-medium duration-200 opacity-75 hover:opacity-[0.9] ">
            FAQ
          </p>
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="px-4 pt-8 pb-2 flex items-center flex-col space-y-1 mx-4 sm:pt-10 sm:pb-0 md:pt-8 md:pb-1">
            <p className="text-sm font-medium leading-none ">
              CONSULTAS FRECUENTES
            </p>
          </div>

          <div className="flex w-screen flex-col p-3 gap-[1px] rounded-xl">
            {allPosts.length ? (
              allPosts.map((post:Post) => (
                <Link
                  as={`/faq/${post.slug}`}
                  href="/faq/[slug]"
                  key={post.slug}
                  className={clsx(
                    'flex items-center justify-start px-4 bg-[#1d021509] text-sm text-[#1d0215bb] duration-200 first:rounded-t-lg last:rounded-b-lg hover:text-[#1d0215] hover:bg-[#1d02151c]',
                    {
                      'bg-[#1d02151c] text-[#1d0216]': pathname === `/faq/${post.slug}`,
                    },
                  )}
                >
                  <Dropdown.MenuItem>
                    <p className="text-sm py-1.5 text-start max-[512px]:text-sm ">
                      {post.excerpt}
                    </p>
                  </Dropdown.MenuItem>
                </Link>
              ))
            ) : (
              <p>Aún no hay ningúna consulta publicada</p>
            )}
          </div>
          
          <div className="flex flex-col gap-[1px] text-[14px] mx-3 mb-3" >
            
            <Link href="/iniciar-tramite/baja-de-vehiculo" >
              <ButtonA className="relative pl-8 h-6 w-full !rounded-none !rounded-t-[4px] !justify-start">
                <IconPresupuesto className="absolute w-[15px] h-[15px] bottom-[3px] left-[9px] "/>
                <p className="">Pedir presupuesto</p>
              </ButtonA>
            </Link>

            <Link href="/realizar-consulta" >
              <ButtonA className=" !bg-[#b2439a] relative pl-8 h-6 w-full !rounded-none !rounded-b-[4px] !justify-start">
                <IconConsulta className="absolute w-[15px] h-[15px] bottom-[3px] left-[9px] "/>
                <p className="">Realizar consulta</p>
              </ButtonA>
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
