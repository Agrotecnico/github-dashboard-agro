import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import Providers from "./providers"
/* import NavHome from "./navHome"; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased bg-[#ddd] h-full`}>
        <Providers>
          {/* <NavHome /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
