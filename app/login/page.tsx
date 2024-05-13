import LogoCNP from '@/app/ui/logosIconos/logoCNP'
import LoginForm from '@/app/ui/login-form'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
 
export default function LoginPage() {
  return (
    <main className="h-full min-h-screen max-w-[1280px] mx-auto flex pt-14 justify-center bg-center bg-no-repeat bg-cover bg-[url(../../public/ofi.jpg)]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <Link href="/" >
          <div className="flex h-20 w-full items-end rounded-lg bg-[#c969b5] p-3 md:h-32">
            <div className="text-white">
              <LogoCNP className="md:w-[200px]" color="#ddd" colorC="white" colorN="#ddd" colorP="#ccc"  />
            </div>
          </div>
        </Link>
        <LoginForm />
        
        <Link href={"/register"} className="pt-2 opacity-80 flex items-center justify-center hover:opacity-100 "> <i className="mr-[10px] text-[#444]">No tienes una cuenta?</i> Créala <ArrowRightIcon className="ml-2 h-4 w-4" /></Link>
        <Link href={"/"} className="opacity-80 absolute bottom-[-24px] !mb-[56px] flex items-center justify-center hover:opacity-100 "><ArrowLeftIcon className="mr-2 h-5 w-5" /> Regresar </Link>

      </div>
    </main>
  );
}