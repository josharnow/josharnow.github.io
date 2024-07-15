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
  navigationOptions,
}: {
  isOpen: boolean;
  toggle: () => void;
  navigationOptions: NavigationOption[];
}) => {

  return (
    <>
      <RealSidebar
        isOpen={ isOpen } 
        toggle={ toggle } 
        navigationOptions={ navigationOptions } 
      />
      <ShadowSidebar 
        isOpen={ isOpen } 
        toggle={ toggle } 
        navigationOptions={ navigationOptions } 
      />
    </>
  );
};
export default Sidebar;