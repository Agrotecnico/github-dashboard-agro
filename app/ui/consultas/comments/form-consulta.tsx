'use client';

/* import { CustomerField } from '@/app/lib/definitions'; */
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createConsulta } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import clsx from "clsx";
/* import { useRef, useEffect } from "react"; */
import type { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { getUser } from "@/app/lib/data"


export default async function FormConsulta({ session }: { session: Session | null }) {
  /* const { data: session, update } = useSession() */
  /* const textareaName = useRef(null); */
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createConsulta, initialState);
  /* console.log("session", session) */
  /* useEffect(() => {
    textareaName.current.focus()
  }, []); */
   /* const user = await getUser(session?.user?.email);
  const polo= session?.user?.id
  console.log("user", user.name)  */
  

  return (
    <form action={dispatch}>
      {/* <div className="p-4"> */}
        <textarea
          className="mb-4 italic flex w-full border-[1px] border-[#fff0] max-h-40 p-3 rounded resize-y bg-[rgba(0,0,0,0.04)] text-gray-900 placeholder-gray-400 focus:shadow-none 
          focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] "
          rows= {6}
          id= "consulta"
          name= "consulta"
          placeholder="tu consulta..."
          required
          /* ref={textareaName} */
          /* onChange={(e) => setText(e.target.value)}
          value={text} */
          /* disabled={!session} */
        />
        <textarea
          className="italic hidden w-full border-[1px] border-[#fff0] max-h-40 p-3 rounded resize-y bg-[rgba(0,0,0,0.04)] text-gray-900 placeholder-gray-400 focus:shadow-none focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] "
          rows= {6}
          id= "respuesta"
          name= "respuesta"
          placeholder="respuesta..."
          /* disabled
          required */
          defaultValue= {undefined}
        />
        

        {/* Cliente Image_url 
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Coloque la url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative bg-[#f7f7f7] rounded-md">
              <input
                id="image_url"
                name="image_url"
                type="text"
                placeholder="Ingrese la url"
                className="peer block w-full bg-transparent rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="image_url-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="image_url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image_url &&
              state.errors.image_url.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>*/}

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      {/* </div> */}
      <input type="hidden" id="email" name="email" value={session?.user?.email} readOnly/>
      <input type="hidden" id="name" name="name" value={session?.user?.name} readOnly/>
      <div className="flex justify-end gap-4">
        {/* <Link
          href="/dashboard/realizarConsulta"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Borrar
        </Link> */}
        <Button className="text-[#000000cc]  bg-[#ffffff99] hover:bg-[#ffffffcc] active:bg-[#fff] hover:text-[#000] " type="submit">Enviar</Button>
      </div>
    </form>
  );
}
