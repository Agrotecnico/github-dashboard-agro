import SideNav from '@/app/ui/dashboard/sidenav';
import { Providers } from './providers';
import HeaderConsultas from '@/app/ui/header-consultas';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between bg-[#30032209] ">{/* bg-[url('/ofi.jpg')] bg-cover bg-fixed bg-center bg-no-repeat */}
        <HeaderConsultas />
        
        <div className="mx-auto mt-[104px] flex min-h-screen w-full max-w-[1024px] flex-col gap-4 p-3 min-[824px]:flex-row md:overflow-hidden md:p-6 ">
          <div className="mb-1 mt-0 w-full flex-none  rounded-lg bg-[#30032215] p-2.5 backdrop-blur-lg [box-shadow:0_0_0_1px_#ffffff30,0_0_3px_1px_#00000026_inset] min-[824px]:w-[220px] md:overflow-y-auto md:px-3 min-`[824px]:py-6 ">
            <Providers>
              <SideNav />
            </Providers>
          </div>
          <div className="mb-1 mt-0 w-full rounded-lg bg-[#ffffffd4] px-3 pb-6 pt-6 backdrop-blur-lg [box-shadow:0_0_0_1px_#00000014,0_0_6px_0_#fffffff2_inset]  md:overflow-y-auto md:px-6">
            {children}
          </div>
        </div>
        
      </div>
    </>
  );
}
