'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';

import { Consulta } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateConsulta } from '@/app/lib/actions';
import { User } from '@/app/lib/definitions';


export default function EditConsultaForm({
   consulta,
   userMember,
  }: { 
    consulta: Consulta;
    userMember: User | undefined
  }) {

  const initialState = { message: null, errors: {} };
  const updateConsultaWithId = updateConsulta.bind(null, consulta.id);
  const [state, dispatch] = useFormState(updateConsultaWithId, initialState);


  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-between rounded-xl bg-[#0000000d] px-4 py-6 shadow-sm [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0] ">
        <div className="flex items-center justify-center mb-6 ">
          <div className=" relative mr-4" data-testid="image-container">
            {userMember?.image ? (
                <img
                  decoding="async" 
                  src= {userMember?.image}
                  className="rounded-full cursor-pointer bg-cover h-14 bject-cover w-full " alt="header-image-profile">
                  
                </img>
              ) : (
                <div className="flex w-10 h-10 text-2xl items-center justify-center rounded-full bg-[#ffffffba] text-[#666] ">
                  {userMember?.email?.substring(0, 1).toUpperCase()}
                </div>
              )}
          </div>
          <div className=" text-sm">
            <div className="font-medium">{userMember?.name} </div>
            <div className=" text-[13px]">{userMember?.email}</div>
          </div>
          
        </div>

        {/* Consulta consulta */}
        <div className="mb-4">
          <label
            htmlFor="consulta"
            className="mb-1 ml-3 block text-sm font-medium"
          >
            Editar consulta
          </label>
          <div className="relative mt-1 rounded-md">
            <div className="relative ">
              <textarea
                id="consulta"
                name="consulta"
                rows={6}
                defaultValue={consulta.consulta}
                placeholder="Edite la consulta"
                className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#bbb] min-[800px]:flex-row"
                aria-describedby="consulta-error"
              />
            </div>
          </div>

          {/* <div id="consulta-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        {/* Consulta respuesta */}
        <div className="mb-4">
          <label
            htmlFor="respuesta"
            className="mb-1 ml-3 block text-sm font-medium"
          >
            Editar respuesta
          </label>
          <div className="relative mt-1 rounded-md">
            <div className="relative ">
              <textarea
                id="respuesta"
                name="respuesta"
                rows={6}
                defaultValue={consulta.respuesta}
                placeholder="Edite la respuesta"
                className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   py-2.5 pl-3 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#999] min-[800px]:flex-row   "
                aria-describedby="respuesta-error"
                required
              />
            </div>
          </div>

          {/* <div id="respuesta-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/tusConsultas"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Consulta</Button>
      </div>
    </form>
  );
}
