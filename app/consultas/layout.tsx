import SideNavConsultas from '@/app/ui/consultas/sidenav-consultas';
/* import Link from 'next/link';
import LogoCNP from '@/components/logosIconos/logoCNP';
import LogoCNP2 from '@/components/logosIconos/logoCNP2'; */
import { Metadata } from 'next'
/* import NavInicioConsultas from '@/components/navInicioConsultas'; */
import FooterConsultas from '@/app/ui/footerConsultas';
/* import { auth } from '@/auth';
import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
import Footer from "@/components/footer" */
import HeaderConsultas from "@/app/ui/header-consultas"


export const metadata: Metadata = {
  title: 'Consultas',
}

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col justify-between w-full max-w-7xl mx-auto min-h-screen bg-cover bg-no-repeat bg-center bg-fixed bg-[url('/ofi.jpg')]">
      <HeaderConsultas />
      <main className=" flex-auto w-full max-w-7xl px-2 py-4 mx-auto md:px-6 md:py-6">
        <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col pb-16 pt-3 md:pt-6 md:px-6      ">
          <div className="mt-[92px] flex flex-col-reverse gap-8 md:flex-row md:gap-4 md:overflow-hidden md:mt-14 ">
            <div className="md:max-w-[280px] ">
              <div className="">
                <SideNavConsultas />
              </div>
            </div>
            <div className="flex-grow flex-col justify-between first-line:flex md:mt-6 md:overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </main>
      <FooterConsultas /> 
    </div>
  );
}