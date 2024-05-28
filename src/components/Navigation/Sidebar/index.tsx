"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../Logo";
// import styles from "./styles.module.scss";
// import { classNames } from "@/src/app/_utils";
import ShadowSidebar from "./ShadowSidebar";
import RealSidebar from "./RealSidebar";

const Sidebar = ({
  isOpen,
  toggle,
  sidebarOptions,
}: {
  isOpen: boolean;
  toggle: () => void;
  sidebarOptions: SidebarOption[];
}) => {

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