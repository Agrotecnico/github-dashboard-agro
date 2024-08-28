import distanceToNow from '@/app/lib/dateRelative';
import type { Session } from 'next-auth';

export default function CommentList({ session }: { session: Session | null }) {
  const isAuthor = true;
  const isAdmin = true;
  return (
    <div className="mt-6 space-y-6 rounded-lg bg-[#0000000d] p-3  [box-shadow:inset_0_1px_0px_#00000047,inset_0_-1px_0px_#ffffffe0] ">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <img
            src="/customers/marcelo-morel.png"
            alt="Raul paredes"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col">
            <b>Raúl Paredes </b>
            <time className="text-[14px] text-gray-400 ">
              {distanceToNow('2024-3-20')}
            </time>
          </div>

          <div className="my-2">
            La compra o venta de un vehículo es una situación de riesgo, siempre
            es conveniente que concurra a un Mandatario Matriculado para ser
            asesorado correctamente.
          </div>

          {(isAdmin || isAuthor) && (
            <div className="flex justify-end">
              <button
                className="rounded text-[14px] text-[#374151bb] duration-200 hover:text-red-500 "
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
