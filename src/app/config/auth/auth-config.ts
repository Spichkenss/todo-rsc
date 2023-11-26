import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";

import { GithubProvider } from "@/app/config/auth/providers/GithubProvider";
import { GoogleProvider } from "@/app/config/auth/providers/GoogleProvider";

import prisma from "@/shared/prisma";

export const NextAuthConfig: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider,
    GithubProvider
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id
          }
        };
      }
      return session;
    }
  }
};
