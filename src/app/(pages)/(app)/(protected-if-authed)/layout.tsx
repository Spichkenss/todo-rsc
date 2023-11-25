import { Fragment, type PropsWithChildren } from "react";

import { onlyWithoutAuth } from "@/features/auth";

interface ProtectedIfAuthedLayoutProps extends PropsWithChildren {}

const ProtectedIfAuthedLayout = ({ children }: ProtectedIfAuthedLayoutProps) => {
  return <Fragment>{children}</Fragment>;
};

export default onlyWithoutAuth(ProtectedIfAuthedLayout);
