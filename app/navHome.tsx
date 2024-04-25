"user client"

import clsx from "clsx"
import Link from "next/link"
import { useSession } from "next-auth/react"
/* import { usePathname } from "next/navigation"
import { useEffect, useState } from "react" */
import IconCuenta from "./ui/icon-cuenta"
 import type { Session } from "next-auth"
 import { auth, signIn, signOut } from "auth"
import Image from 'next/image'


/* const NavHome = () => { */
export default /* async */ function NavHome({ session }: { session: Session | null }) {

   /* const session = await auth() 
  const { data: session, status } = useSession()*/  
  /*const userop= session?.user?.email*/
  /* const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false) */

  //useEffect that detects if window is scrolled > 5px on the Y axis
  /* useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname]) */

  /* const { toggle } = useMobileMenu() */
  
  return (
    <div
      className={clsx("fixed top-0 inset-x-0 z-50 xgroup  w-ful backdrop-blur-md  bg-[#ad6fa88c] shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066] ",
      {
        /* "!fixed": isHome, */
      }
      )}
    >
      <header
        className={clsx(
          "mt-0px relative h-24 mx-auto transition-colors bg-transparent duration-200 group-hover:bg-tranaparent group-hover:border-gray-200",
          {
            /* "!bg-white !border-gray-200": !isHome || isScrolled, */
          }
        )}
      >
        <nav
          className={clsx(
            " text-white flex items-center justify-between max-w-[1100px] px-2.5 mx-auto w-full h-full text-small-regular transition-colors duration-200",
            /* {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            } */
          )}
          >
          
          <div className="flex items-center justify-end w-full pt-[18px] h-full min-[425px]:mr-4 min-[500px]:pt-1 min-[500px]:mr-8 min-[1100px]:mr-0">
            {/* <Link href={"/dashboard"}>Tus Consultas</Link> */}
            {/* <Link href={""} className="duration-200 flex leading-4 flex-col-reverse opacity-70 hover:opacity-95 items-center text-[#fffd] hover:text-white text-[14px] " > */}
              {/* <div className="flex items-center flex-col gap-0.5 ">
                <IconCuenta filter="filterCuenta7" sombraX="1.5" sombraY="-1.5" size="30" className="bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
                <div className="text-white [text-shadow:_1px_-1px_#000]">Ingresá</div>
              </div> */}
              {session?.user ? (
                <>
                <div>Tus consultas</div>
                <Link href={"/dashboard"} className="duration-200 flex leading-4 flex-col-reverse opacity-70 hover:opacity-95 items-center text-[#fffd] hover:text-white text-[14px] " >

                
                  <div className="flex items-center flex-col gap-0.5 ">
                    <div className="mb-1 text-white [text-shadow:_1px_-1px_#000] max-[620px]:hidden">{session?.user?.email}</div>
                    <div className="text-[#333] flex items-center justify-center w-7 h-7 rounded-full bg-[#eee] ">
                      {session?.user?.image ?( 
                        <img
                        src= {session.user.image} /* '/customers/lee-robinson.png' */
                        className="rounded-full"
                        alt= "profile picture"
                        width={40}
                        height={40}
                        />
                        ) : (
                          <span>{session?.user?.email?.substring(0,1).toUpperCase() }</span>
                        )
                      }
                    </div>
                    {/* <form
                      action=  {async () => {
                        "use server";
                        await signOut();
                      }} 
                    >
                      <button type="submit">Sign Out</button>
                    </form> */}
                  </div>
                </Link>
                </>
              ) : (
                <Link href={"/login"} className="duration-200 flex leading-4 flex-col-reverse opacity-70 hover:opacity-95 items-center text-[#fffd] hover:text-white text-[14px] ">
                  <div className="flex items-center flex-col gap-0.5 ">
                    <IconCuenta filter="filterCuenta7" sombraX="1.5" sombraY="-1.5" size="30" className="bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
                    <div className="text-white [text-shadow:_1px_-1px_#000]">Ingresá</div>
                  </div>
                </Link>
                
              )}
            {/* </Link> */}
          </div>
        </nav>
        {/* <MobileMenu /> */}
      </header>
    </div>
  )
}

/* export default NavHome */
