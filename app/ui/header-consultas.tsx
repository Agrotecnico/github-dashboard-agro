
import UserButtonHeader from '@/app/ui/user-button-header';
import Link from 'next/link';
import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import LogoCNP2 from '@/app/ui/logosIconos/logoCNP2';
import { auth } from 'auth';
import IconCuenta from './logosIconos/icon-cuenta';
/* import { usePathname } from 'next/navigation'; */


export default async function HeaderConsultas() {
  /* const pathname = usePathname(); */
  const session = await auth();
  return (
    <header className=" fixed left-0 z-10 flex h-[96px] w-[100vw] items-center justify-center bg-[#ad6fa88c]  shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] backdrop-blur-xl ">
      <div className="mx-auto -mb-4 flex h-16 w-full max-w-5xl items-end justify-between px-4 sm:px-6">
        <div className="mb-0.5 flex items-center gap-4 opacity-80 duration-200 hover:opacity-100 md:mb-2">
          <Link
            className="flex items-center justify-between rounded-md leading-6 md:items-end"
            href="/"
          >
            <div className="-ml-3 w-full text-white">
              <LogoCNP2
                className="w-[104px] md:hidden"
                colorC="white"
                colorN="#ddd"
                colorP="#ccc"
                color="#eee"
                filter="filterCNP"
                sombraX="-1"
                sombraY="0"
              />
              <LogoCNP
                className="hidden w-[184px] md:block"
                colorC="white"
                colorN="#ddd"
                colorP="#ccc"
                color="#eee"
                filter="filterCNP2"
                sombraX="-1"
                sombraY="0"
              />
            </div>
          </Link>
        </div>
        <div className="mb-1.5 flex flex-col text-center text-[22px] font-black leading-6 text-black opacity-40 [text-shadow:_0_1px_0_#ffffffdd] md:mb-1 md:flex-row md:leading-7">
          <span className="mr-1.5">
            {session?.user?.email == 'agrotecnicog@gmail.com'
              ? 'Panel de control'
              : 'Realizar consultas'}
          </span>
          <span>2024</span>
        </div>
        {session ? (
          <div className="mb-1.5 flex items-end gap-2 ">
            <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
              {session?.user?.email}
            </span>
            <UserButtonHeader session={session} />
          </div>
        ) : (
          <Link
            href="/login"
            className="mb-2 flex flex-col items-center opacity-80 duration-200 hover:opacity-100"
          >
            <div className="max-w-max ">
              <IconCuenta
                className="p-[2px]"
                sombraX="1"
                sombraY="0"
                color={'#fffa'}
              />
            </div>
            <div className="hidden text-sm leading-3 text-[#fff] [text-shadow:_1px_0_0px_#000000] sm:inline-flex">
              Realizá tu consulta
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
