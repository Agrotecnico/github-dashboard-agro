'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
/*import { signIn } from "@/auth"*/
import LogoGoogle from './logosIconos/logo-google';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';


/* import { AuthError } from 'next-auth';


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      formData,
      redirect: false,
     });
      
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales no válidas.';
        default:
          return 'Algo salió mal.';
      }
    }
    throw error;
  }
} */


export default function LoginForm() {

  /* const router = useRouter() */
  
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

/*   useEffect(() => {
    setTimeout(() => {
      router.push("/consultas")
      }, 1000 )
  }, [] )
 */  
  return (
    <>
    <form action={dispatch} className="mt-4">
      {/* space-y-3 */}
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-2 pt-4  [box-shadow:_0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          {/* Please log in to continue. */} Ingresá con
        </h1>
        <div className="w-full">
          <div>
            {/* <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label> */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
                id="email"
                type="email"
                name="email"
                placeholder="tu email"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            {/* <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Contraseña
            </label> */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]"
                id="password"
                type="password"
                name="password"
                placeholder="la contraseña"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="my-3 flex items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        {/* <div
          onClick={async () => {
            await signIn("google", {
              callbackUrl: "/dashboard",
            });
          }}
          className="mx-auto mb-2 flex cursor-pointer place-items-center items-center justify-start rounded-2xl border border-[#ccc] bg-gray-50 px-4 py-0.5 hover:bg-[#f6f6f6] hover:shadow "
        >
          <div className="text-[14.3px] font-medium text-[#898989]">
            O ingresá con
          </div>
          <LogoGoogle
            filter="filterGoogle1"
            sombraX="2"
            sombraY="2"
            size="94"
            className="ml-4"
          />
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-500" />
        </div> */}
      </div>
    </form>
    <Link
      href={'/register'}
      className="flex items-center mt-0 justify-start pt-2 px-10 opacity-80 hover:opacity-100 "
    >
      <i className="mr-[10px] text-[#444]">
        No tienes una cuenta?
      </i> Créala <ArrowRightIcon className="ml-2 h-5 w-5" />
    </Link>
    <div
      onClick={async () => {
        await signIn("google", {
          callbackUrl: "/dashboard",
        });
      }}
      className="mb-2 !mt-6 flex cursor-pointer place-items-center items-center justify-start rounded-lg [box-shadow:_0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f] bg-gray-50 px-10 py-1 hover:bg-[#ffffffcc]  "
    >
      <div className="text-[14.3px] font-medium text-[#898989]">
        O ingresá con
      </div>
      <LogoGoogle
        filter="filterGoogle1"
        sombraX="2"
        sombraY="2"
        size="94"
        className="ml-4"
      />
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-500" />
    </div>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      className="mt-4 w-full" 
      aria-disabled={pending}
    >
      Ingresar
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
