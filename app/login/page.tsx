import LogoCNP from '@/app/ui/logoCNP'
import LoginForm from '@/app/ui/login-form'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
 
export default function LoginPage() {
  return (
    <main className="h-full min-h-screen max-w-[1280px] mx-auto flex pt-14 justify-center bg-center bg-no-repeat bg-cover bg-[url(../../public/ofi.jpg)]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <Link href="/" >
          <div className="flex h-20 w-full items-end rounded-lg bg-[#c969b5] p-3 md:h-36">
            <div className="text-white">
              <LogoCNP className="md:w-[200px]" color="#ddd" colorC="white" colorN="#ddd" colorP="#ccc"  />
            </div>
          </div>
        </Link>
        <LoginForm />
        <Link href={"/"} className="flex items-center justify-center "><ArrowLeftIcon className="mr-2 h-5 w-5 text-[#333" /> Regresar </Link>
      </div>
    </main>
  );
}