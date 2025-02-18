import { auth } from "auth"
import { SessionProvider } from "next-auth/react"

import CNPMandataria from './CNP-mandataria';
import { getAllPosts } from '@/app/lib/getPost';
import { fetchUserById } from '@/app/lib/data'; 


const allPosts = getAllPosts();

const linkDatos= allPosts.map((linkdato) => {
  return {slug: `${linkdato.slug}`, excerpt: `${linkdato.excerpt}`}
})

export default async function Page() {

  const session = await auth();
  const user = await fetchUserById(session?.user?.email)


  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen">
      <SessionProvider /* session={session} */>
        <CNPMandataria user={user}  linkDatos={linkDatos} />
      </SessionProvider>
    </div>
    
  )
}