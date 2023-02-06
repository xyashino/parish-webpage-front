import React from "react";
import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import { TextCard } from "@components/ui/TextCard";

export const Priesthood = () => {
  return (
    <>
      <ArticleImgHeader title="Kapłaństwo" />
      <div className="text-left ">
        <blockquote>
          Sakrament święceń jest sakramentem, dzięki któremu posłanie,
          powierzone przez Chrystusa Apostołom, nadal jest spełniane w Kościele
          aż do końca czasów. Jest to więc sakrament posługi apostolskiej.
          Obejmuje on trzy stopnie: episkopat, prezbiterat i diakonat.
        </blockquote>
        <TextCard>
          <p className="font-bold italic">
            Jeżeli w swym sercu słyszysz głos Bożego powołania…
          </p>
          <p className="font-bold italic">
            Jeżeli chcesz poświęcić swoje życie, aby służyć Kościołowi, głosząc
            Dobrą Nowinę w naszej diecezji i na całym świecie…
          </p>
          <p className="font-bold italic">
            Nie zwlekaj! Skontaktuj się z Twoim księdzem katechetą lub
            proboszczem!
          </p>
        </TextCard>

        <h2>
          Warunki wstąpienia na drogę formacji seminaryjnej lub zakonnej
          przygotowującej do przyjęcia sakramentu święceń Kapłańskich:
        </h2>
        <ul>
          <li>
            Rozeznanie charyzmatu powołania – w jaki sposób chciałbym całkowicie
            oddać się na służbę Bogu i ludziom? (zarówno kapłaństwo diecezjalne,
            jak i każdy zakon ma specyficzny charakter posługiwania ludziom
            nazywany charyzmatem).
          </li>
          <li>Ukończenie szkoły średniej i zdobycie świadectwa maturalnego.</li>
          <li>
            Stan zdrowia fizycznego i psychicznego pozwalający na posługiwanie
            innym. (badania lekarskie).
          </li>
          <li>
            Opinia księdza proboszcza własnej parafii oraz katechety uczącego
            religii w ostatniej klasie.
          </li>
          <li>Wolność od wcześniejszych ślubów lub zobowiązań.</li>
        </ul>
        <a href="https://www.wsd.tarnow.pl/">
          Przekierwanie na Stronę Wyższego Seminiarium Duchowego w Tarnowie
        </a>
      </div>
    </>
  );
};
