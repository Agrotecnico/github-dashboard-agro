import CustomLink from "@/app/ui/custom-link"
import { auth } from "auth"
import { fetchUserById } from '@/app/lib/data';


export default async function FooterConsultas() {
  const session = await auth()
  const user = await fetchUserById(session?.user?.email);
  // const polo= session?.user?.email
  return (
    <footer className="bg-[#30032219] w-[100vw] px-2 border border-[#ccc]  py-4 mx-0 min-[1280px]:[margin-left:_calc(((100vw_-_1262px)/2)*-1)] flex flex-col gap-4 text-sm sm:flex-row sm:justify-center sm:items-center sm:px-6 sm:mr-0 max-[1280px]:w-full ">
      <div className="flex w-full px-2 h-full flex-col gap-2 max-w-[1280px] mx-auto ">
        <div className="flex gap-2 items-center justify-center">
          <div className="flex flex-col justify-center opacity-80 items-center text-[13.5px] min-[425px]:text-[16px] max-w-[1100px] mx-auto w-full h-full min-[375px]:flex-row max-[500px]:justify-center">
            <div className="flex items-center min-[375px]:mr-4">
              <span className="font-medium">C</span><div className="opacity-80 mr-1 flex h-full items-center">arina</div>
              <span className="font-medium">N</span><div className="opacity-80 mr-1 flex h-full items-center">oemi</div>
              <span className="font-medium">P</span><div className="opacity-80 mr-1 flex h-full items-center">acheco</div>
            </div>
            <div className="opacity-80 ">cnp.mandataria@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-3 mt-2 justify-center items-center sm:flex-row sm:gap-6 ">
          <CustomLink href="/" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215] ">
            CNP
          </CustomLink>
            {session ? (
              user?.email == process.env.ADMIN ?
              <CustomLink href="/dashboard" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Panel Admin</CustomLink> 
                : 
                <>
                  <CustomLink href="/dashboard/consultas" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Consultas</CustomLink>
                  <CustomLink href="/dashboard/tramites" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Trámites</CustomLink>
                </>
            ) : (
              <>
                <CustomLink href="/realizar-consulta" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Realizar Consulta</CustomLink> 
                <CustomLink href="/iniciar-tramite" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Iniciar trámite</CustomLink>
              </>
            )}
          
        </div>
      </div>
    </footer>
  )
}
