import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NavHome = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
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
  }, [pathname])

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
        <div></div> 
        <nav
          className={clsx(
            " text-white flex items-center justify-between max-w-[1100px] px-8 max-[500px]:px-4 mx-auto w-full h-full text-small-regular transition-colors duration-200",
            /* {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            } */
          )}
          >
          <div className="duration-200 flex items-center justify-end w-full pt-[46px] [text-shadow:_1px_1px_#222;] text-[15px] text-[#fffc] h-full min-[425px]:mr-4 min-[500px]:mr-0 min-[500px]:pt-9 min-[880px]:text-[16px]">
            <Link href={"/dashboard"} className="hover:text-[#fff]">
              Ingresá
            </Link>
          </div>
        </nav>
        {/* <MobileMenu /> */}
      </header>
    </div>
  )
}

export default NavHome
