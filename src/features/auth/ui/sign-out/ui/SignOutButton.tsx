"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/shared/ui/button";

export const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()} variant="default">
      Sign out
    </Button>
  );
};
