import React from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";
import RosaryImage from "@assets/groups/rozaniec.webp";
import MariaImage from "@assets/groups/maryja.webp";
import CaritasImage from "@assets/groups/caritas.webp";
import AltarImage from "@assets/groups/oltarz.webp";
import { AltarService } from "@articles/groups/AltarService";
import { MarianService } from "@articles/groups/MarianService";
import { Rosary } from "@articles/groups/Rosary";
import { Caritas } from "@articles/groups/Caritas";

export const GROUPS_MENU: MenuData[] = [
  {
    title: "Liturgiczna Służba Ołtarza",
    article: <AltarService />,
    active: true,
    image: AltarImage,
  },
  {
    title: "Dziewczęca Służba Maryjna",
    article: <MarianService />,
    active: false,
    image: MariaImage,
  },
  {
    title: "Róże różańcowe",
    article: <Rosary />,
    active: false,
    image: RosaryImage,
  },
  {
    title: "Caritas",
    article: <Caritas />,
    active: false,
    image: CaritasImage,
  },
];
