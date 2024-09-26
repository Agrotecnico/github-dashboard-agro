import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/app/lib/getPost';
import markdownToHtml from '@/app/lib/markdownToHtml';
import distanceToNow from '@/app/lib/dateRelative';
import markdownStyles from '@/app/ui/consultas/markdown-styles.module.css';
import CommentFormConsulta from '@/app/ui/consultas/comments/form-comment';
import { auth } from 'auth';
import CommentList from '@/app/ui/consultas/comments/list';
import Image from 'next/image'
import Link from 'next/link';
import LogoCNP from '@/app/ui/logosIconos/logoCNP';
import { SessionProvider } from 'next-auth/react';
import LoginForm from '@/app/ui/login-form';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { redirect, useRouter } from 'next/navigation';
import HeaderConsultas from '@/app/ui/header-consultas';

export const metadata: Metadata = {
  title: 'Consultas',
  description:
    'En esta es una página enumeramos y detallamos las consultas más frecuentes ',
};


export default async function LoginPage() {

  const session = await auth();

  if (session )
    return redirect('/dashboard');

  return (
    <>
      <HeaderConsultas />
      <main className="mx-auto flex h-full min-h-screen max-w-[1280px] justify-center bg-[#30032209] bg-cover bg-center bg-no-repeat pt-14">
        <div className="relative mx-auto mt-8 flex w-full max-w-[460px] flex-col space-y-2.5 p-4">
          {/* <Link href="/">
            <div className="flex h-20 w-full items-end rounded-lg bg-[#c969b5b0] p-3 backdrop-blur-lg [box-shadow:_0_2px_1px_-1px_#ffffff33,0_1px_1px_0_#ffffff24,0_1px_3px_0_#ffffff1f,0_0_6px_0_#0000003d_inset] md:h-32 ">
              <div className="text-white">
                <LogoCNP
                  className="md:w-[200px]"
                  color="#ddd"
                  colorC="white"
                  colorN="#ddd"
                  colorP="#ccc"
                  filter="filterCNP2"
                  sombraX="0"
                />
              </div>
            </div>
          </Link> */}
          <SessionProvider session={session}>
            <LoginForm />
          </SessionProvider>
          {/* <Link
            href={'/'}
            className="fixed bottom-[-24px] left-[calc((100vw_/_2)_-_47px);] !mb-[56px] flex items-center justify-center opacity-80 hover:opacity-100 "
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5 " /> Regresar
          </Link> */}
        </div>
      </main>
    </>
  );
}

