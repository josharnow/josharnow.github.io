// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React, { useState } from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";
import variables from '@/src/styles/variables.module.scss';
import styles from '../styles.module.scss';
// import { classNames } from "@/src/app/_utils";
import { ContactModal } from "@/src/components";

const NavbarMenu = ({ toggle, isOpen, navigationOptions }: { 
  toggle: () => void; 
  isOpen: boolean;
  navigationOptions: NavigationOption[];
  }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
    {/* TODO - Conditionally change menu button if open & apply box shadow to make it look 3D */}
      <ul role="list" className={ classNames(
        styles.navbarMenu,
        "shadow-3xl",
        isOpen ? styles.open : styles.closed,
        "px-4 rounded-b-3xl bg-slate-700 opacity-90"
        ) }
      >
        <li>
          <ul role="list" className="space-y-2 py-2">
            { navigationOptions.map((option) => (
              <li key={ option.name } className="">
                <Link onClick={ toggle } href={ option.href } className={ classNames(
                    "hover:text-white group flex gap-x-3 rounded-md p-2 text-xl leading-6 font-medium whitespace-nowrap",
                  option.current ? "bg-blue-500 text-black shadow-3xl" : "text-gray-400  hover:bg-blue-500 hover:bg-opacity-15 hover:shadow-3xl"
                    ) }>
                  <option.icon className={ classNames(option.current ? "text-black" : "text-gray-300", " group-hover:text-white h-6 w-6 shrink-0") } />
                  { option.name }
                </Link>
              </li>
            )) }
          </ul>
        </li>
      </ul>
    </>
  );
};

export default NavbarMenu;