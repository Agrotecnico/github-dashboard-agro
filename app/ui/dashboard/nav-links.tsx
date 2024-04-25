'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSession } from "next-auth/react"

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const linkMembers = [
  { name: 'Panel Info Consultas', href: '/dashboard', icon: HomeIcon },
  { name: 'Tus Consultas', href: '/dashboard/tusConsultas', icon: HomeIcon },
  {
    name: 'Realizá tu consulta',
    href: '/dashboard/realizarConsulta',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Mi perfil', href: '/dashboard/perfil', icon: UserGroupIcon },
];

const links = [
  { name: 'Panel Info', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Facturas',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Mi perfil', href: '/dashboard/perfil', icon: UserGroupIcon },
];

export default function NavLinks() {

  const { data: session, update } = useSession()

  const pathname = usePathname();

  if (session?.user?.email === 'agrotecnicog@gmail.com' ) 
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'duration-200 text-[#555] flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:text-[#b520b5] md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'text-[#b520b5]': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    ) 

  return (
    <>
      {linkMembers.map((linkMember) => {
        const LinkIcon = linkMember.icon;
        return (
          <Link
            key={linkMember.name}
            href={linkMember.href}
            className={clsx(
              'duration-200 text-[#555] flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:text-[#b520b5] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-[#b520b5]': pathname === linkMember.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{linkMember.name}</p>
          </Link>
        );
      })}
    </>
  );
}