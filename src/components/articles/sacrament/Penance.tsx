import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import React from "react";
import { InfoAlert } from "@components/InfoAlert";

export const Penance = () => {
  return (
    <>
      <ArticleImgHeader title="Pokuta" />
      <div className="p-4 text-left">
        <blockquote>
          Chrystus ustanowił sakrament pokuty dla wszystkich grzeszników w
          Kościele, a przede wszystkim dla tych, którzy po chrzcie popełnili
          grzech ciężki i w ten sposób utracili łaskę chrztu oraz zadali ranę
          komunii kościelnej. Sakrament pokuty daje im nową możliwość nawrócenia
          się i odzyskania łaski usprawiedliwienia. Ojcowie Kościoła
          przedstawiają ten sakrament jako «drugą deskę (ratunku) po rozbiciu,
          jakim jest utrata łaski».
        </blockquote>
        <InfoAlert className="w-full">
          Z Sakramentu Pokuty w naszej parafii można skorzystać w czasie każdej
          Mszy św. Jedynie w czasie wizyty duszpasterskiej wieczorem dyżuruje
          jeden ksiądz.
        </InfoAlert>

        <h2>COMIESIĘCZNA SPOWIEDŹ PRZED I PIĄTKIEM:</h2>
        <ul>
          <li>
            <span className="font-bold">
              dzieci ze szkoły podstawowej oraz młodzież z gimnazjum
            </span>
            – w I piątek od 15:45
          </li>
          <li>
            <span className="font-bold">młodzież z klas VIII</span>– w czwartek
            przed I piątkiem 16:00-16:30
          </li>
          <li>
            <span className="font-bold">
              młodzież ze szkół ponadgimnazjalnych
            </span>
            – w I piątek o 20:00
          </li>
          <li>
            <span className="font-bold">starsi</span>– w środę i czwartek przed
            I piątkiem od 17:45 oraz w I piątek podczas Mszy św. o 6:00; 6:30;
            7.00; 8:00; 18:00
          </li>
        </ul>
      </div>
    </>
  );
};
