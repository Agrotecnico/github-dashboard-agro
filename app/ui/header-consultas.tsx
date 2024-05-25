/* import  {MainNav}  from "./main-nav" */
import UserButtonHeader from "@/app/ui/user-button-header"
import Link from 'next/link';
import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import LogoCNP2 from '@/app/ui/logosIconos/logoCNP2';
import { auth } from "auth"
import IconCuenta from "./logosIconos/icon-cuenta";



export default async function HeaderConsultas() {
  const session = await auth()
  return (
    <header className=" fixed left-0 w-[100vw] z-10 h-[96px] items-center flex justify-center bg-[#ad6fa88c]  shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] backdrop-blur-xl ">
      <div className="flex items-end -mb-4 justify-between w-full h-16 max-w-5xl px-4 mx-auto sm:px-6">
        <div className="flex gap-4 items-center mb-0.5 md:mb-2 duration-200 opacity-80 hover:opacity-100">
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
                filter="filterCNP"
                sombraX= "-1"
                sombraY= "0"
              />
              <LogoCNP
                className="hidden w-[184px] md:block"
                colorC="white"
                colorN="#ddd"
                colorP="#ccc"
                color="#eee"
                filter="filterCNP2"
                sombraX= "-1"
                sombraY= "0"
              />
            </div>
          </Link>
        </div>
        <div className="text-black leading-6 mb-1.5 [text-shadow:_0_1px_0_#ffffffdd] flex flex-col md:flex-row opacity-40 text-[22px] font-black text-center md:mb-1 md:leading-7">
          <span className="mr-1.5">Consultas</span><span>2024</span>  
        </div>
        {session ? (
          <>
          <div className="flex items-end mb-1.5 gap-2 ">
            <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
              {session?.user?.email}
            </span>
            <UserButtonHeader session={session} />
          </div>
          {/* <div className="flex flex-col-reverse items-center mb-1.5 ">
            <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
              {session?.user?.email}
            </span>
            <UserButtonHeader session={session} />
          </div> */}
          </>
        ) : (
          <Link href="/login" className="flex flex-col mb-2 items-center duration-200 opacity-80 hover:opacity-100">
            <div className="max-w-max ">
              <IconCuenta className="p-[2px]" sombraX= "1" sombraY= "0"  color={"#fffa"} />
            </div>
            <div className="hidden text-sm text-[#fff] leading-3 [text-shadow:_1px_0_0px_#000000] sm:inline-flex">Realizá tu consulta</div>
          </Link>
        )}
        
           {/*<MainNav />*/}
           {/* <div>polo</div> */}
          {/* <UserButton />  */}
      </div>
    </header>
  )
}
