import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline'
import { fetchCardData } from '@/app/lib/data'
import { Frente, Fondo } from '@/app/ui/marcos'

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  consultas: UserGroupIcon,
  tramites: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfConsultas,
    numberOfTramites,
  } = await fetchCardData();
  return (
    <>
      <Card title="Cobradas" value={totalPaidInvoices} type="collected" />
      <Card title="Pendientes" value={totalPendingInvoices} type="pending" />
      <Card title="Total facturas" value={numberOfInvoices} type="invoices" />
      <Card title="Total clientes" value={numberOfCustomers} type="customers"/>
      <Card title="Total consultas" value={numberOfConsultas} type="consultas" />
      <Card title="Total trámites" value={numberOfTramites} type="tramites"/>
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
  type: 'invoices' | 'customers' | 'pending' | 'collected' | 'consultas' | 'tramites';
}) {
  const Icon = iconMap[type];

  return (
    <div className="flex flex-col justify-between ">
      <div className="flex p-2 pl-0">
        {Icon ? <Icon className="h-5 w-[18px] text-[#50073aaa]" /> : null}
        <h3 className="ml-2 text-[13px] font-medium sm:text-sm">{title}</h3>
      </div>
      <Frente
        className={`
          truncate p-4 text-center text-sm bg-[#30032210] sm:text-base sm:p-6 lg:text-lg`}
      >
        {value}
      </Frente>
    </div>
  );
}
