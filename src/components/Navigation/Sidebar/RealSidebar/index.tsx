"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../../Logo";
import styles from "../styles.module.scss";
import { ContactModal } from "@/src/components";
// import { classNames } from "@/src/app/_utils";

const RealSidebar = ({
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

  const contentArr = [
    {
      contactMethod: "Email",
      imageSrc: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      contactMethod: "LinkedIn",
      imageSrc: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      contactMethod: "GitHub",
      imageSrc: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      contactMethod: "Instagram",
      imageSrc: "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      contactMethod: "Twitter",
      imageSrc: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]


  return (
    <>
      {/* NOTE - When the window has a width of 640px or less (like on mobile devices), only the hidden class is applied. On larger screen sizes, flex overrides the hidden class and makes the sidebar visible. */}
      <div 
        className={ classNames(styles.sidebarContainer, "hidden sm:h-screen sm:flex sm:w-fit sm:inset-y-0 bg-slate-700")}
        style={ { boxShadow: "5px 0px 11px rgba(0, 0, 0, 0.68)" } }
      >
      {/* <div className="h-screen lg:flex lg:w-fit lg:inset-y-0"> */}
        <div className={ classNames( "flex grow flex-col gapy-y-5 overflow-y-auto px-6 pb-4") }>
        {/* <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2"> */}
          {/* <div className="flex h-16 shrink-0 w-full"> */}
          <div className="w-full flex h-16 shrink-0 items-center justify-center p-3 gap-x-3">

            <Link href="/" className="" style={ { height: '100%', aspectRatio: '1/1' } }>
              <Logo />
            </Link>
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
                      <Link href={ option.href } className={ classNames(styles.navigationLink, option.current ? "bg-blue-500 text-black shadow-3xl" : "text-gray-400  hover:bg-blue-500 hover:bg-opacity-15 hover:shadow-3xl", "hover:text-white group flex gap-x-3 rounded-md p-2 sm:text-lg text-xl leading-6 font-medium whitespace-nowrap") }>
                        {/*  NOTE - Classes after the comma will be applied regardless of outcome of ternary */ }
                        <option.icon className={ classNames(
                          styles.navigationLinkIcon,
                          option.current ? "text-black" : "text-gray-300", " group-hover:text-white h-6 w-6 shrink-0") } />
                        {/* <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" /> */}
                        { option.name }
                      </Link>
                    </li>

                  )) }
                </ul>
              </li>
            </ul>
            <ContactModal contentArr={contentArr} />
            {/* TODO - Add date and time to the bottom of the navbar */ }
            {/* TODO - Switch to Apple font (San Francisco?) & apply as default */ }
          </nav>
        </div>
      </div>
    </>
  );
};
export default RealSidebar;