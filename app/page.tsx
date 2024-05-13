
import { auth } from "auth"
import GaleriaFotosCnp from './cnp-galeria-fotos';
import { getAllPosts } from '@/app/lib/getPost';

const allPosts = getAllPosts();

const linkDatos= allPosts.map((linkdato) => {
  return {slug: `${linkdato.slug}`, excerpt: `${linkdato.excerpt}`}
})

export default async function Page() {

  const session = await auth();

  return (
    <div className="flex flex-col justify-between w-full h-full min-h-screen">
      
        <GaleriaFotosCnp session={session} linkDatos={linkDatos} />
      
    </div>
  )
}