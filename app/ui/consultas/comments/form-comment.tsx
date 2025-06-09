"use client"

import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';

import { User } from "@/app/lib/definitions";
import { createComment } from '@/app/lib/actions';
import { Post } from '@/app/lib/definitions'
import { Frente } from '@/app/ui/marcos';
import { createUser } from '@/app/lib/actions';
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import { ButtonB, ButtonA } from '@/app/ui/button';
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import { TextareaCnp } from "@/app/ui/uiRadix/textarea-cnp";
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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailSession, setEmailSession] = useState(false);

  useEffect(() => {
    user ? setName(user.name) : setName(`${sessionStorage.getItem('name')}`);
    user ? setEmail(user.email) :  setEmail(`${sessionStorage.getItem('email')}`);
    if (sessionStorage.getItem('email')) {
      setEmailSession(true);
    }
  }, []);

  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createComment, initialState);

  const initialStatex = { message: null, errors: {} };
  const [estadox, dispatchx] = useFormState(createUser, initialStatex);


  return (
    <>
      <div className="flex items-center ">
        {user || emailSession || estadox?.message  ? (
          <div className="flex flex-col w-full items-start space-x-6">
            {/* Crear comment */}
            <form action={dispatch} className="w-full ">
              <div className="flex items-end justify-between ">
                <Frente className="py-2 px-3 my-2 w-max text-small-regular sm:px-4 !bg-[#e0e6e1] ">
                  <div className={` text-start text-[15px] text-[#1d0215dd] transition-[opacity] duration-300  `}>
                    <p className=" text-sm  ">
                      { estadox.message ? name : "" } ¿Qué opinas? 
                    </p> 
                    
                  </div>
                </Frente> 
                <span className=" text-xs mb-2 mr-2 ">{sessionStorage.getItem('email')}</span>
              </div>
              
              {/* comment */}
              <TextareaCnp
                id="comment"
                name="comment"
                className="!bg-[#30032209] placeholder:text-base placeholder:text-[#4c4c4c] "
                rows={3}
                placeholder={`Comenta tu experiencia para mejorar esta consulta...`}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
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
                  className={`text-gray-500 ${user && "hidden"}`}
                  // onClick={() => logout({ returnTo: window.location.origin })}
                  onClick={() => {
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
          <Frente className="!p-2 w-full mt-2 text-small-regular sm:!p-4 !bg-[#30032211] ">
            <div className="flex items-center justify-between gap-2.5 sm:gap-5">
              <div className="mt-1.5 ">
                <IconRegistro className="opacity-80 w-[24px] ml-1.5 sm:ml-3 " />
              </div>
  
              <div className={`w-full text-start delay-50 text-sm text-[#50073aaa] transition-[opacity] duration-300 ${open && "opacity-0"} sm:text-[15px]`}>
                Regístrate para dejar comentarios
              </div>
                
              <ButtonB
                className={`h-8 text-[13px]  w-max`}
                onClick={() => { setOpen(!open); setEmail(""); setName("")}}
                data-testid="edit-button"
                data-active={open}
              >
                {open ? "Cancelar" :  <div className="text-[13px] overflow-auto whitespace-nowrap"> Registrar</div>  }
              </ButtonB>
            </div>
            
            <div
              className={clsx(
                "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                {
                  "max-h-[1000px] opacity-100": open,
                  "max-h-0 opacity-0": !open,
                }
              )}
            >
              {/* Crear user */}
              <div className="pt-2 sm:pt-4"> 
                <form action={dispatchx}>
                  <fieldset className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                    <InputCnp
                      className="text-sm h-8 !w-full"
                      id="name"
                      type="text"
                      name="name"
                      minLength={3}
                      maxLength={100}
                      value={name}
                      placeholder= "Nombre"
                      required
                      disabled={ !open }
                      onChange={(e) => {
                        setName(e.target.value);
                        sessionStorage.setItem('name', e.target.value);
                    }} >
                      <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                      </div>
                      <IconCuenta  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                    </InputCnp>

                    <InputCnp
                      className="text-sm h-8 !w-full"
                      id="email"
                      type="email"
                      name="email"
                      minLength={3}
                      maxLength={100}
                      value={email}
                      placeholder= "Email"
                      required
                      disabled={ !open }
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onBlur={(e) => {
                        sessionStorage.setItem('email', e.target.value);
                      }}
                      >
                      <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                      </div>
                      <IconEmail2  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                    </InputCnp>
                  </fieldset>

                  <input
                    id="password"
                    type="hidden"
                    name="password"
                    value="xxxxxx"
                    readOnly
                  />

                  <input
                    id="confirmPassword"
                    type="hidden"
                    name="confirmPassword"
                    value="xxxxxx"
                    readOnly
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
                      className={`h-8 text-[13px] w-max`}
                      disabled={ email == "" && name == ""}
                      onClick={() => {
                        wait().then(() => setComment(""));
                      }}
                    >
                      Registrar
                    </ButtonA>
                  </div>
                </form>
              </div>
            </div>
          </Frente>
        )}
      </div>
    </>
  );
}
