'user client';

import Link from 'next/link';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import type { Session } from 'next-auth';
import UserButtonHeader from './user-button-header';
import { User } from '@/app/lib/definitions'

export default function NavInicio({
  session,
  user,
  /* linkDatos, */
}: {
  session: Session | null;
  user: User
  /* linkDatos: {
    slug: string;
    excerpt: string;
  }[]; */
}) {
  return (
    <div className="xgroup w-ful fixed inset-x-0 top-0  z-20 bg-[#ad6fa88c]  shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] backdrop-blur-md ">
      <header className="mt-0px group-hover:bg-tranaparent relative mx-auto h-24 bg-transparent transition-colors duration-200 group-hover:border-gray-200">
        <nav className=" text-small-regular mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 text-white transition-colors duration-200 sm:px-6">
          <div className="flex h-full w-full items-center justify-end min-[1100px]:mr-0">
            {session ? (
              <div className="mt-[30px] flex items-end gap-2 ">
                <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
                  {session?.user?.email}
                </span>
                <UserButtonHeader session={session} user={user} />
              </div>
            ) : (
              <Link
                href="/login"
                className="mt-4 flex flex-col items-center opacity-80 duration-200 hover:opacity-100"
              >
                <div className="max-w-max ">
                  <IconCuenta
                    className="p-[2px]"
                    sombraX="1"
                    sombraY="0"
                    color={'#fffa'}
                  />
                </div>
                <div className="flex flex-col items-center text-sm leading-3 text-[#fff] [text-shadow:_1px_0_0px_#000000] min-[500px]:flex-row">
                  <div className="min-[500px]:pr-1">Realizá</div><div>tu consulta</div>
                </div>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
