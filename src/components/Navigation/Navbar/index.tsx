// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
// import Logo from "./Logo";
// import variables from '@/src/styles/variables.module.scss';
import styles from './styles.module.scss';
import { ContactModal } from "@/src/components";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuButton from "./NavbarMenuButton";

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
          <div className="flex justify-between items-center h-full w-full px-4 py-2">
            {/* <div className="p-3" style={{ height: '100%', aspectRatio: '1/1' }}>
              <Logo />
            </div> */}
            <ContactModal />
            <NavbarMenuButton toggle={ toggle } isOpen={ isOpen } />
          </div>
        </div>
        <NavbarMenu isOpen={isOpen} navigationOptions={navigationOptions} toggle={toggle} />
      </nav>
    </>
  );
};

export default Navbar;