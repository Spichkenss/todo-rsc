import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

import { Pages } from "@/app/config/pages";

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  const { pathname } = req.nextUrl;

  const redirectCondition = pathname === Pages.signin
    || pathname === Pages.signup
    || pathname === "/";

  if (redirectCondition && isAuthenticated) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: Pages.signin
    }
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return authMiddleware(req, event);
}
