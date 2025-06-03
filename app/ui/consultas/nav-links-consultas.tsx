"use client"

import Link from 'next/link';
import clsx from 'clsx';

import { Frente } from '@/app/ui/marcos';
import { usePathname } from 'next/navigation';
import type { Post } from "@/app/lib/definitions"


export default function NavLinksConsultas({allPosts}:{allPosts:Post}) {
  const pathname = usePathname();
  
  return (
    <div>
      {allPosts.length ? (
        allPosts.map((post:Post) => (
          <Link
            as={`/faq/${post.slug}`}
            href="/faq/[slug]"
            key={post.slug}
            className={clsx(`py-2 px-2.5 gap-5 flex justify-between bg-[#ffffff88]  text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffe3] hover:text-[#1d0215] text-sm first:rounded-t-lg last:rounded-b-lg [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e]`,
              {
                'text-[#1d0216] bg-[#ffffffe3] ': pathname === `/faq/${post.slug}`
              }
            )}
          >
            <p className="text-sm text-start max-[512px]:text-sm ">
              {post.excerpt}
            </p>
          </Link>
        ))
      ) : (
        <p>Aún no se ha publicado ningún blog</p>
      )}
    </div>
  );
}
