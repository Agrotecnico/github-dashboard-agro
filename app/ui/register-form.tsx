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

import Image from "next/image"
import { signIn } from "next-auth/react"
import google from "../../public/google2.svg";
import LogoGoogle from "../ui/logo-google"


export default function RegisterForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);
  return (
    <form action={dispatch}  className="mt-4px">{/* space-y-3 */}
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-2 pt-4  [box-shadow:_0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          {/* Please log in to continue. */} Creá tu cuenta.
        </h1>
        <div className="w-full">
          <div>
            {/* <label
              className="mb-1.5 mt-2.5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Nombre
            </label> */}
            <div className="relative mb-1.5">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]"
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
            {/* <label
              className="mb-1.5 mt-2.5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label> */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
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
            {/* <label
              className="mb-1.5 mt-2.5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Creá tu contraseña
            </label>*/}
            <div className="relative"> 
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
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
            {/* <label
              className="mb-1.5 mt-2.5 block text-xs font-medium text-gray-900"
              htmlFor="confirm-password"
            >
              Confirmá la contraseña
            </label> */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[7px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
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
          className="flex items-end space-x-1 mb-3 mt-3"/*  h-8 */
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


        {/* <div className="flex justify-center w-full items-center gap-3 py-3">
          <div className="border-b border-gray-800 py-2 w-full px-6" />
          <div className="mt-3">or</div>
          <div className="border-b border-gray-800 py-2 w-full px-6" />
        </div> */}
        <div onClick={async () => {await signIn("google")}} className="rounded-2xl border border-[#ccc] justify-start flex items-center px-4 py-0.5 cursor-pointer bg-gray-50 place-items-center mx-auto mb-2 hover:shadow hover:bg-[#f6f6f6]">
          <div className="text-[#898989] text-[14.3px] font-medium">O créala con</div> {/* <Image src={google} alt="bg" width={110} height={110} className="ml-4" /> */}
          <LogoGoogle filter="filterGoogle1" sombraX="2" sombraY="2"  size="94" className="ml-4"  />{/* fixed opacity-70 hover:opacity-95 duration-200 bottom-[56px] min-[768px]:bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)] */}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-500" />
        </div>{/* {" "} */}





      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      {/* Log in */} Crear cuenta {/* sesión */} <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
