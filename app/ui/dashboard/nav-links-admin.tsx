"use client"

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation'
import { links }  from '@/app/constant';


export default function NavLinksAdmin() {

  const pathname = usePathname();
  
    return (
      <>
        {links?.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx('text-sm flex items-center justify-start first:rounded-t-md last:rounded-b-md duration-200 text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] hover:bg-[#ffffffe3] hover:text-[#1d0215]',
                {
                  'text-[#1d0216] bg-[#ffffffe3] ':  pathname === link.href,
                }
              )}
            >
              <button className="w-full py-2 px-2.5 gap-2 flex justify-start items-center" >
                <LinkIcon className="w-[18px] text-[#50073aaa]" />
                <p className="text-sm text-start ">
                {link.name}
                </p>
              </button>
            </Link>
          );
        })}
      </>
    );
}
