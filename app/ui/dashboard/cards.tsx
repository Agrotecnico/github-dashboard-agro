import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import { fetchCardData } from '@/app/lib/data'
import { Frente, Fondo } from '@/app/ui/marcos'

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Cobradas" value={totalPaidInvoices} type="collected" />
      <Card title="Pendientes" value={totalPendingInvoices} type="pending" />
      <Card title="Total facturas" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Clientes"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="flex flex-col justify-between ">{/*  rounded-xl bg-[#0000000d] shadow-sm [box-shadow:inset_0_1px_#0000002e,inset_0_-1px_#ffffff] */}
      <div className="flex p-2 pl-0">
        {Icon ? <Icon className="h-5 w-[18px] text-[#50073aaa]" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <Frente
        className={`
          truncate p-8 text-center text-lg bg-[#30032210] sm:text-xl sm:py-8`}/*  rounded-xl [box-shadow:inset_0_1px_#ffffff,inset_0_-1px_#0000002e] */
      >
        {value}
      </Frente>{/* ${lusitana.className} */}
    </div>
  );
}
