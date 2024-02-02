import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto bg-[#f7f2f7] flex min-h-screen max-w-[1280px] flex-col md:flex-row md:overflow-hidden ">
      <div className="flex-none md:w-80 m-4">
        <SideNav />
      </div>
      <div className="mr-4 md:mr-8 mb-8 ml-4 flex justify-between flex-grow flex-col md:pt-4 md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
