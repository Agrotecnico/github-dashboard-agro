import Link from 'next/link';
import clsx from 'clsx';
import distanceToNow from '@/app/lib/dateRelative';
import { getAllPosts } from '@/app/lib/getPost';

export default function NavLinksConsultas() {
  const allPosts = getAllPosts();

  return (
    <div>
      <div className="mb-2 w-full pb-2 pl-2 text-left text-[14px] leading-4 min-[500px]:mb-3 min-[500px]:pb-3 ">
        CONSULTAS FRECUENTES:
      </div>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-2 rounded-md duration-200  ">
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className={clsx(
                '!ml-0 flex grow flex-col justify-start border-b border-b-[#fff2] px-2.5 pt-2.5 text-start text-[14px] leading-[18px] duration-300 hover:text-white focus:text-[#fff] ',
              )}
            >
              <p className="[letter-spacing:_0.5px] ">{post.excerpt}</p>
              <div className="text-[13px] leading-5 text-[#ffffff99] [text-shadow:1px_1px_#00000094]  ">
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
