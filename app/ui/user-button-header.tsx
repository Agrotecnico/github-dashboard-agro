"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/uiRadix/avatar"
import { Button } from "@/app/ui/uiRadix/button"
import { auth } from "auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/app/ui/uiRadix/dropdown-menu"
import type { Session } from "next-auth";
import { SignIn, SignOut } from "@/app/ui/auth-components"
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation'


export default async function UserButtonHeader({ session }: { session: Session | null }) {
  const pathname = usePathname()

 /*  if (session) */ return (
    <>
    {/* <div className="flex items-end mb-1.5 gap-2 ">
       <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
         {session?.user?.email}
       </span> */}
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button
             variant="ghost"
             className="max-w-max relative h-8 w-full px-0 rounded-full mb-1.5"
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
           className="w-56 bg-white shadow-md mt-2"
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
             {/* <Link
               href={'/dashboard'}
               className="w-full bg-[#fff0] p-1 text-[#020817] opacity-80 hover:bg-[#f1f5f9] hover:opacity-100 " 
             >*/}
            <div className="flex flex-col w-full ">



             { pathname == "/" /* pathname.startsWith('/') */ ? 
                /* null */(
                  <Link href={"#"} className="p-1 pl-2 cursor-default mb-1 rounded-md text-[#37415188]">cnp mandataria</Link>
                ) : (
                  <Link href={"/"} className="p-1 pl-2 mb-1 rounded-md text-[#374151] opacity-80 hover:opacity-100 hover:bg-[#37415111] ">cnp mandataria</Link>
                )
              }
              { pathname.startsWith('/consultas')  ? 
                /* null */(
                  <Link href={"#"} className="p-1 pl-2 cursor-default mb-1 rounded-md text-[#37415188]">consultas frecuentes</Link>
                )
                  : (
                  <Link href={"/consultas/dif-gestor-mandatario"} className=" p-1 pl-2 mb-1 rounded-md text-[#374151] opacity-80 hover:opacity-100  hover:bg-[#37415111]">consultas frecuentes</Link>
                )
              }
              {/* pathname == "/dashboard" */pathname.startsWith('/dashboard') ? 
                /* null */(
                  <Link href={"#"} className="p-1 pl-2 cursor-default mb-1 rounded-md text-[#37415188] ">
                {session?.user?.email == "agrotecnicog@gmail.com" ? "tu cuenta" : "realizar consulta"}</Link>
                ) 
                : (
                <Link href={"/dashboard"} className=" p-1 pl-2 mb-1 rounded-md text-[#374151] opacity-80 hover:opacity-100 hover:bg-[#0000000a] ">
                {session?.user?.email == "agrotecnicog@gmail.com" ? "tu cuenta" : "realizar consulta"}</Link>
                )
              }
              
              



                
                
                
            </div>
             {/* </Link> */}
             <Button
               variant={'ghost'}
               className="ml-auto mt-6 h-auto p-1 w-full bg-[#3741511c] text-[#020817] opacity-80 hover:opacity-100 "
               onClick={async () => {
                 await signOut({ callbackUrl: "/"});
               }}
             >
               Salir
             </Button>
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     {/* </div> */}
     </>
   )
   /* return null */
}





  /* const session = await auth() */
  /* if (!session?.user) return <SignIn />
  return (
    <div className="flex gap-2 items-center ">
      <span className="hidden text-sm sm:inline-flex ">
        {session.user.email}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8">
              {session.user.image && (
                <AvatarImage
                src={session.user.image}
                alt={session.user.name ?? ""}
              />
              )}
              <AvatarFallback>{session.user.email}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) */
