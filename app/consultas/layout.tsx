import SideNavConsultas from '@/app/ui/consultas/sidenav-consultas';
import { Metadata } from 'next';
import FooterConsultas from '@/app/ui/footerConsultas';
import HeaderConsultas from '@/app/ui/header-consultas';

export const metadata: Metadata = {
  title: 'Consultas',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between bg-[url('/ofi.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <HeaderConsultas title="Consultas" />
      <main className=" mx-auto w-full max-w-7xl flex-auto px-2 py-4 md:px-6 md:py-6">
        <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col pb-16 pt-3 md:px-6 md:pt-6      ">
          <div className="mt-[92px] flex flex-col-reverse gap-8 md:mt-14 md:flex-row md:gap-4 md:overflow-hidden ">
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
