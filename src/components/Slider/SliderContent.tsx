import React from "react";
import { SliderArrow } from "@components/Slider/SliderArrow";
const { VITE_API_ALBUM_URL } = import.meta.env;

interface Props {
  imgUrl: string;
  onClick: (no: number) => void;
}

export const SliderContent = ({ imgUrl, onClick }: Props) => {
  return (
    <>
      <SliderArrow onClick={() => onClick(-1)} />
      <img
        src={VITE_API_ALBUM_URL + imgUrl}
        alt="Show in fullscreen"
        className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 scale-75 object-contain"
      />
      <SliderArrow onClick={() => onClick(1)} right />
    </>
  );
};
