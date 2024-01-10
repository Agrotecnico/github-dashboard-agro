import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import LogoAgro from '@/app/ui/logoAgro'

export default function AgroLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <LogoAgro className="h-12 w-[224px] " color="white" />{/* rotate-[15deg] */}
      <div className="text-[44px] ml-3"></div>
    </div>
  );
}
