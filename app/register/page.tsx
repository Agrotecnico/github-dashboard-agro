import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import RegisterForm from '@/app/ui/register-form';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

export default function RegisterPage() {
  return (
    <main className="mx-auto flex h-full min-h-screen max-w-[1280px] justify-center bg-[#1d021509] bg-cover bg-center bg-no-repeat pt-14">
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
        <RegisterForm />
        <Link
          href={'/login'}
          className="mx-auto mt-0 flex items-center justify-start rounded-xl px-4 py-2 opacity-80 duration-200 hover:opacity-100 hover:[box-shadow:0_2px_1px_-1px_#00000033,0-1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_4px_0_#fffe_inset]  "
        >
          <i className="mr-[10px] text-[#333]">Ya tienes una cuenta?</i> Ingresá{' '}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href={'/'}
          className="fixed bottom-[-24px] left-[calc((100vw_/_2)_-_47px);] !mb-[56px] flex items-center justify-start opacity-80 hover:opacity-100 "
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" /> Regresar
        </Link>
      </div>
    </main>
  );
}
