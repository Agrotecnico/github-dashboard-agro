'user client';

import Link from 'next/link';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import type { Session } from 'next-auth';
import UserButtonHeader from './user-button-header';
import { User } from '@/app/lib/definitions'

export default function NavInicio({
  session,
  user
}: {
  session: Session | null;
  user: User | undefined
}) {
  return (
    <div className="xgroup w-ful fixed inset-x-0 top-0  z-20 bg-[#1d0215] backdrop-blur-md ">
      <header className="mt-0px group-hover:bg-tranaparent relative mx-auto h-18 bg-transparent transition-colors duration-200 group-hover:border-gray-200 sm:h-24">
        <nav className=" text-small-regular mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 text-white transition-colors duration-200 sm:px-6">
          <div className="flex h-[72px] w-full items-center justify-end min-[1100px]:mr-0">
            {session ? (
              <div className="h-[40px] flex items-end gap-2 ">
                <span className="hidden text-[14px] [line-height:_0.7rem] text-[#fffffff2] [text-shadow:_1px_1px_0px_#000000c9] sm:inline-flex">
                  {session?.user?.email}
                </span>
                <UserButtonHeader session={session} /* user={user} */ />
              </div>
              ) : (
              <Link
                href="/login"
                className="flex flex-col items-center opacity-80 duration-200 hover:opacity-100"
              >
                <div className="max-w-max ">
                  <IconCuenta
                    className="text-[30px] w-7"
                    color={'#fff9'}
                  />
                </div>
                <div className="flex flex-col items-center leading-3 text-[#ffffffff] min-[500px]:flex-row">
                  <div className=" text-sm ">Acceso</div>{/* <div className=" [text-shadow:_1px_1px_0px_#000000c9]">tu consulta</div> */}
                </div>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
