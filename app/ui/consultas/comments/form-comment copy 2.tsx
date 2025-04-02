"use client"

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import { User } from "@/app/lib/definitions";
import { ButtonA } from "@/app/ui/button";
import { createComment } from '@/app/lib/actions';
import { Fondo } from "@/app/ui/marcos";
import { Post } from '@/app/lib/definitions'
import  AlertDialog  from "@/app/ui/uiRadix/alert-dialog";



export default function FormComment({
   user, 
   post
  }: { 
    user: User | undefined;
    post: Post
  }) {

  const [comment, setComment] = useState('');
  // const [open, setOpen] = useState(false);

  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createComment, initialState);

  return (
    <>
    <form action={dispatch}>{/* hover:[box-shadow:_0px_0px_0px_1px_#1d021509] */}
      {/* comment */}
      <textarea
        id="comment"
        name="comment"
        className={`w-full rounded-md p-3 border border-[#e9dae900] bg-[#30032211] [box-shadow:_inset_0_1px_#0000002e,inset_0_-1px_#ffffff] text-[#000000]  duration-100 ease-in  hover:bg-[#1d021509] focus:bg-[#ffffffdd] focus:border-[rgba(195,123,195,0)] focus:[box-shadow:_0px_0px_0px_1px_#c158c1] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-base  placeholder:text-[#858585]  disabled:bg-[#30032211] disabled:[box-shadow:_inset_0_1px_#0000002e,inset_0_-1px_#ffffff] `}
        rows={2}
        placeholder={
          user
            ? `¿Qué opinas?`
            : "Iniciá sesión para dejar un comentario"
        }
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        disabled={!user}
      />

      {/* email */}
      <input
        type="hidden"
        id="email_id"
        name="email_id"
        value= {user?.email}
        readOnly
      />

      {/* email */}
      <input
        type="hidden"
        id="post_slug"
        name="post_slug"
        value= {post.slug}
        readOnly
      />

      {/* Massages error consult */}
      <div
        className="my-1.5 flex items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {estado?.message && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{estado?.message}</p>
          </>
        )}
      </div>

      <div className="flex items-center ">
        {user ? (
          <div className="flex items-center space-x-6">
            <ButtonA 
              // className="py-2 px-4 rounded bg-[#c76eb5] text-white disabled:opacity-40 hover:bg-blue-700"
              className="py-2 px-4">
              Enviar
            </ButtonA>
            {/* <button
              className="text-gray-500"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button> */}
          </div>
        ) : (
          // <ButtonA
          //   type="button"
          //   className="py-2 px-4"
          //   // onClick={() => loginWithPopup()}
          // >
          //   Iniciar
          // </ButtonA>
          <AlertDialog />
        )}
        
      </div>
    </form>
    </>
  );
}
