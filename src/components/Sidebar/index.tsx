"use client";
// import { EnvelopeIcon } from "@heroicons/react";
// import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { EnvelopeIcon, CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegment } from "next/navigation";

// NOTE - Below is one of the preferred ways to do dynamic classes in Tailwind CSS
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};

const Sidebar = () => {
  const sidebarOptions = [
    {
      name: "About",
      href: "/about",
      icon: IdentificationIcon,
      current: true,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: EnvelopeIcon,
      current: false,
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: CubeTransparentIcon,
      current: false,
    },
  ];

  return (
    <>
      {/* <div className="p-3"> */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2">
            <div className="flex h-16 shrink-0 items-center">
              <h1 className="text-3xl font-bold text-black">
                Logo
              </h1>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
export default Sidebar;