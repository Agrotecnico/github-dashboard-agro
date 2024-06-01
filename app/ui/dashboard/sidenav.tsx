import NavLinks from '@/app/ui/dashboard/nav-links';
import { auth } from '@/auth';

export default async function SideNav() {
  const session = await auth();
  if (session)
    return (
      <div className="flex h-full flex-col">
        <div className="mb-6 flex flex-col-reverse items-center ">
          <span className="hidden text-sm text-[#fff] [text-shadow:_1px_-1px_0px_#000000] sm:inline-flex">
            {session?.user?.name}
          </span>
        </div>

        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-[#ffffff22] md:block"></div>
        </div>
      </div>
    );
  return null;
}
