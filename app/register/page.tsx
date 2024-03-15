import LogoCNP from '@/app/ui/logoCNP'
import RegisterForm from '@/app/ui/register-form'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
 
export default function RegisterPage() {
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
        <RegisterForm />
        
        {/* <Link href={"/login"} className="flex items-center justify-center "> <i className="mr-[10px] text-[#0009]">Ya tienes una cuenta?</i><div className="flex items-center opacity-80 hover:opacity-100">Ingresá <ArrowRightIcon className="ml-2 h-4 w-4" /></div></Link> */}
        <Link href={"/login"} className="opacity-80 flex items-center justify-center hover:opacity-100 "> <i className="mr-[10px] text-[#333]">Ya tienes una cuenta?</i> Ingresá <ArrowRightIcon className="ml-2 h-4 w-4" /></Link>
        <Link href={"/"} className="opacity-80 absolute bottom-[-24px] !mb-[56px] flex items-center justify-start hover:opacity-100 "><ArrowLeftIcon className="mr-2 h-5 w-5" /> Regresar </Link>
      </div>
    </main>
  );
}