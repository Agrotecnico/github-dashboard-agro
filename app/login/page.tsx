import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

import { auth } from 'auth';
import { SessionProvider } from 'next-auth/react';

export default async function LoginPage() {
  const session = await auth();

  return (
    <main className="mx-auto flex h-full min-h-screen max-w-[1280px] justify-center bg-[url(../../public/ofi.jpg)] bg-cover bg-center bg-no-repeat pt-14">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <Link href="/">
          <div className="flex h-20 w-full items-end rounded-lg bg-[#c969b5b0] p-3 backdrop-blur-lg [box-shadow:_0_2px_1px_-1px_#ffffff33,0_1px_1px_0_#ffffff24,0_1px_3px_0_#ffffff1f,0_0_6px_0_#0000003d_inset] md:h-32 ">
            <div className="text-white">
              <LogoCNP
                className="md:w-[200px]"
                color="#ddd"
                colorC="white"
                colorN="#ddd"
                colorP="#ccc"
                filter="filterCNP2"
                sombraX="0"
              />
            </div>
          </div>
        </Link>
        <SessionProvider session={session}>
          <LoginForm />
        </SessionProvider>
        <Link
          href={'/'}
          className="fixed bottom-[-24px] left-[calc((100vw_/_2)_-_47px);] !mb-[56px] flex items-center justify-center opacity-80 hover:opacity-100 "
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5 " /> Regresar
        </Link>
      </div>
    </main>
  );
}
