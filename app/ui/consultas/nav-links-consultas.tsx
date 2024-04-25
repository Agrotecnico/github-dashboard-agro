/* 'use client'; */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Container from "@/app/ui/consultas/container";
import distanceToNow from "@/app/lib/dateRelative";
import { getAllPosts } from "@/app/lib/getPost";


export default function NavLinksConsultas() {
  const allPosts =  getStaticPropsxxx();
  /* const pathname = usePathname(); */

  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-5">
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className={clsx(
                'flex border-l-[3px] pl-2 border-transparent duration-300 flex-col text-[#374151] hover:bg-[#fff0] hover:text-[#161b24] hover:border-[#e780d265]  !ml-0  text-start grow justify-start text-[14px] leading-[18px] font-medium md:flex-none active:border-[#e780d265] ',
                /* {
                  ' bg-[#fff0] text-[#112] border-[#e580d1] duration-200' : pathname === post.slug,
                }, */
              )}
            >
              {/* <div className="text-base leading-4 font-bold">{post.title}</div> */}
            
              <p className="text-sm">{post.excerpt}</p>
              <div className="text-sm text-gray-400">
                <time>{distanceToNow(new Date(post.date))}</time>
              </div>
            </Link>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
  );
}

function getStaticPropsxxx() {
  const allPosts = getAllPosts();
  return allPosts
}