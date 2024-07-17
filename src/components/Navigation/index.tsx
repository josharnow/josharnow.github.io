"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid"; 
import { useSelectedLayoutSegment } from "next/navigation";

const Navigation= () => {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navigationOptions: NavigationOption[] = [
    {
      name: "About Me",
      href: "/",
      icon: CubeTransparentIcon,
      current: segment === null ? true : false,
    },
    {
      name: "Education & Career Timeline",
      href: "/education_and_career_timeline",
      icon: CubeTransparentIcon,
      current: `/${segment}` === "/education_and_career_timeline" ? true : false,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: CubeTransparentIcon,
      current: `/${segment}` === "/portfolio" ? true : false,
    },
    {
      name: "Technologies",
      href: "/technologies",
      icon: CubeTransparentIcon,
      current: `/${segment}` === "/technologies" ? true : false,
    },
    {
      name: "3D Demo",
      href: "/3D_Demo",
      icon: CubeTransparentIcon,
      current: `/${segment}` === "/3D_Demo" ? true : false,
    },
    // {
    //   name: "TEST ROUTE",
    //   href: "/test_route",
    //   icon: CubeTransparentIcon,
    //   current: `/${segment}` === "/test_route" ? true : false,
    // },
    // {
    //   name: "DYNAMIC_TEST ROUTE",
    //   href: "/test_route_dynamic/4",
    //   icon: CubeTransparentIcon,
    //   current: `/${segment}`.includes('/test_route_dynamic') ? true : false,
    // },
  ];

  return (
    <>
      {/* NOTE - This is a hacky fix I came up with to make the sidebar sticky and still use flex-grow to grow the main content on the screen. Now my main content can remain as server components while still being properly sized 🎉 */}
      <Sidebar isOpen={ isOpen } toggle={ toggle } navigationOptions={ navigationOptions  } />
      <Navbar toggle={ toggle } isOpen={ isOpen } navigationOptions={ navigationOptions } />
    </>
  );
};
export default Navigation;