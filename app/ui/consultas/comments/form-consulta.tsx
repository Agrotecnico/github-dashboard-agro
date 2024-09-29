'use client';

import { Button } from '@/app/ui/button';
import { createConsulta } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import type { Session } from 'next-auth';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { Fondo, Frente } from '@/app/ui/marcos';


export default function FormConsulta({ session }: { session: Session | null }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createConsulta, initialState);
  return (
    <div className="p-3 text-sm">
      <form action={dispatch}>

        {/* texto consulta */}
        <div className="relative">
          <label htmlFor="name" className="text-start text-sm">
            Consulta
          </label>
          <Frente className="my-3 h-40 flex max-h-40 w-full ">
            <textarea
              className="!hover:bg-transparent rounded-md p-3 italic resize-y peer block w-full border text-[#000000aa] border-transparent bg-transparent text-sm outline-2 hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
              id="consulta"
              name="consulta"
              placeholder="..."
              required
              rows={6}
              wrap="hard"
            />
          </Frente>
        </div>

        {/* mensajes error */}
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>

        {/* boton cancelar y enviar */}
        <div className="my-4 flex justify-end items-center gap-4 text-sm">
          <div
            onClick={() => {window.location.reload()}}
            className="flex h-9 items-center rounded duration-200 bg-[#1d021511 bg-[#1d021519] opacity-70 cursor-pointer px-4 font-medium transition-colors hover:opacity-100 "
            > 
              Cancelar
          </div>
          <Button 
            type="submit"
            className={`flex items-center h-10 w-max rounded bg-[#ffffffee]  opacity-70 px-4 font-medium duration-200 hover:opacity-100 `}
            >Enviar
          </Button>
        </div>

        <h3 className="opacity-30 pl-3 ">
          Adjuntar archivos a la consulta
        </h3>

        {/* subir archivos */}
        <div className= "opacity-30 mt-3">
          <div className="flex w-full flex-col gap-4 sm:flex-row ">
            {/*  boton seleccion */}
            <div className="flex flex-col gap-2">
              <Frente className="flex text-[#1d0215cc] items-start gap-4 min-[500px]:flex-row min-[500px]:items-center ">
                <div className="flex h-8 w-[172px] items-center rounded px-4 py-1 text-sm ">
                  Seleccionar archivos
                </div>
              </Frente>
              <Frente className="flex text-[#1d0215cc] items-start gap-4 min-[500px]:flex-row min-[500px]:items-center ">
                <div className="flex h-8 w-[172px] items-center rounded px-4 py-1 text-sm ">
                  Subir archivos
                </div>
              </Frente>
            </div>
            {/* mostrar archivos  */}
            <div
              className={`relative flex h-[310px] w-full items-center justify-center rounded bg-[#ffffffcc] shadow-none  `}
              data-testid="image-container"
              >
              <div>
                <ClipboardDocumentCheckIcon className="flex w-12 items-center justify-center stroke-1 text-[#1d021566] " />
              </div>
            </div>
          </div>
        </div>

        <input
          type="hidden"
          id="email"
          name="email"
          value={`${session?.user?.email}`}
          readOnly
        />
        <input
          type="hidden"
          id="name"
          name="name"
          value={`${session?.user?.name}`}
          readOnly
        />
      </form>
    </div>
  );
}
