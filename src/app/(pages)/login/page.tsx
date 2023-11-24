import { SignInForm } from "@/features/auth/sign-in";

export default function LoginPage() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center">
      <SignInForm />
    </main>
  );
}
