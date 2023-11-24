import { ThemeSwitcher } from "@/widgets/theme-switcher";

export const Navbar = () => (
  <nav className="fixed inset-x-0 flex h-16 items-center bg-background/10 backdrop-blur-sm">
    <div className="container flex flex-row items-center justify-between">
      <h1 className="text-xl font-semibold">
        TODOSHKA
      </h1>
      <ThemeSwitcher />
    </div>
  </nav>
);
