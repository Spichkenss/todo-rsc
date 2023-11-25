import NextAuthGithubProvider from "next-auth/providers/github";

export const GithubProvider = NextAuthGithubProvider({
  name: "github",
  clientId: process.env.GITHUB_CLIENT_ID ?? "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ""
});
