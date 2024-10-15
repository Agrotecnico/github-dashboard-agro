
import UserButtonHeader from '@/app/ui/user-button-header';
import UserButtonMenu from '@/app/ui/user-button-menu';
import Link from 'next/link';
import LogoCnpColor from '@/app/ui/logosIconos/logo-cnp-color';
import { auth } from 'auth';
import IconCuenta from './logosIconos/icon-cuenta';
import { SessionProvider, signIn } from "next-auth/react"
import { fetchUserById } from '@/app/lib/data'; 


export default async function Header( ) {
  

  const session = await auth();
  const user = await fetchUserById(session?.user?.email);


  return (
    <header className=" fixed left-0 z-10 flex h-[68px] w-[100vw] items-center justify-center bg-[#300322] backdrop-blur-lg sm:h-20 ">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4 opacity-80 duration-200 hover:opacity-100 ">
          <Link
            className="flex items-center justify-between rounded-md leading-6 md:items-end"
            href="/"
          >
            <div className="-ml-3 w-full text-white">
              <LogoCnpColor size="138px"
                className="ml-3"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-center text-[18px] font-black leading-6 text-[#ffffffd4] [text-shadow:_1px_1px_0_#00000082] md:flex-row md:leading-7">
          {/*<span className="hidden mr-1.5">
             Consultas o panel de control 
          </span>*/}
          
          <UserButtonMenu/>
          {/* <IconMenu width='20' heightx='20' className="fill-[#fff9] duration-200 hover:fill-[#ffffffdd] sm:hidden" /> */}
          {/* <span className="hidden sm:block">2024</span> */}
        </div>
        {session ? (
          <div className="flex items-center gap-2 ">
            <span className="hidden text-sm text-[#fffffff2] [text-shadow:_1px_1px_0px_#000000c9] sm:inline-flex">
              {session.user?.email}
            </span>
            <SessionProvider /* basePath={"/auth"} */ session={session} >
              <UserButtonHeader user={user}/>
            </SessionProvider>
            {/* <UserButtonHeader session={session} /> */}
          </div>
        ) : (
          <>
          <Link
            href="/login"
            className="flex flex-col items-center opacity-80 duration-200 hover:opacity-100"
          >
            <div className="max-w-max ">
              <IconCuenta
                className="w-7"
                color={'#fff9'}
              />
            </div>
            <div className="text-sm text-[#fffffff2] [text-shadow:_1px_1px_0px_#000000c9] sm:inline-flex">
              Acceso
            </div>
          </Link>
          </>
        )}
      </div>
    </header>
  );
}
