"use client";

/* import { useAuth0 } from "@auth0/auth0-react"; */
import type { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
/* import LogoGoogle from "@/app/ui/logosIconos/logo-google"; */
import { Button } from "@/app/ui/uiRadix/button";
import clsx from "clsx";
import { useRef, useEffect } from "react";
import Link from "next/link"
import LogoCnp from '@/app/ui/logosIconos/logo-cnp'

type CommentFormProps = {
  /* text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>; */
  session: Session | null;
};

export default function CommentFormConsulta({
  /* text,
  setText,
  onSubmit, */
  session,
}: {session: Session | null;} /* CommentFormProps */) {

  const pathname = usePathname();
  /* const searchParams = useSearchParams(); */
  /* const { isAuthenticated, logout, loginWithPopup } = useAuth0(); */
  const textareaName = useRef(null);

  /* useEffect(() => {
    textareaName.current.focus();
  }, []); */

  return (
    <form /* onSubmit={onSubmit} */className="mt-16 max-w-[42rem] mx-auto ">

   {/*    <div className="flex-shrink-0">
        <img
          src={`${session?.user?.image}`}
          alt= {`${session?.user?.name}`}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>  */}
      <div className="mb-1 text-[14px] font-semibold ">{session ? session.user?.name : "" }</div>

      <textarea
        className={clsx(
          "italic flex w-full border-[1px] border-[#fff0] max-h-40 p-3 rounded resize-y bg-[#ffffff1a] text-gray-900 placeholder-gray-400 focus:shadow-none focus-visible:outline-none focus:border focus:border-[#fff0] [box-shadow:inset_0_-1px_0_#4d4d4d59,inset_0_1px_0_#ffffff] ",
          {
            "bg-[rgba(0,0,0,0.04)] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff] ": session,
          }
        )}
        rows= {session ? 4 :2}
        /* ref={textareaName} */
        placeholder={
          session ? "tu comentario..." : "Para agregar un comentario logeate con:"
        }
        /* onChange={(e) => setText(e.target.value)}
        value={text} */
        disabled={!session}
      />
      {session ? (
        <div className="flex justify-start gap-2 items-center my-3">
          <Button 
            variant={"outline"}
            className="bg-[#fff] border border-[#d3d3d3] hover:bg-[#fff8] "
            >
            Enviar
          </Button>
          <Button
            variant={"ghost"}
            className=" border border-[#d3d3d3] hover:bg-white"
            onClick={async () => {
              await signOut();
            }}
          >
            Salir
          </Button>
        </div>
      ) : (
        <div className="flex justify-start gap-4 items-center my-3">
          <Button
            variant={"ghost"}
            size={"sm"}
            type="button"
            className="hover:bg-white opacity-80 hover:opacity-100 "
            onClick={async () => {
              await signIn("google", {
                callbackUrl: `${pathname}#consulta`,
              });
            }}
          >
            <img src="/google-icon.png" alt="my desk" width={26} height={26} />
          </Button>

          {/* <Button
            variant={"ghost"}
            size={"sm"}
            type="button"
            className="hover:bg-[#fff] opacity-80 hover:opacity-100  "
            onClick={async () => {
              await signIn("google", { callbackUrl: `${pathname}#consulta` });
            }}
          >
            <img src="/facebook2.png" alt="my desk" width={16} height={16} />
          </Button> */}

          <Link href="/login">
            <Button
              variant={"ghost"}
              size={"sm"}
              type="button"
              className="hover:bg-[#fff] opacity-80 hover:opacity-100  "
            >
              <img src="/logoCnp.png" alt="my desk" width={56} height={28} />
            </Button>
          </Link>
        </div>
      )}
    </form>
  );
}
