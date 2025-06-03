'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { useState, useEffect } from 'react';
import { Disclosure, DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx';

import { User } from '@/app/lib/definitions';
import { updateUserName } from '@/app/lib/actions';
import { Frente } from '@/app/ui/marcos';
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import useToggleState from "@/app/lib/hooks/use-toggle-state"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import { ButtonB, ButtonA } from "@/app/ui/button";


export default function EditPerfilName( { user }: { user: User | undefined } ) {
  
  const [name, setName] = useState('');
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
  const updateUserWithId = updateUserName.bind(null, `${user?.id}`);
  const [estado, dispatch] = useFormState(updateUserWithId, initialState);


  return (
    <>
      <Frente className="py-4 px-3 mt-4 text-small-regular sm:px-4" >
        <div  className="flex items-center justify-between" >
          <div className={`flex items-center ${state ? "opacity-0" : "opacity-80 delay-0 duration-150" } `}>
            <IconCuenta className={`w-[26px] mr-4 duration-100 `} color="#50073aaa" />
            <p>{user?.name} </p>
          </div>
          <ButtonB
            className={`h-8 text-[13px] w-max`}
            onClick={() => { 
              handleToggle(); 
              setName(""); 
             }}
            data-testid="edit-button"
            data-active={state}
          >
            {state ? "Cancelar" :  <div> Cambiar <span className="text-[12px] uppercase">Nombre</span></div> }
          </ButtonB>
        </div>
        <Disclosure>
          <DisclosurePanel
            static
            className={clsx(
              "transition-[max-height,opacity] duration-0 ease-in-out overflow-visible",
              {
                "max-h-[1000px] opacity-100": state,
                "max-h-0 opacity-0": !state,
              }
            )}
          >
            <div className="flex flex-col gap-y-2 pt-4">
              <div>
                {/* Editar nombre */}
                <form action={dispatch} id="form1">
                  {/* Nombre */}
                  <div className="relative">
                    <InputCnp 
                      className={`h-8 text-sm  ${name && "bg-[#ffffffdd]"} `}
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      placeholder= {user?.name}
                      required
                      disabled={ !state }
                      onChange={(e) => {
                        setName(e.target.value);
                      }} >
                      <div className={`absolute rounded-l-[4px] h-[32px] w-[32px] left-0 bg-[#1d02150b] $ `}></div>
                      <IconCuenta  className="absolute w-[20px] left-[6px] top-[6px] " color="#50073a66" />
                    </InputCnp>
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
                        <p className="text-sm pt-4 text-red-500">{estado?.message }</p>
                      </>
                    )}
                  </div>
                  {/* Guardar cambios nombre */}
                  <div className={`flex items-center justify-end gap-4 mt-4 text-sm ${!state && "hidden"}`}>
                    <ButtonA
                      type="submit"
                      className={`h-8 text-[13px] w-max  disabled:opacity-40  `}
                      disabled={ name === ''}
                      onClick={() => { location.reload() }}
                    >
                      Guardar cambios
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

