import { Metadata } from 'next';
import { auth } from 'auth';

import SideNavTramites from '@/app/ui/tramites/sidenav-tramites';
import FooterConsultas from '@/app/ui/footerConsultas';
import Header from '@/app/ui/header';
import { Providers } from '@/app/dashboard/providers'
import { fetchUserById } from '@/app/lib/data';


export const metadata: Metadata = {
  title: 'Consultas',
};

export default async function Layout({        
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email)

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[80rem] flex-col justify-between ">
      <Providers>
        <Header />
      </Providers>
      <main className=" mx-auto w-full max-w-[64rem] flex-auto px-3 pt-[68px] sm:pt-20 md:px-6 lg:px-2">
        <div className="mx-auto flex flex-col pb-[72px] md:px-6 ">
          <h1 className={`my-4 text-xl md:my-6 lg:my-8 lg:text-2xl`} >
              Iniciá tu trámite
          </h1>
          <div className=" flex flex-col gap-6 min-[900px]:flex-row md:overflow-hidden ">
            <SideNavTramites />
            <div className="flex-grow h-[800px] first-line:flex md:overflow-y-auto max-[900px]:w-full">
              {children}
            </div>
          </div>
        </div>
      </main>
      <FooterConsultas />
    </div>
  );
}
