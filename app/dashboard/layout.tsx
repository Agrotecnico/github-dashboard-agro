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
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between bg-[url('/ofi.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <HeaderConsultas />
        <Providers>
          <div className="mx-auto mt-[104px] flex min-h-screen w-full max-w-[1024px] flex-col gap-4 p-3 md:flex-row md:overflow-hidden md:p-6 ">
            <div className="mb-1 mt-0 w-full flex-none  rounded-lg bg-[#0000001f] p-2.5 text-[#374151] backdrop-blur-lg [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_3px_0_#00000082_inset] md:w-[220px] md:overflow-y-auto md:px-3 md:py-6 ">
              <SideNav />
            </div>
            <div className="mb-1 mt-0 w-full rounded-lg bg-[#ffffff94] px-3 pb-6 pt-6 text-[#374151] backdrop-blur-lg [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_8px_0_#fff_inset]  md:overflow-y-auto md:px-6">
              {children}
            </div>
          </div>
        </Providers>
      </div>
    </>
  );
}
