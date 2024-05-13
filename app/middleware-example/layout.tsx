import SideNav from '@/app/ui/dashboard/sidenav'
import { auth } from "@/auth"
/* import { Providers } from './providers' */
import { SessionProvider } from "next-auth/react"
import Image from 'next/image'

export default async function Layout({ children }: { children: React.ReactNode }) {
   const session = await auth()
  /*console.log("Sess: ",session)
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }
  console.log("Ses33s: ",session) */
  return (

    <SessionProvider basePath={"/auth"} session={session}>
        <div className="mx-auto gap-4 bg-[#f7f2f7] flex min-h-screen p-3 md:p-6 max-w-[1280px] flex-col md:flex-row md:overflow-hidden ">
        <div className="flex-none md:w-80 mb-4">
            <SideNav />
        </div>
        <div className="flex items-center gap-2.5 absolute left-[66px] top-[34px] md:top-[110px] min-[1280px]:[left:_calc(((100%_-_1280px)_/_2)_+_66px)] ">
            {/* <div className="text-[#333] flex items-center justify-center w-7 h-7 rounded-full bg-[#eee] "><span>M</span></div> */} 
            {/* <Image
                src= '/customers/lee-robinson.png'
                className="rounded-full"
                alt= "profile picture"
                width={40}
                height={40}
            /> */}
            <img src={`${session?.user?.image}`} alt="Polo" width={40} height={40} className="rounded-full" />
            <div className="text-white [text-shadow:_1px_1px_#000]">{session?.user?.email}</div>
            </div>
        <div className="mb-4 p-[3px] flex justify-between flex-grow flex-col md:overflow-y-auto">
            {children}
        </div>
        </div>
    </SessionProvider>

  );
}