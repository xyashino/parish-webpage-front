import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import React from "react";
import { TextCard } from "@components/ui/TextCard";

export const MarianService = () => {
  return (
    <>
      <BackgroundImgHeader title="Dziweczęca służba maryjna" />
      <div className="p-4 p-2 text-left">
        <h2 className="w-full text-center font-bold">
          DZIEWCZĘCA SŁUŻBA MARYJNA
        </h2>
        <ul>
          <li>
            <p>Dziewczęca – Dla dziewcząt</p>
          </li>
          <li>
            <p>Służba – Jesteśmy dla innych</p>
          </li>
          <li>
            <p>Maryjna – Ponieważ to Ona jest naszym wzorem</p>
          </li>
        </ul>
        <h2 className="w-full text-center font-bold">NASZE PRZYWILEJE</h2>
        <p>
          Co niedzielę na Mszy św. dla dzieci stoimy w niebieskich pelerynkach,
          czytamy modlitwę wiernych oraz uczestniczymy w procesji z darami. Na
          spotkaniach poznajemy różne aspekty naszej wiary oraz bawimy się.
        </p>
        <p>
          8 grudnia jest nasze święto, podczas którego przyjmujemy nowe
          dziewczynki. Dostają one cudowny medalik i otrzymują drugi stopień
          DSM.
        </p>
        <TextCard>
          <h3 className="w-full text-center font-bold text-base-100">
            NASZE OBOWIĄZKI
          </h3>
          <ul className="font-bold">
            <li>
              <p>Przyjaźń z Jezusem</p>
            </li>
            <li>
              <p>Posłuszeństwo</p>
            </li>
            <li>
              <p>Wspólnota</p>
            </li>
            <li>
              <p>Ofiara</p>
            </li>
            <li>
              <p>Radość</p>
            </li>
          </ul>
        </TextCard>
        <h2 className="w-full text-center font-bold">Symbolika:</h2>
        <p>
          Kolor biały i lilia to symbol niepokalanego poczęcia i czystości
          Maryi. Kolor złoty i korona to symbol godności królewskiej. Krzyż jest
          symbolem Jezusa przypomina o udziale Maryi w ofierze Boskiego Syna.
          Kolor niebieski to symbol niewinność i przypomina o Wniebowzięciu
          Maryi.
        </p>
        <h2 className="w-full text-center font-bold">DSM W NASZEJ DIECEZJI</h2>
        <p>
          W parafiach Diecezji Tarnowskiej jest obecnie ponad 150 grup
          Dziewczęcej Służby Maryjnej. Tworzy je ponad 5000 dziewcząt. Księżom
          odpowiedzialnym za formację dziewcząt, należących do DSM pomagają
          przewodniczki – przyjmowane do tej posługi po ukończeniu szkolenia
          podczas kursów formacyjnych, prowadzonych przez Duszpasterstwo
          Młodzieży Kurii Diecezjalnej w Tarnowie.
        </p>
      </div>
    </>
  );
};
