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

export default function NavHome({ session }: { session: Session | null }) {
  return (
    <div className="xgroup w-ful fixed inset-x-0 top-0  z-20 bg-[#ad6fa88c]  shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] backdrop-blur-md ">
      <header className="mt-0px group-hover:bg-tranaparent relative mx-auto h-24 bg-transparent transition-colors duration-200 group-hover:border-gray-200">
        <nav className=" text-small-regular mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 text-white transition-colors duration-200 sm:px-6">
          <div className="flex h-full w-full items-center justify-end min-[1100px]:mr-0">

            {session ? (
             <div className="flex items-center gap-2">
                <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
                  {session?.user?.email}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        {session?.user?.image && (
                          <AvatarImage
                            src={session.user.image}
                            alt={session.user.name ?? ''}
                          />
                        )}
                        <AvatarFallback>{session?.user?.email}</AvatarFallback>
                      </Avatar>
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
                        href={'/consultas'}
                        className="w-full bg-[#fff0] p-1 text-[#020817] opacity-80 hover:bg-[#f1f5f9] hover:opacity-100 "
                      >
                        Realiza tu consulta
                      </Link>
                      <Button
                        variant={'ghost'}
                        className="ml-auto mt-4 bg-[#fff0] text-[#020817] opacity-80 hover:bg-[#f1f5f9] hover:opacity-100 "
                        /* onClick={async () => {
                          await signOut();
                        }} */
                      >
                        Salir
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <button
                className="mt-2 flex flex-col items-center justify-start opacity-80 hover:opacity-100"
                /*onClick={async () => {
                  await signIn( "google", {
                    callbackUrl: `${polo}#consulta`,
                  } );
                }}*/
              >
                <IconCuenta
                  filter="filterCuenta7"
                  sombraX="1.5"
                  sombraY="-1.5"
                  size="30"
                  className="bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
                />
                <div className="text-white [text-shadow:_1px_-1px_#000]">
                  Ingresá
                </div>
              </button>
            )} 

          </div>
        </nav>
      </header>
    </div>
  );
}
