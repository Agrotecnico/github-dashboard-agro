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
import { Fondo, Frente } from '@/app/ui/marcos';


export default function EditPerfilMember() {

  const { data: session, status } = useSession()

  /* console.log("session222: ", session) */

  const [ image, setImage ] = useState("")
  const [file, setFile] = useState<File>()
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
      <Frente className="flex w-full gap-3 flex-col items-center p-6 min-[800px]:flex-row ">
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
      </Frente>

      {/* Select image */}
      <div className="mt-6 mb-4 gap-6 flex items-center min-[375px]:gap-12 ">
        <div>
          <div className="bg-[#ffffff57] text-[#000000aa] duration-200 flex flex-col items-start gap-4 hover:text-[#111111] hover:bg-[#ffffff78] min-[500px]:flex-row min-[500px]:items-center ">
            <div className="relative">
              <input
                type="file"
                className="w-[164px] h-8 px-4 py-1 m-0 absolute text-sm opacity-0 rounded"
                onChange={handleFileChange}
              />
              <Frente className="w-[164px] h-9 px-4 py-1 flex items-center text-sm  hover:bg-[#ffffffbb] ">
                Seleccionar imagen
              </Frente>
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
        <div className="relative">
          <label htmlFor="name" className="mt-8 text-start text-xs">
            Cambiar nombre
          </label>
          <Frente className="mb-4 flex items-center justify-start w-max hover:bg-[#ffffffbb]">
            <input
              className="!hover:bg-transparent rounded-md peer block w-full border text-[#000000aa] border-transparent bg-transparent py-1.5 pl-10 text-sm outline-2 hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
              id="name"
              type="text"
              name="name"
              defaultValue={`${!name ? session?.user?.name : name}`}
              placeholder="Nombre"
              required
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <UserIcon className="pointer-events-none text-[#1d0215aa] absolute left-3 top-[56%] h-[18px] w-[18px] peer-focus:text-gray-900" />
          </Frente>{/*  text-gray-900 -translate-y-1/2 */}
        </div>
 
        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="mt-8 text-start text-xs">
            Cambiar email
          </label>
          <Frente className="mb-4 flex items-center justify-start w-max hover:bg-[#ffffffbb] ">
            <input
              className="!hover:bg-transparent rounded-md peer block w-full border text-[#000000aa] border-transparent bg-transparent py-1.5 pl-10 text-sm outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
              id="email"
              type="email"
              name="email"
              defaultValue={`${!email ? session?.user?.email : email}`}
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <AtSymbolIcon className="pointer-events-none text-[#1d0215cc] absolute left-3 top-[56%] h-[18px] w-[18px] peer-focus:text-gray-900" />
          </Frente>{/*  text-gray-900 -translate-y-1/2 */}
        </div>

        {/* Contraseña */}
        {/* <div>
          <input
            id="password"
            type="hidden"
            name="password"
            value= {`${session?.user?.email}`}
          />
        </div> */}

        {/* Confirmar contraseña */}
        {/* <div>
          <input
            id="confirmPassword"
            type="hidden"
            name="confirmPassword"
            value= {`${session?.user?.email}`}
          />
        </div> */}

        {/* Image */}
        {/* <div>
          <input
            id="image"
            type="hidden"
            name="image"
            value= {`${!image ? session?.user?.image : image}`}
          />
        </div> */}

      {/* Massages */}
      {/* <div
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
      </div> */}

      <div className="mt-6 flex justify-end items-center gap-4 text-sm">
        <div
          onClick={() => {window.location.reload()}}
          className="flex h-9 items-center rounded duration-200 bg-[#30032215] opacity-70 cursor-pointer px-4 font-medium transition-colors hover:opacity-100 "
          > 
            Cancelar
        </div>
        <Button 
          type="submit"
          className={`flex items-center h-10 w-max rounded bg-[#ffffffcc]  opacity-70 px-4 font-medium duration-200 hover:opacity-100 `}
          >Guardar cambios
        </Button>
      </div>
    </form>
    </> 
  );
}

