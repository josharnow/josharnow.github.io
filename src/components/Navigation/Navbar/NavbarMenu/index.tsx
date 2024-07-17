// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";
import variables from '@/src/styles/variables.module.scss';
import styles from '../styles.module.scss';
// import { classNames } from "@/src/app/_utils";
import { ContactModal } from "@/src/components";

const NavbarMenu = ({ isOpen, navigationOptions }: { 
  isOpen: boolean;
  navigationOptions: NavigationOption[];
  }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      {/* TODO - Make components for navbar list items  */ }
      {/* TODO - Closing animation  */ }
      {/* TODO - P  */ }
      {/* TODO - Add drop/box shadow  */ }
      {/* TODO - Apply active link highlighting like on sidebar */ }
      <ul role="list" className={ classNames(
        styles.navbarMenu,
        // isOpen ? styles.navbarMenuOpen : styles.navbarMenuHidden,
        // isOpen ? "px-4 border-t-2 border-black rounded-b-3xl bg-slate-700 opacity-90" : "",
        // isOpen ? "flex flex-1 flex-col gap-y-7" : "hidden",
        isOpen ? "" : styles.closed,
        "px-4 border-t-2 border-black rounded-b-3xl bg-slate-700 opacity-90"
        ) }
      >
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            { navigationOptions.map((option) => (
              <li key={ option.name } className="">
                {/* <Link href={ option.href } className={ classNames("text-white hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium whitespace-nowrap") }> */}
                <Link href={ option.href } className={ classNames("text-gray-400 hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium whitespace-nowrap") }>
                  {/*  NOTE - Classes after the comma will be applied regardless of outcome of ternary */ }
                  {/* <option.icon className="text-white group-hover:text-white h-6 w-6 shrink-0" /> */}
                  <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
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