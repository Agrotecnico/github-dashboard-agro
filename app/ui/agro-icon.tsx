import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import IconAgro from '@/app/ui/iconAgro'

export default function AgroIcon() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <IconAgro className="h-[48px] w-[226px] " color="white" />{/* rotate-[15deg] */}
      <div className="text-[44px] ml-3"></div>
    </div>
  );
}
