
import Link from "next/link";
import Container from "@/app/ui/consultas/container";
import distanceToNow from "@/app/lib/dateRelative";
import { getAllPosts } from "@/app/lib/getPost";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts',
};

export default function NotePage() {
  const allPosts =  getStaticPropsxxx();
  console.log("All: ", allPosts)
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10">
            <Link
              as={`/consultas/${post.slug}`}
              href="/consultas/[slug]"
              className="text-lg leading-6 font-bold"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
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
