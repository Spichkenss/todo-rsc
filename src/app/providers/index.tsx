"use client";

import { type PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

import "../config/style/global.css";

import { ThemeProvider } from "./theme/ThemeProvider";

interface ProvidersProps extends PropsWithChildren {}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
