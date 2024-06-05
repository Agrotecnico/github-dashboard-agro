'use client';

import { Customer } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { UpdateInvoice } from '@/app/ui/invoices/buttons';
import { updateCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button'


export default function EditCustomerForm( { customer }: { customer: Customer }) {
  const initialState = { message: null, errors: {} };
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  const [state, dispatch] = useFormState(updateCustomerWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-white p-4 md:p-6 [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]">
        {/* Cliente Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Coloque el nombre
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative bg-[#f7f7f7] ">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={customer.name}
                placeholder="Ingrese el nombre"
                className="peer block w-full bg-transparent rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Cliente Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Coloque el email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative bg-[#f7f7f7] ">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={customer.email}
                placeholder="Ingrese el email"
                className="peer block w-full bg-transparent rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Cliente Image_url */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Coloque la url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative bg-[#f7f7f7] ">
              <input
                id="image_url"
                name="image_url"
                type="text"
                defaultValue={customer.image_url}
                placeholder="Ingrese la url"
                className="peer block w-full bg-transparent rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="image_url-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="image_url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image_url &&
              state.errors.image_url.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Cliente</Button>
      </div>
    </form>
  );
}
