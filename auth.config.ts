import type { NextAuthConfig } from 'next-auth';
import "next-auth/jwt"

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  /* basePath: "/auth", */
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      /* if (pathname === '/dashboard') return !!auth; */
      if (pathname.startsWith('/dashboard')) return !!auth;
      return true;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token }
      }
      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }
      return session
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}