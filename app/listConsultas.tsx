
/* import { getAllPosts } from "@/app/lib/getPost" */
import Link from "next/link"
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
const slugs = getPostSlugs();

const ListConsultas = () => {
    /* const allPosts =  getStaticPropsxxx(); */
    return (
        <div>
            {slugs.map((slug, idx) => (
                  <Link href={`/consultas/${slug[idx]}`} className="duration-200 hover:text-[#ffffffe9] w-full leading-4 text-left [text-shadow:_1px_1px_#222] font-normal mb-2.5 pb-1.5 min-[500px]:pb-1 border-b-[#fdfdfd17] border-b ">
                    {slug[idx]}
                  </Link>
                ))}
        </div>
    )
}

export default ListConsultas

/* function getStaticPropsxxx() {
    const allPosts = getAllPosts();
    return allPosts
} */