'use client';

import { Button } from '@/app/ui/button';
import { createConsulta } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import type { Session } from 'next-auth';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { Fondo } from '@/app/ui/marcos';


export default function FormConsulta({ session }: { session: Session | null }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createConsulta, initialState);
  return (
    <form action={dispatch}>
      {/* <Fondo>{/* */}
      <textarea 
        className="mb-4 flex max-h-40 w-full resize-y border border-[#fff0] p-3 italic placeholder-[#1d021599]  bg-[#30032215] rounded [box-shadow:_inset_0_1px_#0000002a,inset_0_-1px_#ffffff] 
        focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none "
        rows={6}
        id="consulta"
        name="consulta"
        placeholder="tu consulta..."
        required
      />
      {/* </Fondo> */}
      {/* <textarea
        className="hidden max-h-40 w-full resize-y rounded border-[1px] border-[#fff0] bg-[#0000000d] p-3 italic text-gray-900 placeholder-gray-400 [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none "
        rows={6}
        id="respuesta"
        name="respuesta"
        placeholder="respuesta..."
        defaultValue={undefined}
      /> */}

      <div aria-live="polite" aria-atomic="true">
        {state.message ? (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        ) : null}
      </div>

      {/* <div className="opacity-50 mb-4 mt-4 flex flex-col  items-center gap-3 rounded border-[1px] border-[#fff0] bg-[#0000000d] p-3 [box-shadow:inset_0_1px_0_#00000047,inset_0_-1px_0_#ffffffe0] ">
        <div className=" w-full italic text-[#1d021582] ">
          adjuntar archivo...
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row ">
          <div>
            <div className="flex flex-col text-[#1d0215cc] rounded items-start gap-4 bg-[#ffffff57]  min-[500px]:flex-row min-[500px]:items-center [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] ">
              <div className="relative">
                <input
                  type="text"
                  className="absolute m-0 h-8 w-[164px] rounded px-4 py-1 text-sm opacity-0"
                />
                <div className="flex h-8 w-[164px] items-center rounded px-4 py-1 text-sm ">
                  Seleccionar archivo
                </div>
              </div>
            </div>
            <button
              className={`mt-1 hidden h-8 w-max rounded p-1 text-[13.5px] leading-4 duration-200   disabled:opacity-60 `}
            >
              <div className="flex">
                <p>Adjuntar archivo</p>
              </div>
            </button>
          </div>
          <div
            className={`relative flex h-[310px] w-full justify-center mb-4 rounded bg-[#ffffff43] shadow-none  `}
            data-testid="image-container"
          >
            <div className="relative flex">
              <ClipboardDocumentCheckIcon className="flex w-12 items-center justify-center stroke-1 text-[#1d021566] " />
            </div>
          </div>
        </div>
      </div> */}
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
      <div className="flex justify-end gap-4">
        <Button
          className="bg-[#ffffff99]  text-[#1d0215cc] hover:bg-[#ffffffcc] hover:text-[#1d0215] active:bg-[#fff] "
          type="submit"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
