"use client"

import { lusitana } from '@/app/ui/fonts'
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Button } from './button'
import { useFormState, useFormStatus } from 'react-dom'
import { createUser } from '@/app/lib/actions'
import { signIn } from "next-auth/react"
import LogoGoogle from "./logosIconos/logo-google"


export default function RegisterForm() {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);
  
  return (
    <form action={dispatch}  className="mt-4px">
      <div className="flex-1 rounded-lg bg-[#ffffff94] backdrop-blur-lg px-6 pb-2 pt-4 [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_8px_0_#fffe_inset]">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          {/* Please log in to continue. */} Creá tu cuenta.
        </h1>
        <div className="w-full">
          <div>
            <div className="relative mb-1.5">
              <input
                className="peer block w-full rounded-md bg-[#0000000a] [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
                id="name"
                type="text"
                name="name"
                placeholder="Elegí tu nombre..."
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md bg-[#0000000a] [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]  "
                id="email"
                type="email"
                name="email"
                placeholder="Agregá tu email..."
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4 mb-1.5">
            <div className="relative"> 
              <input
                className="peer block w-full rounded-md bg-[#0000000a] [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]  "
                id="password"
                type="password"
                name="password"
                placeholder="Creá tu contraseña..."
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="">
            <div className="relative">
              <input
                className="peer block w-full rounded-md bg-[#0000000a] [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]  "
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirmá la contraseña..."
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex items-end space-x-1 mb-3 mt-3"
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
        {/* <div onClick={async () => {await signIn("google")}} className="rounded-2xl border border-[#ccc] justify-start flex items-center px-4 py-0.5 cursor-pointer bg-gray-50 place-items-center mx-auto mb-2 hover:shadow hover:bg-[#f6f6f6]">
          <div className="text-[#898989] text-[14.3px] font-medium">O créala con</div>
          <LogoGoogle filter="filterGoogle1" sombraX="2" sombraY="2"  size="94" className="ml-4"  />
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-500" />
        </div> */}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full  [text-shadow:_0_1px_#fff] [box-shadow:inset_2px_-2px_#0000002e,inset_2px_2px_#ffffff,1px_-1px_#0000002e,1px_1px_#ffffff]" aria-disabled={pending}>
      Crear cuenta<ArrowRightIcon className="ml-auto h-5 w-5 text-[#6b7280] " />
    </Button>
  );
}
