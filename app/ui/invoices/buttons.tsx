import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { deleteInvoice } from '@/app/lib/actions';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-[#e580d0] px-4 text-sm font-medium text-white transition-colors hover:bg-[#cf72bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear factura</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md w-[38px] border p-2 opacity-70 hover:opacity-100  hover:bg-white [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff45,1px_-1px_#0000002e,-1px_1px_#ffffff45] "
    >
      <PencilIcon className="w-5 text-[#1f2a5f]" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id)

  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 opacity-70 hover:opacity-100 hover:bg-white [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff45,1px_-1px_#0000002e,-1px_1px_#ffffff45]">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-[#b53f51] " />
      </button>
    </form>
  );
}