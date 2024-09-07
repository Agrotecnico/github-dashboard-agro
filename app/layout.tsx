import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from "next"

export const metadata: Metadata = {
  description:
    "Aqui harás consultas relacionadas a gestiones/registros del automotor y obtendrás una respuesta",
  icons: {icon:"/faviconCnp.png"} ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full  antialiased text-[#1d0215]`}>
        {children}
      </body>
    </html>
  );
}
