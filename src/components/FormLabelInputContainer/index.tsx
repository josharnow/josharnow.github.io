// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const FormLabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={ cn("flex flex-col space-y-2 w-full", className) }>
      { children }
    </div>
  );
};
export default FormLabelInputContainer;
