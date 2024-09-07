import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { deleteCustomer } from '@/app/lib/actions';


export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/createCustomer"
      className="flex h-10 items-center rounded-lg bg-[#e580d0] px-4 text-sm font-medium text-white transition-colors hover:bg-[#cf72bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear cliente</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customers/${id}/edit`}
      className="rounded-md w-[38px] border p-2 opacity-70 hover:opacity-100  hover:bg-white [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff45,1px_-1px_#0000002e,-1px_1px_#ffffff45] "
    >
      <PencilIcon className="w-5 text-[#1f2a5f]" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id)

  return (
    <form action={deleteCustomerWithId}>
      <button className="rounded-md border p-2 opacity-70 hover:opacity-100 hover:bg-white [box-shadow:inset_1px_-1px_#0000002e,inset_-1px_1px_#ffffff45,1px_-1px_#0000002e,-1px_1px_#ffffff45]">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-[#b53f51] " />
      </button>
    </form>
  );
}