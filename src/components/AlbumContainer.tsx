import React, { useLayoutEffect, useState } from "react";
import { AlbumTypeResponse } from "@backendTypes";
import { AlbumCard } from "@components/ui/AlbumCard";
import { getDataFrom } from "@utils/network.util";
import { PageRouter } from "@enums/page-router.enum";

interface Props {
  id: string;
}

export const AlbumContainer = ({ id }: Props) => {
  const [data, setData] = useState<null | AlbumTypeResponse>(null);

  useLayoutEffect(() => {
    (async () => {
      setData(null);
      setData(await getDataFrom(`${PageRouter.AlbumTypes}${id}` as PageRouter));
    })();
  }, [id]);

  if (!data) {
    return <div className="loading mt-8 p-4 text-3xl">Loading...</div>;
  }

  if (data.albums.length === 0) {
    return (
      <div className="p-4">
        <h2 className="mt-4 p-4 text-3xl">
          Upps... Wygląda na to że nie ma jeszcze{" "}
          <span className="font-bold uppercase text-error">żadnych</span>{" "}
          albumów.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap  justify-around  p-4">
      {data.albums.map(({ title, subtitle, id, backgroundImage }) => (
        <AlbumCard
          title={title}
          subtitle={subtitle}
          key={id}
          id={id}
          bgImg={backgroundImage}
        />
      ))}
    </div>
  );
};
