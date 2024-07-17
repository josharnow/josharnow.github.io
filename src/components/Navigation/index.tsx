"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, RocketLaunchIcon, WrenchScrewdriverIcon, GlobeAltIcon, AcademicCapIcon, BuildingOffice2Icon } from "@heroicons/react/20/solid"; 
import { IdentificationIcon } from "@heroicons/react/24/solid";
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
      icon: IdentificationIcon,
      current: segment === null ? true : false,
    },
    {
      name: "Career & Education Timeline",
      href: "/career-and-education-timeline",
      icon: BuildingOffice2Icon,
      current: `/${segment}` === "/career-and-education-timeline" ? true : false,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: RocketLaunchIcon,
      current: `/${segment}` === "/portfolio" ? true : false,
    },
    {
      name: "Technologies",
      href: "/technologies",
      icon: WrenchScrewdriverIcon,
      current: `/${segment}` === "/technologies" ? true : false,
    },
    {
      name: "3D Demo",
      href: "/3d-demo",
      icon: CubeTransparentIcon,
      current: `/${segment}` === "/3d-demo" ? true : false,
    },
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