"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BackgroundMenu from "./BackgroundMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* TODO - Make Sidebar (on left side) the default for desktop view & make left sidebar appear w/ menu button on mobile */ }
      {/* TODO - Make toggle for opening/closing side pane.  */ }

      {/* TODO - Add button to collapse sidebar */}
      {/* TODO - Figure out how to collapse the sidebar */}
      <Sidebar isOpen={ isOpen } toggle={ toggle } />
      {/* <Navbar toggle={ toggle } /> */}
    </>
  );
};
export default Navigation;