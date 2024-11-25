import Link from 'next/link';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import UserButtonHeader from './user-button-header';
import { useSession } from 'next-auth/react';
import { fetchUserById } from '@/app/lib/data'; 
import { User } from '@/app/lib/definitions';


export default /* async */ function NavInicio({ user }: { user: User | undefined }) {
  const { data: session, update } = useSession();
  /* const user = await fetchUserById(session?.user?.email) */

  return (
    <div className="xgroup w-ful fixed inset-x-0 top-0  z-20 bg-[#300322] backdrop-blur-md ">
      <header className=" mt-0px group-hover:bg-tranaparent h-18 relative mx-auto h-[68px] bg-transparent transition-colors duration-200 group-hover:border-gray-200 sm:h-20">
        <nav className=" text-small-regular mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 text-white transition-colors duration-200 sm:px-6">
          <div className="flex w-full items-center justify-end min-[1100px]:mr-0">
            {session?.user ? (
              <div className=" flex items-center gap-2 ">
                <span className="hidden text-sm text-[#fffffff2] [text-shadow:_1px_1px_0px_#000000c9] sm:inline-flex">
                  {session?.user?.email}
                </span>
                <UserButtonHeader user={user} />
              </div>
            ) : (
              <Link
                href="/login"
                className="flex flex-col items-center opacity-80 duration-200 hover:opacity-100"
              >
                <div className="max-w-max ">
                  <IconCuenta className="w-7 text-[30px]" color={'#fff9'} />
                </div>
                <div className="flex flex-col items-center leading-3 text-[#ffffffff] min-[500px]:flex-row">
                  <div className=" text-sm ">Acceso</div>
                </div>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
