"use client"

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { auth } from 'auth';
import { useFormState } from 'react-dom';
import { FormEvent, useState, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import { getTramiteBySlug } from '@/app/lib/getTramite';
import markdownToHtml from '@/app/lib/markdownToHtml';
import {Frente} from '@/app/ui/marcos'
import  TabsTramite  from '@/app/ui/tramites/tabsTramite';
import  RegistrarEmail  from "@/app/ui/registrar-email";
import { ButtonB, ButtonA } from '@/app/ui/button';
import  IconCambio  from "@/app/ui/logosIconos/icon-cambio";
import { fetchUserById } from '@/app/lib/data';
import { createUser } from '@/app/lib/actions';
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"
import { createTramite } from '@/app/lib/actions';


export const metadata: Metadata = {
  title: 'Iniciar trámite',
  description:
    'En esta es una página donde enumeramos y detallamos los tramites más frecuentes ',
};

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Params) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [statex, setStatex] = useState(false);

  // const session = await auth();
  // const user = await fetchUserById(session?.user?.email)
  const tramite = getTramiteBySlug(params.slug);

  if (!tramite) {
    return notFound();
  }
  const content = await markdownToHtml(tramite.content || '');

  const initialStatex = { message: null, errors: {} };
  const [estadox, dispatchx] = useFormState(createUser, initialStatex);
  const polo= estadox?.message


  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createTramite, initialState);
  const polox= estado?.message

  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center pb-3">
          <img 
            src= "/dnrpa.png" 
            alt="icono trámites" 
            width={26} 
            height={"auto"}
            className="opacity-50 h-[20px] w-[20px] mr-3 " 
          />
          <h1 className=" text-start text-[20px] text-[#50073a88] font-semibold leading-tight tracking-tighter sm:text-[22px] md:leading-none ">
            {tramite.tramite}
          </h1>
        </div>

        <Frente className="!bg-[#1d021514]  min-h-[200px]">{/* !bg-[#e6e0e3] */}
          <TabsTramite tramite={tramite} content={content} />
        </Frente>

        {/* <Frente className="hidden !bg-[#e6e0e3] p-4 mt-2">
          <div className="flex flex-col gap-y-1">
            <div className=" text-[15px] text-[#1d0215bb]">Información adicional y comentarios</div>
            <textarea
              className={`w-full rounded-[4px] p-2 border border-[#e9dae9] bg-[#ffffff] text-[15px] text-[#000000cc] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]`}
              id="consulta"
              name="consulta"
              placeholder= "información adicional..."
              required
              rows={2}
              maxLength={1024}
              wrap="hard"
              value={consulta}
              disabled={ !state }
              onChange={(e) => {
                setConsulta(e.target.value);
              }}
            />
          </div>
        </Frente> */}
        






        {/* {!user && <RegistrarEmail registroEmail="el presupuesto" />} */}

        {/* registrar email */}
        { polo === null || polo !== "usuario" && polox === "Database Error: El email ya existe." ? (
          <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#1d021513] ">
            <div className="flex items-center justify-between gap-5">
              <div className="mt-1.5 ">
                <IconRegistro className="opacity-60 w-[24px] ml-3 " />
              </div>
              {/* {statexx === false ? (
                <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  ${statex ? "opacity-100" : "opacity-0"  } `}>
                  Registrá un e-mail para mandarte la respuesta
                </div>
              ) : (
                <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300 `}>
                  Hola {name} se registro el e-mail: {email}
                </div>
              )} */}

              <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  ${statex ? "opacity-100" : "opacity-0"  } `}>
                Registrá un e-mail para mandarte la respuesta
              </div>
                
              <ButtonB
                className={`h-8 text-[13px]  w-max`}/*  ${statexx && "hidden"} */
                onClick={() => { setStatex(!statex)/* handleToggle() */; setEmail(""); setName("")}}
                // type={state ? "reset" : "button"}
                data-testid="edit-button"
                data-active={statex}
              >
                {statex ? "Cancelar" :  <div className="text-[12px] overflow-auto whitespace-nowrap"> Registrar EMAIL</div>  }
              </ButtonB>
            </div>
            
            <div
                className={clsx(
                  "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                  {
                    "max-h-[1000px] opacity-100": statex,
                    "max-h-0 opacity-0": !statex,
                  }
                )}
              >
                <div className="flex flex-col gap-y-2 pt-4">
                  <div>
                    {/* Registrar name/email */}
                    <form action={dispatchx}>

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
                          disabled={ !statex }
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
                          disabled={ !statex }
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }} >
                          <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                          </div>
                          <IconEmail2  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                        </InputCnp>
                      </fieldset>

                      <input
                        // className="hidden"
                        id="password"
                        type="hidden"
                        name="password"
                        value="Cnp-Mandataria-25"
                        // autoComplete="new password"
                        // required
                        readOnly
                        // minLength={6}
                      />

                      <input
                        // className="hidden"
                        id="confirmPassword"
                        type="hidden"
                        name="confirmPassword"
                        value="Cnp-Mandataria-25"
                        // autoComplete="new password"
                        // required
                        readOnly
                        // minLength={6}
                      />

                      <input
                        // className="hidden"
                        id="role"
                        type="hidden"
                        name="role"
                        value="member"
                        // autoComplete="new password"
                        // required
                        readOnly
                        // minLength={6}
                      />

                      {/* Massages erros */}
                      <div
                        className="flex items-end relative space-x-8"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        {estadox?.message && (
                          <>
                            <ExclamationCircleIcon className="absolute top-4 h-5 w-5 text-red-500" />
                            <p className="pt-4 text-sm text-red-500">{estadox?.message}</p>
                          </>
                        )}
                      </div>

                      {/* button submit */}
                      <div className=" flex items-center justify-end gap-4 mt-4 text-sm">



                        




                        <ButtonA
                          // type="submit"
                          // ref={buttonyRef}
                          className={`h-8 text-[13px] w-max`}
                          disabled={ email == "" && name == ""}
                          // onClick={() => {
                          //   setStatex(false);
                          // }}
                        >
                          Registrar
                        </ButtonA>
                      </div>
                    </form>
                  </div>
                </div>
              {/* </DisclosurePanel>
            </Disclosure> */}
            </div>
          </Frente>
        ) : (
          <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#e6e0e3] ">
            <div className="flex items-center justify-between gap-5">
              <div className="mt-1.5 ">
                <IconRegistro className="opacity-60 w-[24px] ml-3 " />
              </div>
              <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  `}>
                <span className="text-[16px] text-[#1d0215] ">Hola! {name}</span>. Se registró el e-mail <span className="text-[14px] font-medium text-[#1d0215] ">{email}</span> para mandarte la respuesta.
              </div>
            </div>
          </Frente>
        ) }









        <div className="w-full flex justify-end mt-4">
          <ButtonA
            className={`w-[200px] h-8 text-sm !justify-start`}
            type="submit"
            // disabled={!consulta && true  }
            // onClick={() => {
            //   setSpin(true);
            // }}
          >
            <IconCambio
              className={` mr-2 w-[22px] h-[22px] `}
              fill2="#fffc"
              fill="#ff00ff"
            />{/* ${spin && "animate-spin"} */}
            <div
              className="w-full"
            >
              Pedir Presupuesto
            </div>
          </ButtonA>
        </div>
      </section>
    </>
  );
}
