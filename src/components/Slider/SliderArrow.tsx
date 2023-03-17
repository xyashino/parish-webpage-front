import React from "react";
import { Arrow } from "@icons/Arrow";

interface Props {
  right?: true;
  onClick: (e: any) => void | null;
}

export const SliderArrow = ({ right, onClick }: Props) => {
  return (
    <div
      className={`rounded-box absolute top-1/2  ${
        right ? "right-0" : "left-0"
      }  z-30 mx-4 -translate-y-1/2 cursor-pointer bg-base-100 transition-transform hover:scale-110`}
      onClick={onClick}
    >
      <Arrow className={`text-8xl ${right ? "rotate-180" : ""}`} />
    </div>
  );
};
