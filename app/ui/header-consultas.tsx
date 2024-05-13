/* import  {MainNav}  from "./main-nav" */
import UserButton from "@/app/ui/user-button"
import Link from 'next/link';
import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import LogoCNP2 from '@/app/ui/logosIconos/logoCNP2';


export default function HeaderConsultas() {
  return (
    <header className=" fixed left-0 w-full z-10 h-[96px] items-center flex justify-center bg-[#ad6fa88c]  shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] backdrop-blur-lg ">
      <div className="flex items-end -mb-4 justify-between w-full h-16 max-w-5xl px-4 mx-auto sm:px-6">
        <div className="flex gap-4 items-center mb-2">
          <Link
                className="flex items-center justify-between rounded-md leading-6 md:items-end"
                href="/"
              >
                <div className="w-full text-white -ml-3">
                  <LogoCNP2
                    className="w-[104px] md:hidden"
                    colorC="white"
                    colorN="#ddd"
                    colorP="#ccc"
                    color="#eee"
                  />
                  <LogoCNP
                    className="hidden w-[184px] md:block"
                    colorC="white"
                    colorN="#ddd"
                    colorP="#ccc"
                    color="#eee"
                  />
                </div>
          </Link>
        </div>
        <div className="text-white [text-shadow:_1px_-1px_0px_#000000] flex flex-col md:flex-row opacity-50 text-[22px] font-black text-center">
          <span className="mr-1.5">Consultas</span><span>2024</span>  
        </div>
           {/*<MainNav />*/}
           {/* <div>polo</div> */}
          {/* <UserButton />  */}
      </div>
    </header>
  )
}
