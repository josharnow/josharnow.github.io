"use client";
import Link from "next/link";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";
import Logo from "../Logo";
import styles from "./styles.module.scss";
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



  return (
    <>
      <RealSidebar isOpen={isOpen} toggle={toggle} />
      <ShadowSidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};
export default Sidebar;