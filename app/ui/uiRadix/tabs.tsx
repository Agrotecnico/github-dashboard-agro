import * as React from "react";

import * as Tabs  from "@radix-ui/react-tabs";
import IconCheck from "@/app/ui/logosIconos/icon-check";
import  {InputCnp}  from "@/app/ui/uiRadix/input-cnp";


const TabsTramite = () => (

	<Tabs.Root
		className="flex  flex-col"
		defaultValue="tab1"
	>
		<Tabs.List
			className="flex shrink-0"
			aria-label="Manage your account"
		>
            <Tabs.Trigger
				className="flex bg-[#ffffff63] flex-1 cursor-default select-none items-center justify-center py-3 px-5 text-[14px] leading-none  text-[#1d021577] text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:bg-[#f1eef000] last:rounded-bl-md  data-[state=active]:text-[#1d0215cc]"
				value="tab1"
			>
				Descripción
			</Tabs.Trigger>

			<Tabs.Trigger
				className="flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 text-[14px] leading-none text-[#1d021577] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] first:rounded-br-md  data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc] "
				value="tab2"
			>
				Documentos
			</Tabs.Trigger>

			<Tabs.Trigger
				className="flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 text-[14px] leading-none  text-[#1d021577] text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] last:rounded-bl-md  data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
				value="tab3"
			>
				Informacíon
			</Tabs.Trigger>

            
		</Tabs.List>

        <Tabs.Content
			className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb]"
			value="tab1"
		>
			<p className="mb-5 mt-1 text-[15px] leading-normal text-mauve11">
				Descripción del trámite y como iniciarlo y solicitar presupuesto.
			</p>
            <div className="flex gap-4">
                polo
            </div>
		</Tabs.Content>

		<Tabs.Content
			className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb] "
			value="tab2"
		>
			<p className="mb-5 mt-1 leading-normal text-mauve11">
				Documentacion requerida para gestionar el trámite.
            </p>
            <div className="flex gap-4 ">
                <ul className="pl-4 w-1/2 ">
                    <div className="flex items-center mb-0.5 "><li className=" ">Tea </li><IconCheck className="ml-1 w-2.5 opacity-40 "/></div>
                    <div className="flex items-center mb-0.5 "><li className=" ">Certficados de DNRPA </li><IconCheck className="ml-1 w-2.5 opacity-40 "/></div>
                    <div className="flex items-center mb-0.5 "><li className=" ">Coffee </li><IconCheck className="ml-1 w-2.5 opacity-40 "/></div>
                    <div className="flex items-center mb-0.5 "><li className=" ">Mermelada </li><IconCheck className="ml-1 w-2.5 opacity-40 "/></div>
                    <div className="flex items-center mb-0.5 "><li className=" ">Montaña de los Alpes </li><IconCheck className="ml-1 w-2.5 opacity-40 "/></div>
                    <div className="flex items-center mb-0.5 "><li className=" ">Milk </li><IconCheck className="ml-1 w-2.5 opacity-40 "/></div>
                </ul>

                <ul className="pl-4 w-1/2 ">
                    <div className="flex items-center mb-0.5 "><IconCheck className="mr-2 w-2.5 opacity-50 "/><li className=" ">Tea </li></div>
                    <div className="flex items-center mb-0.5 "><IconCheck className="mr-2 w-2.5 opacity-50 "/><li className=" ">Milk </li></div>
                    <div className="flex items-center mb-0.5 "><IconCheck className="mr-2 w-2.5 opacity-50 "/><li className=" ">Coffee </li></div>
                    <div className="flex items-center mb-0.5 "><IconCheck className="mr-2 w-2.5 opacity-50 "/><li className=" ">Mermelada </li></div>
                    <div className="flex items-center mb-0.5 "><IconCheck className="mr-2 w-2.5 opacity-50 "/><li className=" ">Montaña de los Alpes </li></div>
                    <div className="flex items-center mb-0.5 "><IconCheck className="mr-2 w-2.5 opacity-50 "/><li className=" ">Certficados de DNRPA </li></div>
                </ul>
            </div>

		</Tabs.Content>

		<Tabs.Content
			className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215bb]"
			value="tab3"
		>
			<p className="mb-5 mt-1 text-[15px] leading-normal text-mauve11">
				Informacion y datos para calcular el presupuesto.
			</p>
            <div className="flex gap-4">
                <div>
                    <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                        <label
                            className="mb-1.5 block text-[13px] leading-none text-violet12"
                            htmlFor="currentPassword"
                        >
                            Current password
                        </label>
                        <InputCnp
                            className=" shrink-0 grow h-7 text-[15px] "
                            id="currentPassword"
                            type="text"
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#e580d022]" >
                            </div>
                            <IconCheck className="absolute w-2.5 opacity-20 left-2.5 top-2.5" color="#1d0215" />
                        </InputCnp>
                    </fieldset>
                    <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                        <label
                            className="mb-1.5 block text-[13px] leading-none text-violet12"
                            htmlFor="newPassword"
                        >
                            New password
                        </label>
                        <InputCnp
                            className=" shrink-0 grow  text-[15px] h-7 "
                            id="newPassword"
                            type="password"
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#e580d022]" >
                            </div>
                            <IconCheck className="absolute w-2.5 opacity-20 left-2.5 top-2.5" color="#1d0215" />
                        </InputCnp>
                    </fieldset>
                    <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                        <label
                            className="mb-1.5 block text-[13px] leading-none text-violet12"
                            htmlFor="confirmPassword"
                        >
                            Confirm password
                        </label>
                        <InputCnp
                            className=" shrink-0 grow  text-[15px] h-7 "
                            id="confirmPassword"
                            type="text"
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#e580d022]" >
                            </div>
                            <IconCheck className="absolute w-2.5 opacity-20 left-2.5 top-2.5" color="#1d0215" />
                        </InputCnp>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                        <label
                            className="mb-1.5 block text-[13px] leading-none text-violet12"
                            htmlFor="currentPassword"
                        >
                            Current password
                        </label>
                        <InputCnp
                            className=" shrink-0 grow h-7 text-[15px] "
                            id="currentPassword"
                            type="text"
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#e580d022]" >
                            </div>
                            <IconCheck className="absolute w-2.5 opacity-20 left-2.5 top-2.5" color="#1d0215" />
                        </InputCnp>
                    </fieldset>
                    <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                        <label
                            className="mb-1.5 block text-[13px] leading-none text-violet12"
                            htmlFor="newPassword"
                        >
                            New password
                        </label>
                        <InputCnp
                            className=" shrink-0 grow  text-[15px] h-7 "
                            id="newPassword"
                            type="password"
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#e580d022]" >
                            </div>
                            <IconCheck className="absolute w-2.5 opacity-20 left-2.5 top-2.5" color="#1d0215" />
                        </InputCnp>
                    </fieldset>
                    <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                        <label
                            className="mb-1.5 block text-[13px] leading-none text-violet12"
                            htmlFor="confirmPassword"
                        >
                            Confirm password
                        </label>
                        <InputCnp
                            className=" shrink-0 grow  text-[15px] h-7 "
                            id="confirmPassword"
                            type="text"
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#e580d022]" >
                            </div>
                            <IconCheck className="absolute w-2.5 opacity-20 left-2.5 top-2.5" color="#1d0215" />
                        </InputCnp>
                    </fieldset>
                </div>
            </div>
		</Tabs.Content>

        
	</Tabs.Root>
);

export default TabsTramite;
