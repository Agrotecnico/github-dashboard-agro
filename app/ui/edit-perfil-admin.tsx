'use client';

import { User } from '@/app/lib/definitions';
import {
  AtSymbolIcon,
  CameraIcon,
  UserIcon,
  ExclamationCircleIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button';
import { updateUser } from '@/app/lib/actions';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';
import Image from 'next/image'
import { Frente } from '@/app/ui/marcos';

export default function EditPerfilAdmin( { user }: { user: User | undefined }) {
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const uploadToServer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      console.log('Res:', response);

      const responseData = await response.json();

      setImageUrl(responseData.url);

      console.log('responseData:', responseData);

      if (response.ok) {
        console.log('File uploaded successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };
  
  const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUser.bind(null, `${user?.id}`);
  const [state, dispatch] = useFormState(updateUserWithId, initialState);
  /* console.log("image:", image) */

  return (
    <>
      <div className="flex w-full flex-col items-center gap-3 rounded-lg bg-[#ffffff88] p-6 [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e] min-[800px]:flex-row ">
        <div
          className="min-w-20 relative max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px]"
          data-testid="image-container"
        >
          {imageUrl ? (
            <Image
              decoding="async"
              src={`${imageUrl}`}
              className="bject-cover h-20 w-full rounded-full bg-cover [box-shadow:0_1px_#ffffff,_0_-1px_#0000002e] "
              alt="header-image-profile"
              width={80}
              height={80}
            />
          ) : user?.image ? (
            <Image
              decoding="async"
              src={`${user?.image}`}
              className="bject-cover h-20 w-full rounded-full bg-cover [box-shadow:0_1px_#ffffff,_0_-1px_#0000002e]"
              alt="header-image-profile"
              width={80}
              height={80}
            />
          ) : (
            <div className="flex h-20 items-center justify-center rounded-full bg-[#ffffffba] text-4xl text-[#333] [box-shadow:0_1px_#ffffff,_0_-1px_#0000002e] ">
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
      <div className="mb-2 mt-6 flex items-start gap-6 min-[375px]:gap-12 ">
        <form onSubmit={uploadToServer} id="subirImage">
          <div className={`flex flex-col  bg-[#ffffff57] text-[#374151cc] items-start gap-4 ${!!file && 'opacity-60 hover:bg-[#ffffff57] hover:text-[#374151cc] '} hover:bg-[#ffffff78] hover:text-[#374151] min-[500px]:flex-row min-[500px]:items-center`}>
            <div className="relative">
              <input
                type="file"
                className="absolute m-0 h-8 disabled:-z-10 w-[164px] rounded px-4 py-1 text-sm opacity-0"
                onChange={handleFileChange}
                disabled={!!file}
              />
              <button
                className={`flex h-8 w-[164px] disabled:cursor-default items-center rounded px-4 py-1 text-sm bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] `}
                disabled={!!file}
              >
                Seleccionar imagen
              </button>
            </div>
          </div>
          <button
            className={`mt-10 cursor-default disabled:cursor-pointer`}
            disabled={file ? true : false}
          >
            <div className="mb-0.5 text-start text-xs">Cambiar imagen</div>
            <Frente
              className={`relative flex w-[164px] flex-col items-center justify-start ${!file === true ? ' opacity-60 hover:bg-[#ffffff88] ' : 'hover:bg-[#ffffffbb]'} `}
            >
              <p className="!hover:bg-transparent block w-full rounded-md border border-transparent bg-transparent py-1.5 pl-10 pr-3 text-start text-sm text-[#000000aa] ">
                {imageUrl ? 'Imagen subida' : 'Subir imagen'}
              </p>
              <CloudArrowUpIcon
                className={`${
                  file && 'stroke-[#ff00cbaa] stroke-2 '
                } w-[18px]font-semibold peer-focus:text-gray-900" pointer-events-none absolute left-3 top-[24%] mr-2 h-[18px] text-[#1d0215aa]`}
              />
            </Frente>
          </button>
        </form>
        <div 
          className="text-black flex flex-col items-center opacity-80 ">
          <div
            className={`relative flex h-[70px] w-[70px] justify-center rounded bg-[#fff7] 
              ${file ? '[box-shadow:0_1px_#0000007a,0_-1px_#ffffffaa]' : 'shadow-none '}
              `}
            data-testid="image-container"
            >
            {imageUrl ? (
              <Image
                src={`${imageUrl}`}
                alt="Uploaded file"
                className={`mx-auto items-center justify-center rounded object-cover opacity-50 `}
                width={80}
                height={80}
              />
            ) : file ? (
              <Image
                src={URL.createObjectURL(file)}
                alt="Uploaded file"
                className={`mx-auto items-center justify-center rounded object-cover `}
                width={80}
                height={80}
              />
            ) : (
              <div className="relative flex">
                <IconCuenta
                  className="flex items-center justify-center"
                  color="#30032244"
                  size="48"
                  filter=""
                />
                <CameraIcon className="absolute -right-[6px] top-[2px] w-4 text-[16px] text-[#00000057]" />
              </div>
            )}
          </div>
          <div className="text-xs mt-0.5 ">
            {file?.name}
          </div>
        </div>
      </div>

      <form action={dispatch} id="actualizarPerfil">
        {/* Edit name */}
        <div className="relative">
          <label htmlFor="name" className="mt-8 text-start text-xs">
            Cambiar nombre
          </label>
          <Frente className="mb-2 flex w-max items-center justify-start hover:bg-[#ffffffbb]">
            <input
              className="!hover:bg-transparent peer block w-full rounded-md border border-transparent bg-transparent py-1.5 pl-10 text-sm text-[#000000aa] outline-2 hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
              id="name"
              type="text"
              name="name"
              defaultValue={`${!name ? user?.name : name}`}
              placeholder="Nombre"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <UserIcon className="pointer-events-none absolute left-3 top-[56%] h-[18px] w-[18px] text-[#1d0215aa] peer-focus:text-gray-900" />
          </Frente>
        </div>

        {/* Edit email */}
        <div className="relative">
          <label htmlFor="email" className="mt-8 text-start text-xs">
            Cambiar email
          </label>
          <Frente className="mb-2 flex w-max items-center justify-start hover:bg-[#ffffffbb] ">
            <input
              className="!hover:bg-transparent peer block w-full rounded-md border border-transparent bg-transparent py-1.5 pl-10 text-sm text-[#000000aa] outline-2 placeholder:text-[#1d021599] hover:border-[#2f6feb55] focus:border-[#2f6feb00] "
              id="email"
              type="email"
              name="email"
              defaultValue={`${!email ? user?.email : email}`}
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-[56%] h-[18px] w-[18px] text-[#1d0215cc] peer-focus:text-gray-900" />
          </Frente>
        </div>

        {/* Image */}
        <div className="hidden">
          <input
            id="image"
            type=/* "hidden" */ "text"
            name="image"
            defaultValue={imageUrl}
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

        <div className="mt-6 flex items-center justify-end gap-4 text-sm">
          <div
            onClick={() => {
              window.location.reload();
            }}
            className="flex h-9 cursor-pointer items-center rounded bg-[#30032215] px-4 font-medium opacity-70 transition-colors duration-200 hover:opacity-100 "
          >
            Cancelar
          </div>
          <Button
            type="submit"
            className={`flex h-10 w-max items-center rounded bg-[#ffffff00]  px-4 font-medium opacity-70 duration-200 hover:opacity-100 ${
              name == '' && email == '' && imageUrl == ''
                ? 'bg-transparent hover:bg-transparent active:bg-transparent'
                : ' bg-[#ffffffcc]'
            }  disabled:opacity-60 `}
            disabled={name == '' && email == '' && imageUrl == ''}
          >
            Guardar cambios
          </Button>
        </div>
      </form>
    </>
  );
}
