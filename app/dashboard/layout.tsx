import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto gap-4 bg-[#f7f2f7] flex min-h-screen p-3 md:p-6 max-w-[1280px] flex-col md:flex-row md:overflow-hidden ">
      <div className="flex-none md:w-80 mb-4">
        <SideNav />
      </div>
      <div className="mb-4 p-[3px] flex justify-between flex-grow flex-col md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
