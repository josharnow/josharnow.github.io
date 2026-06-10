"use client";
import ConsolidatedSidebar from "./RealSidebar";

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
    <ConsolidatedSidebar
      isOpen={ isOpen } 
      toggle={ toggle } 
      navigationOptions={ navigationOptions } 
    />
  );
};
export default Sidebar;