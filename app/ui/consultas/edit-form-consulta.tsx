'use client';

import { Consulta } from '@/app/lib/definitions';
import Link from 'next/link';
import { UserCircleIcon, AtSymbolIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { updateConsulta } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditConsultaForm({ consulta }: { consulta: Consulta }) {
  const initialState = { message: null, errors: {} };
  const updateConsultaWithId = updateConsulta.bind(null, consulta.id);
  const [state, dispatch] = useFormState(updateConsultaWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-between rounded-xl bg-[#0000000d] px-4 py-6 shadow-sm [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0] ">
        {/* Consulta user Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 ml-3 block text-sm font-medium">
            Editar nombre
          </label>
          <div className="relative rounded-md">
            <div className="relative ">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={consulta.name}
                placeholder="Ingrese el nombre"
                className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   p-6 py-2.5 pl-10 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#bbb] min-[800px]:flex-row   "
                aria-describedby="name-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Consulta user Email */}
        <div className="mb-4">
          <label htmlFor="email" className="-1 ml-3 block text-sm font-medium">
            Editar email
          </label>
          <div className="relative rounded-md">
            <div className="relative ">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={consulta.email}
                placeholder="Ingrese el email"
                className="peer block w-full flex-col items-center rounded border border-[#0000] bg-[#ffffff57]   p-6 py-2.5 pl-10 text-sm outline-2  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] placeholder:text-[#bbb] min-[800px]:flex-row   "
                aria-describedby="email-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
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

          <div id="consulta-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
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

          <div id="respuesta-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
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
