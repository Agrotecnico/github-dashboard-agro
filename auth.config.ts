import type { NextAuthConfig } from 'next-auth';
import "next-auth/jwt"

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
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
  /*async signIn({ user }) {
      // Si el usuario se logueo correctamente checkear si existe en la base de datos 
      // Si existe return true
      // Si no existe guardar el usuario en la base de datos y retornar true
      return true
    }, */
  },
  providers: [], // Add providers with an empty array for now

  experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== "production" ? true : false,

} satisfies NextAuthConfig;
