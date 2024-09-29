import { formatDateToLocal } from '@/app/lib/utils';
import type { Session } from 'next-auth';
import { fetchConsultasPagesM } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchFilteredConsultasM } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { Fondo, Frente } from '@/app/ui/marcos';

export default async function ConsultasTableM({
  currentPage,
  session,
}: {
  currentPage: number;
  session: Session | null;
}) {
  const totalPages = await fetchConsultasPagesM(session?.user?.email);

  const consultas = await fetchFilteredConsultasM(
    session?.user?.email,
    currentPage,
  );

  return (
    <div>
      <h1 className={`${lusitana.className} mb-2 text-xl lg:text-2xl`}>
        Tus Consultas
      </h1>

      <div>
        {consultas.length ? (
          <div className="text-[#1d0215] ">
            {consultas?.map((consulta) => (
              <div key={consulta.id } className="mb-8 p-3 text-[13px] leading-[18px] ">
                <div className="mb-6 rounded-lg ">
                  <div className="mb-1 flex items-end gap-1 text-[#1d0215]">
                    <p className="flex  ">Consulta</p>
                    <p className="text-[13px] opacity-80">
                      realizada el día {formatDateToLocal(consulta.created_at)}:
                    </p>
                  </div>
                  <p className="px-3">{consulta?.consulta}</p>
                </div>
                <Frente className="p-3 text-[15px] leading-[22px] ">
                  <div>
                    {consulta.respuesta ? (
                      <>
                        <div key= {consulta.id } className="mb-1 flex  text-[#1d0215]">
                          <p className="flex text-[#1d0215] ">Respuesta:</p>
                        </div>
                        <p className="text-[#1d0215cc] ">{consulta.respuesta} </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-[#1d0215]">
                          Hemos recibido tu consulta.<br></br>
                          Te responderemos a la brevedad.
                        </p>
                      </>
                    )}
                  </div>
                </Frente>
              </div>
            ))}
          </div>
        ) : (
          <div>Todavía no realizaste ninguna consulta</div>
        )}
      </div>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
