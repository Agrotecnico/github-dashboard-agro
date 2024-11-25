
import { auth } from '@/auth'
import { Fondo } from '@/app/ui/marcos'
import  NavLinksAdmin  from '@/app/ui/dashboard/nav-links-admin'
import  NavLinksMember  from '@/app/ui/dashboard/nav-links-member'


export default async function SideNav() {
  const session = await auth()
  if (session)
    return (
      <div className="flex h-full flex-col">
        <Fondo className=" p-3 pb-6 ">
          <div className="mb-2.5 flex flex-col-reverse font-medium items-center text-sm min-[824px]:[margin:_18px_0_34px]  ">
            <div className="">
              {session?.user?.name}
            </div>
          </div>

          <div className="flex-col gap-0.5 ">
            {session?.user?.email === process.env.ADMIN ? (
              <NavLinksAdmin />
              ) : (
              <NavLinksMember />
              )}
          </div>
        </Fondo>
      </div>
    );
  return null;
}
