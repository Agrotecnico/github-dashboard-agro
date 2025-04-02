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
            className={clsx(`py-2 px-2.5 gap-5 flex justify-between text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffbb] hover:text-[#1d0215] text-sm first:rounded-t-md last:rounded-b-md bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e]`,
              {
                'text-[#1d0216] bg-[#ffffffbc] ': pathname === `/faq/${post.slug}`
              }
            )}
            // className='text-sm first:rounded-t-md last:rounded-b-md bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] '
          >
            {/* <div className={clsx(`py-2 px-2.5 gap-5 flex justify-between text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffbb] hover:text-[#1d0215] text-sm first:rounded-t-md last:rounded-b-md bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e]`,
              {
                'text-[#1d0216] bg-[#ffffffbc] ': pathname === `/faq/${post.slug}`
              }
            )}> */}
              <p className="text-sm text-start max-[512px]:text-sm ">
                {post.excerpt}
              </p>
            {/* </div> */}
            
          </Link>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </div>
  );
}
