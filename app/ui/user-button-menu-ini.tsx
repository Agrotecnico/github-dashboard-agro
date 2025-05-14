'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default  function UserButtonMenuIni() {

  const pathname = usePathname();
  const ini= pathname.startsWith('/iniciar-tramite')


  return (
    <div>
      <Link 
        href={ini ? "/realizar-consulta" : "/iniciar-tramite/baja-de-vehiculo" } 
        className={`mx-10 py-1 px-3 rounded-md border border-transparent leading-4 text-sm text-[#ffffffcc] hover:bg-black hover:text-[#ffffffee] hover:border-[#afafaf64] sm:text-base ${ini || pathname.startsWith('/realizar-consulta') ? "block" : "hidden" } `}>
        {ini ? "Realizar consulta" : "Iniciar trámite" }
      </Link>
    </div>
  );
}
