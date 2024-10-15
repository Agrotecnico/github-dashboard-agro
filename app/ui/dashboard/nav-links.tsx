/* "use client" */

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
import { Frente } from '@/app/ui/marcos';
import { useSession } from "next-auth/react"
import { usePathname } from 'next/navigation'


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
  { name: 'Editar Perfil',
    href: '/dashboard/perfil',
    icon: UserCircleIcon },
];

const links = [
  { name: 'Resumen', href: '/dashboard', icon: HomeIcon, },
  { name: 'Facturas', href: '/dashboard/invoices', icon: InboxIcon, },
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Consultas', href: '/dashboard/tusConsultas', icon: QueueListIcon },
  { name: 'Inicio Trámite', href: '/dashboard/inicioTramite', icon: ClipboardDocumentListIcon, },
  { name: 'Editar Perfil', href: '/dashboard/perfil', icon: UserCircleIcon },
];

export default  async  function NavLinks() {
    /* const { data: session, update } = useSession()
   const pathname = usePathname(); */
  
 
  const session = await auth();
   /* console.log("sessionxxx:", session)*/ 

  if (session?.user?.email === process.env.ADMIN)
    return (
      <>
        {/* <div className="mb-2.5 flex flex-col-reverse font-medium items-center text-sm min-[824px]:[margin:_17px_0_25px]  ">
          <div className="">
            {session?.user?.name}
          </div>
        </div> */}
        {links?.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm flex items-center justify-start first:rounded-t-md last:rounded-b-md duration-200  text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] hover:bg-[#ffffffcc] hover:text-[#1d0215]'/*  text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] hover:bg-[#ffffffcc] hover:text-[#1d0215] */
            >
              <button className="w-full py-2 px-2.5 gap-2 flex justify-start items-center"      /* "bg-[#ffffff00] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] rounded-md  w-full py-2 px-2.5 gap-2 flex justify-start text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffff00] hover:text-[#1d0215] focus-within:bg-[#ffffffcc] focus-within:text-[#1d0216]" */   
              /* {clsx(`w-full py-2 px-2.5 gap-2 flex justify-start text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] items-center duration-200 hover:bg-[#ffffffcc] hover:text-[#1d0215]`,
                {
                  'text-[#1d0216] bg-[#ffffffcd] ':  pathname === link.href,
                }
                )} */  >

                <LinkIcon className="w-4 text-[#1d0215dd]" />
                <p className="text-sm text-start ">
                {link.name}
                </p>

              </button>
            </Link>
          );
        })}
      </>
    );

    return (
      <>
        {linkMembers?.map((linkMember) => {
          const LinkIcon = linkMember.icon;
          return (
            <Link
              key={linkMember.name}
              href={linkMember.href}
              className='text-sm flex items-center justify-start first:rounded-t-md last:rounded-b-md duration-200  text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] hover:bg-[#ffffffcc] hover:text-[#1d0215]'/* 'text-sm flex text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] items-center justify-start first:rounded-t-md last:rounded-b-md duration-200 hover:bg-[#ffffffcc] hover:text-[#1d0215]' */
            >
              <button className="w-full py-2 px-2.5 gap-2 flex justify-start items-center"
                /* {clsx(`w-full py-2 px-2.5 gap-2 flex justify-start text-[#1d0215bb] bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] items-center duration-200 hover:bg-[#ffffffcc] hover:text-[#1d0215]`,
                  {
                    'text-[#1d0216] bg-[#ffffffcd]':  pathname === linkMember.href,
                  }
                  )} */
              /* "w-full py-2 px-2.5 gap-2 flex justify-start text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffcc] hover:text-[#1d0215"  */
                                 
                /* {clsx(`w-full py-2 px-2.5 flex gap-2 justify-start text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffcc] hover:text-[#1d0215] `,
                {
                  'text-[#1d0216] !bg-[#ffffffcb] ':  pathname === linkMember.href,
                }
                )} */>
                <LinkIcon className="w-[20px]  text-[#1d0215dd]" />
                <p className="text-sm text-start ">
                {linkMember.name}
                </p>
              </button>
            </Link>
          );
        })}
      </>
    );
}
