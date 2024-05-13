import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/uiRadix/avatar"
import { Button } from "@/app/ui/uiRadix/button"
import { auth, signIn } from "auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/app/ui/uiRadix/dropdown-menu"
import { SignIn, SignOut } from "@/app/ui/auth-components"
import type { Session } from "next-auth";

export default async function UserButton({ session }: { session: Session | null }) {
  /* const session = await auth() */
  if (!session?.user) return  <SignIn />
  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm text-[#fff] sm:inline-flex [text-shadow:_1px_-1px_0px_#000000]">
        {session.user.email}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8">
              {session.user.image && (
                <AvatarImage
                  src={session.user.image}
                  alt={session.user.name ?? ""}
                />
              )}
              <AvatarFallback>{session.user.email}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
