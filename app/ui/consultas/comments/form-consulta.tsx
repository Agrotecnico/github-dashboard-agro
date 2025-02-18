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
    <>
    <Frente className=" py-4 px-3 sm:px-4 text-small-regular" >
      <form action={dispatch}>
        <div className="flex w-full justify-end  ">
          <Button
            onClick={() => {window.location.reload()}}
            className="relative mb-3 h-[30px] min-h-[24px] w-[140px] justify-center border border-[#dddddd] bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215cc] hover:bg-[#ffffff] hover:text-[#1d0215ee] active:!bg-[#eee] "
            // className="flex h-9 items-center rounded duration-200 bg-[#1d021511 bg-[#1d021519] opacity-70 cursor-pointer px-4 font-medium transition-colors hover:opacity-100 "
            > 
            Cancelar
          </Button>
        </div>
        {/* texto consulta */}
        <div className="relative">
          {/* <label htmlFor="name" className="text-start text-sm">
            Consulta
          </label> */}
          <Frente className="mb-3 h-40 flex max-h-40 w-full ">
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
        <div className="flex items-center justify-end gap-4 text-sm">
          <Button 
            type="submit"
            className="small:max-w-[140px] flex h-[26px] w-max items-center justify-center rounded-md bg-[#300322dd] !px-2.5 text-center text-[13px] text-[#d9d9d9] duration-150 hover:bg-[#300322] hover:text-[#eee] active:!bg-[#300322aa] disabled:opacity-40 disabled:hover:bg-[#300322dd] disabled:hover:text-[#d9d9d9] disabled:active:!bg-[#300322dd]"
            >Enviar consulta
          </Button>
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
    </Frente>
    <Frente className="mt-8 py-4 px-3 sm:px-4 text-small-regular ">
      {/* subir archivos */}
      <h3 className=" pl-3 ">
        Adjuntar archivos a la consulta
      </h3>
      <div className= " mt-3 ">
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
    </Frente>
    
    </>
  );
}
