import clsx from "clsx"
import Link from "next/link"
/* import { usePathname } from "next/navigation"
import { useEffect, useState } from "react" */
import IconCuenta from "./ui/icon-cuenta"

/* const NavHome = () => { */
export default async function NavHome() {
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
      className={clsx("fixed top-0 inset-x-0 z-50 xgroup  w-ful backdrop-blur-md  bg-[#ad6fa88c] shadow-[inset_0_-2px_6px_#ffffff66,_0_2px_6px_#00000066]  bg-[#0003]",
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
            <Link href={"/dashboard"} className="duration-200 flex leading-4 flex-col-reverse opacity-70 hover:opacity-95 items-center text-[#fffd] hover:text-white text-[14px] " >
              <div className="text-white [text-shadow:_1px_-1px_#000]">
                Ingresá
                 {/*{(session?.user) ? session?.user.email  : "Ingresá"} */}
              </div>
              <IconCuenta filter="filterCuenta7" sombraX="1.5" sombraY="-1.5" size="30" className="bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]" />
            </Link>
          </div>
        </nav>
        {/* <MobileMenu /> */}
      </header>
    </div>
  )
}

/* export default NavHome */
