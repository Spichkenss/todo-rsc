import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils";

const loaderVariants = cva("inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]", {
  variants: {
    color: {
      primary: "border-primary",
      secondary: "border-background"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

interface LoaderProps extends VariantProps<typeof loaderVariants> {
}

export const Loader = ({ color }: LoaderProps) => {
  return (
    <div
      className={cn(loaderVariants({ color }))}
      role="status"
    >
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >
        Loading...
      </span>
    </div>
  );
};
