import {
  UserGroupIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  UserCircleIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { auth } from '@/auth';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const linkMembers = [
  {
    name: 'Realizá tu consulta',
    href: '/dashboard',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Tus Consultas',
    href: '/dashboard/tusConsultas',
    icon: QueueListIcon,
  },

  { name: 'Perfil', href: '/dashboard/perfil', icon: UserCircleIcon },
];

const links = [
  { name: 'Resumen', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Facturas',
    href: '/dashboard/invoices',
    icon: InboxIcon,
  },
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Consultas', href: '/dashboard/tusConsultas', icon: QueueListIcon },
  /* { name: 'Perfil', href: '/dashboard/perfil', icon: UserCircleIcon }, */
];

export default async function NavLinks() {
  const session = await auth();

  if (session?.user?.email === process.env.ADMIN)
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex grow items-center flex-col justify-center  gap-1 rounded-md p-1.5 text-sm font-medium text-[#00000099] duration-200 [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff45,1px_-1px_#0000002e,-1px_1px_#ffffff45] hover:bg-[#ffffff29] hover:text-[#000000c7] min-[440px]:p-3 min-[440px]:gap-2 md:p-2 md:px-3 min-[824px]:flex-none min-[824px]:justify-start min-[824px]:flex-row ',
                {
                  /* 'text-[#111111dd] bg-[#ffffff17] ': pathname === link.href, */
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="text-xs min-[440px]:text-sm ">{link.name}</p>
            </Link>
          );
        })}
      </>
    );

  return (
    <>
      {linkMembers.map((linkMember) => {
        const LinkIcon = linkMember.icon;
        return (
          <Link
            key={linkMember.name}
            href={linkMember.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-[#00000099] duration-200 [box-shadow:inset_2px_-2px_#0000002e,inset_-2px_2px_#ffffff36,1px_-1px_#0000002e,-1px_1px_#ffffff36] hover:bg-[#ffffff17] hover:text-[#000000bb] md:p-2 md:px-3 min-[824px]:flex-none min-[824px]:justify-start',
              {
                /* 'text-[#111111dd] bg-[#ffffff17] ': pathname === linkMember.href, */
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
