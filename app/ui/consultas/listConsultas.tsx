/* import { getAllPosts } from "@/app/lib/getPost" */
import Link from 'next/link';
import type { Post } from '@/app/lib/definitions';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter'
import getAllPosts  from  "@/app/lib/getPost"



/* const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
} */
const posts: Post[] = getAllPosts();
/* const slugs = posts.map((post) => post.slug);
console.log('slugs:', slugs); */

const ListConsultas = () => {
  /* const allPosts =  getStaticPropsxxx(); */
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

/* function getStaticPropsxxx() {
    const allPosts = getAllPosts();
    return allPosts
} */
