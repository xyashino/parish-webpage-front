import { Image } from "@components/ui/Image";
import React, { SyntheticEvent } from "react";
import { Album } from "@backendTypes";

interface Props {
  images: Album["images"];

  onClick: (e: SyntheticEvent, id: string) => void | any;
}

export const ImgContainer = ({ images, onClick }: Props) => {
  return (
    <div className="flex w-full flex-wrap justify-around">
      {images.map(({ id, url }, i) => (
        <Image
          key={id}
          src={url}
          alt={`Album  no ${i + 1}`}
          onClick={(e) => onClick(e, id)}
        />
      ))}
    </div>
  );
};
