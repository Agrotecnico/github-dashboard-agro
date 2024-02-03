'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: '¿Cuál es la diferencia entre un gestor y un mandatario nacional del automotor?',
    href: '/consultas',
  },
  { name: '¿Qué es el formulario 08?', href: '/consultas/consulta-2' },
  { name: 'Validez del formulario 08', href: '/consultas/consulta-3' },
  {
    name: 'Ante la compra / venta de un vehículo, ¿que documentación tengo que solicitar al vendedor o entregar?',
    href: '/consultas/consulta-4',
  },
  /* { name: 'Qué es el formulario 08?', href: '/consultas/consulta-5' }, */
];

export default function NavLinksConsultas() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        /* const LinkIcon = link.icon; */
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'duration-200 flex text-[#666] !ml-0 hover:text-[#111] text-start grow items-center justify-start gap-2 rounded-md bg-white p-1.5 text-sm font-medium md:flex-none',
              {
                ' text-[#010101]': pathname === link.href,
              },
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="rounded-md w-full text-start p-2 md:block bg-[#f7f7f7] ">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}