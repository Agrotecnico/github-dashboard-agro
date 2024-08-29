import NavLinks from '@/app/ui/dashboard/nav-links';
import { auth } from '@/auth';

export default async function SideNav() {
  const session = await auth();
  if (session)
    return (
      <div className="flex h-full flex-col">
        <div className="mb-6 flex flex-col-reverse items-center text-sm text-[#fffc] [text-shadow:_-1px_1px_#000c] max-[824px]:text-[#000] max-[824px]:[text-shadow:_0px_-1px_#fffc]  ">
          <div className="">
            {session?.user?.name}
          </div>
        </div>

        <div className="flex grow flex-row justify-between space-x-2 min-[824px]:flex-col min-[824px]:space-x-0 min-[824px]:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-[#ffffff22] min-[824px]:block"></div>
        </div>
      </div>
    );
  return null;
}
