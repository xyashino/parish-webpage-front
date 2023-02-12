import React, { useRef, useState } from "react";
import { MenuLeft } from "@icons/MenuLeft";
import { createPortal } from "react-dom";
import { MenuRight } from "@icons/MenuRight";
import { NavItem } from "@components/navbar/NavItem";
import { NAVBAR_ITEMS_ORDER } from "@data/menu.data";
import { APP_NAME } from "@data/page-constants.data";

export const MobileNavbar = () => {
  const navBar = useRef<HTMLUListElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = async (show: boolean) => {
    if (show) {
      setShowMenu(show);
      return;
    }
    const navbar = navBar.current;
    if (!navbar) return;
    navbar
      .animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
        { duration: 500, fill: "forwards" }
      )
      .play();
    setTimeout(() => {
      setShowMenu(show);
    }, 500);
  };

  const portal = document.getElementById("popups");
  const menu = (
    <div className="fixed top-0 z-20 block grid h-screen w-screen grid-cols-3 transition-transform lg:hidden ">
      <div
        className="sm:col-span-2"
        onClick={() => toggleMenu(false)}
        onFocus={() => toggleMenu(false)}
      />
      <ul
        className="menu col-span-2  translate-x-full animate-slidein  bg-base-100 px-1 shadow-2xl sm:col-span-1"
        ref={navBar}
      >
        <li className="flex flex-row items-center justify-center bg-primary text-base-100">
          <MenuRight
            className="h-16  w-16 w-1/4 stroke-current"
            onClick={() => toggleMenu(false)}
          />
          <p className="w-3/4 font-bold uppercase">{APP_NAME}</p>
        </li>
        {NAVBAR_ITEMS_ORDER.map((router) => (
          <NavItem
            router={router}
            key={router}
            onClick={() => toggleMenu(false)}
            className={"border-b-2"}
            isMobile
          />
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {showMenu ? (portal ? createPortal(menu, portal) : null) : null}
      <div className="flex-none p-4 lg:hidden">
        <MenuLeft
          className=" btn-ghost inline-block h-8 w-8 stroke-current"
          onClick={() => toggleMenu(true)}
        />
      </div>
    </>
  );
};
