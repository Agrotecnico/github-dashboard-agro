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

export default function UserButtonMenu(/* {
  user,
}: {
  user: User | undefined ;
} */) {
  const pathname = usePathname();

  return (
    <>
    { pathname.startsWith('/dashboard')/* pathname === "/dashboard" */ ? (
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          
          <Button
            variant="ghost"
            className="relative gap-4 h-8 w-full rounded-none max-w-max px-0"
          >
            {/* {user?.image ? ( */}
              <Avatar className="h-5 w-5 rounded-none">
                <IconMenu width='20' heightx='20' className="fill-[#fff9] duration-200 hover:fill-[#ffffffdd] sm:hidden" />
                {/* {user.image && (
                  <AvatarImage
                    src={user.image}
                    alt={user.name ?? ''}
                  />
                )} */}
                {/* <AvatarFallback>{user.email}</AvatarFallback> */}
              </Avatar>
            {/* ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee] text-[#374151] ">
                {user?.email?.substring(0, 1).toUpperCase()}
              </span>
            )} */}
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
              {/* <p className="text-sm font-medium leading-none text-[#374151] ">
                {user?.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none text-[#64748b]">
                {user?.email}
              </p> */}
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="h-[1px] bg-[#37415122] m-[3px]" />

          <DropdownMenuItem className="flex flex-col">
            <div className="flex w-full flex-col ">
              {/* {pathname === '/' ? (
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
              )} */}
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
              {/* {pathname.startsWith('/dashboard') ? (
                <Link
                  href={'#'}
                  className="mb-1 cursor-default rounded-md p-1 pl-2 text-[#37415188] "
                >
                  {user?.email == 'agrotecnicog@gmail.com'
                    ? 'Panel de control'
                    : 'Realizar consulta'}
                </Link>
              ) : (
                <Link
                  href={'/dashboard'}
                  className=" mb-1 rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#0000000a] hover:opacity-100 "
                >
                  {user?.email == 'agrotecnicog@gmail.com'
                    ? 'Panel de control'
                    : 'Realizar consulta'}
                </Link>
              )} */}
            </div>
          </DropdownMenuItem>

          {/* <DropdownMenuSeparator className="h-[1px] bg-[#37415122] m-[3px]" /> */}

          {/* <DropdownMenuItem className="flex flex-col">
              {pathname.startsWith('/dashboard') ? (
                <Link
                  href={'#'}
                  className="mb-1 cursor-default rounded-md p-1 pl-2 text-[#37415188] "
                >
                  {user?.email == 'agrotecnicog@gmail.com'
                    ? 'Panel de control'
                    : 'Realizar consulta'}
                </Link>
              ) : (
                <Link
                  href={'/dashboard'}
                  className=" mb-1 rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#0000000a] hover:opacity-100 "
                >
                  {user?.email == 'agrotecnicog@gmail.com'
                    ? 'Panel de control'
                    : 'Realizar consulta'}
                </Link>
              )}
          </DropdownMenuItem> */}

          {/* <Button
            variant={'ghost'}
            className="mb-1 file:ml-auto h-auto w-full bg-[#3741511c] text-[#020817] opacity-[0.85] hover:opacity-100 "
            onClick={async () => {
              await signOut({ callbackUrl: '/' });
            }}
          >
            Salir
          </Button> */}

        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <span className="opacity-70">2024</span>
    ) 
    }
      
    </>
  );
}
