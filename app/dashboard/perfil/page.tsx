"use client"

import React from 'react'
import { useSession } from "next-auth/react"

function page() {
  
  const { data: session, status } = useSession()

  if (session?.user?.email === 'agrotecnicog@gmail.com' )
  return (
    <div>Perfil Admin</div> 
  )
  return (
    status === "loading" ? <div>ERROR</div> : 
    <div>Perfil Member</div>
  )
}

export default page