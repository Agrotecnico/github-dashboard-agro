
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/app/lib/getPost';
import markdownToHtml from '@/app/lib/markdownToHtml';
import distanceToNow from '@/app/lib/dateRelative';
import markdownStyles from '@/app/ui/consultas/markdown-styles.module.css';
import CommentFormConsulta from '@/app/ui/consultas/comments/form-comment';
import {auth } from "auth" 
import CommentList from '@/app/ui/consultas/comments/list'


type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {

  const session = await auth()
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <div>
        <article className=" mx-1 mb-1 mt-0 rounded-xl bg-[#ffffff94] pt-6 pb-6 px-3 text-[#374151] [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_12px_0_#fff_inset] backdrop-blur-md md:px-6">
          <h1 className="mb-6 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
            {post.excerpt}
          </h1>
          <div className="hidden md:mb-6 md:block">
            <div className="flex items-center">
              {post.avatar ? (
                <img
                  src={post.avatar}
                  alt="my desk"
                  width={300}
                  height={300}
                  className="mr-4 h-12 w-12 rounded-full"
                />
              ) : null}
              <div className="text-md font-semibold">{post.autor}</div>
            </div>
          </div>
          <div className="mb-4 p-0.5 mx-auto max-w-max md:mb-8 rounded [box-shadow:inset_0_2px_0_#4d4d4db8,inset_0_-2px_0_#ffffff] ">
            <div className="sm:mx-0">
              {post.image ? (
                <img
                  src={post.image}
                  alt="my desk"
                  width={481}
                  height={361}
                  className="roundrd"
                />
              ) : null}
            </div>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 block md:hidden">
              <div className="flex items-center">
                {post.avatar ? (
                  <img
                    src={post.avatar}
                    alt="my desk"
                    width={300}
                    height={300}
                    className="mr-4 h-12 w-12 rounded-full"
                  />
                ) : null}
                <div className="text-xl font-bold">{post.autor}</div>
              </div>
            </div>
            <div className="text-md mb-6">
              <time className="mt-2 flex text-[#747e91]">
                {distanceToNow(new Date(post.date ))}
              </time>
            </div>
          </div>
          <div className="mx-auto max-w-2xl ">
            <div
              className={`parrafo-consultas  ${markdownStyles['markdown']}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div id="consulta" className="pt-12">
              <p className="">
                <i className="text-[#374151] ">
                  Podes contribuir {/*ampliar mejorar opinar participar colaborar contribuir*/} {/* esta respuesta */} {/* consulta */} agregando comentarios:{/* Para mejorar esta consulta podes dejar un comentario.*/}
                </i>
              </p>
            </div>
            <CommentList />
          </div>
            <CommentFormConsulta session={session} />
           <div className=" text-center [text-shadow:_1px_1px_#00000069] [border-radius:_0_0_12px_12px] flex justify-center items-center bg-[#e580d087] text-[#ffffff88] ">
              cnp mandataria
            </div> 
        </article>
      </div>
    </>
  );
}

