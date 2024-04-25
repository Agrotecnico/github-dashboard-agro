import LogoCNP from '@/app/ui/logoCNP'
import RegisterForm from '@/app/ui/register-form'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'


import matter from "gray-matter";
import type { Post } from "@/app/lib/definitions";
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
const slugs = getPostSlugs();
const slug= slugs[0];

export function getPostBySlug(/* slug: string */ ) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  /* const post = matter(fileContents); */

  return fullPath
}



export default function RegisterPage() {

const fullPath = getPostBySlug();
/* const file = matter.read(fullPath); */
const file = matter.read(fullPath);
/* console.log("Content:", matter("---\nautor: Julio\ntitulo: procedimiento\n---polo") ) */
console.log("Content:", matter.stringify(
  'foo bar\n\nbaz', 
  {title: 'Home'}) )
/*const str = '---\nfoo: bar\nautor: Julio\n---\nThis is an excerpt...\n---\nThis is content';
 const file = matter(str, { excerpt: true }); 
console.log("file:", file)
const excerpt= file.excerpt?.split("\n")[0]
console.log("excerpt:", excerpt)

const content= file.content?.split("\n")[2]*/





  return (
    <main className="h-full min-h-screen max-w-[1280px] mx-auto flex pt-14 justify-center bg-center bg-no-repeat bg-cover bg-[url(../../public/ofi.jpg)]">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <Link href="/" >
          <div className="flex h-20 w-full items-end rounded-lg bg-[#c969b5] p-3 md:h-32">
            <div className="text-white">
              <LogoCNP className="md:w-[200px]" color="#ddd" colorC="white" colorN="#ddd" colorP="#ccc"  />
            </div>
          </div>
        </Link>
        <RegisterForm />
        
        {/* <Link href={"/login"} className="flex items-center justify-center "> <i className="mr-[10px] text-[#0009]">Ya tienes una cuenta?</i><div className="flex items-center opacity-80 hover:opacity-100">Ingresá <ArrowRightIcon className="ml-2 h-4 w-4" /></div></Link> */}
        <Link href={"/login"} className="pt-2 opacity-80 flex items-center justify-center hover:opacity-100 "> <i className="mr-[10px] text-[#333]">Ya tienes una cuenta?</i> Ingresá <ArrowRightIcon className="ml-2 h-4 w-4" /></Link>
        <Link href={"/"} className="opacity-80 absolute bottom-[-24px] !mb-[56px] flex items-center justify-start hover:opacity-100 "><ArrowLeftIcon className="mr-2 h-5 w-5" /> Regresar </Link>
      </div>
    </main>
  );
}