import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      /* if (pathname === '/dashboard') return !!auth; */
      if (pathname.startsWith('/dashboard')) return !!auth;
      return true;
    },
    /* async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    },
    async session({ session, token, user }) {
      console.log("session callback", {session, token, user});
      return session;
    }, */
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
