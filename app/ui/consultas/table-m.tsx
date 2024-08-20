
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import type { Session } from "next-auth"
import { fetchConsultasPagesM } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchFilteredConsultasM } from '@/app/lib/data';


export default async function ConsultasTableM({
  currentPage,
  session,
}: {
  currentPage: number;
  session: Session
}) {
  const totalPages = await fetchConsultasPagesM(session.user?.email);

  const email= session.user?.email
  const consultas = await fetchFilteredConsultasM(session.user?.email, currentPage);

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl">
        Tus Consultas
      </h1>
      
      <div>
        {consultas.length ? (
          <div className="text-[#374151] ">
            {consultas?.map((consulta) => (
              <div className="mb-8 rounded-md bg-[#0000000d] px-4 pt-6 pb-3 text-[14px] [box-shadow:inset_0_1px_0_#4d4d4d59,inset_0_-1px_0_#ffffff]">
                <div className="mb-6 rounded-lg ">
                  <div className="mb-1 gap-1 flex items-end text-[#523852]">
                    <p className="flex  ">
                      Consulta
                    </p>
                    <p className="text-[13px] opacity-80">
                      realizada el día {formatDateToLocal(consulta.created_at)}:
                    </p>
                  </div>
                  <p className="">{consulta?.consulta}</p>
                </div>
                <div className="-mx-1 rounded-md bg-[#ffffff57] p-3  [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] ">
                  <div>
                    {consulta.respuesta ? (
                      <>
                      <div className="mb-1 flex  text-[#747e91]">
                        <p className="flex text-[#747e91] ">
                          Respuesta:
                        </p>
                      </div>
                      <p>{consulta.respuesta} </p>
                      </>
                    ) : (
                      <>
                      <p className="mb-1 text-[14px] flex text-[#747e91] ">
                        Respuesta:
                      </p>
                      <p className="text-[14px] text-[#747e91]">
                        Hemos recibido tu consulta.<br></br>
                        Te responderemos a la brevedad.
                      </p>
                      </>
                    )}
                  </div>
                </div>
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
