import SideNav from '@/app/ui/dashboard/sidenav'
import { auth } from "@/auth"
import { Providers } from './providers'
import { SessionProvider } from "next-auth/react"
import Image from 'next/image'

export default async function Layout({ children }: { children: React.ReactNode }) {
   const session = await auth()
  /* console.log("Session: ",session) */
  /*if (session?.user) {
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
    <>
    <Providers /* basePath={"/auth"} */ session={session} >
    <div className="mx-auto gap-4 bg-[#f7f2f7] flex min-h-screen p-3 md:p-6 max-w-[1280px] flex-col md:flex-row md:overflow-hidden ">
      <div className="flex-none md:w-80 mb-4">
        <SideNav />
      </div>
      <div className="mb-4 p-[3px] flex justify-between flex-grow flex-col md:overflow-y-auto">
        {children}
      </div>
    </div>
    </Providers>
    </>
  );
}
