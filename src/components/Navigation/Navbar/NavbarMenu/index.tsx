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

  function handleNavigation() {
    toggle();
    window.requestAnimationFrame(() => {
      document.getElementById("mobile-navigation-toggle")?.focus();
    });
  }

  return (
    <>
      <div
        id="mobile-navigation-menu"
        hidden={ !isOpen }
        className={ classNames(
        styles.navbarMenu,
        "shadow-3xl",
        isOpen ? styles.open : styles.closed,
        "px-4 rounded-b-3xl bg-slate-700 opacity-90"
        ) }
      >
          <ul aria-label="Primary navigation" className="space-y-2 py-2">
            { navigationOptions.map((option) => (
              <li key={ option.name } className="">
                <Link
                  onClick={ handleNavigation }
                  href={ option.href }
                  aria-current={ option.current ? "page" : undefined }
                  className={ classNames(styles.navigationLink,
                  option.current ? "bg-blue-500 text-black shadow-3xl" : "text-gray-400  hover:bg-blue-500 hover:bg-opacity-15 hover:shadow-3xl",
                    "hover:text-white group flex gap-x-3 rounded-md p-2 text-xl leading-6 font-medium whitespace-nowrap cursor-pointer",
                    ) }>
                  <option.icon aria-hidden="true" className={ classNames(
                    styles.navigationLinkIcon,
                    option.current ? "text-black" : "text-gray-300", " group-hover:text-white h-6 w-6 shrink-0") } />
                  { option.name }
                </Link>
              </li>
            )) }
          </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
