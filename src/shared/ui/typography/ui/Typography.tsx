import { type AllHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils";

const typographyVariants = cva("", {
  variants: {
    as: {
      h1: "text-5xl md:text-6xl lg:text-7xl",
      h2: "text-4xl md:text-5xl lg:text-6xl",
      h3: "text-3xl md:text-4xl lg:text-5xl",
      h4: "text-2xl md:text-3xl lg:text-4xl",
      h5: "text-xl md:text-2xl lg:text-3xl",
      h6: "text-base md:text-xl lg:text-2xl",
      p: "text-base"
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
      default: "font-normal"
    },
    variant: {
      default: "text-foreground",
      translucent: "text-neutral-400"
    }
  },
  defaultVariants: {
    variant: "default",
    weight: "default"
  }
});

interface TypographyProps extends
  VariantProps<typeof typographyVariants>,
  Omit<AllHTMLAttributes<HTMLElement>, "as"> {}

export const Typography = ({
  weight, as, variant, className, ...rest
}: TypographyProps) => {
  const Component = as || "span";

  return (
    <Component
      className={cn(typographyVariants({ weight, as, variant }), className)}
      {...rest}
    />
  );
};
