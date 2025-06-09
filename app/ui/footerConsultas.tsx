import CustomLink from "@/app/ui/custom-link"
import { auth } from "auth"
import { fetchUserById } from '@/app/lib/data';
import IconLink from "./logosIconos/icon-link";


export default async function FooterConsultas() {
  const session = await auth()
  const user = await fetchUserById(session?.user?.email);
  return (
    <footer className="bg-[#30032219] w-[100vw] pt-2 pb-1.5 border text-[13px]  border-[#ccc] sm:text-sm">
      <div className="flex w-full h-full flex-col gap-3 max-w-[1280px] mx-auto ">
        <div className="flex gap-2 justify-center items-center sm:gap-12 ">
          <CustomLink href="/" className="flex gap-1.5 [text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215] ">
            CNP <IconLink width="12" />
          </CustomLink>
          {session ? (
            user?.email == process.env.ADMIN ?
            <CustomLink href="/dashboard" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">
              Panel Admin
            </CustomLink> 
              : 
              <>
                <CustomLink href="/dashboard/consultas" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Consultas</CustomLink>
                <CustomLink href="/dashboard/tramites" className="[text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Trámites</CustomLink>
              </>
          ) : (
            <>
              <CustomLink href="/realizar-consulta" className="text-center [text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Realizar consulta</CustomLink> 
              <CustomLink href="/iniciar-tramite/baja-de-vehiculo" className="text-center [text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215]">Pedir presupuesto</CustomLink>
            </>
          )}
          <CustomLink href="/faq/dif-gestor-mandatario" className="flex gap-1.5 [text-shadow:1px_1px_0_#ffffff] duration-150 underline decoration-[#1d021555] underline-offset-2 hover:decoration-[#1d0215] ">
            FAQ <IconLink width="12" />
          </CustomLink>
        </div>

        <div className="flex flex-col justify-center opacity-[0.85] items-center leading-[1.1rem] text-[#50073a]  max-w-[1100px] mx-auto">
          <div className="flex items-center">
            <span className="font-semibold">C</span><div className="opacity-80 mr-1 flex h-full items-center">arina</div>
            <span className="font-semibold">N</span><div className="opacity-80 mr-1 flex h-full items-center">oemí</div>
            <span className="font-semibold">P</span><div className="opacity-80 mr-1 flex h-full items-center">acheco</div>
          </div>
          <div className=" ">cnp.mandataria@gmail.com</div>
        </div>
      </div>
    </footer>
  )
}
