import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { deleteConsulta } from '@/app/lib/actions';

/* export function CreateConsulta() {
  return (
    <Link
      href="/dashboard/customers/createCustomer"
      className="flex h-10 items-center rounded-lg bg-[#e580d0] px-4 text-sm font-medium text-white transition-colors hover:bg-[#cf72bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear cliente</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
} */

export function UpdateConsulta({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/tusConsultas/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 [box-shadow:inset_-1px_-1px_#00000047,inset_1px_1px_#ffffffd4,_-1px_-1px_#00000047,_1px_1px_#ffffffd4] "
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteConsulta({ id }: { id: string }) {
  const deleteConsultaWithId = deleteConsulta.bind(null, id)

  return (
    <form action={deleteConsultaWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100 [box-shadow:inset_-1px_-1px_#00000047,inset_1px_1px_#ffffffd4,_-1px_-1px_#00000047,_1px_1px_#ffffffd4]">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}