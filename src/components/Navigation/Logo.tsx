"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Button from "./Button";
import joshArnowLogo from "@/src/assets/images/josh_arnow_logo.svg";
import joshArnowLogoNoShadows from "@/src/assets/images/josh_arnow_logo_no_shadows.svg";
import Device from "@/src/components/Device";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      {/* <Link href="/" style={ { display: showButton ? "none" : "block" } }> */}
        <Device>
          { ({ isSafari }) => {
            return <Image
              src={ !isSafari ? joshArnowLogo : joshArnowLogoNoShadows}
              alt="Logo"
              quality={ 100 }
            />
          } }
        </Device>
      {/* </Link> */}
      <div
        style={ {
          display: showButton ? "block" : "none",
        } }
      >
        {/* <Button /> */}
      </div>
    </>
  );
};

export default Logo;