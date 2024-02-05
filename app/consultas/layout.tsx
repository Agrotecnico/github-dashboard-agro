import SideNavConsultas from '@/app/ui/consultas/sidenav-consultas';
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto bg-[#f7f2f7] flex min-h-screen max-w-[1024px] flex-col md:flex-row md:overflow-hidden ">
      <div className="flex-none md:w-80 m-4 min-[500px]:m-6 md:mx-4 md:my-6">
        <SideNavConsultas />
      </div>
      <div className="mx-6 mb-6 mt-0 max-[500px]:mx-4 md:ml-0 md:mr-6 md:b-6 flex justify-between flex-grow flex-col md:pt-2 md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}