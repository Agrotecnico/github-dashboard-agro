
import NavLinksTramites from '@/app/ui/tramites/nav-links-tramites';
import { getAllTramites } from '@/app/lib/getTramite';
import TramiteButtonMenu from '@/app/pruebas/components/tramite-button-menu';
import { SessionProvider } from "next-auth/react"


export default async function SideNavTramites() {

  const allTramites = getAllTramites();

  return (
    <div className="flex h-max flex-col w-[268px] min-w-[268px] max-[900px]:w-full">
      <SessionProvider basePath={"/auth"}  /* session={session} */>
          <TramiteButtonMenu allTramites={allTramites} />
      </SessionProvider>
      <NavLinksTramites  allTramites={allTramites} />
    </div>
  );
}
