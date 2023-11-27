import { useFormStatus } from "react-dom";

import { Button } from "@/shared/ui/button";
import { Loader } from "@/shared/ui/loader";

export const CreateTodoButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="min-w-[100px]">
      {pending ? <Loader /> : <span>Create</span>}
    </Button>
  );
};
