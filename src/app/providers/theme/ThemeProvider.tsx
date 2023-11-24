import { type PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps extends PropsWithChildren {}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
