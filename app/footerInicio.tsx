/* import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import MedusaCTA from "@modules/layout/components/medusa-cta" */
import Link from "next/link"
/* import Sorting from "@modules/common/icons/sorting"
import User from "@modules/common/icons/user" */
import { useRef } from "react"
import IconWhatsApp from "./ui/icon-whatsApp"
import IconEmail from "./ui/icon-Email"


const FooterInicio = () => {
   const accordionElement = useRef()
  return (
    <footer className= " z-10 flex items-center justify-center text-white  h-[52px]  bg-[#ad6fa88c] bg-[linear-gradient(180deg,#ffffff66,transparent_12%,transparent_88%,#ffffff66)] w-full fixed bottom-0 backdrop-blur-sm">
      {/* <FooterCTA />
      <FooterNav /> 
      <MedusaCTA />*/}
      <div className="flex w-full h-full">
        <div className="flex justify-center text-[13.5px] min-[425px]:text-[16px] max-w-[1100px] mx-auto w-full h-full max-[500px]:justify-center">
          <div className="flex items-center mr-4 min-[425px]:mr-8">
            <span className="opacity-95  [text-shadow:1px_1px_0_#000]">C</span><div className="opacity-70 mr-1 flex h-full items-center [text-shadow:1px_1px_0_#000]">arina</div>
            <span className="opacity-95  [text-shadow:1px_1px_0_#000]">N</span><div className="opacity-70 mr-1 flex h-full items-center [text-shadow:1px_1px_0_#000]">oemi</div>
            <span className="opacity-95  [text-shadow:1px_1px_0_#000]">P</span><div className="opacity-70 mr-1 flex h-full items-center [text-shadow:1px_1px_0_#000]">acheco</div>
          </div>
          <div className="opacity-70 flex h-full items-center [text-shadow:1px_1px_0_#000]">cnp.mandataria@gmail.com</div>
          <Link href= "https://api.whatsapp.com/send?phone=543476604071"  target="_blank" >
            <IconWhatsApp size="42" className="fixed opacity-70 hover:opacity-95 duration-200 bottom-[56px] min-[768px]:bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterInicio