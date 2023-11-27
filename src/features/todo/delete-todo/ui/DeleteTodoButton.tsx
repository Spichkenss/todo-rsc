"use client";

import { useFormStatus } from "react-dom";
import { LucideTrash2 } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Loader } from "@/shared/ui/loader";

export const DeleteTodoButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="default"
      size="icon"
      type="submit"
      disabled={pending}
    >
      { pending ? <Loader color="secondary" /> : <LucideTrash2 />}
    </Button>
  );
};
