import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteConsulta } from '@/app/lib/actions';

export function UpdateConsulta({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/tusConsultas/${id}/edit`}
      className="rounded-md w-[38px] border border-[#30032215] p-2 opacity-70 bg-[#ffffff24] hover:opacity-100  hover:bg-[#ffffff66] "
    >
      <PencilIcon className="w-5 text-[#2c3c8a]" />
    </Link>
  );
}

export function DeleteConsulta({ id }: { id: string }) {
  const deleteConsultaWithId = deleteConsulta.bind(null, id);

  return (
    <form action={deleteConsultaWithId}>
      <button className="rounded-md border border-[#30032215] p-2 opacity-70 bg-[#ffffff24] hover:opacity-100 hover:bg-[#ffffff66] ">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-[#b53f51]" />
      </button>
    </form>
  );
}
