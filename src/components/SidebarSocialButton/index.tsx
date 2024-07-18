import React from "react";
import Link from "next/link";
import { Popover, ArrowContainer } from "react-tiny-popover";

type SidebarSocialButtonProps = {
  href: string;
  popoverContent: string;
  children: React.ReactNode;
};

const SidebarSocialButton = ({href, popoverContent, children}: SidebarSocialButtonProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  return (
    <>
      <Popover
        containerClassName="z-10"
        isOpen={ isPopoverOpen }
        positions={ ["top", "bottom", "left", "right"] }
        align="start"
        padding={ 5 }
        onClickOutside={ () => setIsPopoverOpen(false) }
        content={ ({ position, childRect, popoverRect }) => (
          <ArrowContainer
          className="bg-white text-black rounded-md shadow-3xl text-center mb-[10px]"
            position={ position }
            childRect={ childRect }
            popoverRect={ popoverRect }
            arrowColor={ "#ffffff" }
            arrowSize={ 10 }
          >
            <div>
              <div className="popover-content text-center">{ popoverContent }</div>
            </div>
          </ArrowContainer>
        ) }
      >
        <Link
          className="px-4 py-2 rounded-md text-white text-center relative overflow-hidden bg-black flex justify-center shadow-3xl shadow-blue-500 w-fit"
          href={ href }
          target="_blank"
          onMouseEnter={ () => setIsPopoverOpen(true) }
          onMouseLeave={ () => setIsPopoverOpen(false) }
        >
          <span className="text-center">
            { children }
          </span>
        </Link>
      </Popover>
    </>
  );
};

export default SidebarSocialButton;