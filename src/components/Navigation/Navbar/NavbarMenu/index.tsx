import React from "react";
import Link from "next/link";
import styles from '../styles.module.scss';

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
                <Link onClick={ toggle } href={ option.href } className={ classNames(styles.navigationLink,
                  option.current ? "bg-blue-500 text-black shadow-3xl" : "text-gray-400  hover:bg-blue-500 hover:bg-opacity-15 hover:shadow-3xl",
                    "hover:text-white group flex gap-x-3 rounded-md p-2 text-xl leading-6 font-medium whitespace-nowrap cursor-pointer",
                    ) }>
                  <option.icon className={ classNames(
                    styles.navigationLinkIcon,
                    option.current ? "text-black" : "text-gray-300", " group-hover:text-white h-6 w-6 shrink-0") } />
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