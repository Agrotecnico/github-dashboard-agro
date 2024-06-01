
import Image from 'next/image';
import { DeleteConsulta } from '@/app/ui/consultas/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import distanceToNow from '@/app/lib/dateRelative';
import { fetchConsultas } from '@/app/lib/data';
import type { Session } from "next-auth"


export default async function ConsultasTable({ session }: { session: Session | null }) {

  

  const consultas = await fetchConsultas();

 /* console.log("consultas", consultas) */

  return (
    <div className="mt-6 flow-root">
        <div className="overflow-x-auto rounded-xl [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-white p-4 md:pt-0">
              <div className="">
                Tabla
                {consultas?.map((consulta) => (
                    <div key={consulta.id}>
                      <p>{consulta.id}</p>
                      <p>{consulta.email}</p>
                    </div>
                  )      
                )}
                <pre className="py-6 px-4 whitespace-pre-wrap break-all">
                  {JSON.stringify(session, null, 2)}
                </pre>
                {/* {consultas?.map((consulta) => (
                  <div
                    key={consulta.id}
                    className="mb-2 w-full rounded-lg bg-[#f7f7f7] p-4 md:bg-white"
                  >
                    <div>
                      <p>{formatDateToLocal(consulta.date)}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {consulta.consulta}
                    </p>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {consulta.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 text-sm">

                      <div className="flex">
                        <DeleteConsulta id={consulta.id} />
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
