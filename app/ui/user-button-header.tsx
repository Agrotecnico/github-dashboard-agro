'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/uiRadix/avatar';
import { Button } from '@/app/ui/uiRadix/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/app/ui/uiRadix/dropdown-menu';
import type { Session } from 'next-auth';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function UserButtonHeader({
  session,
}: {
  session: Session | null;
}) {
  const pathname = usePathname();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative mb-1.5 h-8 w-full max-w-max rounded-full px-0"
          >
            {session?.user?.image ? (
              <Avatar className="h-8 w-8">
                {session?.user.image && (
                  <AvatarImage
                    src={session?.user.image}
                    alt={session?.user.name ?? ''}
                  />
                )}
                <AvatarFallback>{session?.user.email}</AvatarFallback>
              </Avatar>
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee] text-[#374151] ">
                {session?.user?.email?.substring(0, 1).toUpperCase()}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="mt-2 w-56 bg-white shadow-md"
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
          <DropdownMenuItem className="mt-4 flex flex-col">
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
            <Button
              variant={'ghost'}
              className="ml-auto mt-6 h-auto w-full bg-[#3741511c] p-1 text-[#020817] opacity-[0.85] hover:opacity-100 "
              onClick={async () => {
                await signOut({ callbackUrl: '/' });
              }}
            >
              Salir
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
