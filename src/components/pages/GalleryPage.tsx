import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AlbumTypeResponse } from "@backendTypes";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { Header } from "@components/ui/Header";
import { GalleryMenu } from "@components/GalleryMenu/GalleryMenu";
import { AlbumContainer } from "@components/AlbumContainer";

const LAST_ALBUM_NAME = "last-album";
const findActiveItem = (id: string, data: AlbumTypeResponse[]) => {
  const foundItem = data.find((value) => value.id === id);
  if (!foundItem) return null;
  sessionStorage.setItem(LAST_ALBUM_NAME, id);
  return foundItem;
};

export const GalleryPage = () => {
  const data = useLoaderData() as AlbumTypeResponse[];
  const lastItemID = sessionStorage.getItem(LAST_ALBUM_NAME);
  const [active, setActive] = useState<AlbumTypeResponse>(
    lastItemID ? findActiveItem(lastItemID, data) ?? data[0] : data[0]
  );

  const changeActiveItem = (id: string) => {
    const result = findActiveItem(id, data);
    if (!result) return;
    setActive(result);
  };

  return (
    <WhiteBoard className="grid min-h-[80vh]  grid-cols-4">
      <GalleryMenu
        data={data}
        clickMethod={changeActiveItem}
        activeId={active.id}
      />
      <div className="col-span-3">
        <Header title={`Przeglądzasz albumy "${active.name}"`} />
        <AlbumContainer id={active.id} />
      </div>
    </WhiteBoard>
  );
};
