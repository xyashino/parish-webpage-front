import React from "react";
import { MenuRight } from "@icons/MenuRight";
import { APP_NAME } from "@data/page-constants.data";

interface Props {
  hideMenu: () => void;
}

export const MobileNavbarListHeader = ({ hideMenu }: Props) => {
  return (
    <li className="flex flex-row items-center justify-center bg-primary text-base-100">
      <MenuRight
        className="h-16  w-16 w-1/4 stroke-current"
        onClick={hideMenu}
      />
      <p className="w-3/4 font-bold uppercase">{APP_NAME}</p>
    </li>
  );
};
