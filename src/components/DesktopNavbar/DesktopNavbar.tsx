import React from "react";
import { NAVBAR_ITEMS_ORDER } from "@data/menu.data";
import { DesktopNavbarItem } from "@components/DesktopNavbar/DesktopNavbarItem";

export const DesktopNavbar = () => {
  return (
    <>
      <div className="block bg-base-100">
        <ul className="shadow-full dropdown-content menu menu-horizontal px-1">
          {NAVBAR_ITEMS_ORDER.map((router) => (
            <DesktopNavbarItem router={router} key={router} />
          ))}
        </ul>
      </div>
    </>
  );
};
