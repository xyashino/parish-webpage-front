import React from "react";
import { AlbumTypeResponse } from "@backendTypes";
import { GalleryMenuItem } from "@components/GalleryMenu/GalleryMenuItem";

interface Props {
  data: AlbumTypeResponse[];
  activeId: string;
  onClick: (id: string) => void;
}

export const GalleryMenu = ({ data, activeId, onClick }: Props) => {
  const handleOnClick = (id: string) => {
    onClick(id);
  };

  return (
    <ul className="menu menu-horizontal w-full border-r-2 lg:menu-vertical">
      {data.map(({ id, name }) => (
        <GalleryMenuItem
          name={name}
          isActive={activeId === id}
          onClick={() => handleOnClick(id)}
          key={id}
        />
      ))}
    </ul>
  );
};
