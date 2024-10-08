import { generateYAxis } from '@/app/lib/utils'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
/* import { Revenue } from '@/app/lib/definitions' */
import { fetchRevenue } from '@/app/lib/data'

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue()

  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">Datos no disponibles.</p>;
  }

  return (
    <div className="w-full md:col-span-4 rounded-xl bg-[#0000000d] [box-shadow:inset_0_1px_#00000047,inset_0_-1px_#ffffffe0]">
      <h2 className={`${lusitana.className} mb-4 p-4 text-xl md:text-2xl`}>
        {/* Recent Revenue */}Ingresos recientes
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="rounded-xl p-2 ">
        <div className="bg-[#ffffff57] [box-shadow:inset_0_1px_#ffffffd4,inset_0_-1px_#00000047] sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md p-4 md:gap-4 min-[1024px]:[grid-template-columns:_auto_repeat(12,_minmax(0,_1fr))] min-[1024px]:gap-1.5 ">
          <div
            className="mb-6 hidden flex-col justify-between text-xs text-gray-500 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-[#ff8fe7db]"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="w-6 -rotate-90 text-xs text-gray-500 sm:rotate-0 min-[1024px]:-rotate-90 min-[1024px]:text-xs">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Últimos 12 meses</h3>
        </div>
      </div>
    </div>
  );
}
