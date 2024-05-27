"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../../Logo";
import styles from "../styles.module.scss";
import { classNames } from "@/src/app/_utils";


const ShadowSidebar = ({
  isOpen,
  toggle,
  sidebarOptions,
}: {
  isOpen: boolean;
  toggle: () => void;
  sidebarOptions: SidebarOption[];
}) => {
  // const segment = useSelectedLayoutSegment();




  return (
    <>
      {/* NOTE - When the window has a width of 640px or less (like on mobile devices), only the hidden class is applied. On larger screen sizes, flex overrides the hidden class and makes the sidebar visible. */ }
      <div 
        className={ classNames(styles.shadowSidebarContainer, "hidden sm:h-screen sm:flex sm:w-fit sm:inset-y-0")}
      >
      {/* <div className="h-screen lg:flex lg:w-fit lg:inset-y-0"> */}
        <div className={ classNames( "flex grow flex-col gapy-y-5 overflow-y-auto px-6 pb-4") }>
        {/* <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2"> */}
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/" className="p-3" style={ { height: '100%', aspectRatio: '1/1' } }>
              <Logo />
            </Link>
            <Link href="/">
              <h1 className="text-black font-medium whitespace-nowrap">Josh Arnow</h1>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  { sidebarOptions.map((option) => (
                    <li key={ option.name }>
                      <Link href={ option.href } className={ classNames( "text-gray-400 hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium whitespace-nowrap") }>
                        {/*  NOTE - Classes after the comma will be applied regardless of outcome of ternary */ }
                        <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                        { option.name }
                      </Link>
                    </li>

                  )) }
                </ul>
              </li>
            </ul>
            {/* TODO - Add date and time to the bottom of the navbar */ }
            {/* TODO - Switch to Apple font (San Francisco?) & apply as default */ }
          </nav>
        </div>
      </div>
    </>
  );
};
export default ShadowSidebar;