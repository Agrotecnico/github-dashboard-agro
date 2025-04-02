'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { Button } from './button';
import { createUser } from '@/app/lib/actions';
import { Fondo, Frente } from '@/app/ui/marcos';
import LogoGoogle from './logosIconos/logo-google';


export default function RegisterForm() {
  
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <>
    <form action={dispatch} className="mt-4">
        <h1 className={` mb-3 text-center text-4xl`}>Registro</h1>
        <Fondo>
          <div className="flex flex-col gap-2 p-4 ">
            <Frente className=" hover:bg-[#ffffffbb] ">
              <div
                onClick={async () => {
                  await signIn('google', {
                    callbackUrl: '/dashboard',
                  });
                }}
                className=" flex cursor-pointer place-items-center items-center justify-start px-10 py-1 duration-200  "
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
          </div>
        </Fondo>

        <div className="flex w-full items-center gap-2 py-6 text-sm">
          <div className="h-px w-full bg-slate-300"></div>O
          <div className="h-px w-full bg-slate-300"></div>
        </div>

        <Fondo>
          <div className="flex flex-col gap-2 p-4 ">
            <Frente className=" hover:bg-[#ffffffbb] ">
              <div className="relative">
                <input
                  className="!hover:bg-transparent rounded-md peer block w-full border border-transparent bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                />
                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>

            <Frente className=" hover:bg-[#ffffffbb] ">
              <div className="relative">
                <input
                  className="!hover:bg-transparent rounded-md peer block w-full border border-transparent bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>

            <Frente className=" hover:bg-[#ffffffbb] ">
              <div className="relative">
                <input
                  className="!hover:bg-transparent rounded-md peer block w-full border border-transparent bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00]"
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

            <Frente className=" hover:bg-[#ffffffbb] ">
              <div className="relative">
                <input
                  className="!hover:bg-transparent rounded-md peer block w-full border border-transparent bg-transparent py-[9px] pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00]"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmá la contraseña"
                  autoComplete="new password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>

            <input
              // className="hidden"
              id="role"
              type="hidden"
              name="role"
              value="memberAccount"
              // autoComplete="new password"
              // required
              readOnly
              // minLength={6}
            />
          </div>
        </Fondo>
        <LoginButton />
    </form>
    <div
      className="my-3 flex items-end space-x-1"
      aria-live="polite"
      aria-atomic="true"
    >
      {state.message === "usuario" ? redirect('/dashboard') : state.message && (
        <>
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{state.message}</p>
        </>
      )}
      {/* {state.message === "usuario" || !state.message ? null : (
        <>
        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
        <p className="text-sm text-red-500">{state.message}</p>
      </>
      )} */}
      {/* {state.message && (
        <>
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{state.message}</p>
        </>
      )} */}
    </div>
    <Link
      href={'/login'}
      className="mx-auto !mt-0 flex items-center justify-start rounded-xl px-4 py-2 text-sm opacity-80 duration-200 hover:opacity-100 "
    >
      <p className="mr-[10px] hover:no-underline">Ya tienes una cuenta?</p>
      <p className="text-[#ae09e1] hover:underline hover:underline-offset-2">
      Ingresá
      </p>
    </Link>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-4 w-full justify-center bg-[#300322] text-base  text-[#ffffffcc] duration-150 hover:bg-[#1d2215] hover:text-[#fff] active:!bg-[#300322dd] "
      aria-disabled={pending}
    >
      Continuar
    </Button>
  );
}
