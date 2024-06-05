import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-300 text-gray-800': status === 'pending',
          'bg-[#0e9f6ed6] text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Debe
          <ClockIcon className="ml-1 w-4 text-gray-600" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Cobrada
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
