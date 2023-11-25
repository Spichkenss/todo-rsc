/* eslint-disable @typescript-eslint/no-explicit-any */

import { type ComponentProps, type ComponentType } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { Pages } from "@/app/config/pages";

export const onlyWithoutAuth = <TComponent extends ComponentType<any>>
  (Component: TComponent) => {
  return async (props: ComponentProps<TComponent>) => {
    const session = await getServerSession();

    if (session) {
      redirect(Pages.home);
    }

    return <Component {...props} />;
  };
};
