"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={ { open, setOpen } }>
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
  const { setOpen } = useModal();
  return (
    <>
      {
        !buttonElement ? (
          <button
            className={ cn(
              "px-4 py-2 rounded-md text-center relative overflow-hidden",
              className
            ) }
            onClick={ () => setOpen(true) }
          >
            { children }
          </button>
        )
        : (
          
          <>
            <div 
              onClick={ () => setOpen(true) }
            >
              { buttonElement }
            </div>
          </>
        )
        
      }
    </>
  );
};

export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open } = useModal();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef(null);
  const { setOpen } = useModal();

  // NOTE - Below will close the modal when clicking outside of the modal
  // useOutsideClick(modalRef, () => setOpen(false));

  return (
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
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex items-center justify-center z-50"
        >
          <Overlay />

          <motion.div
            ref={ modalRef }
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
    </AnimatePresence>
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
}: {
  children?: ReactNode;
  formId?: string;
  className?: string;
}) => {
  const { setOpen, open } = useModal();
  return (
    <div
      className={ cn(
        "flex justify-end p-4 bg-slate-700",
        className
      ) }
    >
      { children }
      <button className="bg-black text-white text-sm px-2 py-1 rounded-md border border-black w-28 cursor-pointer" onClick={ () => setOpen(false) }>
        Go back
      </button>
      <button className="bg-white text-black text-sm px-2 py-1 rounded-md border border-white w-fit cursor-pointer self-end" type="submit" form={ formId }>
        Send Josh a message
      </button>
    </div>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
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
      className={ `fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}` }
    ></motion.div>
  );
};

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={ () => setOpen(false) }
      className="absolute top-4 right-4 group z-50"
    >
      <svg
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
