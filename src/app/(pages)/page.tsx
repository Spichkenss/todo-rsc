import { ThemeSwitcher } from "@/widgets/theme-switcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      Hello
      <ThemeSwitcher />
    </main>
  );
}
