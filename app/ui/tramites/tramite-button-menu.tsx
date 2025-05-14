'use client';

import {  ChevronRightIcon, } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as  DropdownMenu  from "@radix-ui/react-dropdown-menu";

import type { TramiteMd } from "@/app/lib/definitions"


export default  function TramiteButtonMenu({allTramites }:{allTramites:TramiteMd[]}) {

  const pathname = usePathname();


  return (

    <div className="block min-[900px]:hidden ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild >
          <button
            className="inline-flex size-[35px] opacity-70 font-semibold text-base py-1 px-4 items-center justify-center rounded-md bg-[#ffffffdd] text-[#50073acc] duration-150 outline-none hover:opacity-100 sm:text-[22]"
            aria-label="Customise options"
          >
            Seleccioná uno
            <ChevronRightIcon className="w-4 ml-4 rotate-90" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] ml-3 rounded-md bg-[#ffffff] p-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2),_inset_0_0_4px_1px_#ffffff] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade md:ml-12"
            sideOffset={5}
          >
            {allTramites.map((tramite:TramiteMd) => (
              <Link
                  as={`/iniciar-tramite/${tramite.slug}`}
                  href="/iniciar-tramite/[slug]"
                  className={clsx(`py-[3px] px-2 my-0.5 bg-[#fff0] first:rounded-t-md first:mt-0 last:rounded-b-md last:mb-0 flex justify-between text-[#1d0215bb] items-center duration-200 hover:bg-[#1d021511] hover:text-[#1d0215] `,
                      {
                        'text-[#1d0216] bg-[#1d021512] ': pathname === `/iniciar-tramite/${tramite.slug}`
                      }
                    )}
                  key={tramite.slug} 
              >
                  <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pr-[5px] text-[13px] leading-none outline-none ">
                  <p className="text-[14px] ml-2 text-start md:text-[14.5px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                      {`(${tramite.estado})`}</span>}
                  </p>
                  </DropdownMenu.Item>
              </Link>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root> 
    </div>

  );

}
