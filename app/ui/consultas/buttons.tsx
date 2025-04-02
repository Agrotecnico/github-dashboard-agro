import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteConsulta } from '@/app/lib/actions';
import AlertDialogDelete from "@/app/ui/uiRadix/alert-dialog-delete";
import * as AlertDialog  from "@radix-ui/react-alert-dialog";
import { ButtonB, ButtonA } from "@/app/ui/button";


export function UpdateConsulta({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/consultas/${id}/edit`}
      className="rounded-md w-[38px] p-2 opacity-80 bg-[#ffffff55] hover:opacity-100  hover:bg-[#ffffff77] "
    >
      <PencilIcon className="w-5 text-[#2c3c8a]" />
    </Link>
  );
}

export function DeleteConsulta({ id }: { id: string }) {
  const deleteConsultaWithId = deleteConsulta.bind(null, id);

  return (
    <form action={deleteConsultaWithId}>
      <button className="rounded-md p-2 opacity-80 bg-[#ffffff55] hover:opacity-100 hover:bg-[#ffffff77] ">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-[#b53f51]" />
      </button>
    </form>
  );
}

// export function DeleteConsulta({ id }: { id: string }) {
//   const deleteConsultaWithId = deleteConsulta.bind(null, id);

//   return (
//     <>
//     <form action={deleteConsultaWithId}>
//       <AlertDialog.Root>
//           <AlertDialog.Trigger asChild>
//               <ButtonB type='button' className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
//                   Delete account
//               </ButtonB>
//           </AlertDialog.Trigger>
          
//           <AlertDialog.Portal>
              
//               <AlertDialog.Overlay className="fixed inset-0 bg-[#00000089] data-[state=open]:animate-overlayShow" />
              
//               <AlertDialog.Content className="fixed left-1/2 bg-white top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
//                   <AlertDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
//                       Estas absolutamente segura?
//                   </AlertDialog.Title>
//                   <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
//                     Esta acción no se puede deshacer. Eliminará permanentemente la consulta.
//                   </AlertDialog.Description>
//                   <div className="flex justify-end gap-[25px]">
//                     <AlertDialog.Cancel asChild>
//                       <ButtonB 
//                           type='button'
//                           className="inline-flex h-[35px] items-center justify-center rounded bg-slate-100 px-[15px] font-medium leading-none text-mauve11 outline-none outline-offset-1 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">
//                           Cancelar
//                       </ButtonB>
//                     </AlertDialog.Cancel>

//                     <AlertDialog.Action asChild>
//                       {/* <ButtonB 
//                           // type='submit'
//                           className="rounded-md p-2 opacity-80 bg-[#ffffff55] hover:opacity-100 hover:bg-[#ffffff77] ">
//                           <span className="sr-only">Delete</span>
//                           <TrashIcon className="w-5 text-[#b53f51]" />
//                       </ButtonB> */}
//                       <ButtonB 
//                         type='submit'
//                         className="inline-flex h-[35px] items-center justify-center rounded bg-red-100 px-[15px] font-medium leading-none text-red-500 outline-none outline-offset-1 hover:bg-red-200 focus-visible:outline-2 focus-visible:outline-red-700 select-none">
//                         Si, eliminar la consulta.
//                       </ButtonB>
//                     </AlertDialog.Action>
                      
//                   </div>
//               </AlertDialog.Content>
              
//           </AlertDialog.Portal>
          
//       </AlertDialog.Root>
//     </form>
//     </>
//   );
// }


