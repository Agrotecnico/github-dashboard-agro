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
    name: 'Ante la compra / venta de un vehículo, ¿que documentación tengo que solicitar al vendedor o entregar?',
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
              'duration-200 flex text-[#777] hover:text-[#5f084cdd] !ml-0  text-start grow items-center justify-start gap-2 rounded-md p-1.5 text-sm font-medium md:flex-none ',/* hover:[box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f] */
              {
                'text-[#5f084cdd] bg-[#fff8]' : pathname === link.href,/* bg-[#ff8fe74e] */
              },
            )}
          >
            <p className="rounded-md w-full text-start p-2 md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}