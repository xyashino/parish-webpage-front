import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import React from "react";
import { Divider } from "@components/ui/Divider";

export const Confirmation = () => {
  return (
    <>
      <ArticleImgHeader title="Bierzmowanie" />
      <div className="text-left text-xl">
        <p>
          Bierzmowanie jest jednym z sakramentów w Kościele katolickim. Jest to
          uroczystość, podczas której wierni otrzymują dar Ducha Świętego, co
          pozwala im na lepsze rozumienie wiary i lepsze życie według niej.
        </p>
        <p>
          Bierzmowanie jest szczególnie ważne dla osób, które przyjęły chrzest,
          ponieważ jest to chwila, w której mogą one przyjąć pełniejsze
          zaangażowanie w życie kościelne i lepsze rozumienie wiary.
        </p>
        <p>
          Sakrament bierzmowania jest udzielany przez biskupa lub przez kapłana,
          który posługuje jego imieniem, który po udzieleniu specjalnego
          błogosławieństwa namaszcza bierzmowanego olejem chrzcielnym oraz
          udziela sakramentalnego słowa.
        </p>
        <p>
          Uważamy bierzmowanie za ważny element duchowego życia, ponieważ jest
          to chwila, w której wierni mogą przyjąć dar Ducha Świętego, co pozwala
          im na lepsze rozumienie wiary i lepsze życie według niej. Jest to
          również ważny moment dla rodziny i przyjaciół bierzmowanego, ponieważ
          jest to chwila, w której oni mogą modlić się za swojego bliskiego i
          wspierać go w jego duchowym rozwoju.
        </p>
        <Divider />
        <h2>INFORMACJE OGÓLNE</h2>
        <blockquote>
          Przez przyjęcie tego sakramentu ochrzczony otrzymuje szczególną moc
          Ducha Świętego. Bierzmowanie udoskonala łaskę chrztu; jest ono
          sakramentem, który daje Ducha Świętego, aby głębiej zakorzenić nas w
          synostwie Bożym, ściślej wszczepić w Chrystusa, umocnić naszą więź z
          Kościołem, włączyć nas bardziej do jego posłania i pomóc w świadczeniu
          o wierze chrześcijańskiej słowem, któremu towarzyszą czyny.
        </blockquote>
        <h3>Zobowiązania kandydatów do bierzmowania:</h3>
        <ul>
          <li>
            w każdą niedzielę i święto pobożnie uczestniczyć w Mszy Świętej
          </li>
          <li>
            regularnie na każdy I piątek miesiąca przystępować do Sakramentu
            Pokuty
          </li>
          <li>
            starać się uzyskać jak najlepszą ocenę z religii i opanować
            obowiązujący materiał z Zielonego Katechizmu
          </li>
          <li>
            brać udział we wszystkich liturgicznych spotkaniach (nieobecność
            usprawiedliwiać przez Rodziców)
          </li>
          <li>uczestniczyć w rekolekcjach parafialnych (100% frekwencji)</li>
          <li>
            dając świadectwo wiary w miarę możliwości uczestniczyć w
            nabożeństwach: różańcowych, adwentowych roratach, Gorzkich Żalach i
            Drodze Krzyżowej, Triduum Paschalnym, nabożeństwach majowych
          </li>
          <li>odpowiednio zachowywać się w kościele oraz w szkole</li>
        </ul>
        <h3>Imię – Patron bierzmowania</h3>
        <p>
          Ze względu na fakt istotnego powiązania sakramentu bierzmowania z
          sakramentem chrztu kandydat do bierzmowania powinien zachować imię
          chrzcielne. Zwyczajowo jednak można wybrać imię Świętego Patrona,
          którego kandydat pragnie naśladować. Powinna być to osoba uznana przez
          Kościół za świętą (lub błogosławioną).
        </p>
        <h3>Świadek bierzmowania</h3>
        <p>
          Powinna to być osoba wierząca i praktykująca, która już przyjęła
          sakrament bierzmowania. Najlepiej, żeby był to ojciec chrzestny, albo
          matka chrzestna, ze względu na powiązanie tego sakramentu z chrztem.
          Nie wyklucza to jednak możliwości wyboru innych świadków. Nie mogą być
          nimi jednak rodzice (wymóg Prawa Kanonicznego).
        </p>
      </div>
    </>
  );
};
