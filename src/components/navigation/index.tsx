"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {/* TODO - Make Sidebar (on left side) the default for desktop view & make left sidebar appear w/ menu button on mobile */}
    {/* TODO - Make toggle for opening/closing side pane.  */}
      <Sidebar isOpen={ isOpen } toggle={ toggle } />
      <Navbar toggle={ toggle } />
    </>
  );
};

export default Navigation;