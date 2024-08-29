'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '@/app/lib/actions';

export default function RegisterForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch} className="mt-4px">
      <div className="flex-1 rounded-lg bg-[#ffffff94] px-6 pb-2 pt-4 backdrop-blur-lg [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_8px_0_#fffe_inset]">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
           Creá tu cuenta.
        </h1>
        <div className="w-full">
          {/* Nombre */}
          <div>
            <div className="relative mb-1.5">
              <input
                className="peer block w-full rounded-md border border-gray-200 bg-[#0000000a] py-[9px] pl-10 text-sm outline-2 [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
                id="name"
                type="text"
                name="name"
                placeholder="Elegí tu nombre..."
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* Email */}
          <div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 bg-[#0000000a] py-[9px] pl-10 text-sm outline-2 [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]  "
                id="email"
                type="email"
                name="email"
                placeholder="Agregá tu email..."
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* Contraseña */}
          <div className="mb-1.5 mt-4">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 bg-[#0000000a] py-[9px] pl-10 text-sm outline-2 [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]  "
                id="password"
                type="password"
                name="password"
                placeholder="Creá tu contraseña..."
                autoComplete='new password'
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* Confirmar contraseña */}
          <div className="">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 bg-[#0000000a] py-[9px] pl-10 text-sm outline-2 [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]  "
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirmá la contraseña..."
                autoComplete='new password'
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>

        </div>
        <LoginButton />
        <div
          className="mb-3 mt-3 flex items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state.message && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{state.message}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-4 w-full  [box-shadow:inset_2px_-2px_#0000002e,inset_2px_2px_#ffffff,1px_-1px_#0000002e,1px_1px_#ffffff]"
      aria-disabled={pending}
    >
      Crear cuenta
      <ArrowRightIcon className="ml-auto h-5 w-5 text-[#6b7280] " />
    </Button>
  );
}
