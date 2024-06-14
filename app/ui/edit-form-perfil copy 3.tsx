'use client';

import { User } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  AtSymbolIcon,
  CameraIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { UpdateInvoice } from '@/app/ui/invoices/buttons';
import { updateCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button'
import { updateUser } from '@/app/lib/actions';
import { useSession } from "next-auth/react"
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { formatDate } from 'date-fns';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';





export default function EditPerfilForm( { user }: { user: User }) {

   /* const { data: session, update } = useSession() */
  const [ image, setImage ] = useState("")
  const [file, setFile] = useState<File | undefined>()
  /* const [file, setFile] = useState(""); */
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [name1, setName1] = useState("")
  const [email1, setEmail1] = useState("")

  const uploadToServer = async (/* {file}:{file:File} */) => {
    /*const imageFile =  e.target.files[0]  file*/
    const url = `https://api.imgbb.com/1/upload?key=079cdc2ae90871b46a249403dce9a75a&name=${file?.name}`
    const data = new FormData()
    data.append("image", file)

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      })
      const responseData = await response.json()
      setImage(responseData.data.url)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };


  /* console.log("user", user) */
  



  const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUser.bind(null, user?.id );
  const [state, dispatch] = useFormState(updateUserWithId, initialState);

  
  return (
    <>
      <div className="flex w-full gap-3 flex-col items-center rounded-lg bg-[#00000008] p-6 [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] min-[800px]:flex-row ">
        <div
          className="min-w-20 relative max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px]"
          data-testid="image-container"
        >
          { image ? (
            <img
            decoding="async"
            src={image}
            className="bject-cover h-20 w-full rounded-full bg-cover "
            alt="header-image-profile"
          ></img>
          ) : user?.image ? (
            <img
              decoding="async"
              src={user?.image}
              className="bject-cover h-20 w-full rounded-full bg-cover "
              alt="header-image-profile"
            ></img>
          ) : (
            <div className="flex h-20 items-center justify-center rounded-full bg-[#ffffffba] text-4xl text-[#333] ">
              {user?.email?.substring(0, 1).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col items-center justify-center min-[800px]:items-start ">
          <h2 className="m-0 text-lg font-semibold" data-testid="username-test">
          {!name ? user?.name : name}
          </h2>
          <p>{!email ? user?.email : email}</p>
        </div>
      </div>

      {/* Edit imagen */}
      <div className="mt-6 mb-4 gap-6 flex items-center min-[375px]:gap-12 ">
        <div>
          <div className="flex flex-col items-start gap-4 hover:bg-[#ffffff39] min-[500px]:flex-row min-[500px]:items-center ">
            <div className="relative">
              <input
                type="file"
                className="w-[164px] h-8 px-4 py-1 m-0 absolute text-sm opacity-0 rounded"
                onChange=/* { uploadToServer } */{handleFileChange}
              />
              <div className="w-[164px] h-8 px-4 py-1 flex items-center text-sm rounded  [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] ">
                Seleccionar imagen
              </div>
            </div>
          </div>
          {/* <p className="text-start text-[13.5px] mt-5">Editar imagen</p> */}
          <button
            className={`text-[13.5px] w-max h-8 rounded duration-200 ${file && "hover:bg-[#ffffff39]"}  disabled:opacity-60 `}/* [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] */
            disabled={!file}
            onClick={uploadToServer}
          >
            Cambiar imagen
          </button>
        </div>
        <div
          className={`flex justify-center w-[70px] h-[70px] bg-[#fff7] rounded relative shadow-none  ${file && "[box-shadow:0_2px_#0000009c,0_-2px_#ffffff96]" }` }
          data-testid="image-container"
          >
          {file ? (
            <img
              src= {URL.createObjectURL(file)}
              alt="Uploaded file"
              className="mx-auto rounded items-center justify-center object-cover"
              width={80}
              height={80}
            />
            ) : (
              <div className="flex relative">
              <IconCuenta className="flex items-center justify-center" color="#0006" size="48" filter="" />
              <CameraIcon  className="text-[#00000057] w-4 -right-[6px] top-[2px] text-[16px] absolute" />
              </div>
            )
          }
        </div>
      </div>


        {/* <div className="mb-4 flex items-center">
          <div
            className="flex justify-center mt-2 bg-[#fff7] rounded-full min-w-20 relative max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px]"
            data-testid="image-container"
          >
            {file ? (
              <img
              src= {URL.createObjectURL(file)}
              alt="Uploaded file"
              className="mx-auto h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            />
            ) : (
              <>
              <IconCuenta color="#0006" size="56" filter="" />
              
              </>
            )}
            
          </div>
          <button
            className={`block ml-4 w-max text-sm h-8 px-4 py-1 rounded duration-200 ${file && "hover:bg-[#ffffff39]"}  disabled:opacity-50 [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]`}
            disabled={!file}
            onClick={uploadToServer}
          >
            Cambiar
          </button>
        </div> */}

        

      <form action={dispatch}>
        
        {/* Edit name */}
        <div className="mb-4">
          {/* <p className="mt-8 text-start text-sm">Editar nombre</p> */}
          <label htmlFor="name" className="mt-8 text-start text-[13.5px]">
            Editar nombre
          </label>
          <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="w-max relative duration-150 rounded text-[#374151cc] hover:text-[#374151] [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]">
              <input
                id="name"
                name="name"
                type="text"
                className="px-4 py-1 pl-10 m-0 text-[#374151cc] text-sm h-8 bg-transparent border border-transparent rounded hover:text-[#374151] placeholder:text-[#37415188]"
                placeholder= 'Escribe un nombre...'
                defaultValue= {user.name} 
                required
                aria-describedby="name-error"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* <button
            className={`p-1 mt-1 leading-4 text-[13.5px] text-[#374151cc] w-max rounded duration-150 ${name && "hover:bg-[#ffffff59]"}  disabled:opacity-60 `}
            disabled={!name}
            onClick= {() => {setName1(name)}}
          >
            Cambiar nombre
          </button> */}
          {/* <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} 
          </div> */}
        </div>
        
        {/* Edit email */}
        <div className="mb-4">
          {/* <p className="mt-8 text-start text-sm">Editar email</p> */}
          <label htmlFor="email" className="mt-8 text-start text-[13.5px]">
            Editar email
          </label>
          <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="w-max relative rounded hover:bg-[#ffffff39] [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]">
              <input
                id="email"
                name="email"
                type="email"
                className="px-4 py-1 pl-10 m-0  text-[#374151] text-sm h-8 bg-transparent border border-transparent rounded placeholder:text-[#37415188]"
                placeholder= 'Escribe un email...'
                defaultValue= {user.email}
                required
                aria-describedby="email-error"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* <button
            className={`text-[13.5px] text-[#374151cc] w-max h-8 rounded duration-200 ${email && "hover:text-[#374151]"}  disabled:opacity-60 `}
            disabled={!email}
            onClick= {() => {setEmail1(email)}}
          >
            Cambiar email
          </button> */}
          {/* <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} 
          </div> */}
        </div>

        {/* Cliente Image_url */}
        <div className="mb-4 hidden">
          <label htmlFor="image" className="mt-8 text-start text-sm">
            Coloque la url
          </label>
          <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="w-max relative rounded [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] ">
              <input
                id="image"
                name="image"
                type="text"
                defaultValue={image ? image : user.image}
                placeholder="Ingrese la url"
                className="px-4 py-1 pl-10 m-0  text-[#374151aa] text-sm h-8 bg-transparent border border-transparent rounded placeholder:text-[#37415188]"
                /* className="peer block w-full bg-transparent rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" */
                aria-describedby="image-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image &&
             state.errors.image.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>  */}
        </div>

        {/* <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div> */}

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/realizarConsulta"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button type="submit">Guardar cambios</Button>
        </div>

        {/* <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/realizarConsulta"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <Button 
            type="submit"
              className="opacity-100 disabled:opacity-50 disabled:hover:bg-transparent ">Guardar cambios</Button>
        </div> */}
      </form>
    </> 
  );
}
