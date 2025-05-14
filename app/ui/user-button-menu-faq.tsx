'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';

import IconMenu from '@/app/ui/logosIconos/icon-menu';
import Dropdown from '@/app/ui/Dropdown';
import type { Post } from "@/app/lib/definitions"
import { ButtonA } from '@/app/ui/button';


export default  function UserButtonMenuFaq({allPosts}:{allPosts:Post}) {

  const { data: session, update } = useSession();

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

          <div className="flex w-screen flex-col pt-2.5 px-4 pb-6 gap-[1px] rounded-xl">
            {allPosts.length ? (
              allPosts.map((post:Post) => (
                <Link
                  as={`/faq/${post.slug}`}
                  href="/faq/[slug]"
                  key={post.slug}
                  className={clsx(
                    'flex items-center justify-start px-4 bg-[#1d02150a] text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#1d021519]',
                    {
                      'bg-[#1d02151a] text-[#1d0216]': pathname === `/faq/${post.slug}`,
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
              <p>Aún no hay ningúna consulta publicado</p>
            )}
          </div>
          <div className={`flex flex-col gap-[1px] text-[14px] mb-6 mx-6  ${session?.user?.email === process.env.ADMIN && "hidden"}`}>
            <Link href="/iniciar-tramite/baja-de-vehiculo">
              <ButtonA className={`h-[26px] pb-0.5 !opacity-75 pl-3 !bg-transparent !text-[#1d0215ee] pr-2 w-full rounded-none rounded-t-[4px] !justify-start hover:!opacity-100`}>
                <div className="flex gap-2 items-center ">
                  <p>Iniciar trámite</p>
                  <ChevronRightIcon className="w-4 stroke-[3] opacity-70" />
                </div>
              </ButtonA>
            </Link>

            <Link href="/realizar-consulta">
              <ButtonA className={`h-[26px] pb-0.5 !opacity-75 pl-3 !bg-transparent !text-[#1d0215ee] pr-2 w-full rounded-none rounded-b-[4px] !justify-start hover:!opacity-100`}>
                <div className="flex gap-2 items-center ">
                  <p>Realizar consulta</p>
                  <ChevronRightIcon className="w-4 stroke-[3] opacity-70" />
                </div>
              </ButtonA>
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
