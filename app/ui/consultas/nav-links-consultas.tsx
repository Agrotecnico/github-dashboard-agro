/* "use client" */

import Link from 'next/link';
import clsx from 'clsx';
/* import Container from '@/components/consultas/container'; */
import distanceToNow from '@/app/lib/dateRelative';
import { getAllPosts } from '@/app/lib/getPost'
/* import { usePathname } from 'next/navigation' */


export default function NavLinksConsultas() {
  /* const allPosts = getStaticPropsxxx(); */
  const allPosts = getAllPosts();


  return (
    <div>
      <div className="mb-2 w-full pl-2 pb-2 font-medium text-[14px] text-[#000000c2] text-left leading-4 [text-shadow:_0_1px_#ffffff66] min-[500px]:mb-3 min-[500px]:pb-3 ">
        CONSULTAS FRECUENTES:
      </div>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="font-medium mb-2 duration-200 text-[#000000c2] rounded-md [box-shadow:inset_2px_-2px_#0000002e,inset_-2px_2px_#ffffff36,1px_-1px_#0000002e,-1px_1px_#ffffff36] hover:text-[#000000ee] ">
            {/* <button className="focus:bg-[#ffffff17]"> */}
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className={clsx(
                '!ml-0 flex grow flex-col justify-start text-start text-[14px] p-2.5 font-medium leading-[18px] duration-300 hover:bg-[#ffffff22] md:flex-none focus:bg-[#ffffff22] ',
                /* {
                  ' text-[#fff] duration-200' : pathname === post.slug,
                  ' bg-[#ffffff17]' : post.slug === "dif-gestor-mandatario", 
                },*/
              )}
            >
              {/* <div className="text-base leading-4 font-bold">{post.title}</div> */}

              <p className=" text-sm  [text-shadow:_0_1px_#ffffff66]">{post.excerpt}</p>
              <div className="[text-shadow:1px_1px_#00000094] text-end text-sm text-[#ffffff99]  ">
                <time>{distanceToNow(new Date(post.date))}</time>
              </div>
            </Link>
           {/*  </button> */}
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </div>
  );
}

function getStaticPropsxxx() {
  const allPosts = getAllPosts();
  return allPosts;
}
