import { type ReactNode } from "react";
import { type Metadata } from "next";

import { inter } from "@/app/config/style/fonts";
import { Providers } from "@/app/providers";

import { Navbar } from "@/widgets/navbar";

import { cn } from "@/shared/utils";

export const metadata: Metadata = {
  title: "rsc-todo-app"
};

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background font-sans antialiased")}>
        <Providers>
          <Navbar />
          <div className="md:pt-16">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
