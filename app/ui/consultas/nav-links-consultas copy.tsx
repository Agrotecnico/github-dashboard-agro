'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: '¿Cuál es la diferencia entre un gestor y un mandatario nacional del automotor?',
    href: '/consultas',
  },
  { name: '¿Qué es y cómo funciona el 08 para transferir un vehículo?', href: '/consultas/consulta-2' },
  { name: 'Validez del formulario 08', href: '/consultas/consulta-3' },
  {
    name: 'Ante la compra o venta de un vehículo, ¿que documentación tengo que solicitar o entregar?',
    href: '/consultas/consulta-4',
  },
  { name: 'Intervendrán todos los registros automotores del país', href: '/consultas/consulta-5' },
];

export default function NavLinksConsultas() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'border-l-[3px] border-transparent duration-300 flex text-[#777] hover:bg-[#fff0] hover:text-[#111] hover:border-[#e580d0]  !ml-0  text-start grow items-center justify-start gap-2 text-[14px] leading-[18px] font-medium md:flex-none ',/* hover:[box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f] */
              {
                ' bg-[#fff0] text-[#112] border-[#e580d1] duration-200' : pathname === link.href,/* bg-[#ff8fe74e] */
              },
            )}
          >
            <p className="rounded-md w-full text-start py-0 px-2 md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}