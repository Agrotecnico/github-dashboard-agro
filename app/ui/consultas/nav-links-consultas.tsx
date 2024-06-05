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
      <div className="mb-2 w-full pl-2 pb-2 text-[14px] text-left leading-4 min-[500px]:mb-3 min-[500px]:pb-3 ">
        CONSULTAS FRECUENTES:
      </div>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-2 duration-200 rounded-md  ">{/* [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff36,1px_-1px_#0000002e,-1px_1px_#ffffff36] */}
            {/* <button className="focus:bg-[#ffffff17]"> */}
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className={clsx(
                '!ml-0 flex grow border-b border-b-[#fff2] flex-col justify-start text-start text-[14px] px-2.5 pt-2.5 leading-[18px] duration-300 hover:text-white focus:text-[#fff] ',/*hover:bg-[#00000022]  md:flex-none  */
                /* {
                  ' text-[#fff] duration-200' : pathname === post.slug,
                  ' bg-[#ffffff17]' : post.slug === "dif-gestor-mandatario", 
                },*/
              )}
            >
              {/* <div className="text-base leading-4 font-bold">{post.title}</div> */}

              <p className="[letter-spacing:_0.5px] ">{post.excerpt}</p>
              <div className="[text-shadow:1px_1px_#00000094] text-[13px] leading-5 text-[#ffffff99]  ">
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
