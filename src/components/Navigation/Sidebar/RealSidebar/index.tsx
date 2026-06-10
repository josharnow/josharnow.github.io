"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ContactModal, SidebarSocialButton } from "@/src/components";
import Logo from "../../Logo";
import styles from "../styles.module.scss";

const ConsolidatedSidebar = ({
  isOpen,
  toggle,
  navigationOptions,
}: {
  isOpen: boolean;
  toggle: () => void;
  navigationOptions: NavigationOption[];
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSidebarWidth = () => {
      if (sidebarRef.current) {
        const width = sidebarRef.current.offsetWidth;
        document.documentElement.style.setProperty('--sidebar-width', `${width}px`);
      }
    };

    updateSidebarWidth();
    window.addEventListener('resize', updateSidebarWidth);
    return () => window.removeEventListener('resize', updateSidebarWidth);
  }, []);
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }



  return (
    <>
      {/* Consolidated sidebar with all features from both RealSidebar and ShadowSidebar */}
      <div 
        ref={sidebarRef}
        className={ classNames(styles.sidebarContainer, "hidden sm:h-screen sm:flex sm:w-fit bg-slate-700")}
        style={ { boxShadow: "5px 0px 11px rgba(0, 0, 0, 0.68)" } }
      >
      {/* <div className="h-screen lg:flex lg:w-fit lg:inset-y-0"> */}
        <div className={ classNames( "flex grow flex-col gapy-y-5 overflow-y-auto px-6 pb-4") }>
        {/* <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2"> */}
          {/* <div className="flex h-16 shrink-0 w-full"> */}
          <div className="flex h-16 shrink-0 items-center justify-center p-2 gap-x-2">
            <Link href="/" className="" style={ { height: '2rem', width: '2rem' } }>
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
                      <Link href={ option.href } className={ classNames(styles.navigationLink, option.current ? "bg-blue-500 text-black shadow-3xl" : "text-gray-400  hover:bg-blue-500 hover:bg-opacity-15 hover:shadow-3xl", "hover:text-white group flex gap-x-2 rounded-md p-2 sm:text-lg text-xl leading-6 font-medium whitespace-nowrap cursor-pointer") }>
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
            <div className="flex flex-col items-center gap-y-2">
              <div className="flex gap-x-1">
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
              <div className="flex gap-x-1">
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
export default ConsolidatedSidebar;