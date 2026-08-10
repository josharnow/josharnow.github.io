"use client";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogId: string;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const dialogId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <ModalContext.Provider value={ { open, setOpen, dialogId, triggerRef } }>
      { children }
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{ children }</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className,
  buttonElement,
}: {
  children: ReactNode;
  buttonElement?: ReactNode;
  className?: string;
}) => {
  const { open, setOpen, dialogId, triggerRef } = useModal();
  const triggerProps = {
    ref: triggerRef,
    type: "button" as const,
    "aria-haspopup": "dialog" as const,
    "aria-expanded": open,
    "aria-controls": dialogId,
    onClick: () => setOpen(true),
  };

  return (
    <>
      {
        !buttonElement ? (
          <button
            { ...triggerProps }
            className={ cn(
              "px-4 py-2 rounded-md text-center relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              className
            ) }
          >
            { children }
          </button>
        )
        : (
          
          <button
            { ...triggerProps }
            className={ cn(
              "relative rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              className
            ) }
          >
              { buttonElement }
          </button>
        )
        
      }
    </>
  );
};

export const ModalBody = ({
  children,
  className,
  ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}) => {
  const { open, setOpen, dialogId, triggerRef } = useModal();
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";

    const modalLayer = modalRef.current?.parentElement;
    const backgroundElements = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== modalLayer && element.tagName !== "SCRIPT"
    );
    const backgroundState = backgroundElements.map((element) => ({
      element,
      ariaHidden: element.getAttribute("aria-hidden"),
      inert: element.inert,
    }));

    backgroundElements.forEach((element) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "textarea:not([disabled])",
      "select:not([disabled])",
      "iframe",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    const focusDialog = window.requestAnimationFrame(() => {
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(focusableSelector);
      (firstFocusable ?? modalRef.current)?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((element) => element.getAttribute("aria-hidden") !== "true");

      if (focusableElements.length === 0) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusDialog);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      backgroundState.forEach(({ element, ariaHidden, inert }) => {
        element.inert = inert;
        if (ariaHidden === null) {
          element.removeAttribute("aria-hidden");
        } else {
          element.setAttribute("aria-hidden", ariaHidden);
        }
      });
      (triggerElement ?? previouslyFocused)?.focus();
    };
  }, [open, setOpen, triggerRef]);
  // const { setOpen } = useModal();

  // NOTE - Below will close the modal when clicking outside of the modal
  // useOutsideClick(modalRef, () => setOpen(false));

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      { open && (
        <motion.div
          initial={ {
            opacity: 0,
          } }
          animate={ {
            opacity: 1,
            backdropFilter: "blur(10px)",
          } }
          exit={ {
            opacity: 0,
            backdropFilter: "blur(0px)",
          } }
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 flex items-center justify-center z-[2000]"
        >
          <Overlay />

          <motion.div
            ref={ modalRef }
            id={ dialogId }
            role="dialog"
            aria-modal="true"
            aria-labelledby={ ariaLabelledBy }
            aria-label={ ariaLabelledBy ? undefined : "Dialog" }
            tabIndex={ -1 }
            className={ cn(
              "min-h-[90%] sm:min-h-[95%] max-w-[95%] sm:max-w-[calc(100%-10rem)] bg-neutral-950 border border-neutral-800 rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
              className
            ) }
            initial={ {
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            } }
            animate={ {
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            } }
            exit={ {
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            } }
            transition={ {
              type: "spring",
              stiffness: 260,
              damping: 15,
            } }
          >
            <CloseIcon />
            { children }
          </motion.div>
        </motion.div>
      ) }
    </AnimatePresence>,
    document.body
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={ cn("relative flex flex-col flex-1", className) }>
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-auto ">
        <div className="h-full w-full flex flex-col p-4 md:p-10">
          { children }
        </div>
      </div>
    </div>
  );
};

export const ModalFooter = ({
  children,
  formId,
  className,
  submitDisabled = false,
  submitLabel = "Send Josh a message",
}: {
  children?: ReactNode;
  formId?: string;
  className?: string;
  submitDisabled?: boolean;
  submitLabel?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <div
      className={ cn(
        "flex justify-end p-4 bg-slate-700",
        className
      ) }
    >
      { children }
      <button type="button" className="bg-black text-white text-sm px-2 py-1 rounded-md border border-black w-28 cursor-pointer" onClick={ () => setOpen(false) }>
        Go back
      </button>
      <button
        className="bg-white text-black text-sm px-2 py-1 rounded-md border border-white w-fit cursor-pointer self-end disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        form={ formId }
        disabled={ submitDisabled }
        aria-busy={ submitDisabled }
      >
        { submitLabel }
      </button>
    </div>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <motion.div
      aria-hidden="true"
      initial={ {
        opacity: 0,
      } }
      animate={ {
        opacity: 1,
        backdropFilter: "blur(10px)",
      } }
      exit={ {
        opacity: 0,
        backdropFilter: "blur(0px)",
      } }
      className={ `fixed inset-0 h-full w-full bg-black bg-opacity-50 z-0 ${className}` }
    ></motion.div>
  );
};

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button
      type="button"
      aria-label="Close dialog"
      onClick={ () => setOpen(false) }
      className="absolute top-4 right-4 group z-50 rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
