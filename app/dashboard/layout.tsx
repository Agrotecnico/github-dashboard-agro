import SideNav from '@/app/ui/dashboard/sidenav'
import Header from '@/app/ui/header'
import { Fondo } from '@/app/ui/marcos'
import { Providers } from '@/app/dashboard/providers'


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Providers /* session={session} */>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between ">
        <Header /* user={user} */ />
        <div className="  mx-auto  flex min-h-screen w-full max-w-[1074px] flex-col gap-4 min-[824px]:flex-row sm:mt-[96px] sm:p-3 md:overflow-hidden md:p-6 ">
          <div className="hidden mb-1 mt-0 w-full flex-none min-[824px]:w-60 md:overflow-y-auto min-[824px]:block   ">
            <SideNav /* user={user} */ />
          </div>
          <Fondo className="min-h-screen pt-[88px] px-4 pb-6     w-full mt-0 sm:px-4 sm:pb-6 sm:pt-6     md:overflow-y-hidden md:px-6">
            {children}
          </Fondo>
        </div>
      </div>
    </Providers>
  );
}
