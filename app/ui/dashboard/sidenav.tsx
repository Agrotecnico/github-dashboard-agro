import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/nav-links'
import { PowerIcon } from '@heroicons/react/24/outline'
import LogoCNP from '@/app/ui/logoCNP'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col p-4">
      <Link
        className="mb-2 flex items-center h-20 items-end justify-start md:justify-center rounded-md bg-[#ff8fe7] p-4 md:h-40"
        href="/"
      >
        <div className="w-auto text-white md:w-40">
          <LogoCNP  color={"#222"} colorIcon={"white"} /* size={"150px"} */ className="w-[120px] md:w-[150px]" />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
        <form>
          <Link href="/">
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-[#f9d8f2] hover:text-[#b31991] md:flex-none md:justify-start md:p-2 md:px-3  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
