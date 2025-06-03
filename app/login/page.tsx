import { Metadata } from 'next';
import { auth } from 'auth';

import { SessionProvider } from 'next-auth/react';
import LoginForm from '@/app/ui/login-form';
import { redirect } from 'next/navigation';
import Header from '@/app/ui/header';

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
      <SessionProvider>
        <Header />
      </SessionProvider> 
      <main className="mx-auto flex h-full min-h-screen justify-center pt-14">
        <div className="relative mx-auto mt-8 flex w-full max-w-[460px] flex-col space-y-2.5 p-4">
          <LoginForm />
        </div>
      </main>
    </>
  );
}

