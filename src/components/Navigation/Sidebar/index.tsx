"use client";
// import styles from "./styles.module.scss";
// import { classNames } from "@/src/app/_utils";
import RealSidebar from "./RealSidebar";
import ShadowSidebar from "./ShadowSidebar";

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