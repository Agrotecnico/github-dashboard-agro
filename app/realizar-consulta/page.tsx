import { Metadata } from 'next';
import { auth } from 'auth';

import FooterConsultas from '@/app/ui/footerConsultas';
import Header from '@/app/ui/header';
import { Providers } from '@/app/dashboard/providers'
import { fetchUserById } from '@/app/lib/data';
import RealizarConsultaUser from '@/app/ui/consultas/realizar-consulta-user';
import RealizarConsulta from '@/app/ui/consultas/realizar-consulta';


export const metadata: Metadata = {
  title: 'Consultas',
};

export default async function Page(/* {        
  children,
}: {
  children: React.ReactNode;
} */) {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email)


  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[80rem] flex-col justify-between ">
      <Providers>
        <Header />
      </Providers>
      <main className="min-h-[93vh] mx-auto w-full max-w-[64rem] flex-auto px-3 pt-[68px] sm:pt-20 md:px-6 lg:px-2">
        <div className="mx-auto flex flex-col pb-16 md:px-6 ">
          <div className=" flex flex-col-reverse min-[1024px]:flex-row md:gap-4 md:overflow-hidden ">
            <div className="w-full max-w-2xl mx-auto flex-grow flex-col justify-between first-line:flex ">
                <h1  className={` my-4 text-xl lg:my-8 lg:text-2xl`}>
                    Realizá tu consulta
                </h1>
                {user ? (
                  <RealizarConsultaUser user= {user} />
                  ) : (
                  <RealizarConsulta />
                )}
                  {/* <RealizarConsulta /> */}
                  {/* <RealizarConsultaUser user= {user} /> */}
            </div>
          </div>
        </div>
      </main>
      <FooterConsultas />
    </div>
  );
}
