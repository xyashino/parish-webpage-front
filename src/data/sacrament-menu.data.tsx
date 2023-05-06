import React from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";
import BaptismImage from "@assets/sacrament/chrzest1.webp";
import ConfirmationImage from "@assets/sacrament/bierzmowanie.webp";
import EucharistImage from "@assets/sacrament/eucharystia.webp";
import PenanceImage from "@assets/sacrament/spowiedz.webp";
import AnointingImage from "@assets/sacrament/namaszczenie-chorych.webp";
import PriesthoodImage from "@assets/sacrament/Kaplanstwo.webp";
import MarriageImage from "@assets/sacrament/Malzenstwo.webp";
import { Anointing } from "@articles/sacrament/Anointing";
import { Baptism } from "@articles/sacrament/Baptism";
import { Confirmation } from "@articles/sacrament/Confirmation";
import { Eucharist } from "@articles/sacrament/Eucharist";
import { Penance } from "@articles/sacrament/Penance";
import { Priesthood } from "@articles/sacrament/Priesthood";
import { Marriage } from "@articles/sacrament/Marriage";

export const SACRAMENT_MENU: MenuData[] = [
  {
    title: "Chrzest",
    article: <Baptism />,
    active: true,
    image: BaptismImage,
  },
  {
    title: "Bierzmowanie",
    article: <Confirmation />,
    active: false,
    image: ConfirmationImage,
  },
  {
    title: "Eucharystia",
    article: <Eucharist />,
    active: false,
    image: EucharistImage,
  },
  {
    title: "Pokuta",
    article: <Penance />,
    active: false,
    image: PenanceImage,
  },
  {
    title: "Kapłaństwo",
    article: <Priesthood />,
    active: false,
    image: PriesthoodImage,
  },
  {
    title: "Małżeństwo",
    article: <Marriage />,
    active: false,
    image: MarriageImage,
  },
  {
    title: "Namaszczenie chorych",
    article: <Anointing />,
    active: false,
    image: AnointingImage,
  },
];
