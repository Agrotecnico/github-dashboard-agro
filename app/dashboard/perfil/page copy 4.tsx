'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { updateUser } from '@/app/lib/actions';


export default function Page() {
  const { data: session, update } = useSession();
  const [file, setFile] = useState<File | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      console.log(res);

      if (res.ok) {
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

  /* const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUser.bind(null, session?.user?.id);
  const [state, dispatch] = useFormState(updateUserWithId, initialState); */

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Editar perfil
      </h1>
     {/*  Perfil */}
      <div className="flex w-full gap-3 flex-col items-center rounded-lg bg-[#00000008] p-6 [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] min-[800px]:flex-row ">
        <div
          className="min-w-20 relative max-h-[80px] min-h-[80px] min-w-[80px] max-w-[80px]"
          data-testid="image-container"
        >
          {file ? (
            <>
            <div className="">
            <img
              src= {URL.createObjectURL(file)}
              alt="Uploaded file"
              className="mx-auto h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            />
            {/* <Image
              src={URL.createObjectURL(file)}
              alt="Uploaded file"
              className="mx-auto h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            /> */}
            </div>
            </>
          ) : session?.user?.image ? (
            <img
              decoding="async"
              src={session?.user?.image}
              className="bject-cover h-20 w-full rounded-full bg-cover "
              alt="header-image-profile"
            ></img>
          ) : (
            <div className="flex h-20 items-center justify-center rounded-full bg-[#ffffffba] text-4xl text-[#333] ">
              {session?.user?.email?.substring(0, 1).toUpperCase()}
            </div>
          )}
          <div className="absolute bottom-0 right-0 flex max-h-[24px] min-h-[24px] min-w-[24px] max-w-[24px] cursor-pointer items-center justify-center rounded-full border border-[#ddd] bg-white p-1 ">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="rgba(0, 0, 0, 0.9)"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8 14.2234C14.1353 14.2234 16.0284 12.3303 16.0284 9.99504C16.0284 7.65977 14.1353 5.76665 11.8 5.76665C9.46473 5.76665 7.57161 7.65977 7.57161 9.99504C7.57161 12.3303 9.46473 14.2234 11.8 14.2234ZM11.8 13.0234C10.1275 13.0234 8.77161 11.6676 8.77161 9.99504C8.77161 8.32251 10.1275 6.96665 11.8 6.96665C13.4725 6.96665 14.8284 8.32251 14.8284 9.99504C14.8284 11.6676 13.4725 13.0234 11.8 13.0234Z"
                fill="rgba(0, 0, 0, 0.9)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3165 4.59504H19V14.8C19 15.7942 18.1941 16.6 17.2 16.6H2.8C1.80589 16.6 1 15.7942 1 14.8V6.39504C1 5.40093 1.80589 4.59504 2.8 4.59504H7.26123L8.48032 2.84106H15.1165L16.3165 4.59504ZM9.10765 4.04106L7.88856 5.79504H2.8C2.46863 5.79504 2.2 6.06367 2.2 6.39504V14.8C2.2 15.1314 2.46863 15.4 2.8 15.4H17.2C17.5314 15.4 17.8 15.1314 17.8 14.8V5.79504H15.6835L14.4835 4.04106H9.10765Z"
                fill="rgba(0, 0, 0, 0.9)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center min-[800px]:items-start ">
          <h2 className="m-0 text-lg font-semibold" data-testid="username-test">
            {!name ? session?.user?.name : name}
          </h2>
          <p>{!email ? session?.user?.email : email}</p>
        </div>
      </div>
      {/* Edit perfil */}
      <div className="mb-4 mt-6 flex flex-col w-full border-[1px] border-[#fff0] px-3 pt-3 pb-9  rounded resize-y bg-[#0000000d]  focus:shadow-none    focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] ">
        <form onSubmit={handleSubmit}>
          {/* Edit imagen */}
          <p className="text-start text-sm mt-5">Editar imagen</p>
          <div className="flex gap-4 mt-1">
            <div className="relative">
              <input
                type="file"
                className="w-[164px] h-8 px-4 py-1 m-0 absolute text-sm opacity-0 rounded"
                onChange={handleFileChange}
              />
              <div className="w-[164px] h-8 px-4 py-1 flex items-center text-sm rounded [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]">
                Seleccionar imagen
              </div>
            </div>
            <button
              className={`block text-sm h-8 px-4 py-1 rounded duration-200 ${file && "hover:bg-[#ffffff39]"}  disabled:opacity-50 [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]`}
              disabled={!file}
            >
              Cambiar
            </button>
          </div>
          {/* Edit name */}
            <p className="mt-8 text-start text-sm">Editar nombre</p>
            <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
              <div className="w-max rounded [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="px-4 py-1 m-0 text-sm bg-transparent border border-transparent rounded placeholder:text-[#37415188]"
                  placeholder='Escribe un nombre...'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </div>
              <button
                className={`block text-sm w-min h-8 px-4 py-1 rounded duration-200 ${name && "hover:bg-[#ffffff39]"}  disabled:opacity-50 [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]`}
                disabled={!name}
              >
                Cambiar
              </button>
            </div>
          {/* Edit email */}
            <p className="mt-8 text-start text-sm">Editar email</p>
            <div className="flex flex-col gap-2 mt-1 min-[425px]:flex-row min-[425px]:gap-4">
              <div className="w-max rounded [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="px-4 py-1 m-0 text-sm bg-transparent border  border-transparent rounded placeholder:text-[#37415188]"
                  placeholder='Escribe un email...'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <button
                className={`block text-sm w-min h-8 px-4 py-1 rounded duration-200 ${email && "hover:bg-[#ffffff39]"}  disabled:opacity-50 [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e]`}
                disabled={!email}
              >
                Cambiar
              </button>
            </div>
            <input
              id="imageUser"
              name="imageUser"
              type="hidden"
              value= {`/${file?.name}`}
              />
        </form>
      </div>
    </div>
  );
}
