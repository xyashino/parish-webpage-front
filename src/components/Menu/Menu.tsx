import React from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";
import { MenuItem } from "@components/Menu/MenuItem";

interface Props {
  items: MenuData[];
  onClick: (e: string) => void;
}

export const Menu = ({ items, onClick }: Props) => {
  return (
    <ul className="menu menu-horizontal col-span-2  flex w-full flex-wrap justify-center  bg-base-100 text-center">
      {items.map(({ title, active, type, id }, index) => (
        <MenuItem
          key={id ?? index}
          active={active}
          title={title}
          onClick={() => onClick(id ?? type ?? title)}
        />
      ))}
    </ul>
  );
};
