'use client';

import { useFormState } from 'react-dom';
import { useState, useEffect } from 'react';
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"
import clsx from 'clsx';
import { signOut } from 'next-auth/react';

import { User } from '@/app/lib/definitions';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { updateUserEmail } from '@/app/lib/actions';
import { Frente } from '@/app/ui/marcos';
import { Disclosure, DisclosurePanel } from '@headlessui/react'
import useToggleState from "@/app/lib/hooks/use-toggle-state"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import { ButtonB, ButtonA } from "@/app/ui/button";


export default function EditPerfilEmail( { user }: { user: User | undefined } ) {
  
  const [email, setEmail] = useState('');
  const [successState, setSuccessState] = useState(false)
  const { state, close, toggle } = useToggleState()

  const clearState = () => {
    setSuccessState(false)
  }

  const handleToggle = () => {
    clearState()
    setTimeout(() => toggle(), 100)
  }

  useEffect(() => {
    if (successState) {
      close()
    }
  }, [successState, close])

  const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUserEmail.bind(null, `${user?.id}`);
  const [estado, dispatch] = useFormState(updateUserWithId, initialState);


  return (
    <>
      <Frente className="py-4 px-3 mt-4 text-small-regular sm:px-4">

        <div className="flex items-center justify-between">
          <div className={`flex items-center ${state ? "opacity-0" : "opacity-80 delay-0 duration-150" } `}>
            <IconEmail2 className={`w-[22px] mr-4 duration-100 `} color="#50073aaa" />
            <p>{user?.email} </p>
          </div>
          {/* <div className="opacity-80 ">
            <IconEmail2 className={`w-[26px] ${state ? "opacity-0" : "opacity-80 delay-150 duration-[50ms]" } delay-0 duration-100 `} color="#50073aaa" />
          </div> */}
          <ButtonB
            className={`h-8 text-[13px] w-max`}
            onClick={() => { handleToggle(); setEmail("")}}
            data-testid="edit-button"
            data-active={state}
          >
            {state ? "Cancelar" :  <div> Cambiar <span className="text-[12px] uppercase">Email</span></div>  }
          </ButtonB>
        </div>

        <Disclosure>
          <DisclosurePanel
            static
            className={clsx(
              "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
              {
                "max-h-[1000px] opacity-100": state,
                "max-h-0 opacity-0": !state,
              }
            )}
          >
            <div className="flex flex-col gap-y-2 pt-4">
              <div>
                {/* Editar email */}
                <form action={dispatch} id="actualizarPerfil">

                  {/* Email */}
                  <div className="relative">

                    <InputCnp 
                      className={`h-8 text-sm  ${email && "bg-[#ffffffdd]"} `}
                      id="email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder= {user?.email}
                        required
                        disabled={ !state }
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }} >
                        <div className={`absolute rounded-l-[4px] h-[32px] w-[32px] left-0 bg-[#1d02150b] $ `}></div>
                    </InputCnp>
                    <IconEmail2 className="absolute w-[16px] left-[8px] top-[8px] " color="#50073a66"  />
                  </div>

                  {/* Massages nombre */}
                  <div
                    className="flex items-end relative space-x-8"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {estado?.message && (
                      <>
                        <ExclamationCircleIcon className="absolute top-4 h-5 w-5 text-red-500" />
                        <p className="pt-4 text-sm text-red-500">{estado?.message}</p>
                      </>
                    )}
                  </div>

                  {/* Cancelar / Guardar cambios nombre */}
                  <div className=" flex items-center justify-end gap-4 text-sm">
                    <ButtonA
                      type="submit"
                      className={`h-8 text-[13px] w-max  disabled:opacity-40 mt-4 `}
                      disabled={ email === ''}
                      onClick={async () => {
                        await signOut({ callbackUrl: '/login' });
                      }}
                    >
                      Guardar cambios y salir
                    </ButtonA>
                  </div>
                </form>

              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </Frente>
    </>
  );
}

