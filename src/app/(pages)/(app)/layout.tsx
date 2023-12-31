import { type PropsWithChildren } from "react";

interface AppLayoutProps extends PropsWithChildren {}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="container flex min-h-screen flex-col pb-8 pt-16">
      {children}
    </div>
  );
}
