import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import FormConsulta from '@/app/ui/consultas/comments/form-consulta';
import { auth } from 'auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Info ganeral',
};

export default async function Page() {
  const session = await auth();

  if (session?.user?.email === process.env.ADMIN )
    return (
      <main>
        <h1
          className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl`}
        >
          Resumen
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </main>
    );

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl`}>
        Realizá tu consulta
      </h1>
      <FormConsulta session={session} />
    </main>
  );
}
