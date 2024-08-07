"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { ContactModal, SidebarSocialButton } from "@/src/components";
import Logo from "../../Logo";
import styles from "../styles.module.scss";

// import { Divider } from 'primereact/divider';

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
                <ul role="list" className="-mx-2 space-y-2">
                  { navigationOptions.map((option) => (
                    <li key={ option.name }>
                      <Link href={ option.href } className={ classNames(styles.navigationLink, option.current ? "bg-blue-500 text-black shadow-3xl" : "text-gray-400  hover:bg-blue-500 hover:bg-opacity-15 hover:shadow-3xl", "hover:text-white group flex gap-x-3 rounded-md p-2 sm:text-lg text-xl leading-6 font-medium whitespace-nowrap cursor-pointer") }>
                        {/*  NOTE - Classes after the comma will be applied regardless of outcome of ternary */ }
                        <option.icon className={ classNames(
                          styles.navigationLinkIcon,
                          option.current ? "text-black" : "text-gray-300", " group-hover:text-white h-6 w-6 shrink-0") } />
                        {/* <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" /> */}
                        <span>{ option.name }</span>
                      </Link>
                    </li>

                  )) }
                </ul>
              </li>
            </ul>
            <div className="flex flex-col items-center gap-y-3">
              <div className="flex gap-x-2">
                <SidebarSocialButton href="mailto:contact@josharnow.com" popoverContent="contact@josharnow.com">
                  <i className="pi pi-envelope"></i>
                </SidebarSocialButton>
                <SidebarSocialButton href="https://www.linkedin.com/in/joshuaarnow/" popoverContent="LinkedIn">
                  <i className="pi pi-linkedin"></i>
                </SidebarSocialButton>
                <SidebarSocialButton href="https://github.com/josharnow" popoverContent="GitHub">
                  <i className="pi pi-github"></i>
                </SidebarSocialButton>
              </div>
              {/* <Divider type="solid" layout="horizontal" className="w-full " /> */}
              <div className="flex gap-x-2">
                <ContactModal />
                <Link 
                  className="px-4 py-2 rounded-md text-white text-center relative overflow-hidden bg-black flex justify-center shadow-3xl shadow-blue-500 w-fit group/resume-btn" 
                  href="/resume"
                >
                  <span className="group-hover/resume-btn:translate-x-40 text-center transition duration-500">
                    📄 Résumé
                  </span>
                  <div className="-translate-x-40 group-hover/resume-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                    📈
                  </div>
                </Link>
              </div>
            </div>
            {/* TODO - Add date and time to the bottom of the navbar */ }
          </nav>
        </div>
      </div>
    </>
  );
};
export default RealSidebar;