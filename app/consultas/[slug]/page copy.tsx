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


export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <Container>
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              {post.image ? (
                <div className="container max-w-4xl m-auto px-4 mt-1">
                  <img
                    src= {post.image}
                    alt="my desk"
                    width={1920 / 2}
                    height={1280 / 2}
                  />
                </div>
              ) : null}

              {post.excerpt ? (
                <p className="mt-2 text-xl">{post.excerpt}</p>
              ) : null}
              <time className="flex mt-2 text-gray-400">
                {distanceToNow(new Date(post.date))}
              </time>
            </header>

            <div
              className="prose mt-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* <Comment /> */}
        </div>
    </Container>
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
