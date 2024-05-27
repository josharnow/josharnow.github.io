"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
      // current: `/${segment}` === "/test_route" ? true : false,
    },
    {
      name: "DYNAMIC_TEST ROUTE",
      href: "/test_route_dynamic/4",
      icon: CubeTransparentIcon,
      // current: `/${segment}`.includes('/test_route_dynamic') ? true : false,
    },
  ];

  return (
    <>
      {/* TODO - Make Sidebar (on left side) the default for desktop view & make left sidebar appear w/ menu button on mobile */ }
      {/* TODO - Make toggle for opening/closing side pane.  */ }

      {/* TODO - Add button to collapse sidebar */}
      {/* TODO - Figure out how to collapse the sidebar */}

      {/* TODO - Maybe make a "shadowsidebar..." This sits behind the real sidebar and is used to make the main part of the screen be correctly sized */}
      {/* NOTE - This is a hacky fix I came up with to make the sidebar sticky and still use flex-grow to grow the main content on the screen (i.e. to get it to the correct size) */}
      <Sidebar isOpen={ isOpen } toggle={ toggle } sidebarOptions={ sidebarOptions  } />
      {/* <Navbar toggle={ toggle } /> */}
    </>
  );
};
export default Navigation;