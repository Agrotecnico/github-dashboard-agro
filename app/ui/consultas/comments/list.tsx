/* import type { Comment } from "../../interfaces";

import { useAuth0 } from "@auth0/auth0-react"; */
import distanceToNow from "@/app/lib/dateRelative";
type CommentListProps = {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
};

export default function CommentList() {
  /*   const { user } = useAuth0(); */

  const isAuthor = true;
  const isAdmin = true
  return (
    <div className="space-y-6 mt-6 rounded-lg p-4 bg-[#0000000a]  [box-shadow:inset_0_1px_0px_#4d4d4d52,inset_0_-1px_0px_#ffffff] ">

            <div /* key={comment.created_at} */ className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src=/* {comment.user.picture} */"/customers/raul-paredes.png"
                  alt=/* {comment.user.name} */"Raul paredes"
                  width={40}
                  height={40}
                 className="rounded-full"
                />
              </div> 

              <div className="flex-grow">
                <div className="flex flex-col">
                  <b>{/* {comment.user.name} */}Raúl Paredes </b>
                  <time className="text-gray-400 text-[14px] ">
                    {distanceToNow(/* comment.created_at */"2024-3-20")}
                  </time>
                </div>

                <div className="my-4">
                   La compra o venta de un vehículo es una situación de riesgo, siempre es conveniente que concurra a un Mandatario Matriculado para ser asesorado correctamente.
                </div>
                {(isAdmin || isAuthor) && (
                    <div className="flex justify-end">
                    <button
                      className="text-[14px] rounded text-[#374151bb] hover:text-red-500 duration-200 "
                      /* onClick={() => onDelete(comment)} */
                      aria-label="Close"
                    >
                      Eliminar
                    </button>
                    </div>
                  )}
              </div>
            </div>
          
      
    </div>
  );
}
