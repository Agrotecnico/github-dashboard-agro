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
}: CommentFormProps) {

  const pathname = usePathname();
  /* const searchParams = useSearchParams(); */
  /* const { isAuthenticated, logout, loginWithPopup } = useAuth0(); */
  const textareaName = useRef(null);

  /* useEffect(() => {
    textareaName.current.focus();
  }, []); */

  return (
    <form /* onSubmit={onSubmit} */>

      <div className="ml-4 mb-1 text-[#999] italic">{session ? session.user?.name : "" }</div>
      <textarea
        className={clsx(
          "italic border border-[#d3d3d3] flex w-full max-h-40 p-3 rounded resize-y bg-[#ffffff1a] text-gray-900 placeholder-gray-400 focus:border-[#fff0] focus:shadow-none focus-visible:outline-none focus-visible:bg-[#ffffffe5] focus-visible:border-[#c1c1c1] [box-shadow:inset_0_-1px_2px_#4d4d4d59,inset_0_1px_4px_#ffffff] ",
          {
            "border border-[#e5e5e6] bg-[#ffffff] ": session,
          }
        )}
        rows={3}
        /* ref={textareaName} */
        placeholder={
          session ? "tu comentario..." : "Para agregar un comentario logeate con:"
        }
        /* onChange={(e) => setText(e.target.value)}
        value={text} */
        disabled={!session}
      />
      {session ? (
        <div className="flex justify-end gap-2 items-center mt-2">
          <Button 
            variant={"outline"}
            className="bg-[#fff] border border-[#d3d3d3] hover:bg-[#fff8] "
            >
            Enviar
          </Button>
          <Button
            variant={"ghost"}
            className="bg-[#fff0] border border-[#d3d3d3] hover:bg-white opacity-80 hover:opacity-100 "
            onClick={async () => {
              await signOut();
            }}
          >
            Salir
          </Button>
        </div>
      ) : (
        <div className="flex justify-start gap-4 items-center mt-2">
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

          <Button
            variant={"ghost"}
            size={"sm"}
            type="button"
            className="hover:bg-[#fff] opacity-80 hover:opacity-100  "
            onClick={async () => {
              await signIn("google", { callbackUrl: `${pathname}#consulta` });
            }}
          >
            <img src="/facebook2.png" alt="my desk" width={16} height={16} />
          </Button>

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
