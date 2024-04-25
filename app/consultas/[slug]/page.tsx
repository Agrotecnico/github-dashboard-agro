import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";

import markdownToHtml from "@/app/lib/markdownToHtml";

import Container from "@/app/ui/consultas/container";


import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
/* import Comment from "../../components/comment"; */
import distanceToNow from "../../lib/dateRelative";
import Head from "next/head";
import markdownStyles from "@/app/ui/consultas/markdown-styles.module.css";
import ListConsultas from "@/app/ui/consultas/listConsultas";


export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
    {/* <Container> */}
 
      <div>
        <article className=" text-[#374151] mx-1 mb-1 mt-0 p-6 bg-white rounded-xl  [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">

          <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
            {post.excerpt}
          </h1>

          <div className="hidden md:block md:mb-6">
            <div className="flex items-center">
              {/* <Image src={carinaBlog} width={300} height={300} className="w-12 h-12 rounded-full mr-4" alt="Nombre" /> */}
              {post.avatar ? (
                  
                    <img
                      src= {post.avatar}
                      alt="my desk"
                      width={300}
                      height={300}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  
                ) : null}
              <div className="text-md font-semibold">{post.autor}</div>
            </div>
          </div>

          <div className="mb-4 md:mb-8 sm:mx-0">
            <div className="sm:mx-0">
              {/* <Image
                src={usados}
                alt={`Cover Image for Titulo`}
                width={481}
                height={361}
                priority={true} 
              /> */}
              {post.image ? (
                  
                  <img
                    src= {post.image}
                    alt="my desk"
                    width={481}
                    height={361}
                    /* className="w-12 h-12 rounded-full mr-4" */
                  />
                
              ) : null}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
            <div className="flex items-center">
              {/* <Image 
                src={carinaBlog} 
                width={300} 
                height={300} 
                className="w-12 h-12 rounded-full mr-4" 
                alt="Nombre"/> */}
                {post.avatar ? (
                  
                  <img
                    src= {post.avatar}
                    alt="my desk"
                    width={300}
                    height={300}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                
              ) : null}
              <div className="text-xl font-bold">{post.autor}</div>
            </div>
            </div>
            <div className="mb-6 text-md">
              <time className="flex mt-2 text-gray-400">
                {distanceToNow(new Date(post.date))}
              </time>
            </div>
          </div>

          {/* <div className="max-w-2xl mx-auto">
            <p className="mb-2 text-gray-500 dark:text-gray-400 mb-2">En Argentina, el trámite de transferencia de vehículos es un proceso legal que implica la manifestación de voluntad del titular del vehículo registrado para transferirlo a otra persona.</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              El Formulario 08 es un documento legal que permite al propietario actual de un automóvil, motocicleta o equipo agrícola usado transferir todos sus derechos y propiedad a un adquirente o comprador, asumiendo que el vehículo se transferiría a su nombre. Esto podría tomar la forma de una venta, un premio, una donación o una sucesión.
            </p>
          </div> */}
          <div className="max-w-2xl mx-auto ">
          <div
                className= {`parrafo-consultas  ${markdownStyles["markdown"]}`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
          </div>
          {/* <ListConsultas /> */}
        </article>

          {/* <Comment /> */}
      </div>
    {/* </Container> */}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;/*  | Next.js Blog Example with ${CMS_NAME} */

  return {
    title,
    openGraph: {
      title,
      /* images: [post.ogImage.url], */
    },
  };
}


export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
