import React from "react";
import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import { Divider } from "@components/ui/Divider";
import { ArticleList } from "@components/Article/ArticleList";

export const Confirmation = () => {
  return (
    <>
      <ArticleImgHeader title="Bierzmowanie" />
      <div className="p-4 text-left">
        <blockquote>
          <p>Weźmjicie Ducha świętego… (J 20,22)</p>
          <p>
            A Pocieszyciel Duch święty, którego Ojciec pośle w moim imieniu… (J
            14, 26)
          </p>
          <p>
            …gdy Duch święty stąpi na was otrzymacie jego moc i będziecie moimi
            świadkami (Dz. 1,8)
          </p>
        </blockquote>
        <Divider />
        <h2>Przygotowanie do sakramentu Bierzmowania w naszej parafii:</h2>
        <ArticleList order>
          <li>
            Przygotowanie do sakramentu bierzmowania rozpoczyna się w siódmej
            klasie szkoły podstawowej i jest zwieńczone przyjęciem sakramentu
            bierzmowania przez uczniów w klasie ósmej.
          </li>
          <li>
            Bierzmowanie jest sakramentem wiary, stąd wiara kandydata jest
            podstawowym kryterium dopuszczenia do bierzmowania. Wiara ta wyraża
            się:
            <ArticleList>
              <li>w świadomej deklaracji przyjęcia sakramentu;</li>
              <li>
                w systematycznym i przykładnym uczestnictwie w lekcjach religii
                w szkole, i spotkaniach formacyjnych przy parafii;
              </li>
              <li>
                w praktykowaniu życia religijnego: m.in. w uczestnictwie w
                niedzielnej i świątecznej Mszy św., przystępowaniu z okazji
                pierwszych piątków miesiąca do sakramentu pokuty i pojednania
                oraz Komunii świętej w tym dniu, w udziale w miarę możliwości w
                nabożeństwach okresowych (nabożeństwach różańcowych, Gorzkich
                Żali, drodze krzyżowej, nabożeństwach majowych i fatimskich);
              </li>
              <li>w nienagannej postawie religijno-moralnej;</li>
              <li>w pozytywnie zdanym egzaminie;</li>
            </ArticleList>
          </li>
        </ArticleList>
        <Divider />
        <h2>Plan przygotowania do bierzmowania:</h2>
        <h3>Klasa siódma:</h3>
        <ArticleList>
          <li>
            <span className="font-bold">W szkole – </span> przygotowanie do
            egzaminu z wiedzy religijnej na podstawie Katechizmu dla
            bierzmowanych, zwieńczone egzaminem składanym przed dekanalnym
            wizytatorem nauki religii w obecności rodziców i księdza proboszcza.
          </li>
          <li>
            <span className="font-bold">W parafii – </span> udział w pierwszych
            piątkach miesiąca.
          </li>
        </ArticleList>
        <h3>Klasa ósma:</h3>
        <ArticleList>
          <li>
            <span className="font-bold">W szkole – </span>cykl katechez
            okolicznościowych przygotowujących do sakramentu bierzmowania.
          </li>
          <li>
            <span className="font-bold">W parafii – </span> udział w pierwszych
            piątkach miesiąca oraz spotkaniach formacyjnych w ustalonych
            terminach.
          </li>
        </ArticleList>
        <Divider />
        <h2>Imię – Patron bierzmowania:</h2>
        <p>
          Podkreślając ścisły związek pomiędzy chrztem świętym a bierzmowaniem
          zaleca się zachowanie imienia chrzcielnego jako imienia z
          bierzmowania. Uzasadnieniem zmiany imienia z chrztu świętego na inne
          jest przede wszystkim brak związku tego imienia z chrześcijańskim
          patronem. Przy wyborze imienia nie można kierować się jego
          atrakcyjnością, lecz świadectwem życia oraz wartości, które
          propagowali wybrani święci lub błogosławieni. Kandydaci powinni dobrze
          zapoznać się z życiorysem swojego patrona oraz zatwierdzić swój wybór
          u swojego księdza katechety.
        </p>

        <Divider />
        <h2>Świadek bierzmowania:</h2>
        <p>
          Zaleca się, aby świadkiem bierzmowania był ktoś z rodziców
          chrzestnych, przy czym powinny to być osoby wierzące i praktykujące.
          Świadkiem może być osoba, która ukończyła 16. rok życia, jest
          katolikiem wierzącym i praktykującym oraz przyjęła sakramenty
          inicjacji chrześcijańskiej. Świadek, który nie pochodzi z naszej
          parafii powinien dostarczyć zaświadczenia z własnej parafii, iż jest
          godny podjąć się tego zobowiązania.
        </p>
        <p>
          Po przyjęciu sakramentu bierzmowania bierzmowani i ich rodzice są
          zaproszeni do udziału w Diecezjalnym Dziękczynieniu za przyjęty
          sakrament przy ołtarzu papieskim w Starym Sączu.
        </p>
      </div>
    </>
  );
};
