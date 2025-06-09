
import { auth } from 'auth';

import { fetchUserById } from '@/app/lib/data';
import { fetchFilteredComments } from '@/app/lib/data';
import { Post } from "@/app/lib/definitions";
import  distanceToNow  from "@/app/lib/dateRelative";
import { Fondo } from "@/app/ui/marcos";
import DeleteComment from './delete-comment';


export default async function ListComment({ 
  post
  }: {
  post: Post
  }) {
  const session = await auth();
  const user = await fetchUserById(session?.user?.email)
  const id= post.slug!
  
  const comments= await fetchFilteredComments(id)


  return (
    <div className="space-y-5 mt-10">
      {comments &&
        comments.map((comment, index) => {
          // const isAuthor = user && user.email === comment.email_id;
          const isAdmin =user && user.email === process.env.ADMIN;
          // const isMember =user && user.role === "member";

          return (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-2">
                {comment.image ? (
                  <img
                    src={comment.image}
                    alt={comment.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  ) : (
                  <span className="flex h-10 w-10 items-center justify-center font-semibold text-[#50073a99] rounded-full bg-[#1d021511] text-2xl ">
                    {comment.email_id ?.substring(0, 1).toUpperCase()}
                  </span>
                )}
              </div>
              <Fondo key={comment.id} className="flex space-x-4 w-full p-3 pb-2 !bg-[#30032209] !rounded-[6px] ">
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap">
                      <p className="font-semibold mr-2">{comment.name}</p>
                    
                      <time className="text-[#1d021566]">
                        {distanceToNow(new Date(`${comment.created_at}`))}
                      </time>
                    </div>
                    {isAdmin /*|| isAuthor  || isMember */ && 
                      <DeleteComment id={comment.id} />
                    }
                  </div>
                  <div className="text-[#1d0215cc] mt-1 leading-relaxed">
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
