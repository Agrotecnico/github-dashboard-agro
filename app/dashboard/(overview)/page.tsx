/* "use client" */


import RevenueChart from '@/app/ui/dashboard/revenue-chart'
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'
import { lusitana } from '@/app/ui/fonts'
import { Suspense } from 'react'
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton,} from '@/app/ui/skeletons'
import CardWrapper from '@/app/ui/dashboard/cards'
import { auth } from '@/auth'
/* import type { Session } from "next-auth"
import { useSession } from "next-auth/react" */


export default async function Page() {
  /* const { data: session, update } = useSession() */
  /*console.log("Session: ", session)*/
   const session = await auth()

  /* if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
    }
  } */

  if (session?.user?.email === 'agrotecnicog@gmail.com' ) 
  return (
    <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 md:text-2xl`}>
          Panel Informacion General
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
        <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 md:text-2xl`}>
          Panel Informacion Member
        </h1>
    </main>
  );
}