import React from "react";
import { AlbumTypeResponse } from "@backendTypes";
import { GalleryMenuItem } from "@components/GalleryMenu/GalleryMenuItem";

interface Props {
  data: AlbumTypeResponse[];
  clickMethod: (id: string) => void | null;
  activeId: string;
}

export const GalleryMenu = ({ data, activeId, clickMethod }: Props) => {
  return (
    <ul className="menu flex flex-col border-r-2 shadow">
      {data.map(({ id, name }) => (
        <GalleryMenuItem
          name={name}
          isActive={activeId === id}
          clickMethod={() => clickMethod(id)}
          key={id}
        />
      ))}
    </ul>
  );
};
