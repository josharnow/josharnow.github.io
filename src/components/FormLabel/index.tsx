// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ ref }
    className={ cn(
      "text-sm lg:text-base font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ) }
    { ...props }
  />
));
FormLabel.displayName = LabelPrimitive.Root.displayName;

export default FormLabel;
// export { Label };
