/* "use client" */

/* import GaleriaFotosCnp from './cnp-galeria-fotos' */
/* import { SessionProvider } from "next-auth/react"*/
import { auth } from '@/auth'
/* import NavHome from "./navHome"  */
import GaleriaFotosCnp from "./cnp-galeria-fotos"


export default async function Page() {

  const session = await auth()
  /* console.log("Sess11: ", session) */

  /* if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
    }
  } */

  return (
    <>
     <GaleriaFotosCnp   session= {session}  /> 

    {/*<SessionProvider basePath={"/auth"} session={session}>
      <GaleriaFotosCnp />
    </SessionProvider> */}





    {/* <div>HomePage</div>
    <div className="flex flex-col rounded-md bg-neutral-100">
      <div className="p-4 font-bold rounded-t-md bg-neutral-200">
        Current Session
      </div>
      <NavHome session= {session} />
      <GaleriaFotosCnp />
      <SessionData session={session} />
      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>*/} 
    </>

  );
}
