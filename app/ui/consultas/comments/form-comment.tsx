'use client';

import type { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from '@/app/ui/uiRadix/button';
import clsx from 'clsx';
import { useRef } from 'react';
import LogoGoogle from '@/app/ui/logosIconos/logo-google';
import Image from 'next/image'

export default function CommentFormConsulta({ session }: { session: Session | null }) {
  const pathname = usePathname();
  const textareaName = useRef(null);

  return (
    <form /* onSubmit={onSubmit} */ className="mx-auto max-w-[42rem] ">
      <div id="consulta" className="mx-6 pt-12">
        <p className="">
          <i className="text-[#374151] ">
            Podes contribuir con tu opinión mejorando este artículo.
          </i>
        </p>
      </div>

      <div className=" mx-6 mb-8 mt-6 rounded-lg bg-[#0000000d] p-3 pb-2  [box-shadow:inset_0_1px_0px_#00000047,inset_0_-1px_0px_#ffffffe0] ">
        <div className="flex w-full flex-col items-center gap-2 space-x-4">
          {session ? (
            <div className="flex w-full items-center gap-2">
              <img
                src={session?.user?.image}
                alt={session?.user?.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="">
                <b>{session ? session.user?.name : null} </b>
              </div>
            </div>
          ) : null}

          <div className="!ml-0 w-full flex-grow">
            {session ? (
              <textarea
                className={clsx(
                  'mb-2 flex max-h-40 w-full resize-y rounded border-[1px] border-[#fff0] bg-[#ffffff57] p-2 italic text-gray-900 placeholder-gray-500 focus:border focus:border-[#fff0] focus:shadow-none focus-visible:outline-none  ',
                  {
                    /* "bg-[#ffffff57]  ": session, */
                    /* [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] */
                  },
                )}
                rows={4}
                placeholder={'tu comentario...'}
              />
            ) : (
              <>
                <p className="mb-6 flex">
                  Para agregar un comentario logeate con:
                </p>
                <div className="flex items-center gap-4">
                  <Button
                    variant={'ghost'}
                    size={'sm'}
                    type="button"
                    className="!px-0 opacity-80 hover:bg-[#fff] hover:opacity-100 "
                    onClick={async () => {
                      await signIn('google', {
                        callbackUrl: `${pathname}#consulta`,
                      });
                    }}
                  >
                    <LogoGoogle
                      filter="filterGoogle1"
                      sombraX="2"
                      sombraY="2"
                      size="94"
                    />
                  </Button>

                  <Button
                    variant={'ghost'}
                    size={'sm'}
                    type="button"
                    className="opacity-80 hover:bg-[#fff] hover:opacity-100  "
                    /* onClick={ () => {
                        signIn( "", { callbackUrl: `${pathname}` } );
                    }} */
                  >
                    <Image
                      src="/logoCnp.png"
                      alt="my desk"
                      width={56}
                      height={28}
                    />
                  </Button>

                  {/* <Button
                    variant={'ghost'}
                    size={'sm'}
                    type="button"
                    className="mr-4 opacity-80 hover:bg-[#fff] hover:opacity-100 "
                     onClick={async () => {
                      await signIn("google", { callbackUrl: `${pathname}#consulta` });
                    }} 
                  >
                    <img
                      src="/infobae.jpg"
                      alt="my desk"
                      width={80}
                      height={26}
                    />
                  </Button> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
