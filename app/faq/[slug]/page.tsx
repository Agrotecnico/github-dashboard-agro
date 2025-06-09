import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { auth } from 'auth';
import Image from 'next/image'

import { getPostBySlug } from '@/app/lib/getPost';
import markdownToHtml from '@/app/lib/markdownToHtml';
import distanceToNow from '@/app/lib/dateRelative';
import markdownStyles from '@/app/ui/consultas/markdown-styles.module.css';
import FormComment from '@/app/ui/consultas/comments/form-comment';
import ListComment from '@/app/ui/consultas/comments/list-comment';
import {Frente} from '@/app/ui/marcos'
import { fetchUserById } from '@/app/lib/data';


export const metadata: Metadata = {
  title: 'Consultas',
  description:
    'En esta es una página enumeramos y detallamos las consultas más frecuentes ',
};

type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email)
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <Frente className="!rounded-lg !bg-[#ffffffaa] ">
        <article className="px-3 pb-6 pt-6 md:px-6">
          <h1 className="mb-6 text-xl font-bold md:text-2xl">
            {post.excerpt}
          </h1>

          <div className="hidden md:mb-6 md:block">
            <div className="flex items-center">
              {post.avatar ? (
                <Image
                  src={`${post.avatar}`}
                  alt="my desk"
                  width={300}
                  height={300}
                  className="mr-4 h-auto w-12 rounded-full"
                />
              ) : null}
              <div className="text-lg font-semibold">{post.autor}</div>
            </div>
          </div>

          <div className="mx-auto mb-4 max-w-max rounded p-0.5 [box-shadow:inset_0_2px_0_#4d4d4db8,inset_0_-2px_0_#ffffff] md:mb-8 ">
            <div className="sm:mx-0">
              {post.image ? (
                <Image
                  src={`${post.image}`}
                  alt="my desk"
                  width={481}
                  height={361}
                  className="roundrd w-96 h-auto "
                  priority
                />
              ) : null}
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="mb-6 block md:hidden">
              <div className="flex items-center">
                {post.avatar ? (
                  <Image
                    src={`${post.avatar}`}
                    alt="my desk"
                    width={300}
                    height={300}
                    className="mr-4 h-auto w-12 rounded-full"
                  />
                ) : null}
                <div className="text-lg font-bold">{post.autor}</div>
              </div>
            </div>

            <div className="text-md mb-6">
              <time className="mt-2 flex text-[15px] text-[#1d0215aa] ">
                {distanceToNow(new Date(`${post.date}`))}
              </time>
            </div>
          </div>

          <div className="mx-auto mb-8 max-w-2xl text-sm sm:text-base">
            <div
              className={` ${markdownStyles['markdown']}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <div className="mt-20 mx-auto text-sm max-w-2xl sm:text-[15px]">
            <FormComment user={user} post={post} />
            <ListComment post={post} />
          </div>
        </article>
      </Frente>
    </>
  );
}
