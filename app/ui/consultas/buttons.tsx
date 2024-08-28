import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteConsulta } from '@/app/lib/actions';

export function UpdateConsulta({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/tusConsultas/${id}/edit`}
      className="rounded-md border p-2 [box-shadow:inset_-1px_-1px_#00000047,inset_1px_1px_#ffffffd4,_-1px_-1px_#00000047,_1px_1px_#ffffffd4] hover:bg-gray-100 "
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteConsulta({ id }: { id: string }) {
  const deleteConsultaWithId = deleteConsulta.bind(null, id);

  return (
    <form action={deleteConsultaWithId}>
      <button className="rounded-md border p-2 [box-shadow:inset_-1px_-1px_#00000047,inset_1px_1px_#ffffffd4,_-1px_-1px_#00000047,_1px_1px_#ffffffd4] hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
