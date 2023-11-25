import { type PropsWithChildren } from "react";

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container flex min-h-screen">
      {children}
    </div>
  );
}
