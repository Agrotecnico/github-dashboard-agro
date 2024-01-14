import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[964px] flex-col bg-[#fff5fd] md:flex-row md:overflow-hidden ">
      <div className="w-full flex-none md:w-80">
        <SideNav />
      </div>
      <div className="flex max-w-[668px] flex-grow flex-col justify-between p-4 md:overflow-y-auto">
        {children}
        <div className="flex h-[152px] flex-col justify-center rounded-lg bg-[#ffd7f7] [box-shadow:_inset_0px_0px_8px_1px_#ff8fe7]">
          <div className="flex h-full items-center justify-evenly p-[10px]">
            <div className="flex flex-col items-center">
              <Image
                src="/c.png"
                width={80}
                height={63}
                alt="Logo cnp"
                className="w-[68px] min-[500px]:w-[100px]"
              />
            </div>

            <div className="ml-2 flex flex-col items-start text-[13px] font-semibold leading-6 min-[500px]:text-[15px]">
              <div className="mb-3 flex items-center border-b border-b-[#ff8fe799] text-[16px]">
                C<span className="mr-1 font-normal">arina</span>N
                <span className="mr-1 font-normal">oemi</span>P
                <span className="font-normal">acheco</span>
              </div>
              <div className="text-[#333]">
                <span className="font-normal">Mat Nac: </span>M202427306151350
              </div>
              <div className="text-[#333]">
                <span className="font-normal">Email: </span>
                cnp.mandataria@gmail.com
              </div>
              <div className="text-[#333]">
                <span className="font-normal">Cel: </span>3476 606595
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
