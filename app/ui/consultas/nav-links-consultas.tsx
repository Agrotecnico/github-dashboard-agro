import Link from 'next/link';
import clsx from 'clsx';
/* import Container from '@/components/consultas/container'; */
import distanceToNow from '@/app/lib/dateRelative';
import { getAllPosts } from '@/app/lib/getPost';

export default function NavLinksConsultas() {
  /* const allPosts = getStaticPropsxxx(); */
  const allPosts = getAllPosts();


  return (
    <div>
      <div className="mb-2 w-full pl-2 pb-2 text-[14px] text-[#fffc] text-left font-normal leading-4 [text-shadow:_1px_1px_#222] min-[500px]:mb-3 min-[500px]:pb-3 ">
        OTRAS CONSULTAS:
      </div>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-5">
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className={clsx(
                '!ml-0 flex grow text-[#fffc] flex-col justify-start pl-2 text-start text-[14px]  font-medium  leading-[18px]  duration-300 border-b border-b-[#ffffff19] hover:border-b-[#999]  hover:text-white md:flex-none ',
                /* {
                  ' bg-[#fff0] text-[#112] border-[#e580d1] duration-200' : pathname === post.slug,
                }, */
              )}/* text-[#374151] */
            >
              {/* <div className="text-base leading-4 font-bold">{post.title}</div> */}

              <p className=" text-sm [text-shadow:1px_1px_#222] font-normal">{post.excerpt}</p>
              <div className="[text-shadow:1px_1px_#222] text-sm text-[#b2b9c3]  ">{/* text-gray-400 */}
                <time>{distanceToNow(new Date(post.date))}</time>
              </div>
            </Link>
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
