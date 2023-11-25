import { Fragment, type PropsWithChildren } from "react";

import { onlyWithAuth } from "@/features/auth";

interface ProtectedLayoutProps extends PropsWithChildren {}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <Fragment>{children}</Fragment>;
};

export default onlyWithAuth(ProtectedLayout);
