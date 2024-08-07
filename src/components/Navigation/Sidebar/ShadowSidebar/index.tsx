"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import styles from "../styles.module.scss";
// import { classNames } from "@/src/app/_utils";


const ShadowSidebar = ({
  isOpen,
  toggle,
  navigationOptions,
}: {
  isOpen: boolean;
  toggle: () => void;
  navigationOptions: NavigationOption[];
}) => {
  


  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/* NOTE - When the window has a width of 640px or less (like on mobile devices), only the hidden class is applied. On larger screen sizes, flex overrides the hidden class and makes the sidebar visible. */ }
      <div 
        className={ classNames(styles.shadowSidebarContainer, "hidden sm:h-screen sm:flex sm:w-fit sm:inset-y-0 shadow-3xl")}
        
      >
      {/* <div className="h-screen lg:flex lg:w-fit lg:inset-y-0"> */}
        <div className={ classNames( "flex grow flex-col gapy-y-5 overflow-y-auto px-6 pb-4") }>
        {/* <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2"> */}
          <div className="w-full flex h-16 shrink-0 items-center justify-center p-3 gap-x-3">
            {/* <Link href="/" className="" style={ { height: '100%', aspectRatio: '1/1' } }>
              <Logo />
            </Link> */}
            <Link href="/" className="">
              <h1 className="text-white font-medium whitespace-nowrap sm:text-lg text-xl">Josh Arnow</h1>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  { navigationOptions.map((option) => (
                    <li key={ option.name }>
                      <Link href={ option.href } className={ classNames("text-gray-400 hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 sm:text-lg text-xl leading-6 font-medium whitespace-nowrap") }>
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