import React from "react";
import { NAVBAR_ITEMS_ORDER } from "@data/menu.data";
import { DesktopNavbarItem } from "@components/DesktopNavbar/DesktopNavbarItem";

export const DesktopNavbar = () => {
  return (
    <>
      <div className="max-w-3/4 bg-base-100">
        <ul className="shadow-full dropdown-content menu menu-horizontal flex-wrap ">
          {NAVBAR_ITEMS_ORDER.map((router) => (
            <DesktopNavbarItem router={router} key={router} />
          ))}
        </ul>
      </div>
    </>
  );
};
