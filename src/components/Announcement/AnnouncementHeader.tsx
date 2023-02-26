import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/biblia.webp";
import React from "react";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import { AnnouncementsResponse } from "@backendTypes";

interface Props {
  title: AnnouncementsResponse["title"];
  subtitle: AnnouncementsResponse["subtitle"];
}

export const AnnouncementHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <BackgroundImage image={Image} />
      <BackgroundImgHeader title="Ogłoszenia parafialne">
        <p className="text-xl">{title}</p>
        <p className="font-light">{subtitle}</p>
      </BackgroundImgHeader>
    </>
  );
};
