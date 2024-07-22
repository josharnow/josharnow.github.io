import React from "react";
import styles from '../styles.module.scss';

const NavbarMenuButton = ({ toggle, isOpen }: { 
  toggle: () => void; 
  isOpen: boolean;
  }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    toggle();
    return (e.currentTarget as HTMLButtonElement).querySelector(".ham")?.classList.toggle("active");
  };

  return (
    <>
      {/* TODO - Apply box shadow to make the button look 3D */ }
      <button
        type="button"
        className="inline-flex items-center md:hidden h-fit w-16 overflow-visible"
        onClick={ handleButtonClick }
      >
        {/* SOURCE - https://www.sliderrevolution.com/resources/css-hamburger-menu/ */ }
        <svg 
          className={ classNames(
            isOpen ? styles.active : "",
            styles.ham, 
            styles.hamRotate,
            styles.ham4,
          )} 
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          overflow={"visible"}
        >
            
          <path
            className={ classNames(styles.line, styles.top)}
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
          <path
            className={ classNames(styles.line, styles.middle)}
            d="m 70,50 h -40" />
          <path
              className={classNames(styles.line, styles.bottom)}
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
      </button>
    </>
  );
};
export default NavbarMenuButton;