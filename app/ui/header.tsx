import Link from 'next/link';
import { auth } from 'auth';

import UserButtonHeader from '@/app/ui/user-button-header';
import UserButtonMenu from '@/app/ui/user-button-menu';
import UserButtonMenuMember from '@/app/ui/user-button-menu-member';
import LogoCnpColor from '@/app/ui/logosIconos/logo-cnp-color';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import { fetchUserById } from '@/app/lib/data'; 


export default async function Header( ) {

  const session = await auth()
  const user = await fetchUserById(session?.user?.email)


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

          {user?.email === process.env.ADMIN ? (
            <UserButtonMenu />
            ) : user ? (
            <UserButtonMenuMember />
          ) : null}

        </div>

        {user ? (
          <div className="flex items-center gap-2 ">
            <span className="hidden text-sm text-[#fffffff2] [text-shadow:_1px_1px_0px_#000000c9] sm:inline-flex ">
              {user?.email}
            </span>
            <UserButtonHeader user={user} />
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
}
