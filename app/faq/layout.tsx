import { Metadata } from 'next';
import { auth } from 'auth';

import SideNavConsultas from '@/app/ui/consultas/sidenav-consultas';
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
        <Header /* user={user} */ />
      </Providers>
      <main className=" mx-auto w-full max-w-[64rem] flex-auto px-2 py-4 md:px-6 md:py-6 lg:px-2">
        <div className="mx-auto flex flex-col pb-16 pt-3 md:px-6 md:pt-6 ">
          <div className="mt-[92px] flex flex-col-reverse gap-8 md:mt-14 min-[1024px]:flex-row md:gap-4 md:overflow-hidden ">
            <SideNavConsultas />
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
