'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/app/ui/uiRadix/dropdown-menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/uiRadix/avatar';
import { Button } from '@/app/ui/uiRadix/button';
import { User } from '@/app/lib/definitions';


export default function UserButtonHeader( { user }: { user: User | undefined } ) {
  
  const pathname = usePathname();


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative gap-4 h-8 w-full max-w-max rounded-full px-0"
          >
            {user?.image ? (
              <Avatar className="h-11 w-11">
                {user?.image && (
                  <AvatarImage
                    src={user?.image}
                    alt={user?.name ?? ''}
                  />
                )}
                <AvatarFallback>{user?.email}</AvatarFallback>
              </Avatar>
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee] text-[#374151] ">
                {user?.email?.substring(0, 1).toUpperCase()}
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
                {user?.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none text-[#64748b]">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="h-[1px] bg-[#37415122] m-[3px]" />

          <DropdownMenuItem className="flex flex-col">
            <div className="flex w-full flex-col ">
              {pathname == '/' ? (
                <Link
                  href={'#'}
                >
                  <div className="cursor-default rounded-md p-1 pl-2 text-[#37415188] ">Cnp mandataria</div>
                </Link>
              ) : (
                <Link
                  href={'/'}
                >
                  <div className="rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#37415111] hover:opacity-100 ">Cnp mandataria</div>
                </Link>
              )}

              {pathname.startsWith('/faq') ? (
                <Link
                  href={'#'}
                >
                  <div className="cursor-default rounded-md p-1 pl-2 text-[#37415188] ">Consultas frecuentes</div>
                </Link>
              ) : (
                <Link
                  href={'/faq/dif-gestor-mandatario'}
                >
                  <div className=" rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#37415111]  hover:opacity-100">Consultas frecuentes</div>
                </Link>
              )}

              {pathname == '/dashboard/consultas' ? (
                <Link
                  href={'#'}
                >
                  {user?.email == 'agrotecnicog@gmail.com'
                    ? ''
                    : (<div className="cursor-default rounded-md p-1 pl-2 text-[#37415188] ">Consultas</div>) }
                </Link>
              ) : (
                <Link
                  href={'/dashboard/consultas'}
                >
                  {user?.email == 'agrotecnicog@gmail.com'
                    ? ''
                    : (<div className=" rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#0000000a] hover:opacity-100 ">Consultas</div>)}
                </Link>
              )}
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem>
            {pathname == '/dashboard/tramites' ? (
              <Link
                href={'#'}
              >
                {user?.email == 'agrotecnicog@gmail.com'
                  ? ''
                  : (<div className="cursor-default rounded-md p-1 pl-2 text-[#37415188] ">Trámites</div>)}
              </Link>
            ) : (
              <Link
                href={'/dashboard/tramites'}
              >
                {user?.email == 'agrotecnicog@gmail.com'
                  ? ''
                  : (<div className=" rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#0000000a] hover:opacity-100 ">Trámites</div>)}
              </Link>
            )}
            
          </DropdownMenuItem>

          <DropdownMenuItem>
            {pathname.startsWith('/dashboard') ? (
              <Link
                href={'#'}
              >
                {user?.email == 'agrotecnicog@gmail.com'
                  ? (<div className="cursor-default rounded-md p-1 pl-2 text-[#37415188] ">Panel Admin</div>)
                  : ''}
              </Link>
            ) : (
              <Link
                href={'/dashboard'}
              >
                {user?.email == 'agrotecnicog@gmail.com'
                  ? (<div className=" rounded-md p-1 pl-2 text-[#374151] opacity-[0.85] hover:bg-[#0000000a] hover:opacity-100 ">Panel Admin</div>)
                  : ''}
              </Link>
            )}
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Button
              variant={'ghost'}
              className="mb-1 file:ml-auto h-auto w-full bg-[#3741511c] text-[#020817] opacity-[0.85] hover:opacity-100 active:bg-transparent"
              onClick={async () => {
                await signOut({ callbackUrl: '/' });
              }}
            >
              Salir
            </Button>
          </DropdownMenuItem>
          {/* <Button
            variant={'ghost'}
            className="mb-1 file:ml-auto h-auto w-full bg-[#3741511c] text-[#020817] opacity-[0.85] hover:opacity-100 active:bg-transparent"
            onClick={async () => {
              await signOut({ callbackUrl: '/' });
            }}
          >
            Salir
          </Button> */}

        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
