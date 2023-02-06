import React from "react";
import { Divider } from "@components/ui/Divider";
import Image from "@assets/default/backgroundImage.png";

interface Props {
  image?: string;
  divider?: true;
}

export const BackgroundImage = ({ image, divider }: Props) => {

  return (
    <>
      <section
        className={`max-w-screen relative flex h-[30vh] w-full  bg-cover bg-scroll lg:bg-fixed bg-center  lg:h-[65vh]`}
        style={{
          backgroundImage: `url(${image ?? Image})`,
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40" />
      </section>
      {divider ? <Divider /> : null}
    </>
  );
};
