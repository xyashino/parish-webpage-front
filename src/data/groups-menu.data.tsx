import React from "react";
import { MenuItem } from "../types/menu-item.interface";
import RosaryImage from "@assets/groups/rozaniec.jpg";
import MariaImage from "@assets/groups/maryja.jpg";
import CaritasImage from "@assets/groups/caritas.jpg";
import AlatrImage from "@assets/groups/oltarz.jpg";
import { AltarService } from "@components/articles/groups/AltarService";
import { Rosary } from "@components/articles/groups/Rosary";
import { MarianService } from "@components/articles/groups/MarianService";
import { Caritas } from "@components/articles/groups/Caritas";

export const GroupsMenu: MenuItem[] = [
  {
    title: "Liturgiczna Służba Ołtarza",
    article: <AltarService />,
    active: true,
    image: AlatrImage,
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
