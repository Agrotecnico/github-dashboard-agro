"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { notFound } from 'next/navigation'


function page() {
  
  const { data: session, status } = useSession()

  if (session )
  return (
    <div>{session.user?.name}</div>
  )
  return (
    notFound()
  )
}

export default page