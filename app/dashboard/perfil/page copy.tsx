"use client"

import React from 'react'
import { useSession } from "next-auth/react"
/* import { auth } from '@/auth'; */

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

export default function Page() {
  const { data: session, update } = useSession()
  const [file, setFile] = useState<File | undefined>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      console.log(res);

      if (res.ok) {
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };

  return (
    <div>
      <h1 className="mb-8 text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
        Editar perfil
      </h1>
      <div className="flex flex-col items-center p-6 w-full rounded-lg bg-[#00000008] [box-shadow:inset_0_2px_#ffffff9c,inset_0_-2px_#0000002e] min-[800px]:flex-row ">
        <div className="max-h-[80px] max-w-[80px] min-h-[80px] min-w-[80px] min-w-20 relative" data-testid="image-container">
          {session?.user?.image ? (
            <img
            decoding="async" 
            src= {session?.user?.image}
            className="rounded-full cursor-pointer bg-cover h-20 bject-cover w-full " alt="header-image-profile">
            </img>
            ) : (
            <div className="flex h-20 text-4xl items-center justify-center rounded-full bg-[#ffffffba] text-[#333] ">
              {session?.user?.email?.substring(0, 1).toUpperCase()}
            </div>
          )}
          <div className="flex items-center p-1 justify-center border border-[#999] bg-white rounded-full cursor-pointer max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] absolute bottom-0 right-0 ">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.9)">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.8 14.2234C14.1353 14.2234 16.0284 12.3303 16.0284 9.99504C16.0284 7.65977 14.1353 5.76665 11.8 5.76665C9.46473 5.76665 7.57161 7.65977 7.57161 9.99504C7.57161 12.3303 9.46473 14.2234 11.8 14.2234ZM11.8 13.0234C10.1275 13.0234 8.77161 11.6676 8.77161 9.99504C8.77161 8.32251 10.1275 6.96665 11.8 6.96665C13.4725 6.96665 14.8284 8.32251 14.8284 9.99504C14.8284 11.6676 13.4725 13.0234 11.8 13.0234Z" fill="rgba(0, 0, 0, 0.9)">
              </path>
              <path fillRule="evenodd" clipRule="evenodd" d="M16.3165 4.59504H19V14.8C19 15.7942 18.1941 16.6 17.2 16.6H2.8C1.80589 16.6 1 15.7942 1 14.8V6.39504C1 5.40093 1.80589 4.59504 2.8 4.59504H7.26123L8.48032 2.84106H15.1165L16.3165 4.59504ZM9.10765 4.04106L7.88856 5.79504H2.8C2.46863 5.79504 2.2 6.06367 2.2 6.39504V14.8C2.2 15.1314 2.46863 15.4 2.8 15.4H17.2C17.5314 15.4 17.8 15.1314 17.8 14.8V5.79504H15.6835L14.4835 4.04106H9.10765Z" fill="rgba(0, 0, 0, 0.9)">
              </path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-4 mb-1 ml-6 w-full min-[800px]:items-start min-[800px]:my-1 ">

          <h2 className="text-lg font-semibold m-0" data-testid="username-test">
            {session?.user?.name}
          </h2>
          <p>{session?.user?.email}</p>
        </div>
      </div>

      




      <div className="flex h-screen justify-center items-center">
        <div className="bg-zinc-950 p-5">
          <h1 className="text-4xl text-center my-4">Upload a file</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
              onChange= {handleFileChange}
              
            />
            <button
              className="bg-green-900 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
              disabled={!file}
            >
              Upload
            </button>
          </form>
          {/* {file && (
            <Image
              src={URL.createObjectURL(file)}
              alt="Uploaded file"
              className="w-64 h-64 object-contain mx-auto"
              width={256}
              height={256}
            />
          )} */}
        </div>
      </div>
    </div>
  )
}

const [ image, setImage ] = useState("")

const uploadToServer = async (e) => {
  const imageFile = e.target.files[0]
  const url = `https://api.imgbb.com/1/upload?expiration=600&key=079cdc2ae90871b46a249403dce9a75a&name=${imageFile.name}`
  const data = new FormData()
  data.append("image", imageFile)

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

return (
  <main>
    {image && (
      <>
        <img src={image} alt="" />
        <p>{image}</p>
      </>
    )}

    {!image && (
      <input
        type="file"
        name= "image"
        onChange={uploadToServer}
        className="border-none p-0"
         />
    )}
  </main>
)

