"use client"

// import * as React from "react";
import { useState } from 'react';

import * as Dialog  from "@radix-ui/react-alert-dialog";
import { XMarkIcon } from '@heroicons/react/24/outline';
import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"
import IconCambio from '@/app/ui/logosIconos/icon-cambio';
import { ButtonB, ButtonA } from "../button";


const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function AlertDialog() {
	const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [spin, setSpin] = useState(false);

	return (
        <>
        <form /* onSubmit={uploadToServer} */>
            <div className="flex justify-end items-center gap-1 mt-8">
                
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild >
                        <ButtonB
                            className={`w-[200px] h-8 text-sm !justify-start `}
                            // disabled={!email && true  }
                            >
                            <IconCambio 
                                className={`${spin && "animate-spin"} mr-2 w-[22px] h-[22px] `}
                                    fill2="#50073aaa"
                                    fill="#ff00ff" />
                            <div className="w-full">
                                Email de Respuesta
                            </div>
                        </ButtonB>
                        
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-[#000000ab] data-[state=open]:animate-overlayShow"
                            /* onClick={() => {setOpen(false)}} */ />
                        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] bg-[#fcfcfc] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
                            <Dialog.Title className="m-0 text-[17px] font-medium ">
                                Respuesta
                            </Dialog.Title>
                            <Dialog.Description className="mb-5 mt-2.5 text-[15px] text-[#1d0215cc] leading-normal">
                                Registrá una direccion-Email, para mandar una respuesta a tu consulta.
                            </Dialog.Description>
                            <form
                                onSubmit={(event) => {
                                    wait().then(() => setOpen(false));
                                    event.preventDefault();
                                }}
                            >
                                <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                                    <div className="flex relative w-full rounded-l-lg rounded-r-sm">
                                        <input
                                            className={`rounded-[4px] py-0 !hover:bg-transparent peer block w-full border border-[#e9dae9] h-8 bg-[#f2f2f266] ${name && "bg-[#ffffffdd]"} pl-11 text-sm text-[#000000aa] outline-2 hover:border-[#d8c0d7] hover:bg-[#ffffffaa] focus:border-[rgba(195,123,195,0)] focus:[box-shadow:_0px_0px_0px_1px_#c37bc3bb] focus:bg-[#ffffffaa] placeholder:text-[#858585] focus:placeholder:opacity-30 `}
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={name}
                                            placeholder= /* {user?.name} */"Name"
                                            required
                                            disabled={ !open }
                                            onChange={(e) => {
                                            setName(e.target.value);
                                            }}
                                        />
                                        <div className={`absolute flex justify-center rounded-l-[4px] h-[32px] w-[32px] left-0 bg-[#e580d099] ${name ? 'bg-[#e580d099]' : ""} `}>
                                            <IconCuenta className="opacity-80 w-[19px] " color="#50073aaa" />
                                        </div>
                                    </div>
                                    <div className="flex relative w-full rounded-l-lg rounded-r-sm">
                                        <input
                                            className={`rounded-[4px] py-0 !hover:bg-transparent peer block w-full border border-[#e9dae9] h-8 bg-[#f2f2f266] ${email && "bg-[#ffffffdd]"} py-0 pl-11 text-sm text-[#000000aa] outline-2 hover:border-[#d8c0d7]   hover:bg-[#ffffffaa] focus:border-[rgba(195,123,195,0)] focus:[box-shadow:_0px_0px_0px_1px_#c37bc3bb] focus:bg-[#ffffffaa] placeholder:text-[#858585] focus:placeholder:opacity-30 `}
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder= /* {user?.name} */"Email"
                                            required
                                            disabled={ !open }
                                            onChange={(e) => {
                                            setEmail(e.target.value);
                                            }}
                                        />
                                        <div className={`absolute flex justify-center rounded-l-[4px] h-[32px] w-[32px] left-0 bg-[#e580d099] ${email ? 'bg-[#e580d099]' : ""} `}>
                                            <IconEmail2 className="opacity-80 w-[16px] " />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="mt-[25px] flex justify-end">
                                    <button className= "h-[30px] w-max text-[#ffffffcc] bg-[#1d0215] flex justify-center  !duration-150 !ease-in opacity-80 items-center #c56eb4items-center text-[15.5px]  text-center px-4 rounded-lg hover:opacity-100 hover:text-[#ffffff] active:opacity-60 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#df70df] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 " >
                                        Listo
                                    </button>
                                </div>
                                <button 
                                    // type="button"
                                    onClick={() => {setOpen(false)}}
                                    className="absolute inline-flex top-1 right-1 w-9 appearance-none items-center justify-center rounded-md p-2 duration-150 hover:text-[#e20202db] focus:shadow-[0_0_0_1px] focus:shadow-red-700 focus:outline-none"
                                    aria-label="Close">
                                    <XMarkIcon />
                                </button>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </form>
        </>
	);
};