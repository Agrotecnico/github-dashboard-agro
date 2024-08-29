import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from "next"

export const metadata: Metadata = {
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
  icons: {icon:"/faviconCnp.png"} ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-[#ddd] antialiased`}>
        {children}
      </body>
    </html>
  );
}
