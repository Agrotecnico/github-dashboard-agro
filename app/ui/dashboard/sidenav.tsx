import NavLinks from '@/app/ui/dashboard/nav-links'
import { auth } from '@/auth'
import { Fondo } from '@/app/ui/marcos'


export default async function SideNav() {
  const session = await auth()
  if (session)
    return (
      <div className="flex h-full flex-col">
        <Fondo className=" p-3 pb-6 ">
          <div className="mb-2.5 flex flex-col-reverse font-medium items-center text-sm min-[824px]:[margin:_17px_0_25px]  ">
            <div className="">
              {session?.user?.name}
            </div>
          </div>

          <div className="flex flex-col gap-1 [&:first-child]:rounded-t-md [&:last-child]:rounded-b-md">
              <NavLinks />
          </div>
        </Fondo>
      </div>
    );
  return null;
}
