import { signIn, signOut } from "auth"
import { Button } from "@/app//ui/uiRadix/button"
import IconCuenta from '@/app/ui/logosIconos/icon-cuenta';

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button className="bg-transparent hover:bg-transparent" {...props}>
        {/* Sign In */}
        <div className="flex flex-col duration-300 items-center gap-0.5 opacity-75 hover:opacity-100 ">
          <IconCuenta
            filter="filterCuenta7"
            sombraX="1.5"
            sombraY="-1.5"
            size="30"
            className="bottom-[72px] right-4 md:right-12 min-[1280px]:right-[calc((100%_-_1280px)/2_+_48px)]"
          />
          <div className="text-white [text-shadow:_1px_-1px_#000]">
            Ingresá
          </div>
        </div>
      </Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
