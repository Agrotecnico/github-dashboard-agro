"use client"

import React from 'react'
import { useSession } from "next-auth/react"
/* import { auth } from '@/auth'; */

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [ image, setImage ] = useState("")

const uploadToServer = async (e) => {
  const imageFile = e.target.files[0]
  const url = `https://api.imgbb.com/1/upload?key=079cdc2ae90871b46a249403dce9a75a&name=${imageFile.name}`
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
}




