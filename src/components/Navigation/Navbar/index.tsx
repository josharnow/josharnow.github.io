// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
// import Logo from "./Logo";
// import variables from '@/src/styles/variables.module.scss';
import styles from './styles.module.scss';
import { ContactModal } from "@/src/components";
import NavbarMenu from "./NavbarMenu";

const Navbar = ({ toggle, isOpen, navigationOptions }: { 
  toggle: () => void; 
  isOpen: boolean;
  navigationOptions: NavigationOption[];
  }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <nav className={ classNames(styles.navbar, "h-20 sm:hidden fixed shadow-3xl")}>
        <div 
          className={ classNames(
            styles.navbar, 
            "absolute left-0 right-0 top-0 bottom-0 z-40 bg-slate-700",
          ) }
        >
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              {/* <div className="p-3" style={{ height: '100%', aspectRatio: '1/1' }}>
                <Logo />
              </div> */}
              <ContactModal />
              {/* TODO - Make button an X when menu is open */}
              <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={ toggle }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <NavbarMenu isOpen={isOpen} navigationOptions={navigationOptions} toggle={toggle} />
      </nav>
    </>
  );
};

export default Navbar;