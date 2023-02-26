import React, { RefObject } from "react";
import { NAVBAR_ITEMS_ORDER } from "@data/menu.data";
import { MobileNavbarItem } from "@components/MobileNavbar/MobileNavbarItem";
import { MobileNavbarListHeader } from "@components/MobileNavbar/MobileNavbarListHeader";

interface Props {
  hideMenu: () => void;
  ulRef: RefObject<HTMLUListElement>;
}

export const MobileNavbarList = ({ hideMenu, ulRef }: Props) => {
  return (
    <ul
      className="menu col-span-2  translate-x-full animate-slidein  bg-base-100 px-1 shadow-2xl sm:col-span-1"
      ref={ulRef}
    >
      <MobileNavbarListHeader hideMenu={hideMenu} />
      {NAVBAR_ITEMS_ORDER.map((router) => (
        <MobileNavbarItem
          router={router}
          key={router}
          onClick={hideMenu}
          className="border-b-2"
        />
      ))}
    </ul>
  );
};
