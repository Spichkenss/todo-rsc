import { getServerSession } from "next-auth";

import { NextAuthConfig } from "@/app/config/auth/auth-config";

export const getCurrentUser = async () => {
  const session = await getServerSession(NextAuthConfig);
  return session?.user;
};
