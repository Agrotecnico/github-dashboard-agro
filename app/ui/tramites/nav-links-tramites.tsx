"use client"

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, } from '@heroicons/react/24/outline';

import { Frente } from '@/app/ui/marcos';
import type { TramiteMd } from "@/app/lib/definitions"


export default function NavLinksTramites({allTramites }:{allTramites:TramiteMd[]}) {

  const pathname = usePathname();
  
  return (

    <div className="hidden min-[900px]:block ">
      <h1 className="flex items-center text-start pl-2 pt-1 pb-3 font-semibold text-lg text-[#50073a88] md:leading-none ">
        Seleccioná un trámite:
      </h1>
      <Frente className='!bg-[#1d021514] p-[3px] flex flex-col gap-0.5 '>

        {allTramites.map((tramite:TramiteMd) => (
          <Link
              as={`/iniciar-tramite/${tramite.slug}`}
              href="/iniciar-tramite/[slug]"
              className={clsx(`py-[5px] pl-1.5 pr-2 bg-[#ffffff0e] first:rounded-t-md last:rounded-b-md flex gap-1.5 text-[#1d0215bb] items-start duration-200 hover:bg-[#ffffff88] hover:text-[#1d0215] `,
                  {
                    'text-[#1d0216] bg-[#ffffff89] ': pathname === `/iniciar-tramite/${tramite.slug}`
                  }
                )}/* justify-between */
              key={tramite.slug} 
          >
              <img 
                src= "/dnrpa.png" 
                alt="icono trámites" 
                width={12} 
                height={"auto"}
                className="opacity-90 h-[9px] w-[9px] mt-[6px]" 
              />
              <p className="text-[14px] text-start md:text-[15px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                  {`(${tramite.estado})`}</span>}
              </p>
          </Link>
        ))}
      </Frente>
    </div>
  );
}
