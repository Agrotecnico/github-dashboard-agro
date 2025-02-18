'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import IconMenu from '@/app/ui/logosIconos/icon-menu';
import { useSession } from 'next-auth/react';
import { links, linkMembers } from '@/app/constant';
import Dropdown from '@/app/ui/Dropdown';


export default  function UserButtonMenu() {

  const { data: session, update } = useSession();

  const pathname = usePathname();


  return (
    <>
      <Dropdown>
        <Dropdown.Button>
          <IconMenu
            width="20"
            heightx="20"
            className="fill-[#fff9] duration-200 group-hover:fill-[#ffffffdd] min-[824px]:hidden"
          />
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="px-4 py-6 flex items-center flex-col space-y-1 mx-4 border-b border-[#0000000e]">
            <p className="text-sm font-medium leading-none ">
              {session?.user?.email}
            </p>
          </div>
          <div className="flex w-screen flex-col px-2.5 pb-2.5 gap-[2px] rounded-xl ">
            {links &&
              links?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex items-center justify-start text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#0000000a]',
                      {
                        'bg-[#00000009] text-[#1d0216] ':
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
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
