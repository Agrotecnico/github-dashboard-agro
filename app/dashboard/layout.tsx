import SideNav from '@/app/ui/dashboard/sidenav'
import Header from '@/app/ui/header'
import { Fondo } from '@/app/ui/marcos'


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between ">
      <Header />
      
      <div className="mx-auto mt-[104px] flex min-h-screen w-full max-w-[1074px] flex-col gap-4 p-3 min-[824px]:flex-row md:overflow-hidden md:p-6 ">
        <div className="mb-1 mt-0 w-full flex-none min-[824px]:w-60 md:overflow-y-auto ">
          <SideNav />
        </div>
        <Fondo className="mb-1 mt-0 w-full px-4 pb-6 pt-6  md:overflow-y-auto md-px-6">
          {children}
        </Fondo>
      </div>
      
    </div>
  );
}
