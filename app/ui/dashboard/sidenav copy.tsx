/* "use client" */

import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/nav-links'
import { PowerIcon } from '@heroicons/react/24/outline'
import { signOut } from '@/auth'
import LogoCNP from '@/app/ui/logosIconos/logoCNP'
import { auth } from '@/auth'
import Image from 'next/image'
/* import { useSession } from "next-auth/react"; */


export default async function SideNav() {
  
  const session = await auth()
  if (session)
  return (
    <div className="flex h-full flex-col">
      {/* <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#e580d0] p-4 md:h-40"
        href="/"
      >
        <div className="text-[#333] flex items-center justify-center ml-1.5 mr-3 w-10 h-10 rounded-full bg-[#eee] ">
          {session?.user?.image ?( 
            <img
            src= {session.user.image}
            className="rounded-full"
            alt= "profile picture"
            width={40}
            height={40}
            />
            ) : (
              <span>{session?.user?.email?.substring(0,1).toUpperCase() }</span>
            )
          }
        </div>
        <div className="text-white [text-shadow:_1px_1px_#000]">{session?.user?.name}</div>
      </Link> */}
      <div></div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        
        <form
          action= {async () => {
            'use server'
            await signOut({redirect: false, callbackUrl: "/"})
          }}
        >
          <button className="duration-200 max-w-max flex h-[48px] text-[#444] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#ffffff21] md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block [text-shadow:_1px_-1px_#ffffff47] ">Cerrar sesión</div>
          </button>
        </form>
        <div className="hidden h-auto w-full grow rounded-md bg-[#ffffff22] md:block"></div>
      </div>
    </div>
  );
  return null
}

