import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import React from "react";
import { ExpandableContent } from "@components/ui/ExpandableContent";

export const AltarService = () => {
  return (
    <>
      <BackgroundImgHeader title="Liturgiczna słuzba ołtarza" />
      <div className="p-4 p-2 text-left text-xl">
        <h2>KIM JEST MINISTRANT?</h2>
        <p>
          <span className="font-bold uppercase">MINISTRANT –</span> to członek
          ludu Bożego, który w czasie sprawowania liturgicznych obrzędów spełnia
          posługę pomocniczą w sposób określony przepisami Kościoła. Słowo
          ministrant pochodzi z języka łacińskiego ministrare i oznacza służyć,
          pomagać. Ministrant służy kapłanowi i ludowi Bożemu, a przez to służy
          samemu Bogu.
        </p>

        <div className="flex w-full flex-wrap justify-center">
          <ExpandableContent title="KARTA ZASAD KANDYDATA (ASPIRANTA):">
            <ul>
              <li> Nigdy nie opuszczę porannej i wieczornej modlitwy.</li>
              <li>Zawsze zachowam się pobożnie i ze skupieniem w Domu Boga.</li>
              <li>Będę posłuszny wobec rodziców i przełożonych.</li>
              <li>
                Będę sumienny w wypełnianiu swoich obowiązków, zwłaszcza w
                szkole.
              </li>
              <li>
                Będę dbał o czystość swojej duszy, zwłaszcza będę unikał
                nieskromnej rozmowy, gazety, zabawy czy filmu.
              </li>
              <li>
                Będę żył w zgodzie z bliźnimi i będę unikał kłótni i sprzeczek.
              </li>
              <li>
                Będę miłował prawdę i dlatego nie splamię swoich ust kłamstwem.
              </li>
              <li>
                Będę wzorem dobroci wobec innych, będę wszystkim pomagał i
                brzydził się samolubstwem.
              </li>
              <li>
                Będę pełen radości życia i będę promieniował prawdziwą radością
                w swoim otoczeniu.
              </li>
              <li>
                Będę gorliwym apostołem i będę rozmawiał z innymi o Bogu i
                sprawach religijnych.
              </li>
            </ul>
          </ExpandableContent>
          <ExpandableContent title="KARTA ZASAD MINISTRANTA:">
            <ul>
              <li>
                Ministrant kocha Boga i dla Jego chwały wzorowo spełnia swoje
                obowiązki.
              </li>
              <li>Ministrant służy Chrystusowi w braciach.</li>
              <li>Ministrant rozwija w sobie życie Boże.</li>
              <li>
                Ministrant pracuje nad swoim charakterem i czuwa nad czystością
                duszy.
              </li>
              <li>Ministrant poznaje liturgię, szanuje liturgię i żyje nią.</li>
              <li>
                Ministrant modli się za Kościół, za Ojczyznę i służy jej
                rzetelną pracą.
              </li>
              <li>Ministrant jest dobrym synem i bratem.</li>
              <li>
                Ministrant swoją chrześcijańską postawą wnosi wszędzie prawdziwą
                radość.
              </li>
              <li>
                Ministrant przez swoją pilność i sumienność staje się przykładem
                dla innych.
              </li>
              <li>
                Ministrant podobnie jak kapłan, stara się być niejako „drugim
                Chrystusem”.
              </li>
            </ul>
          </ExpandableContent>
          <ExpandableContent title="KARTA ZASAD LEKTORA:">
            <ul>
              <li>
                Chrystus jest moim światłem i życiem oraz drogą do Ojca. Dążę do
                zjednoczenia z Nim poprzez wiarę i miłość w Słowie Ewangelii, w
                Eucharystii i w bliźnich.
              </li>
              <li>
                Niepokalana, która najlepiej słuchała Słowa Bożego i strzegła go
                jest moim ideałem i moją Matką. Rozważam Jej postawę w Różańcu,
                oddaje się Jej i naśladuję Ją.
              </li>
              <li>
                Kościół jest moim domem i moją rodziną. Chcę wzrastać coraz
                głębiej w jego braterską wspólnotę, czując się jej żywą komórką
                i pragnąc, aby objęła ona wszystkich ludzi.
              </li>
              <li>
                Chcę pielęgnować w sobie dar Nowego Życia, otrzymany na chrzcie
                świętym, którego sprawcą jest Duch Święty. Oddechem tego życia
                jest modlitwa, dlatego chcę być wierny praktyce Namiotu
                Spotkania.
              </li>
              <li>
                Zrozumiałem tajemnice osoby, która „nie może odnaleźć się w
                pełni inaczej, jak tylko poprzez bezinteresowny dar z siebie.”
                Dlatego przykazaniem mego życia jest Agape, piękna miłość,
                której wyrazem jest ofiara i krzyż.
              </li>
              <li>
                Chcąc być w pełni sobą i ukształtować w sobie Nowego Człowieka
                muszę zawsze kierować się sumieniem oświeconym Słowem Bożym.
                Wypowiadam walkę bezmyślności i nieodpowiedzialności.
              </li>
              <li>
                Chcę być wolny w dążeniu wyższych wartości, które uznałem za
                swoje. Dlatego muszę zdobywać się na odwagę płynięcia przeciw
                prądowi postawy używania i egoizmu oraz mody i opinii tworząc
                nową kulturę, w której wszystko służy wartości osoby.
              </li>
              <li>
                Na straży godności osoby postawię czystość, która nie pozwala na
                odnoszenie się do osoby jako przedmiotu, choćby tylko możliwego
                użycia. Będę dbał o czystość myśli, słów i uczynków.
              </li>
              <li>
                Wykluczam ze swego życia alkohol i tytoń. Są to bowiem złudne
                wartości zagrażające wartościom prawdziwego życia. Dla dobra
                swojego oraz w poczuciu odpowiedzialności za drugich, decyduję
                się na świadomą i dobrowolną abstynencję.
              </li>
              <li>
                Moja droga nie jest łatwą. Dlatego nie mogę i nie chcę iść nią
                samotnie, moją potrzebą i radością jest cotygodniowe spotkanie
                we wspólnocie tych, którzy chcą iść razem ze mną przy stole
                ewangelicznej rewizji życia.
              </li>
            </ul>
          </ExpandableContent>
        </div>
      </div>
    </>
  );
};
