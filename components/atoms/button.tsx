import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/classname";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full  font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer ",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground ",
        destructive:
          "bg-destructive text-foreground  hover:shadow-[0_0_0_0_var(--foreground)]",
        outline: "bg-background text-foreground border border-foreground ",
        secondary: "bg-secondary border border-background text-background ",
        secondaryForeground:
          "bg-[var(--secondary-primary-foreground)] border border-background text-background ",
        ghost: "bg-transparent hover:bg-foreground/5",
        link: "text-primary",
      },
      size: {
        default: "h-10 px-6 py-4 has-[>svg]:px-3 text-sm",
        xs: "h-3 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5 text-xs ",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
        md: "h-9 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5 text-md",
        lg: "h-12 rounded-full px-6 has-[>svg]:px-4 text-base",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
