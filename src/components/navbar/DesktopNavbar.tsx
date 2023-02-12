import React from "react";
import { NavItem } from "@components/navbar/NavItem";
import { NAVBAR_ITEMS_ORDER } from "@data/menu.data";

export const DesktopNavbar = () => {
  return (
    <>
      <div className="block  bg-base-100">
        <ul className="shadow-full dropdown-content menu menu-horizontal px-1">
          {NAVBAR_ITEMS_ORDER.map((router) => (
            <NavItem router={router} key={router} />
          ))}
        </ul>
      </div>
    </>
  );
};
