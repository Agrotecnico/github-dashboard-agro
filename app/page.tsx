/* "use client" */

import GaleriaFotosCnp from './cnp-galeria-fotos'
/* import { SessionProvider } from "next-auth/react"
import { auth } from '@/auth' */

export default async function Page() {

  /* const session = await auth() */

  return (
    <>
    <GaleriaFotosCnp />

    {/* <SessionProvider basePath={"/auth"} session={session}>
      <GaleriaFotosCnp />
    </SessionProvider> */}





    {/* <div>HomePage</div>
    <div className="flex flex-col rounded-md bg-neutral-100">
      <div className="p-4 font-bold rounded-t-md bg-neutral-200">
        Current Session
      </div>
      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div> */}
    </>

  );
}
