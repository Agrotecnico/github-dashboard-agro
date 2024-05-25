'user client';

import clsx from 'clsx';
import Link from 'next/link';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import type { Session } from 'next-auth';
/* import LogoCNP from "@/components/logosIconos/logoCNP";
import LogoCNP2 from "@/components/logosIconos/logoCNP2";*/
import UserButton from '@/app/ui/userButton';
import { Button } from '@/app/ui/uiRadix/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/app/ui/uiRadix/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/uiRadix/avatar';
import UserButtonHeader from './user-button-header';

export default function NavHome({
  session,
  linkDatos,
}: {
  session: Session | null;
  linkDatos: {
    slug: string;
    excerpt: string;
  }[];
}) {
  return (
    <div className="xgroup w-ful fixed inset-x-0 top-0  z-20 bg-[#ad6fa88c]  shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] backdrop-blur-md ">
      <header className="mt-0px group-hover:bg-tranaparent relative mx-auto h-24 bg-transparent transition-colors duration-200 group-hover:border-gray-200">
        <nav className=" text-small-regular mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 text-white transition-colors duration-200 sm:px-6">
          <div className="flex h-full w-full items-center justify-end min-[1100px]:mr-0">

            {session ? (
              <>
              <div className="flex items-end mt-[30px] gap-2 ">
                <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
                  {session?.user?.email}
                </span>
                <UserButtonHeader session={session} />
              </div>
              

              {/* <div className="flex items-center gap-2">
                <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
                  {session?.user?.email}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-full px-0 rounded-full"
                    >
                      {session?.user?.image ?( 
                        <Avatar className="h-8 w-8">
                          {session?.user?.image && (
                            <AvatarImage
                              src={session.user.image}
                              alt={session.user.name ?? ''}
                            />
                          )}
                          <AvatarFallback>{session?.user?.email}</AvatarFallback>
                        </Avatar>
                        ) : (
                          <span className="text-[#333] flex items-center justify-center w-8 h-8 rounded-full bg-[#eee] "
                          >{session?.user?.email?.substring(0,1).toUpperCase() }</span>
                        )
                      }

                      
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 bg-white"
                    align="end"
                    forceMount
                  >
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none text-[#020817] ">
                          {session?.user?.name}
                        </p>
                        <p className="text-muted-foreground text-xs leading-none text-[#64748b]">
                          {session?.user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="mt-4 flex flex-col">
                      <Link
                        href={'/dashboard'}
                        className="w-full bg-[#fff0] p-1 text-[#020817] opacity-80 hover:bg-[#f1f5f9] hover:opacity-100 "
                      >
                        {session.user?.email == "agrotecnicog@gmail.com" ? "Panel informacion" : "Realizá tu consulta"}
                      </Link>
                      <Button
                        variant={'ghost'}
                        className="ml-auto mt-4 bg-[#fff0] text-[#020817] opacity-80 hover:bg-[#f1f5f9] hover:opacity-100 "
                        onClick={async () => {
                          await signOut();
                        }}
                      >
                        Salir
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}
              </>
            ) : (
              <>
              <Link href="/login" className="flex flex-col mt-4 items-center duration-200 opacity-80 hover:opacity-100">
                <div className="max-w-max ">
                  <IconCuenta className="p-[2px]" sombraX= "1" sombraY= "0"  color={"#fffa"} />
                </div>
                <div className="hidden text-sm text-[#fff] leading-3 [text-shadow:_1px_0_0px_#000000] sm:inline-flex">Realizá tu consulta</div>
              </Link>
              {/* null */}
              </>
            )}

          </div>
        </nav>
      </header>
    </div>
  );
}
