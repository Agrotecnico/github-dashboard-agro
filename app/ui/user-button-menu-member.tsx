'use client';

import { Avatar } from '@/app/ui/uiRadix/avatar';
import { Button } from '@/app/ui/uiRadix/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
} from '@/app/ui/uiRadix/dropdown-menu';
import Link from 'next/link';
import IconMenu from '@/app/ui/logosIconos/icon-menu';
import NavLinksAdmin from '@/app/ui/dashboard/nav-links-admin';
import NavLinksMember from '@/app/ui/dashboard/nav-links-member';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { links, linkMembers } from '@/app/constant';
import clsx from 'clsx';
import { auth } from 'auth';
import Dropdown from '@/app/pruebas/Dropdown';

export default /* async */ function UserButtonMenuMember() {
  const { data: session, update } = useSession();
  const pathname = usePathname();
  /* const [pilos]= polos() */
   /* const session = await auth();  */
  /*console.log("poloxxxxx:", polo.poli )*/
/*   const polos= session?.user?.email ===  process.env.ADMIN ? links : linkMembers */

  /* if (session?.user?.email ===  process.env.ADMIN ) */
  return (
    <>
      {/* {session?.user?.email ===  process.env.ADMIN ? (
      "member"
    ) : (
      "admin"
      )} */}
      {/* <DropdownMenu >

        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative gap-4 h-8 w-full rounded-none max-w-max px-0"
          >
              <Avatar className="h-5 w-5 rounded-none">
                <IconMenu width='20' heightx='20' className="fill-[#fff9] duration-200 hover:fill-[#ffffffdd] sm:hidden" />
              </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="mt-3 bg-white w-screen rounded-t-none rounded-b-md shadow-xl shadow-[#30032222] sm:hidden"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              poloooo
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="h-[1px] bg-[#37415122] m-[3px]" />

          <DropdownMenuItem className="flex flex-col">
            <div className="flex w-full flex-col ">
              <Link
                href= {'/dashboard'}
                className=" mb-1 rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#37415111]  hover:opacity-100"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Consultas frecuentes
              </Link>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="h-[1px] bg-[#37415122] m-[3px]" />

          
          
            
          <div className="flex w-full flex-col ">
            {links && 
              links?.map((link) => {
              const LinkIcon = link.icon;
              return (
                <DropdownMenuItem className="flex flex-col">
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx('text-sm flex items-center justify-start first:rounded-t-md last:rounded-b-md duration-200 text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] hover:bg-[#0000000a] hover:text-[#1d0215]',
                    {
                      'text-[#1d0216] bg-[#00000009] ':  pathname === link.href,
                    }
                  )}
                  >
                  <button className="w-full py-2 px-2.5 gap-2 flex justify-start items-center" >
                    <LinkIcon className="w-4 text-[#1d0215dd]" />
                    <p className="text-sm text-start ">
                    {link.name}
                    </p>
                  </button>
                </Link>
                </DropdownMenuItem>
              )
            })}
          </div>
            
          
          

        </DropdownMenuContent>
        
      </DropdownMenu> */}

      <Dropdown>
        <Dropdown.Button>
          <IconMenu
            width="20"
            heightx="20"
            className="fill-[#fff9] duration-200 hover:fill-[#ffffffdd] sm:hidden"
          />
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="flex w-screen flex-col ">
            {linkMembers &&
              linkMembers?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  
                    <Link
                      key={link.name}
                      href={link.href}
                      className={clsx(
                        'flex items-center justify-start text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#0000000a]', /*  [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] bg-[#ffffff88] */
                        {
                          'bg-[#00000009] text-[#1d0216] ':
                            pathname === link.href,
                        },
                      )}
                    >
                      <Dropdown.MenuItem>
                      <div className="flex w-full items-center justify-start gap-2 px-2.5 py-2">
                        <LinkIcon className="w-4 text-[#1d0215dd]" />
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
  return (
    <>
      <Dropdown>
        <Dropdown.Button>
          <IconMenu
            width="20"
            heightx="20"
            className="fill-[#fff9] duration-200 hover:fill-[#ffffffdd] sm:hidden"
          />
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="flex w-screen flex-col ">
            {linkMembers &&
              linkMembers?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  
                    <Link
                      key={link.name}
                      href={link.href}
                      className={clsx(
                        'flex items-center justify-start text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#0000000a]', /*  [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] bg-[#ffffff88] */
                        {
                         /*  'bg-[#00000009] text-[#1d0216] ':
                            pathname === link.href, */
                        },
                      )}
                    >
                      <Dropdown.MenuItem>
                      <div className="flex w-full items-center justify-start gap-2 px-2.5 py-2">
                        <LinkIcon className="w-4 text-[#1d0215dd]" />
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
