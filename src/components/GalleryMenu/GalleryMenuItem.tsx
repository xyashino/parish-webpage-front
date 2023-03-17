import React from "react";
import { AlbumTypeResponse } from "@backendTypes";

interface Props {
  name: AlbumTypeResponse["name"];

  isActive: boolean;
  clickMethod: () => void | any;
}

export const GalleryMenuItem = ({ isActive, name, clickMethod }: Props) => {
  const toggleActiveClass = isActive ? "active" : "";
  return (
    <li>
      <button
        onClick={clickMethod}
        className={`border-b-2 p-4 font-bold uppercase ${toggleActiveClass} w-full`}
      >
        {name}
      </button>
    </li>
  );
};
