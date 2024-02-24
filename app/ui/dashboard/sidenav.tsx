import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/nav-links'
import { PowerIcon } from '@heroicons/react/24/outline'
import { signOut } from '@/auth'
import LogoCNP from '@/app/ui/logoCNP'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#e580d0] p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <LogoCNP className="md:w-[196px]" colorC="white" colorN="#ddd" colorP="#ccc" color="#eee" />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] text-[#444] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:text-[#b520b5] md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}

