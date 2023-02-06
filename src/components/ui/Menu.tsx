import React from "react";
import { MenuItem } from "@frontendTypes/menu-item.interface";

interface Props {
  items: MenuItem[];
  onClick: (e: string) => void;
}
export const Menu = ({ items, onClick }: Props) => {
  return (
    <ul className="menu menu-horizontal col-span-2  flex w-full flex-wrap justify-center  bg-base-100">
      {items.map(({ title, active, type, id }) => (
        <li
          onClick={() => (onClick ? onClick(type ?? title ?? id) : undefined)}
          key={id}
        >
          <button
            className={`bordered p-4 font-bold uppercase ${
              active ? "active" : ""
            }`}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};
