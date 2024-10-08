'use client'

import {
  AtSymbolIcon,
  CameraIcon,
  UserIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button'
import { ChangeEvent, FormEvent, useState } from "react";
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import { useSession } from "next-auth/react"
import { createUser } from '@/app/lib/actions';
import Image from 'next/image'


export default function EditPerfilFormB() {

  const { data: session, status } = useSession()

  console.log("session: ", session)

  const [ image, setImage ] = useState("")
  const [file, setFile] = useState<File | undefined>()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const uploadToServer = async () => {
    const url = `https://api.imgbb.com/1/upload?key=079cdc2ae90871b46a249403dce9a75a&name=${file?.name}`
    const data = new FormData()
    data.append("image", `${file}`)

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

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <>
      <div className="flex w-full gap-3 flex-col items-center rounded-lg bg-[#ffffff57] p-6 [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] min-[800px]:flex-row ">
        <div
          className="min-w-20 relative max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px]"
          data-testid="image-container"
        >
          { image ? (
            <Image
            decoding="async"
            src={`${image}`}
            className="bject-cover h-20 w-full rounded-full bg-cover "
            alt="header-image-profile"
            width={80}
            height={80}
          />
          ) : session?.user?.image ? (
            <Image
              decoding="async"
              src={`${session.user.image}`}
              className="bject-cover h-20 w-full rounded-full bg-cover "
              alt="header-image-profile"
              width={80}
              height={80}
            />
          ) : (
            <div className="flex h-20 items-center justify-center rounded-full bg-[#ffffffba] text-4xl text-[#333] ">
              {session?.user?.email?.substring(0, 1).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col items-center justify-center min-[800px]:items-start ">
          <h2 className="m-0 text-lg font-semibold" data-testid="username-test">
          {!name ? session?.user?.name : name}
          </h2>
          <p>{!email ? session?.user?.email : email}</p>
        </div>
      </div>

      {/* Select image */}
      <div className="mt-6 mb-4 gap-6 flex items-center min-[375px]:gap-12 ">
        <div>
          <div className="bg-[#ffffff57] text-[#374151cc]  flex flex-col items-start gap-4 hover:text-[#374151] hover:bg-[#ffffff78] min-[500px]:flex-row min-[500px]:items-center ">
            <div className="relative">
              <input
                type="file"
                className="w-[164px] h-8 px-4 py-1 m-0 absolute text-sm opacity-0 rounded"
                onChange={handleFileChange}
              />
              <div className="w-[164px] h-8 px-4 py-1 flex items-center text-sm rounded bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] ">
                Seleccionar imagen
              </div>
            </div>
          </div>
          <button
            className={`p-1 mt-1 leading-4 text-[13.5px] w-max h-8 rounded duration-200 ${file && "hover:bg-[#ffffff39]"}  disabled:opacity-60 `}
            disabled={!file}
            onClick={uploadToServer}
          >
            <div className="flex">
            <ArrowPathIcon className={`${ file && "stroke-[#ff00cbaa]"} mr-2 stroke-2 font-semibold w-4` }/>
            <p>Cambiar imagen</p>
            </div>
          </button>
        </div>
        <div
          className={`flex justify-center w-[70px] h-[70px] bg-[#fff7] rounded relative shadow-none  ${file && "[box-shadow:0_2px_#0000009c,0_-2px_#ffffff96]" }` }
          data-testid="image-container"
          >
          {file ? (
            <Image
              src= {`${URL.createObjectURL(file)}`}
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

      <form action={dispatch} className="mt-4px">

        {/* Nombre */}
        <div className="mb-4">
          <label htmlFor="name" className="mt-8 text-start text-[13.5px]">
            Cambiar nombre
          </label>
          <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="w-max relative duration-150 rounded text-[#374151cc] hover:bg-[#ffffff78] bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047]">
              <input
                className="px-4 pt-1 pb-1.5 pl-10 m-0 text-[#374151cc] text-sm h-8 bg-transparent border border-transparent rounded hover:text-[#374151] placeholder:text-[#37415188]"
                id="name"
                type="text"
                name="name"
                defaultValue={`${!name ? session?.user?.name : name}`}
                placeholder="Elegí tu nombre..."
                required
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mt-8 text-start text-[13.5px]">
            Cambiar email
          </label>
          <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="w-max relative rounded hover:bg-[#ffffff78] bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047]">
              <input
                className="px-4 pt-1 pb-1.5 pl-10 m-0  text-[#374151cc] text-sm h-8 bg-transparent border border-transparent rounded placeholder:text-[#37415188] hover:text-[#374151]"
                id="email"
                type="email"
                name="email"
                defaultValue={`${!email ? session?.user?.email : email}`}
                placeholder="Agregá tu email..."
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Contraseña */}
        <div>
          <input
            id="password"
            type="hidden"
            name="password"
            value= {`${session?.user?.email}`}
          />
        </div>

        {/* Confirmar contraseña */}
        <div>
          <input
            id="confirmPassword"
            type="hidden"
            name="confirmPassword"
            value= {`${session?.user?.email}`}
          />
        </div>

        {/* Image */}
        <div>
          <input
            id="image"
            type="hidden"
            name="image"
            value= {`${!image ? session?.user?.image : image}`}
          />
        </div>

      {/* Massages */}
      <div
        className="mb-3 mt-3 flex items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state.message && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state.message}</p>
          </>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <div
          onClick={() => {window.location.reload()}}
          className="flex h-10 items-center rounded-lg cursor-pointer bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          > 
            Cancelar
        </div>
        <Button 
          type="submit"
          className={`p-1 mt-1 leading-4 text-[#374151] text-[15px] w-max h-8 rounded duration-200 hover:bg-[#ffffff99] `}
          >Guardar cambios
        </Button>
      </div>
    </form>
    </> 
  );
}

