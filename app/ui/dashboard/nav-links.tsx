import {
  UserGroupIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  UserCircleIcon,
  InboxIcon,
  ClipboardDocumentListIcon
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
  {
    name: 'Inicio Trámite',
    href: '/dashboard/inicioTramite',
    icon: ClipboardDocumentListIcon,
  },
  { name: 'Perfil',
    href: '/dashboard/perfil',
    icon: UserCircleIcon },
];

const links = [
  { name: 'Resumen', href: '/dashboard', icon: HomeIcon },
  { name: 'Facturas', href: '/dashboard/invoices', icon: InboxIcon, },
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Consultas', href: '/dashboard/tusConsultas', icon: QueueListIcon },
  { name: 'Inicio Trámite', href: '/dashboard/inicioTramite', icon: ClipboardDocumentListIcon, },
  { name: 'Perfil', href: '/dashboard/perfil', icon: UserCircleIcon },
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
                /* 'flex grow items-start flex-row justify-start  gap-1 rounded-md p-1.5 text-sm font-medium text-[#00000099] duration-200 [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff45,1px_-1px_#0000002e,-1px_1px_#ffffff45] hover:bg-[#ffffff29] hover:text-[#000000c7] min-[440px]:p-3 min-[440px]:gap-2 md:p-2 md:px-3 min-[824px]:flex-none min-[824px]:justify-start min-[824px]:flex-row ' */
                'flex h-[40px] items-center bg-[#ffffff66] text-[#30032299] justify-start gap-2 p-3 text-sm font-medium duration-200 [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_2px_#ffffff66,1px_0_#0000002e,-1px_1px_#ffffff36] hover:bg-[#ffffffaa] hover:text-[#300322ee] md:p-2 md:px-3 min-[824px]:h-12 [&:first-child]:rounded-t-md [&:last-child]:rounded-b-md',
                {
                  /* 'text-[#111111dd] bg-[#ffffff17] ': pathname === link.href, *//* [&:first-child]:rounded-tl-lg */
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="">{link.name}</p>
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
              'flex h-[40px] items-center bg-[#ffffff66] text-[#30032299] justify-start gap-2 p-3 text-sm font-medium duration-200 [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_2px_#ffffff66,1px_0_#0000002e,-1px_1px_#ffffff36] hover:bg-[#ffffffaa] hover:text-[#300322ee] md:p-2 md:px-3 min-[824px]:h-12 [&:first-child]:rounded-t-md [&:last-child]:rounded-b-md',
              {
                /* 'text-[#111111dd] bg-[#ffffff17] ': pathname === linkMember.href, */
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="">{linkMember.name}</p>{/* hidden md:block */}
          </Link>
        );
      })}
    </>
  );
}
