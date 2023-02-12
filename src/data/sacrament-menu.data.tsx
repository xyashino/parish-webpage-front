import React from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";
import { Baptism } from "@components/articles/sacrament/Baptism";
import BaptismImage from "@assets/sacrament/chrzest1.webp";
import { Confirmation } from "@components/articles/sacrament/Confirmation";
import ConfirmationImage from "@assets/sacrament/bierzmowanie.webp";
import { Eucharist } from "@components/articles/sacrament/Eucharist";
import EucharistImage from "@assets/sacrament/eucharystia.webp";
import { Penance } from "@components/articles/sacrament/Penance";
import PenanceImage from "@assets/sacrament/spowiedz.webp";
import { Anointing } from "@components/articles/sacrament/Anointing";
import AnointingImage from "@assets/sacrament/namaszczenie-chorych.webp";
import { Priesthood } from "@components/articles/sacrament/Priesthood";
import PriesthoodImage from "@assets/sacrament/Kaplanstwo.webp";
import { Marriage } from "@components/articles/sacrament/Marriage";
import MarriageImage from "@assets/sacrament/Malzenstwo.webp";

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
