"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../Logo";

import { useRef } from 'react';
import { Sidebar as PrimeReactSidebar } from 'primereact/sidebar';


type SidebarOption = {
  name: string,
  href: string,
  icon: any,
  current: boolean,
}


// NOTE - Below is one of the preferred ways to do dynamic classes in Tailwind CSS
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};

const Sidebar = () => {
  const segment = useSelectedLayoutSegment();

  const sidebarDiv = useRef<HTMLDivElement>(null);
  

  const sidebarOptions: SidebarOption[] = [
    // {
    //   name: "About",
    //   href: "/about",
    //   icon: IdentificationIcon,
    //   current: `/${segment}` === "/about" ? true : false,
    // },
    // {
    //   name: "Contact",
    //   href: "/contact",
    //   icon: EnvelopeIcon,
    //   current: `/${segment}` === "/contact" ? true : false,
    // },
    // {
    //   name: "Portfolio",
    //   href: "/portfolio",
    //   icon: CubeTransparentIcon,
    //   current: `/${segment}` === "/portfolio" ? true : false,
    // },
    {
      name: "TEST ROUTE",
      href: "/test_route",
      icon: CubeTransparentIcon,
      current: `/${segment}` === "/test_route" ? true : false,
    },
    {
      name: "DYNAMIC_TEST ROUTE",
      href: "/test_route_dynamic/4",
      icon: CubeTransparentIcon,
      current: `/${segment}`.includes('/test_route_dynamic') ? true : false,
    },
  ];
  
  return (
    <>
      {/* <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col"> */}
      <div className="hidden h-screen lg:flex lg:basis-1/5 lg:inset-y-0 border-r-4 border-r-white" ref={sidebarDiv}>
        {/* <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/" className="p-3" style={ { height: '100%', aspectRatio: '1/1' } }>
                <Logo />
            </Link>
            <Link href="/">
              <h1 className="text-black font-bold">Josh Arnow</h1>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {sidebarOptions.map((option) => (
                    <li key={ option.name }>
                      <Link href={ option.href } className={ classNames(option.current ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold") }>
                          <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                          {option.name}
                        </Link> 
                    </li>
                    
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div> */}
        {/*  NOTE - The way I'm handling hidden here shouldn't be how it works. It should hide based on the "visible" attribute */}
        {/* NOTE - The outer div may or may not be necessary */}
        <PrimeReactSidebar 
          onClick={ () => console.log(sidebarDiv.current)}
          appendTo={ sidebarDiv.current }
          className="lg:basis-1/5"
          // className="border-r-4 border-r-white lg:basis-1/5"
          // className="hidden h-screen lg:flex lg:grow lg:basis-1/5 lg:inset-y-0 border-r-4 border-r-white"
          visible={ true }
          onHide={ () => console.log("hiding") }
          content={() => (
            <div>
              test
            </div>
          )
          }
        />
      </div>
    </>
  );
};
export default Sidebar;