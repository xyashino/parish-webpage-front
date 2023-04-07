import React from "react";
import { Divider } from "@components/ui/Divider";
import DefaultImage from "@assets/default/backgroundImage.webp";

interface Props {
  image?: string;
  divider?: true;
}

export const BackgroundImage = ({ image, divider }: Props) => {
  return (
    <>
      <section
        className={`max-w-screen relative flex h-[30vh] w-full  bg-cover bg-scroll bg-center lg:h-[60vh]  lg:bg-fixed`}
        style={{ backgroundImage: `url(${image ?? DefaultImage})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40" />
      </section>
      {divider ? <Divider /> : null}
    </>
  );
};
