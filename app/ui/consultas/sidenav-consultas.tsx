import Link from 'next/link'
import NavLinksConsultas from '@/app/ui/consultas/nav-links-consultas'
/* import AcmeLogo from '@/app/ui/acme-logo' */
import { PowerIcon } from '@heroicons/react/24/outline'
import { signOut } from '@/auth'
import LogoCNP from '@/app/ui/logoCNP'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function SideNavConsultas() {
  return (
    <div className="flex h-full flex-col md:px-2">
      
      <Link
        className="mb-2 flex h-20 items-center leading-6 justify-between rounded-md bg-[#e580d0] p-4 md:h-40 md:flex-col-reverse"
        href="/"
      >
        <div className="w-32 text-white md:w-full">
          <LogoCNP className="md:w-[170px]" colorC="white" colorN="#ddd" colorP="#ccc" color="#eee" />
        </div>
        <div className="flex flex-col md:flex-row opacity-30 text-[22px] font-black text-center">
          <span className="mr-1.5">Consultas</span><span>2024</span>  
        </div>
      </Link>
      <div className="flex grow gap-2 md:gap-0 flex-col justify-between space-x-2 md:space-x-0 md:space-y-2">
        <NavLinksConsultas />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          className="!ml-0"
        >
          <Link href={"/"}  className="flex h-[48px] w-full text-[#444] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowLeftIcon className="h-4 ml-3" />
            <div className="">Regresar</div>
          </Link>
        </form>
      </div>
    </div>
  );
}