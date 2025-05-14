'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import clsx from 'clsx';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';

import IconMenu from '@/app/ui/logosIconos/icon-menu';
import {  linkMembers } from '@/app/constant';
import Dropdown from '@/app/ui/Dropdown';
import { ButtonA } from '@/app/ui/button';


export default  function UserButtonMenuMember() {

  const { data: session, update } = useSession();

  const pathname = usePathname();


  return (
    <div className={`${pathname.startsWith('/faq') || pathname.startsWith('/iniciar-tramite') || pathname.startsWith('/realizar-consulta') ? "hidden" : "block" } `}>
      <Dropdown>
        <Dropdown.Button>
          <IconMenu
            width="20"
            heightx="20"
            className="fill-[#fff9] duration-200 group-hover:fill-[#ffffffdd] min-[824px]:hidden"
          />
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="px-4 pt-8 pb-2 flex items-center flex-col space-y-1 mx-4 sm:pt-10 sm:pb-0 md:pt-8 md:pb-1" >
            <p className="text-sm font-medium leading-none ">
              {session?.user?.email}
            </p>
          </div>
          
          <div className="flex w-screen flex-col px-4 pt-2.5 pb-6 gap-[1px] rounded-xl" >
            {linkMembers &&
              linkMembers?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex items-center justify-start px-4 bg-[#1d021519] text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215fe] hover:bg-[#1d02150b]',
                      {
                        'bg-[#1d02150c] text-[#1d0214fd]':
                        pathname === link.href,
                      },
                    )}
                  >
                    <Dropdown.MenuItem>
                    <div className="flex w-full items-center justify-start gap-2 px-2.5 py-2">
                      <LinkIcon className="w-5 text-[#50073aaa]" />
                      <p className="text-start text-sm ">{link.name}</p>
                    </div>
                    </Dropdown.MenuItem>
                  </Link>
                );
              })}
          </div>

          <div className={`flex flex-col gap-[1px] text-[14px] mb-6 mx-8  ${session?.user?.email === process.env.ADMIN && "hidden"}`}>
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
