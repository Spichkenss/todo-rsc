import { ThemeSwitcher } from "@/widgets/theme-switcher";

import { SignedIn, SignOutButton } from "@/features/auth";

import { UserAvatar } from "@/entities/profile";

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 flex h-16 items-center bg-background/10 backdrop-blur-sm">
      <div className="container flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold">
          TODOSHKA
        </h1>
        <div className="flex flex-row items-center gap-2">
          <ThemeSwitcher />
          <SignedIn>
            <UserAvatar />
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
