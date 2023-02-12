import React from "react";
import { MenuItem } from "../types/menu-item.interface";
import RosaryImage from "@assets/groups/rozaniec.webp";
import MariaImage from "@assets/groups/maryja.webp";
import CaritasImage from "@assets/groups/caritas.webp";
import AltarImage from "@assets/groups/oltarz.webp";
import { AltarService } from "@components/articles/groups/AltarService";
import { Rosary } from "@components/articles/groups/Rosary";
import { MarianService } from "@components/articles/groups/MarianService";
import { Caritas } from "@components/articles/groups/Caritas";
export const GROUPS_MENU: MenuItem[] = [
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
