import React, { useRef, useState } from "react";
import { MenuLeft } from "@icons/MenuLeft";
import { createPortal } from "react-dom";
import { MenuRight } from "@icons/MenuRight";
import { NavItem } from "@components/navbar/NavItem";
import { NAVBAR_ITEMS_ORDER } from "@data/menu.data";
import { APP_NAME } from "@data/page-constants.data";

const hideAndAnimateMenu = async (menu: HTMLUListElement, ms: number) => {
  await menu
    .animate(
      [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
      { duration: ms, fill: "forwards" }
    )
    .play();
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const MobileNavbar = () => {
  const navBar = useRef<HTMLUListElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const portal = document.getElementById("popups");

  const toggleMenu = async (show: boolean) => {
    if (show) {
      setShowMenu(show);
      return;
    }
    const navbar = navBar.current;
    if (!navbar) return;
    await hideAndAnimateMenu(navbar, 500);
    setShowMenu(show);
  };

  const displayMenu = () => toggleMenu(true);
  const hideMenu = () => toggleMenu(false);

  const menu = (
    <div className="fixed top-0 z-20 block grid h-screen w-screen grid-cols-3 overflow-y-scroll transition-transform lg:hidden">
      <div className="sm:col-span-2" onClick={hideMenu} onFocus={hideMenu} />
      <ul
        className="menu col-span-2  translate-x-full animate-slidein  bg-base-100 px-1 shadow-2xl sm:col-span-1"
        ref={navBar}
      >
        <li className="flex flex-row items-center justify-center bg-primary text-base-100">
          <MenuRight
            className="h-16  w-16 w-1/4 stroke-current"
            onClick={hideMenu}
          />
          <p className="w-3/4 font-bold uppercase">{APP_NAME}</p>
        </li>
        {NAVBAR_ITEMS_ORDER.map((router) => (
          <NavItem
            router={router}
            key={router}
            onClick={hideMenu}
            className="border-b-2"
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
          className="btn-ghost inline-block h-8 w-8 stroke-current"
          onClick={displayMenu}
        />
      </div>
    </>
  );
};
