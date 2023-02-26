import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/biblia.webp";
import React from "react";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";

export const AnnouncementHeader = () => {
  return (
    <>
      <BackgroundImage image={Image} />
      <BackgroundImgHeader title="Ogłoszenia parafialne" />
    </>
  );
};
