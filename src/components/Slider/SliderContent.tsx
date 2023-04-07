import React from "react";
import { SliderArrow } from "@components/Slider/SliderArrow";
const { VITE_GALLERY_URL } = import.meta.env;

interface Props {
  imgUrl: string;
  onClick: (no: number) => void;
}

export const SliderContent = ({ imgUrl, onClick }: Props) => {
  const leftArrow = () => onClick(-1);
  const rightArrow = () => onClick(1);
  return (
    <div className="carousel select-none">
      <SliderArrow onClick={leftArrow} />
      <img
        src={VITE_GALLERY_URL + imgUrl}
        alt="Show in fullscreen"
        className="carousel-item absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 scale-75 object-contain"
      />
      <SliderArrow onClick={rightArrow} right />
    </div>
  );
};
