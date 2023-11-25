"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/shared/ui/button";

export const SignOutButton = () => {
  const handleClick = async () => {
    await signOut();
  };

  return (
    <Button
      onClick={handleClick}
      variant="default"
    >
      Sign out
    </Button>
  );
};
