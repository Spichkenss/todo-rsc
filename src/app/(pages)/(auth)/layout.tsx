import { type PropsWithChildren } from "react";

import { onlyWithoutAuth } from "@/features/auth";

interface AuthLayoutProps extends PropsWithChildren {}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="container flex min-h-screen flex-col justify-center md:items-center">
      <main>
        {children}
      </main>
    </div>
  );
};

export default onlyWithoutAuth(AuthLayout);
