import SideNavConsultas from '@/app/ui/consultas/sidenav-consultas'
import Link from 'next/link'
import LogoCNP from '@/app/ui/logoCNP'
import LogoCNP2 from '@/app/ui/logoCNP2'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="p-3 md:p-6 flex flex-col mx-auto bg-[#f7f2f7] min-h-screen max-w-[1024px]">
      <Link
        className="mb-4 flex h-20 items-center leading-6 justify-between rounded-md bg-[#e580d0] p-4 md:h-32 md:items-end"
        href="/"
        >
        <div className="text-white w-full">
          <LogoCNP2 className="md:hidden w-[96px]" colorC="white" colorN="#ddd" colorP="#ccc" color="#eee" />
          <LogoCNP className="hidden md:block w-[208px]" colorC="white" colorN="#ddd" colorP="#ccc" color="#eee" />
        </div>
        <div className="flex flex-col md:flex-row opacity-30 text-[22px] font-black text-center">
          <span className="mr-1.5">Consultas</span><span>2024</span>  
        </div>
      </Link>
      <div className="flex gap-8 flex-col-reverse md:gap-4 md:flex-row md:overflow-hidden ">
        <div className="md:mt-6">
          <div className="ml-4 text-[#777] font-medium mb-6 md:hidden">
            Otras Consultas:
          </div>
          <div className="flex-none md:w-80">
            <SideNavConsultas />
          </div>
          
        </div>
        <div className="md:mt-6 first-line:flex justify-between flex-grow flex-col md:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}