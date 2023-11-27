import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

import { inter } from "@/app/config/style/fonts";
import { Providers } from "@/app/providers";

import { Navbar } from "@/widgets/navbar";

import { cn } from "@/shared/utils";

export const metadata: Metadata = {
  title: "rsc-todo-app"
};

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background font-sans antialiased")}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
