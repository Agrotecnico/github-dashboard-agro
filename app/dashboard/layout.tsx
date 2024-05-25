import SideNav from '@/app/ui/dashboard/sidenav'
/* import { auth } from "@/auth" */
import { Providers } from './providers'
import HeaderConsultas from '@/app/ui/header-consultas';


export default async function Layout({ children }: { children: React.ReactNode }) {
  /*  const session = await auth() */
  
  return (
    <>
    <div className="flex flex-col justify-between w-full max-w-7xl mx-auto min-h-screen bg-cover bg-no-repeat bg-center bg-fixed bg-[url('/ofi.jpg')]">
    <HeaderConsultas />
    <Providers  /* session={session} */ >
    <div className="mx-auto w-full mt-[104px] gap-4 flex min-h-screen p-3 md:py-6 md:px-12 max-w-[1280px] flex-col md:flex-row md:overflow-hidden ">
      <div className="flex-none bg-[#0000001f] rounded-lg w-full  mb-1 mt-0 p-2.5 text-[#374151] [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_3px_0_#00000082_inset] backdrop-blur-lg md:py-6 md:px-3 md:w-[280px] md:overflow-y-auto ">
        <SideNav />
      </div>
      <div className="w-full mx-1 mb-1 mt-0 rounded-lg bg-[#ffffff94] pt-6 pb-6 px-3 text-[#374151] [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_8px_0_#fff_inset] backdrop-blur-lg md:px-6 md:overflow-y-auto">{/* mb-4 p-[3px] flex justify-between flex-grow flex-col md:overflow-y-auto */}
        {children}
      </div>
    </div>
    </Providers>
    </div>
    </>
  );
}
