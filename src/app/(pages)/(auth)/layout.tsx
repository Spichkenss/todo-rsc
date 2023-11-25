import { type PropsWithChildren } from "react";

import { onlyWithoutAuth } from "@/features/auth";

interface AuthLayoutProps extends PropsWithChildren {}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="container flex min-h-screen">
      {children}
    </div>
  );
};

export default onlyWithoutAuth(AuthLayout);
