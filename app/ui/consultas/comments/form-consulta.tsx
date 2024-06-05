'use client';

import { Button } from '@/app/ui/button';
import { createConsulta } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import type { Session } from "next-auth"


export default async function FormConsulta({ session }: { session: Session | null }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createConsulta, initialState);
  return (
    <form action={dispatch}>
        <textarea
          className="mb-4 italic flex w-full border-[1px] border-[#fff0] max-h-40 p-3 rounded resize-y bg-[#0000000d] text-gray-900 placeholder-gray-400 focus:shadow-none 
          focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] "
          rows= {6}
          id= "consulta"
          name= "consulta"
          placeholder="tu consulta..."
          required
        />
        <textarea
          className="italic hidden w-full border-[1px] border-[#fff0] max-h-40 p-3 rounded resize-y bg-[#0000000d] text-gray-900 placeholder-gray-400 focus:shadow-none focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] "
          rows= {6}
          id= "respuesta"
          name= "respuesta"
          placeholder="respuesta..."
          defaultValue= {undefined}
        />

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      <input type="hidden" id="email" name="email" value={session?.user?.email} readOnly/>
      <input type="hidden" id="name" name="name" value={session?.user?.name} readOnly/>
      <div className="flex justify-end gap-4">
        <Button className="text-[#000000cc]  bg-[#ffffff99] hover:bg-[#ffffffcc] active:bg-[#fff] hover:text-[#000] " type="submit">Enviar</Button>
      </div>
    </form>
  );
}
