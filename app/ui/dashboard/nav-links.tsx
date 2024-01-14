'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import IconAutomotor from '@/app/ui/icon-automotor'
import IconForms from '@/app/ui/icon-forms'
import IconTramites from '@/app/ui/icon-tramites'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Automotores', href: '/dashboard', icon: IconAutomotor },
  {
    name: 'Trámites',
    href: '/dashboard/tramites',
    icon: IconTramites,
  },
  { name: 'Formularios', href: '/dashboard/forms', icon: IconForms },
];

export default function NavLinks() {
  const pathname= usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-[#f9d8f2] hover:text-[#b31991] md:flex-none md:justify-start md:p-2 md:px-3 [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f] duration-200',
              {
                'bg-[#f9d8f2] text-[#b31991]': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
