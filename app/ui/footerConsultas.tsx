import CustomLink from "@/app/ui/custom-link"
import { auth } from "auth"

export default async function FooterConsultas() {
  const session = await auth()
  const polo= session?.user?.email
  return (
    <footer className="bg-[#beb7ab66] w-[100vw] px-2 py-4 mx-0 min-[1280px]:[margin-left:_calc(((100vw_-_1262px)/2)*-1)] [text-shadow:0_-1px_0_#ffffffa3] bg-[linear-gradient(180deg,#ffffff66,transparent_6px,transparent_calc(100%_-_6px),#ffffff66)]  shadow-[inset_0_2px_6px_#ffffff66,_0_-2px_6px_#00000048] backdrop-blur  flex flex-col gap-4 text-sm sm:flex-row sm:justify-center sm:items-center sm:px-6 sm:mr-0 max-[1280px]:w-full ">
        <div className="flex w-full px-2 h-full flex-col gap-2 max-w-[1280px] mx-auto ">
          <div className="flex gap-2 items-center justify-center">
            {/* {packageJSON.version} */}
            <div className="flex text-[#000000c9] flex-col justify-center items-center min-[425px]:text-[16px] max-w-[1100px] mx-auto w-full h-full min-[500px]:flex-row">
              <div className="flex items-center mb-1 min-[500px]:mr-4">
                <span className="font-medium">C</span><div className="mr-1 flex h-full items-center">arina</div>
                <span className="font-medium">N</span><div className="mr-1 flex h-full items-center">oemi</div>
                <span className="font-medium">P</span><div className="mr-1 flex h-full items-center">acheco</div>
              </div>
              <div className="flex h-full mb-1 items-center">cnp.mandataria@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[#333] sm:flex-row justify-around md:gap-4">
            <CustomLink href="/" className="w-[142px]">
              CNP
            </CustomLink>
            <div>
              {session ? (
                session.user?.email == "agrotecnicog@gmail.com" ?
                <CustomLink href="/dashboard" className="">Panel de control</CustomLink> 
                 : 
                 <CustomLink href="/dashboard" className="">Realizar consulta</CustomLink> 
              ) : (
                  <CustomLink href="/login" className="">Realizar Consulta</CustomLink> 
              )}
            </div>
          </div>
        </div>
    </footer>
  )
}
