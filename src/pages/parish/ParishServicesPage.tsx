import React from "react";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { TextCard } from "@components/ui/TextCard";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/nabozenstwa.webp";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";

export const ParishServicesPage = () => {
  return (
    <WhiteBoard article>
      <BackgroundImage image={Image} />
      <BackgroundImgHeader title="Nabożeństwa - Msze św." />
      <TextCard>
        <p className="text-2xl font-bold">
          Niedziele i uroczystości obowiązkowe:
        </p>
        <p className="text-xl font-bold ordinal oldstyle-nums">
          7<sup>00</sup> 9<sup>00</sup> 11<sup>00</sup>
        </p>
      </TextCard>
      <TextCard>
        <p className="text-xl font-bold">Dni powszednie:</p>
        <p>
          <span className="text-lg italic">
            poniedziałek, wtorek, czwartek:
          </span>
          <span className="mx-2 text-xl font-bold">
            6<sup>30</sup>
          </span>
        </p>
        <p>
          <span className="text-lg italic">środa, piątek, sobota:</span>
          <span className="mx-2 text-xl font-bold">
            18<sup>00</sup>
          </span>
        </p>
      </TextCard>
      <TextCard>
        <p className="text-xl font-bold">Odpust parafialny:</p>
        <p className="text-xl italic">Pierwsza Niedziela po 14 sierpnia</p>
      </TextCard>
    </WhiteBoard>
  );
};
