import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import RegisterForm from '@/app/ui/register-form';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

/* import matter from 'gray-matter';
import type { Post } from '@/app/lib/definitions';
import fs from 'fs';
import { join } from 'path'; */

/* const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
const slugs = getPostSlugs();
const slug = slugs[0]; */

/* export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8'); */
  /* const post = matter(fileContents); */
  /* return fullPath; */
/* } */

export default function RegisterPage() {

 /*  const fullPath = getPostBySlug();
  const file = matter.read(fullPath); */

  return (
    <main className="mx-auto flex h-full min-h-screen max-w-[1280px] justify-center bg-[url(../../public/ofi.jpg)] bg-cover bg-center bg-no-repeat pt-14">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <Link href="/">
          <div className="flex h-20 w-full items-end backdrop-blur-lg rounded-lg bg-[#c969b5b0] p-3 md:h-32 [box-shadow:_0_2px_1px_-1px_#ffffff33,0_1px_1px_0_#ffffff24,0_1px_3px_0_#ffffff1f,0_0_6px_0_#0000003d_inset] ">
            <div className="text-white">
              <LogoCNP
                className="md:w-[200px]"
                color="#ddd"
                colorC="white"
                colorN="#ddd"
                colorP="#ccc"
                filter="filterCNP2"
                sombraX= "0"
              />
            </div>
          </div>
        </Link>
        <RegisterForm />
        <Link
          href={'/login'}
          className="flex items-center duration-200 mt-0 mx-auto justify-start py-2 px-4 opacity-80 hover:opacity-100 rounded-xl hover:[box-shadow:0_2px_1px_-1px_#00000033,0-1px_1px_0_#00000024,0_1px_3px_0_#0000001f,0_0_4px_0_#fffe_inset]  "
        >
          {' '}
          <i className="mr-[10px] text-[#333]">
            Ya tienes una cuenta?
          </i> Ingresá <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href={'/'}
          className="fixed left-[calc((100vw_/_2)_-_47px);] bottom-[-24px] !mb-[56px] flex items-center justify-start opacity-80 hover:opacity-100 "
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" /> Regresar{' '}
        </Link>
      </div>
    </main>
  );
}
