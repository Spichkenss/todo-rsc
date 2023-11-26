import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}
// If we're using JWTs with the `uid` field
declare module "next-auth/jwt/types" {
  interface JWT {
    uid: string;
  }
}
