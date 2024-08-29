'use client';

import { User } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CurrencyDollarIcon,
  AtSymbolIcon,
  CameraIcon,
  UserIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button';
import { updateUser } from '@/app/lib/actions';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import Image from 'next/image'

export default function EditPerfilForm({ user }: { user: User }) {
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const uploadToServer = async () => {
    const url = `https://api.imgbb.com/1/upload?key=079cdc2ae90871b46a249403dce9a75a&name=${file?.name}`;
    const data = new FormData();
    data.append('image', `${file}`);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
      });
      const responseData = await response.json();
      setImage(responseData.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };
  const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUser.bind(null, user?.id);
  const [state, dispatch] = useFormState(updateUserWithId, initialState);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-3 rounded-lg bg-[#ffffff57] p-6 [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] min-[800px]:flex-row ">
        <div
          className="min-w-20 relative max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px]"
          data-testid="image-container"
        >
          {image ? (
            <Image
              decoding="async"
              src={`${image}`}
              className="bject-cover h-20 w-full rounded-full bg-cover [box-shadow:0_2px_#ffffff9c,_0_-2px_#0000006e] "
              alt="header-image-profile"
              width={80}
              height={80}
            />
          ) : user?.image ? (
            <Image
              decoding="async"
              src={`${user?.image}`}
              className="bject-cover h-20 w-full rounded-full bg-cover  [box-shadow:0_2px_#ffffff9c,_0_-2px_#0000006e]"
              alt="header-image-profile"
              width={80}
              height={80}
            />
          ) : (
            <div className="flex h-20 items-center justify-center rounded-full bg-[#ffffffba] text-4xl text-[#333]  [box-shadow:0_2px_#ffffff9c,_0_-2px_#0000002e] ">
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

      {/* Select imagen */}
      <div className="mb-4 mt-6 flex items-center gap-6 min-[375px]:gap-12 ">
        <div>
          <div className="flex flex-col  items-start gap-4 bg-[#ffffff57] text-[#374151cc] hover:bg-[#ffffff78] hover:text-[#374151] min-[500px]:flex-row min-[500px]:items-center ">
            <div className="relative">
              <input
                type="file"
                className="absolute m-0 h-8 w-[164px] rounded px-4 py-1 text-sm opacity-0"
                onChange={handleFileChange}
              />
              <div className="flex h-8 w-[164px] items-center rounded bg-[#ffffff57] px-4 py-1 text-sm [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] ">
                Seleccionar imagen
              </div>
            </div>
          </div>
          <button
            className={`mt-1 h-8 w-max rounded p-1 text-[13.5px] leading-4 duration-200 ${
              file && 'hover:bg-[#ffffff39]'
            }  disabled:opacity-60 `}
            disabled={!file}
            onClick={uploadToServer}
          >
            <div className="flex">
              <ArrowPathIcon
                className={`${
                  file && 'stroke-[#ff00cbaa]'
                } mr-2 w-4 stroke-2 font-semibold`}
              />
              <p>Cambiar imagen</p>
            </div>
          </button>
        </div>
        <div
          className={`relative flex h-[70px] w-[70px] justify-center rounded bg-[#fff7] shadow-none  ${
            file && '[box-shadow:0_2px_#0000009c,0_-2px_#ffffff96]'
          }`}
          data-testid="image-container"
        >
          {file ? (
            <Image
              src={URL.createObjectURL(file)}
              alt="Uploaded file"
              className="mx-auto items-center justify-center rounded object-cover"
              width={80}
              height={80}
            />
          ) : (
            <div className="relative flex">
              <IconCuenta
                className="flex items-center justify-center"
                color="#0006"
                size="48"
                filter=""
              />
              <CameraIcon className="absolute -right-[6px] top-[2px] w-4 text-[16px] text-[#00000057]" />
            </div>
          )}
        </div>
      </div>

      <form action={dispatch}>
        {/* Edit name */}
        <div className="mb-4">
          <label htmlFor="name" className="mt-8 text-start text-[13.5px]">
            Cambiar nombre
          </label>
          <div className="mt-1 flex flex-col gap-2 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="relative w-max rounded bg-[#ffffff57] text-[#374151cc] duration-150 [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] hover:bg-[#ffffff78] hover:text-[#374151]">
              <input
                id="name"
                name="name"
                type="text"
                className="m-0 h-8 rounded border border-transparent bg-transparent px-4 py-1 pl-10 text-sm text-[#374151cc] placeholder:text-[#37415188] hover:text-[#374151]"
                placeholder="Escribe un nombre..."
                defaultValue={!name ? user?.name : name}
                required
                aria-describedby="name-error"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Edit email */}
        <div className="mb-4">
          <label htmlFor="email" className="mt-8 text-start text-[13.5px]">
            Cambiar email
          </label>
          <div className="mt-1 flex flex-col gap-2 min-[425px]:flex-row min-[425px]:gap-4">
            <div className="relative w-max rounded bg-[#ffffff57] text-[#374151cc] duration-150 [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] hover:bg-[#ffffff78] hover:text-[#374151]">
              <input
                id="email"
                name="email"
                type="email"
                className="m-0 h-8 rounded border border-transparent bg-transparent px-4 py-1 pl-10 text-sm text-[#374151cc] placeholder:text-[#37415188] hover:text-[#374151]"
                placeholder="Escribe un email..."
                defaultValue={!email ? user?.email : email}
                required
                aria-describedby="email-error"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Contraseña */}
        <div>
          <input
            id="password"
            type="hidden"
            name="password"
            value={user.password}
          />
        </div>

        {/* Confirmar contraseña */}
        <div>
          <input
            id="confirmPassword"
            type="hidden"
            name="confirmPassword"
            value={user.password}
          />
        </div>

        {/* Image */}
        <div>
          <input
            id="image"
            type="hidden"
            name="image"
            value={!image ? user?.image : image}
          />
        </div>

        {/* Massages */}
        <div
          className="mb-3 mt-3 flex items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state?.message && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{state?.message}</p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <div
            onClick={() => {
              window.location.reload();
            }}
            className="flex h-10 cursor-pointer items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </div>
          <Button
            type="submit"
            className={`mt-1 h-8 w-max rounded p-1 text-[15px] leading-4 text-[#374151] duration-200 ${
              name == '' && email == '' && image == ''
                ? 'hover:bg-transparent active:bg-transparent'
                : ''
            }  disabled:opacity-60 `}
            disabled={name == '' && email == '' && image == ''}
          >
            Guardar cambios
          </Button>
        </div>
      </form>
    </>
  );
}
