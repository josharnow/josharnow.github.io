// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import React, { useRef, useEffect, FormEvent } from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useFormContext } from 'react-hook-form';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className, 
    type = "text", 
    inputElement, 
    multiline,
    ...props 
  }, ref) => {
    
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);
    
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    
    const spanRef = useRef<HTMLSpanElement>(null);

    const {
      setValue,
      clearErrors,
      formState: { isSubmitSuccessful },
    } = useFormContext();
    
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    function handleSpanChange(e: FormEvent<HTMLSpanElement>) {
      setValue(props.name, e.currentTarget.textContent);
      clearErrors(props.name);
    }
    
    useEffect(() => {
      if (isSubmitSuccessful) {
        if (spanRef.current) {
          spanRef.current.textContent = "";
        }
      }
    }, [isSubmitSuccessful]);
    
    return (
      <motion.div
        style={ {
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        } }
        onMouseMove={ handleMouseMove }
        onMouseEnter={ () => setVisible(true) }
        onMouseLeave={ () => setVisible(false) }
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        {
          !inputElement ? ( 
            (!multiline) ? (
              <>
                <input
                  type={ type }
                  className={ cn(
                    `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
          disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/input:shadow-none transition duration-400
          `,
                    className
                  ) }
                  ref={ ref }
                  { ...props }
                />
              </>
            ) : (
              <>
                {/* NOTE - https://css-tricks.com/auto-growing-inputs-textareas/ */ }
                <input type="hidden" { ...props } ref={ ref } />
                <span
                  ref={ spanRef } 
                  onInput={ handleSpanChange } 
                  role="textbox" 
                  contentEditable={ true } 
                  aria-placeholder="Your message"
                  className={ cn(className, "border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent  file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600  focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400") }
                />
              </>
            )
) : (
            <>
              { inputElement }
            </>
          )
        }
      </motion.div>
    );
  }
);
FormInput.displayName = "Input";

export default FormInput;
