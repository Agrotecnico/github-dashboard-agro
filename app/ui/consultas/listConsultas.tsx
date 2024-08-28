import Link from 'next/link';
import type { Post } from '@/app/lib/definitions';
import { getAllPosts } from '@/app/lib/getPost';

const posts: Post[] = getAllPosts();

const ListConsultas = () => {
  return (
    <div>
      {posts.map((post) => (
        <div>
          <Link
            href={`/consultas/${post.slug}`}
            className="mb-2.5 w-full border-b border-b-[#fdfdfd17] pb-1.5 text-left font-normal leading-4 duration-200 [text-shadow:_1px_1px_#222] hover:text-[#ffffffe9] min-[500px]:pb-1 "
          >
            {post.excerpt}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListConsultas;
