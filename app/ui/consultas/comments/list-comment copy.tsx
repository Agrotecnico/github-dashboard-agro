// import type { Comment } from "../../interfaces";
// import distanceToNow from "../../lib/dateRelative";
// import { useAuth0 } from "@auth0/auth0-react";
import { auth } from 'auth';
import Image from 'next/image';

import { fetchUserById } from '@/app/lib/data';
import { fetchCommentById } from '@/app/lib/data';
import { fetchFilteredComments } from '@/app/lib/data';
import { getPostBySlug } from '@/app/lib/getPost';
import { Post } from "@/app/lib/definitions";
import { Comment } from "@/app/lib/definitions";
import  distanceToNow  from "@/app/lib/dateRelative";
import { Fondo, Frente } from "@/app/ui/marcos";


// type CommentListProps = {
//   comments?: Comment[];
//   onDelete: (comment: Comment) => Promise<void>;
// };

export default async function ListComment({ 
  post
  }: {
  post: Post
  }) {
  // const { user } = useAuth0();
  const session = await auth();
  const user = await fetchUserById(session?.user?.email)
  // const post = getPostBySlug(params.slug);
  const id= post.slug!
  
  // const commentsx= await fetchCommentById(id)
  const comments= await fetchFilteredComments(id)


  // console.log("id:", id)
  // console.log("comment:", comments)

  return (
    <div className="space-y-5 my-10">
      {comments &&
        comments.map((comment, index) => {
          // const isAuthor = user && user.sub === comment.user.sub;
          const isAuthor = user && user.email === comment.email_id;
          const isAdmin =user && user.email === process.env.ADMIN;

          return (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-2">{/* bg-[#0000000d]  [box-shadow:inset_0_1px_0px_#00000047,inset_0_-1px_0px_#ffffffe0]*/}
                  {comment.image ? (
                    <img
                      src={comment.image}
                      alt={comment.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    ) : /* !user?.image ? (
                      <Image
                        decoding="async"
                        src={`${user?.image}`}
                        className="object-cover h-20 w-20 rounded-full bg-cover [box-shadow:0_1px_#ffffff,_0_-1px_#0000002e] "
                        alt="header-image-profile"
                        width={80}
                        height={80}
                        priority={true}
                      />
                    ) :  */ (
                    <span className="flex h-10 w-10 items-center justify-center font-semibold text-[#50073a99] rounded-full bg-[#1d021511] text-2xl ">
                      {comment.email_id ?.substring(0, 1).toUpperCase()}
                    </span>
                  )}




                </div>
              <Fondo key={comment.id} className="flex space-x-4 w-full p-3 pb-2 !bg-[#30032211] rounded-full ">
                

                <div className="flex-grow">
                  <div className="flex items-center">
                    <div className="flex flex-wrap gap-1">
                      <b>{comment.name}</b>
                    
                      <time className="text-[#1d021566]">
                        {/* {distanceToNow(comment.created_at)} */}
                        {distanceToNow(new Date(`${comment.created_at}`))}
                      </time>
                    </div>
                    {(isAdmin || isAuthor) && (
                      <button
                        className="px-4 text-[#1d021577] text-[15px] duration-150 rounded-[4px] hover:text-red-500 hover:font-semibold "
                        // onClick={() => onDelete(comment)}
                        aria-label="Close"
                      >
                        x
                      </button>
                    )}
                  </div>

                  <div className="text-[#1d0215cc] leading-relaxed">
                    {comment.comment}
                  </div>
                </div>
              </Fondo>
            </div>
          );
        })}
    </div>
  );
}
