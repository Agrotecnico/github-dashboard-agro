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
      <h1 className="flex items-center text-start pl-5  h-[22px] mb-2 mt-2 text-[17px] text-[#50073acc] md:leading-none ">
        Seleccioná uno<ChevronRightIcon className="w-4 ml-3 rotate-90" />
      </h1>
      <Frente className='!bg-[#e6e0e3] p-[3px] flex flex-col gap-0.5 '>

        {allTramites.map((tramite:TramiteMd) => (
          <Link
              as={`/iniciar-tramite/${tramite.slug}`}
              href="/iniciar-tramite/[slug]"
              className={clsx(`py-[5px] px-2 bg-transparent first:rounded-t-md last:rounded-b-md flex justify-between text-[#1d0215dd] items-center duration-200 hover:bg-[#ffffff77] hover:text-[#1d0215] `,
                  {
                    'text-[#1d0216] bg-[#ffffff76] ': pathname === `/iniciar-tramite/${tramite.slug}`
                  }
                )}
              key={tramite.slug} 
          >
              <p className="text-[14px] ml-2 text-start md:text-[15px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                  {`(${tramite.estado})`}</span>}
              </p>
          </Link>
        ))}
      </Frente>
    </div>
  );
}
