import NextAuth from "next-auth";

import { NextAuthConfig } from "@/app/config/auth/auth-config";

const handler = NextAuth(NextAuthConfig);

export { handler as GET, handler as POST };
