"use client"

import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';

import { User } from "@/app/lib/definitions";
import { createComment } from '@/app/lib/actions';
import { Fondo } from "@/app/ui/marcos";
import { Post } from '@/app/lib/definitions'
import  AlertDialog  from "@/app/ui/uiRadix/alert-dialog";
import { Frente } from '@/app/ui/marcos';
import { createUser } from '@/app/lib/actions';
import { createConsulta } from '@/app/lib/actions';
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import { ButtonB, ButtonA } from '@/app/ui/button';
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"


const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function FormComment({
   user, 
   post
  }: { 
    user: User | undefined;
    post: Post
  }) {

  const [comment, setComment] = useState('');
  // const [open, setOpen] = useState(false);
  const [statex, setStatex] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [emailx, setEmailx] = useState(true);

  // const [nombre, setNombre] = useState('');
  // const nameStorage = sessionStorage.getItem('name');

  // const emailStorage = sessionStorage.getItem('email');

  useEffect(() => {
    const nameStorage = sessionStorage.getItem('name');
    if (nameStorage) {
      setName(nameStorage);
    }
    const emailStorage = sessionStorage.getItem('email');
    if (emailStorage) {
      setEmail(emailStorage);
    }
    const emailStoragex = sessionStorage.getItem('email');
    if (emailStoragex) {
      setEmailx(false);
    }
  }, []);

  // const manejarCambio = (e) => {
  //   const nuevoNombre = e.target.value;
  //   setName(nuevoNombre);
  //   sessionStorage.setItem('nombre', nuevoNombre);
  // };
  

  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createComment, initialState);
  const polox= estado?.message

  const initialStatex = { message: null, errors: {} };
  const [estadox, dispatchx] = useFormState(createUser, initialStatex);
  const polo= estadox?.message

  // console.log("name:", name)
  // console.log("email:", email)

  return (
    <>
      <div className="flex items-center ">
        {user || /* emailStoragex */ !emailx || polo  ? (
          <div className="flex flex-col w-full items-start space-x-6">
            {/* Crear comment */}
            <form action={dispatch} className="w-full ">
              <p>Hola, {user ? user?.name : name /* sessionStorage.getItem("name") */} ! </p> 
              {/* comment */}
              <textarea
                id="comment"
                name="comment"
                // className="w-full bg-transparent border-none "
                className={`w-full mt-1 rounded-md border border-[#e9dae900] p-3 bg-[#30032209] [box-shadow:_inset_0_1px_#0000002e,inset_0_-1px_#ffffff] text-[#000000]  duration-100 ease-in  hover:border-[#ff00ff47] focus:bg-[#ffffffdd] focus:border-[rgba(195,123,195,0)] focus:[box-shadow:_0px_0px_0px_1px_#c158c1] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]  disabled:bg-[#30032211] disabled:[box-shadow:_inset_0_1px_#0000002e,inset_0_-1px_#ffffff] `}/*  */
                rows={3}
                placeholder={`¿Qué opinas? 
Comenta tu experiencia para mejorar esta consulta`/* Deja tu comentario y experiencia para mejorar este artículo */
                  // user
                  //   ? `¿Qué opinas?`
                  //   : "Iniciá sesión para dejar un comentario"
                }
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                // disabled={!user}
                required
              />
              {/* email */}
              <input
                type="hidden"
                id="email_id"
                name="email_id"
                value= {email}
                readOnly
              />

              {/* post_slug */}
              <input
                type="hidden"
                id="post_slug"
                name="post_slug"
                value= {post.slug}
                readOnly
              />

              {/* Massages error consult */}
              <div
                className="my-1.5 flex items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {estado?.message && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{estado?.message}</p>
                  </>
                )}
              </div>
              
              <div className="flex">
              <ButtonA 
                className="!ml-0 py-2 px-4 mr-4"
                onClick={() => {
                  wait().then(() => setComment(""));
                }}>
                Enviar
              </ButtonA>
              <button
                type="button"
                className="text-gray-500"
                // onClick={() => logout({ returnTo: window.location.origin })}
                onClick={() => {
                  // remuveSessioEmail("email")
                  // remuveSessioName("name")
                  sessionStorage.removeItem("email")
                  sessionStorage.removeItem("name")
                  location.reload()
                }}
              >
                Salir
              </button> 
              </div>
            </form>
          </div>
        ) : (
          <Frente className="py-4 px-3 w-full mt-2 text-small-regular sm:px-4 !bg-[#30032211] ">
            <div className="flex items-center justify-between gap-5">
              <div className="mt-1.5 ">
                <IconRegistro className="opacity-60 w-[24px] ml-3 " />
              </div>
  
              <div className={`w-full text-start delay-50 text-[15px] text-[#50073aaa] transition-[opacity] duration-300 ${statex && "opacity-0"} `}>
                Regístrate para dejar comentarios
              </div>
                
              <ButtonB
                className={`h-8 text-[13px]  w-max`}
                onClick={() => { setStatex(!statex); setEmail(""); setName("")}}
                // type={state ? "reset" : "button"}
                data-testid="edit-button"
                data-active={statex}
              >
                {statex ? "Cancelar" :  <div className="text-[13px] overflow-auto whitespace-nowrap"> Registrar</div>  }
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
                    {/* Crear user */}
                    <form action={dispatchx} /* id="actualizarPerfil" */>
  
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
                            sessionStorage.setItem('name', e.target.value);
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
                            // sessionStorage.setItem('email', e.target.value);
                          }}
                          onBlur={(e) => {
                            // setEmail(e.target.value);
                            sessionStorage.setItem('email', e.target.value);
                          }}
                          >
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
                          onClick={() => {
                            wait().then(() => setComment(""));
                            // wait().then(() => sessionStorage.setItem("name", name))
                            // wait().then(() => sessionStorage.setItem("email", email));
                          }}
                          // onClick={() => {
                          //   wait().then(() => setComment(""));
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
        )}
      </div>
    </>
  );
}
