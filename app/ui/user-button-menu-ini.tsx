'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconPresupuesto from './logosIconos/icon-presupuesto';
import IconConsulta from './logosIconos/icon-consulta';


export default  function UserButtonMenuIni() {

  const pathname = usePathname();
  const ini= pathname.startsWith('/iniciar-tramite')


  return (
    <div>
      <Link 
        href={ini ? "/realizar-consulta" : "/iniciar-tramite/baja-de-vehiculo" } 
        className={`mx-10 py-1 px-3 rounded-md leading-4 text-sm opacity-70 duration-150 sm:text-base ${ini || pathname.startsWith('/realizar-consulta') ? "block" : "hidden" } hover:opacity-90 `}>{/* text-[#ffffffcc] hover:bg-black hover:text-[#ffffffee] hover:border-[#afafaf64] border border-transparent */}

        {/* {ini ? "Realizar consulta" : "Pedir presupuesto" } */}
        {ini ? (
          <IconConsulta color="#ffffff" size="26" />
        ) : (
          <IconPresupuesto color="#ffffff" size="26" />
        )}

      </Link>
    </div>
  );
}
