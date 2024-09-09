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
import Link from 'next/link';
import { Fondo } from '@/app/ui/marcos';
import { Frente } from '@/app/ui/marcos';

import { useSession } from 'next-auth/react';

export default function LoginForm() {
  const { data: session, update } = useSession();

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <>
      <form action={dispatch} className="mt-4">
        <h1 className={` mb-3 text-center text-4xl`}>Acceso</h1>
        <Fondo>
          <div className="flex flex-col gap-2 p-4 ">
            <Frente>
              <div
                onClick={async () => {
                  await signIn('google', {
                    callbackUrl: '/dashboard',
                  });
                }}
                className=" flex cursor-pointer place-items-center items-center justify-start px-10 py-1 duration-200 hover:bg-[#ffffff99]  "
              >
                <div className="text-[14.3px] ">Continuar con</div>
                <LogoGoogle
                  filter="filterGoogle1"
                  sombraX="2"
                  sombraY="2"
                  size="94"
                  className="ml-4"
                />
              </div>
            </Frente>
            <Frente>
              <div
                onClick={async () => {
                  await signIn('google', {
                    callbackUrl: '/dashboard',
                  });
                }}
                className="flex cursor-pointer place-items-center items-center justify-start px-10 py-1 duration-200 hover:bg-[#ffffff99]  "
              >
                <div className="text-[14.3px]">Continuar con</div>
                <LogoGoogle
                  filter="filterGoogle1"
                  sombraX="2"
                  sombraY="2"
                  size="94"
                  className="ml-4"
                />
              </div>
            </Frente>
          </div>
        </Fondo>

        <div className="flex w-full items-center gap-2 py-6 text-sm">
          <div className="h-px w-full bg-slate-300"></div>O
          <div className="h-px w-full bg-slate-300"></div>
        </div>

        <Fondo>
          <div className="flex flex-col gap-2 p-4 ">
            <Frente>
              <div className="relative">
                <input
                  className="!hover:bg-transparent peer block w-full border border-transparent bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>
            <Frente>
              <div className="relative">
                <input
                  className="!hover:bg-transparent peer block w-full border border-transparent bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00]"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  autoComplete="new password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>
          </div>
        </Fondo>

        <LoginButton />
      </form>
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
      <Link
        href={'/register'}
        className="mx-auto !mt-0 flex items-center justify-start rounded-xl px-4 py-2 text-sm opacity-80 duration-200 hover:opacity-100 "
      >
        <p className="mr-[10px] hover:no-underline">No tienes una cuenta?</p>
        <p className="text-[#ae09e1] hover:underline hover:underline-offset-2">
          Créala
        </p>
        {/* <ArrowRightIcon className="text-[#d83af0] ml-2 h-5 w-5" /> */}
      </Link>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-4 w-full justify-center bg-[#1d0215] text-base  text-[#ffffffcc] duration-150 hover:bg-[#1d0215dd] hover:text-[#fff] " /*text-[#ffffff] */
      aria-disabled={pending}
    >
      Continuar
      {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-[#6b7280] " /> */}
    </Button>
  );
}
