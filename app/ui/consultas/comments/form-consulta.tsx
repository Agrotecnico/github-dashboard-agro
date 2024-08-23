'use client';

import { Button } from '@/app/ui/button';
import { createConsulta } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import type { Session } from "next-auth"
import { CameraIcon, ArrowPathIcon, ClipboardDocumentCheckIcon  } from '@heroicons/react/24/outline';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';


export default /* async */ function FormConsulta({ session }: { session: Session | null }) {
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

      <div className="bg-[#0000000d] rounded p-3 border-[1px]  border-[#fff0] mt-4 mb-4 gap-3 flex flex-col items-center [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] ">
        <div className=" italic text-[#11182782] w-full ">adjuntar archivo...</div>
        <div className="flex flex-col w-full gap-4 sm:flex-row ">
          <div>
            <div className="flex flex-col items-start gap-4 hover:bg-[#ffffff39] min-[500px]:flex-row min-[500px]:items-center ">
              <div className="relative">
                <input
                  type="file"
                  className="w-[164px] h-8 px-4 py-1 m-0 absolute text-sm opacity-0 rounded"
                  /* onChange={handleFileChange} */
                />
                <div className="w-[164px] h-8 px-4 py-1 flex items-center text-sm rounded  [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] ">
                  Seleccionar archivo
                </div>
              </div>
            </div>
            <button
              className={`hidden p-1 mt-1 leading-4 text-[13.5px] w-max h-8 rounded duration-200   disabled:opacity-60 `}/* ${file && "hover:bg-[#ffffff39]"} */
              /* disabled={!file}
              onClick={uploadToServer} */
            >
              <div className="flex">
              {/* <ArrowPathIcon className={`${ file && "stroke-[#ff00cbaa]"} mr-2 stroke-2 font-semibold w-4` }/> */}
              <p>Adjuntar archivo</p>
              </div>
            </button>
          </div>
          <div
            className={`flex justify-center w-full h-[310px] bg-[#fff7] rounded relative shadow-none  ` }/* ${file && "[box-shadow:0_2px_#0000009c,0_-2px_#ffffff96]" } */
            data-testid="image-container"
            >
            {/* {file ? (
              <img
                src= {URL.createObjectURL(file)}
                alt="Uploaded file"
                className="mx-auto rounded items-center justify-center object-cover"
                width={80}
                height={80}
              />
              ) : ( */}
                <div className="flex relative">
                <ClipboardDocumentCheckIcon className="flex items-center justify-center w-12 text-[#0006] stroke-1 " /* color="#0006" */ />
                {/* <CameraIcon  className="text-[#00000057] w-4 -right-[6px] top-[2px] text-[16px] absolute" /> */}
                </div>
            {/*  )
            } */}
          </div>
        </div>
      </div>

      <input type="hidden" id="email" name="email" value={session?.user?.email} readOnly/>
      <input type="hidden" id="name" name="name" value={session?.user?.name} readOnly/>
      <div className="flex justify-end gap-4">
        <Button className="text-[#000000cc]  bg-[#ffffff99] hover:bg-[#ffffffcc] active:bg-[#fff] hover:text-[#000] " type="submit">Enviar</Button>
      </div>
    </form>
  );
}
