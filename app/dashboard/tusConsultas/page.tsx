"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { notFound } from 'next/navigation'

function page() {
  
  const { data: session, status } = useSession()

  if (session?.user?.email === 'agrotecnicog@gmail.com' )
  return (
    notFound()
  )
  return (
    status === "loading" ? <div>ERROR</div> : 
    <div>page tusConsultas</div>
  )
}

export default page