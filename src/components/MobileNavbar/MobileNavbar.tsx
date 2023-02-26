import React, { useRef, useState } from "react";
import { MenuLeft } from "@icons/MenuLeft";
import { createPortal } from "react-dom";
import { MobileNavbarList } from "@components/MobileNavbar/MobileNavbarList";

const hideAndAnimateMenu = async (menu: HTMLUListElement, ms: number) => {
  menu
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
  const hideMenu = () => toggleMenu(false);

  const menu = (
    <div className="fixed top-0 z-20 block grid h-screen w-screen grid-cols-3 overflow-y-scroll transition-transform lg:hidden">
      <div className="sm:col-span-2" onClick={hideMenu} onFocus={hideMenu} />
      <MobileNavbarList hideMenu={hideMenu} ulRef={navBar} />
    </div>
  );

  return (
    <>
      {showMenu ? (portal ? createPortal(menu, portal) : null) : null}
      <div className="flex-none p-4 lg:hidden">
        <MenuLeft
          className="btn-ghost inline-block h-8 w-8 stroke-current"
          onClick={() => toggleMenu(true)}
        />
      </div>
    </>
  );
};
