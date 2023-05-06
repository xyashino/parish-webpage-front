import React from "react";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { ArticleList } from "@components/Article/ArticleList";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/parafia-proboszczowie.webp";
export const ParishPriestsPage = () => {
  return (
    <WhiteBoard article>
      <BackgroundImage image={Image} />
      <BackgroundImgHeader title="Proboszczowie w historii parafii:" />
      <ArticleList order className="text-2xl text-black">
        <li className="border-b-2 p-4 ">
          <span className="font-bold ">Ks. Ferdynand Prymas:</span>
          <span className="italic oldstyle-nums"> 1979 – 1983</span>
        </li>
        <li className="border-b-2 p-4 ">
          <span className="font-bold">Ks. Leszek Dudziak:</span>
          <span className="italic oldstyle-nums"> 1983 – 1991</span>
        </li>
        <li className="border-b-2 p-4 ">
          <span className="font-bold"> Ks. Stanisław Duszkiewicz:</span> 1991 –
          1999
        </li>
        <li className="border-b-2 p-4 ">
          <span className="font-bold"> Ks. Stanisław Żurat: </span>
          <span className="italic oldstyle-nums">1999 – 2015</span>
        </li>
        <li className="border-b-2 p-4 ">
          <span className="font-bold"> Ks. Józef Szczęśniak: </span>
          <span className="italic oldstyle-nums">2015 – 2022</span>
        </li>
        <li className="border-b-2 p-4 ">
          <span className="font-bold"> Ks. Marek Synowiec:</span>
          <span className="italic oldstyle-nums"> od 2022</span>
        </li>
      </ArticleList>
    </WhiteBoard>
  );
};
