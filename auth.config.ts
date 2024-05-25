import type { NextAuthConfig } from 'next-auth'

 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {



   /*  authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn)  return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      } 
      return true;
    }, */


   /* authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      const isDashboard = pathname.startsWith('/dashboard');
      if (isDashboard && auth?.user?.email === "agrotecnicog@gmail.com") return !!auth
      else if (isDashboard) return !!auth
      return true
    }, */
   /*  authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      const isDashboard = pathname.startsWith('/dashboard');
      if (pathname === "/dashboard" && auth?.user?.email === "agrotecnicog@gmail.com") return !!auth
      else if (pathname === "/dashboard") return !!auth
      return true
    }, */



     authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/dashboard") return !!auth
      return true
    },


    /*async redirect({ url, baseUrl }) {
      // Allows relative callback URLs Permite URL de devolución de llamada relativas
      if (url.startsWith("/dashboard")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin  Permite URL de devolución de llamada en el mismo origen
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    } */

  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
