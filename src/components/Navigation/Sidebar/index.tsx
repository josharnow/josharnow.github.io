"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../Logo";
// import styles from "./styles.module.scss";
import { classNames } from "@/src/utils";
import ShadowSidebar from "./ShadowSidebar";
import RealSidebar from "./RealSidebar";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {



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
      <RealSidebar
        isOpen={ isOpen } 
        toggle={ toggle } 
        sidebarOptions={ sidebarOptions } 
      />
      <ShadowSidebar 
        isOpen={ isOpen } 
        toggle={ toggle } 
        sidebarOptions={ sidebarOptions } 
      />
    </>
  );
};
export default Sidebar;