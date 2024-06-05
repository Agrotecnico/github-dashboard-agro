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
import { signIn } from 'next-auth/react';
import LogoGoogle from './logosIconos/logo-google';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

export default function LoginForm() {
  const router = useRouter();
  const { data: session, update } = useSession();
  if (session) router.push('/dashboard');
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  

  return (
    <>
      <form action={dispatch} className="mt-4">
        <div className="flex-1 rounded-lg bg-[#ffffff94] px-6 pb-2 pt-4 backdrop-blur-lg [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_8px_0_#fffe_inset]">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Logeate con
          </h1>
          <div className="w-full">
            <div>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 bg-[#0000000a] py-[9px] pl-10 text-sm outline-2 [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
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
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 bg-[#0000000a] py-[9px] pl-10 text-sm outline-2 [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] placeholder:text-[#8c8c8c] hover:border-[#2f6feb55] focus:border-[#2f6feb00]"
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
        </div>
      </form>
      <Link
        href={'/register'}
        className="mx-auto mt-0 flex items-center justify-start rounded-xl px-4 py-2 opacity-80 duration-200 hover:opacity-100 hover:[box-shadow:0_2px_1px_-1px_#00000033,0-1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_4px_0_#fffe_inset] "
      >
        <i className="mr-[10px] text-[#444]">No tienes una cuenta?</i> Créala{' '}
        <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Link>
      <div
        onClick={async () => {
          await signIn('google', {
            callbackUrl: '/dashboard',
          });
        }}
        className="!mt-6 mb-2 flex cursor-pointer place-items-center items-center justify-start rounded-lg bg-[#ffffff69] px-10 py-1 backdrop-blur-lg duration-200 [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_8px_0_#fffe_inset] hover:bg-[#ffffff99]  "
      >
        <div className="text-[14.3px] font-medium text-[#898989]">
          O logeate con
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
      className="mt-4 w-full text-base [box-shadow:inset_2px_-2px_#0000002e,inset_2px_2px_#ffffff,1px_-1px_#0000002e,1px_1px_#ffffff] "
      aria-disabled={pending}
    >
      Ingresar
      <ArrowRightIcon className="ml-auto h-5 w-5 text-[#6b7280] " />
    </Button>
  );
}
