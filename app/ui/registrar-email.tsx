'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import { Disclosure, DisclosurePanel } from '@headlessui/react'


import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import { Frente } from '@/app/ui/marcos';
import useToggleState from "@/app/lib/hooks/use-toggle-state"
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import { ButtonB, ButtonA } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { createUser } from '@/app/lib/actions';
import { fetchUserById } from '@/app/lib/data';


export default function RegistrarEmail( {registroEmail}:{registroEmail: string}  ) {
  
  const [name, setName] = useState('');
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

  // const initialState = { message: null, errors: {} };
  // const [estado, dispatch] = useFormState(createCustomer, initialState);

  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createUser, initialState);


  // const session = await auth();
  // const user = await fetchUserById(email)


  return (
    <>
      <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#1d021514] ">
        <div className="flex items-center justify-between gap-5">
          <div className="mt-1.5 ">
            <IconRegistro className="opacity-60 w-[24px] ml-3 " />
          </div>
          <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  ${state ? "opacity-100" : "opacity-0"  }`}>
            Registrá un e-mail para mandarte {registroEmail}
          </div>
          <ButtonB
            className={`h-8 text-[13px]  w-max`}
            onClick={() => { handleToggle(); setEmail(""); setName("")}}
            // type={state ? "reset" : "button"}
            data-testid="edit-button"
            data-active={state}
          >
            {state ? "Cancelar" :  <div className="text-[12px] overflow-auto whitespace-nowrap"> Registrar EMAIL</div>  }
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
                {/* Registrar name/email */}
                <form action={dispatch} /* id="actualizarPerfil" */>

                  {/*input nombre/email */}
                  <fieldset className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                    <InputCnp
                      className="text-sm h-8"
                      id="name"
                      type="text"
                      name="name"
                      minLength={3}
                      maxLength={100}
                      value={name}
                      placeholder= "Nombre"
                      required
                      disabled={ !state }
                      onChange={(e) => {
                        setName(e.target.value);
                    }} >
                      <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                      </div>
                      <IconCuenta  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                    </InputCnp>

                    <InputCnp
                      className="text-sm h-8"
                      id="email"
                      type="email"
                      name="email"
                      minLength={3}
                      maxLength={100}
                      value={email}
                      placeholder= "Email"
                      required
                      disabled={ !state }
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }} >
                      <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                      </div>
                      <IconEmail2  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                    </InputCnp>
                  </fieldset>

                  <input
                    className="hidden"
                    id="password"
                    type="password"
                    name="password"
                    value="Cnp-Mandataria-25"
                    autoComplete="new password"
                    required
                    readOnly
                    minLength={6}
                  />

                  <input
                    className="hidden"
                    id="password"
                    type="password"
                    name="confirmPassword"
                    value="Cnp-Mandataria-25"
                    autoComplete="new password"
                    required
                    readOnly
                    minLength={6}
                  />

                  {/* Massages erros */}
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

                  {/* button submit */}
                  <div className=" flex items-center justify-end gap-4 mt-4 text-sm">
                    <ButtonA
                      type="submit"
                      className={`h-8 text-[13px] w-max`}
                      disabled={ email == "" && name == ""}
                      /* onClick={() => {
                        setSpin(true);
                      }} */
                        // onClick={() => {
                        //   handleToggle();
                        // }}
                    >
                      Registrar
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

