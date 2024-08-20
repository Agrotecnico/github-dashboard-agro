import type { NextAuthConfig } from 'next-auth';
/* import "next-auth/jwt" */

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  /* basePath: "/auth", */
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith('/dashboard')) return !!auth;
      return true;
    },
  },
  /* experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== "production" ? true : false, */
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

/* declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
} */