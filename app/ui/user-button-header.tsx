'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/uiRadix/avatar';
import { Button } from '@/app/ui/uiRadix/button';
import { User } from '@/app/lib/definitions';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/app/ui/uiRadix/dropdown-menu';
import type { Session } from 'next-auth';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import IconMenu from '@/app/ui/logosIconos/icon-menu';
import NavLinks from '@/app/ui/dashboard/nav-links'
/* import { fetchUserById } from '@/app/lib/data'; */
import { useSession } from "next-auth/react"


export default /* async */ function UserButtonHeader({ user}: { user: User | undefined}) {

  const { data: session, update } = useSession()

  
 /*  const user = await fetchUserById(session?.user?.email); 
  console.log("user:", user)
  console.log("session:", session)*/
  
  const pathname = usePathname();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative gap-4 h-8 w-full max-w-max rounded-full px-0"
          >
            {/* <IconMenu width='20' heightx='20' className="fill-[#fff9] duration-200 hover:fill-[#ffffffdd] min-[640px]:hidden" /> */}
            {user?.image ? (
              <Avatar className="h-8 w-8">
                {user?.image && (
                  <AvatarImage
                    src={user?.image}
                    alt={user?.name ?? ''}
                  />
                )}
                <AvatarFallback>{session?.user?.email}</AvatarFallback>
              </Avatar>
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee] text-[#374151] ">
                {session?.user?.email?.substring(0, 1).toUpperCase()}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="mt-3 bg-white w-56 rounded-md shadow-xl shadow-[#30032222]"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none text-[#374151] ">
                {session?.user?.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none text-[#64748b]">
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="h-[1px] bg-[#37415122] m-[3px]" />

          <DropdownMenuItem className="flex flex-col">
            <div className="flex w-full flex-col ">
              {pathname == '/' ? (
                <Link
                  href={'#'}
                  className="mb-1 cursor-default rounded-md p-1 pl-2 text-[#37415188]"
                >
                  Cnp mandataria
                </Link>
              ) : (
                <Link
                  href={'/'}
                  className="mb-1 rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#37415111] hover:opacity-100 "
                >
                  Cnp mandataria
                </Link>
              )}
              {pathname.startsWith('/consultas') ? (
                <Link
                  href={'#'}
                  className="mb-1 cursor-default rounded-md p-1 pl-2 text-[#37415188]"
                >
                  Consultas frecuentes
                </Link>
              ) : (
                <Link
                  href={'/consultas/dif-gestor-mandatario'}
                  className=" mb-1 rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#37415111]  hover:opacity-100"
                >
                  Consultas frecuentes
                </Link>
              )}
              {pathname.startsWith('/dashboard') ? (
                <Link
                  href={'#'}
                  className="mb-1 cursor-default rounded-md p-1 pl-2 text-[#37415188] "
                >
                  {session?.user?.email == 'agrotecnicog@gmail.com'
                    ? 'Panel de control'
                    : 'Realizar consulta'}
                </Link>
              ) : (
                <Link
                  href={'/dashboard'}
                  className=" mb-1 rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#0000000a] hover:opacity-100 "
                >
                  {session?.user?.email == 'agrotecnicog@gmail.com'
                    ? 'Panel de control'
                    : 'Realizar consulta'}
                </Link>
              )}
            </div>
          </DropdownMenuItem>
          























          
          <Button
            variant={'ghost'}
            className="mb-1 file:ml-auto h-auto w-full bg-[#3741511c] text-[#020817] opacity-[0.85] hover:opacity-100 "
            onClick={async () => {
              await signOut({ callbackUrl: '/' });/*  */
            }}
          >
            Salir
          </Button>

        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
