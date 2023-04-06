import React from "react";
import { AlbumTypeResponse } from "@backendTypes";

interface Props {
  name: AlbumTypeResponse["name"];
  isActive: boolean;
  onClick: () => void;
}

export const GalleryMenuItem = ({ isActive, name, onClick }: Props) => {
  const activeClass = isActive ? "active" : "";

  const handleOnClick = () => {
    onClick();
  };

  return (
    <li className="grow lg:grow-0">
      <button
        onClick={handleOnClick}
        className={`w-full border-b-2 p-4 font-bold uppercase ${activeClass} text-center`}
      >
        <span className="w-full">{name}</span>
      </button>
    </li>
  );
};
