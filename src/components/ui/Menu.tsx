import React from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";

interface Props {
  items: MenuData[];
  onClick: (e: string) => void;
}
export const Menu = ({ items, onClick }: Props) => {
  return (
    <ul className="menu menu-horizontal col-span-2  flex w-full flex-wrap justify-center  bg-base-100 text-center">
      {items.map(({ title, active, type, id }) => (
        <li key={id} className="grow  text-center">
          <button
            className={` w-full p-4 font-bold uppercase ${
              active ? "active" : ""
            }`}
            onClick={() => (onClick ? onClick(type ?? title ?? id) : undefined)}
          >
            <p className="w-full text-center">{title}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};
