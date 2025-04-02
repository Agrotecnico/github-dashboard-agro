'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import IconMenu from '@/app/ui/logosIconos/icon-menu';
import { useSession } from 'next-auth/react';
import { links, linkMembers } from '@/app/constant';
import Dropdown from '@/app/ui/Dropdown';
import type { Post } from "@/app/lib/definitions"
import { Frente } from '@/app/ui/marcos';


export default  function UserButtonMenuFaq({allPosts}:{allPosts:Post}) {

  // const { data: session, update } = useSession();

  const pathname = usePathname();


  return (
    <div className={`${pathname.startsWith('/faq') ? "block" : "hidden" }  min-[1024px]:hidden`}>
      <Dropdown>
        <Dropdown.Button>
          <div className="flex flex-col items-center gap-1 duration-200  opacity-75 hover:opacity-[0.9] ">
            <IconMenu
              width="18"
              heightx="18"
              className="fill-[#fff] min-[1024px]:hidden"
            />
            <p className="text-xs text-[#fff] font-medium leading-none flex flex-col min-[512px]:flex-row min-[512px]:gap-1"><span>Consultas </span><span>Frecuentes</span></p>
          </div>
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="px-4 py-6 flex items-center flex-col space-y-1 mx-4">
            <p className="text-sm font-medium leading-none ">
              {/* {session?.user?.email} */} CONSULTAS FRECUENTES
            </p>
          </div>
          <div className="flex w-screen flex-col px-2.5 pb-2.5 gap-[2px] rounded-xl ">
            {allPosts.length ? (
              allPosts.map((post:Post) => (
                // <article key={post.slug} className="mb-2 rounded-md duration-200 ">
                  <Link
                    as={`/faq/${post.slug}`}
                    href="/faq/[slug]"
                    key={post.slug}
                    className={clsx(
                      'flex items-center justify-start px-4 text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#0000000a]',
                      {
                        'bg-[#00000009] text-[#1d0216] ':
                          pathname === `/faq/${post.slug}`,
                      },
                    )}
                  >
                    {/* <Frente className={clsx(`py-2 px-2.5 gap-5 flex justify-between text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffbb] hover:text-[#1d0215]`,
                      {
                        'text-[#1d0216] bg-[#ffffffbc] ': pathname === `/faq/${post.slug}`
                      }
                    )}> */}
                      <Dropdown.MenuItem>
                      <p className="text-sm py-1.5 -indent-3 text-start max-[512px]:text-sm ">
                       - {post.excerpt}
                      </p>
                      </Dropdown.MenuItem>
                    {/* </Frente> */}
                    
                  </Link>
                // </article>
              ))
            ) : (
              <p>No blog posted yet :/</p>
            )}

            {/* {links &&
              links?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex items-center justify-start text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#0000000a]',
                      {
                        'bg-[#00000009] text-[#1d0216] ':
                          pathname === link.href,
                      },
                    )}
                  >
                    <Dropdown.MenuItem>
                    <div className="flex w-full items-center justify-start gap-2 px-2.5 py-2">
                      <LinkIcon className="w-5 text-[#50073aaa]" />
                      <p className="text-start text-sm ">{link.name}</p>
                    </div>
                    </Dropdown.MenuItem>
                  </Link>
                );
              })} */}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
