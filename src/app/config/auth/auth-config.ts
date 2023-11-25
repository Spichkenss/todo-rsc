import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";

import { GithubProvider } from "@/app/config/auth/providers/GithubProvider";
import { GoogleProvider } from "@/app/config/auth/providers/GoogleProvider";

import prisma from "@/shared/prisma";

export const NextAuthConfig: NextAuthOptions = {
  pages: {
    signIn: "/signin"
  },
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
      return { ...token, ...user };
    },
    async redirect() {
      return process.env.NEXTAUTH_URL!;
    }
  }
};
