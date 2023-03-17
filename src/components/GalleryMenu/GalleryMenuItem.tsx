import React from "react";
import { AlbumTypeResponse } from "@backendTypes";

interface Props {
  name: AlbumTypeResponse["name"];

  isActive: boolean;
  clickMethod: () => void;
}

export const GalleryMenuItem = ({ isActive, name, clickMethod }: Props) => {
  const toggleActiveClass = isActive ? "active" : "";
  return (
    <li className="grow lg:grow-0">
      <button
        onClick={clickMethod}
        className={`w-full border-b-2 p-4 font-bold  uppercase ${toggleActiveClass}`}
      >
        {name}
      </button>
    </li>
  );
};
