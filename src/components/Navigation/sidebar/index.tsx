"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../Logo";

import { useRef, useState } from 'react';
import { Sidebar as PrimeReactSidebar } from 'primereact/sidebar';
import SidebarContent from "./SidebarContent";

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

  const [visible, setVisible] = useState<boolean>(false);
  const outerSidebarElement = useRef<HTMLElement>(null);

  

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
      <nav className="hidden h-screen lg:flex lg:basis-1/5 lg:inset-y-0 border-r-4 border-r-white" ref={outerSidebarElement}>
        {/*  NOTE - The way I'm handling hidden here shouldn't be how it works. It should hide based on the "visible" attribute */}
        {/* NOTE - The outer div may or may not be necessary */}
        {/* NOTE - lg:basis-1/5 matches the outer div & helps constrain the sidebar to the width of the outer div */}
        <PrimeReactSidebar 
          modal={ false }
          appendTo={ outerSidebarElement.current }
          className="hidden lg:flex lg:basis-1/5"
          // className="border-r-4 border-r-white lg:basis-1/5"
          // className="hidden h-screen lg:flex lg:grow lg:basis-1/5 lg:inset-y-0 border-r-4 border-r-white"
          // pt={ {
          //   mask: (state) => ({
          //     // TODO - Selectively apply this class based on whether the sidebar is visible or not
          //     className: 'lg:flex !lg:basis-1/5',
          //   }),
          // } }
          // maskClassName="lg:flex !lg:basis-1/5 !w-fit"
          // maskClassName="!w-fit"
          // pt={ {
          //   header: ({ state }) => ({
          //     id: 'myPanelHeader',
          //     style: {
          //       'user-select': 'none'
          //     },
          //     className: classNames('border-primary', {
          //       'bg-primary': state.collapsed,
          //       'bg-primary-reverse': !state.collapsed
          //     })
          //   }),
          //   content: { className: 'border-primary text-lg text-primary-700' },
          //   title: 'text-xl', // OR { className: 'text-xl' }
          //   toggler: 'bg-primary hover:bg-primary-reverse' // OR { className: 'bg-primary hover:bg-primary-reverse' }
          // } }
          visible={ true }
          onHide={ () => console.log("hiding") }
          content={ ({ closeIconRef, hide }) => (
            <SidebarContent closeIconRef={ closeIconRef } hide={ hide } />
          )
          }
          dismissable={ false }
        />
      </nav>
    </>
  );
};
export default Sidebar;