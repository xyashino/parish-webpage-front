import React from "react";
import { NAVBAR_ITEMS } from "@data/menu.data";
import { NavItem } from "@components/navbar/NavItem";

export const DesktopNavbar = () => {
  return (
    <>
      <div className="block  bg-base-100">
        <ul className="shadow-full dropdown-content menu menu-horizontal px-1">
          {NAVBAR_ITEMS.map((router) => (
            <NavItem router={router} key={router} />
          ))}
        </ul>
      </div>
    </>
  );
};
