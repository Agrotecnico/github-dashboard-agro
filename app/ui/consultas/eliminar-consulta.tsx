
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteConsulta } from '@/app/lib/actions';
import * as AlertDialog  from "@radix-ui/react-alert-dialog";
import { ButtonB, ButtonA } from "@/app/ui/button";


export default function EliminarConsulta({ id }: { id: string }) {

  const deleteConsultaWithId = deleteConsulta.bind(null, id);

  return (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <ButtonB type='button' className="border-none inline-flex h-[35px] !duration-0 items-center justify-center !rounded-md !bg-[#ffffff99] opacity-70 py-2 !px-2 font-medium leading-none text-violet11 outline-none outline-offset-1 hover:!bg-[#ffffffdd] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-[22px] text-[#b53f51]" />
            </ButtonB>
        </AlertDialog.Trigger>
        
        <AlertDialog.Portal>
            
            <AlertDialog.Overlay className="fixed inset-0 bg-[#00000089] data-[state=open]:animate-overlayShow" />
            
            <AlertDialog.Content className="fixed left-1/2 bg-white top-1/2 max-h-[85vh] w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-6 shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
                <AlertDialog.Title className="m-0 text-base font-medium text-mauve12">
                    Estas absolutamente seguro?
                </AlertDialog.Title>
                <AlertDialog.Description className="mb-4 mt-1 text-[14px] leading-normal text-mauve11">
                  Eliminará permanentemente la consulta.
                </AlertDialog.Description>
                <div className="flex justify-end gap-2 text-sm">
                  <AlertDialog.Cancel asChild>
                    <ButtonB 
                        type='button'
                        className="inline-flex h-9 items-center justify-center !rounded bg-slate-100 px-4 font-medium leading-none text-mauve11 outline-none outline-offset-1 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">
                        Cancelar
                    </ButtonB>
                  </AlertDialog.Cancel>
                  <form action={deleteConsultaWithId}>
                    <button 
                      type='submit'
                      className="inline-flex h-9 duration-150 items-center justify-center rounded bg-[#db0000] px-4 font-medium leading-none text-[#ffffffdd] outline-none outline-offset-1 hover:bg-[#b90000] hover:text-[#ffffff] focus-visible:outline-2 focus-visible:outline-red-700 select-none">
                        Confirmar
                    </button>
                  </form>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}