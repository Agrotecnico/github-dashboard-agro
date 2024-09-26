import Link from 'next/link';
import clsx from 'clsx';
import distanceToNow from '@/app/lib/dateRelative';
import { getAllPosts } from '@/app/lib/getPost';
import { Frente } from '@/app/ui/marcos';
import { ChevronRightIcon } from '@heroicons/react/24/outline';


export default function NavLinksConsultas() {
  const allPosts = getAllPosts();

  return (
    <div>
      {/* <div className="mb-2 w-full pb-2 pl-2 text-left text-[14px] leading-4 min-[500px]:mb-3 min-[500px]:pb-3 ">
        CONSULTAS FRECUENTES:
      </div> */}
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-2 rounded-md duration-200  ">
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className=""
              // className={clsx(
              //   '!ml-0 flex grow flex-col justify-start border-b border-b-[#fff2] px-2.5 pt-2.5 text-start text-[14px] leading-[18px] duration-300 hover:text-white focus:text-[#fff] ',
              // )}
            >
              {/* <div className="text-xs opacity-80 pl-2.5  ">
                <time>{distanceToNow(new Date(`${post.date}`))}</time>
              </div> */}
              <Frente className="py-2.5 px-2.5 gap-5  text-[#1d0215cc] flex justify-between items-center duration-200 hover:bg-[#fffffff2] hover:text-[#1d0215]">{/*  flex justify-between items-center */}
                <p className="text-sm text-start max-[512px]:text-sm" /* className="[letter-spacing:_0.5px] " */>
                  {post.excerpt}
                </p>
                {/* <div>
                  <ChevronRightIcon className="w-4 min-[512px]:w-4 "  />
                </div> */}
              </Frente>
              
            </Link>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </div>
  );
}
