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
import IconPresupuesto from '@/app/ui/logosIconos/icon-presupuesto';
import IconConsulta from '@/app/ui/logosIconos/icon-consulta';


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
          <div className="px-4 pt-8 flex items-center flex-col space-y-1 mx-4 sm:pt-10 sm:pb-0 md:pt-8 md:pb-1" >
            <p className="text-sm font-medium leading-none ">
              {session?.user?.email}
            </p>
          </div>
          
          <div className="flex w-screen flex-col p-4 gap-[1px] rounded-xl" >
            {linkMembers &&
              linkMembers?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex items-center justify-start px-4 bg-[#1d02150b] text-sm text-[#1d0215aa] duration-200 first:rounded-t-lg last:rounded-b-lg hover:text-[#1d0215fe] hover:bg-[#1d02151c]',
                      {
                        'bg-[#1d02151c] text-[#1d0214ee]':
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
              })
            }
          </div>

          <div className={`flex flex-col gap-[1px] text-[14px] mx-3 mb-3  ${session?.user?.email === process.env.ADMIN && "hidden"}`} >
            <Link href="/iniciar-tramite/baja-de-vehiculo" >
              <ButtonA className="relative pl-8 h-6 w-full !rounded-none !rounded-t-[4px] !justify-start">
                <IconPresupuesto className="absolute w-[16px] h-[16px] bottom-[3px] left-[8px] "/>
                <p className="">Pedir presupuesto</p>
              </ButtonA>
            </Link>

            <Link href="/realizar-consulta" >
              <ButtonA className=" !bg-[#b2439a] relative pl-8 h-6 w-full !rounded-none !rounded-b-[4px] !justify-start">
                <IconConsulta className="absolute w-[16px] h-[16px] bottom-[3px] left-[8px] "/>
                <p className="">Realizar consulta</p>
              </ButtonA>
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
  
}
