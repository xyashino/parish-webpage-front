import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import React from "react";
import { TextCard } from "@components/ui/TextCard";

export const Caritas = () => {
  return (
    <>
      <BackgroundImgHeader title="Caritas" />
      <div className="p-4 p-2 text-left">
        <div className="text-center uppercase italic">
          <h2>PARAFIALNY ODDZIAŁ CARITAS PRZY PARAFII MBNP W GRUSZOWIE</h2>
          <p className="text-2xl font-bold text-error">
            (pomoc potrzebującym i kuchnia dla ubogich)
          </p>
        </div>
        <TextCard>
          <h3 className="w-1/2 text-base-100">Biuro czynne:</h3>
          <p>UL. KS. H. ARCZEWSKIEGO 1 (budynek katechetyczny, parter)</p>
          <p>39-300 MIELEC</p>
          <p>nr konta: 23 1240 2656 1111 0011 1636 9115</p>
          <p>Opiekun: ks. Maciej Igielski</p>
        </TextCard>
        <h3 className="w-full text-center font-bold text-error">
          1% NA CARITAS
        </h3>
        <p>
          W okresie od 1 stycznia do 30 kwietnia dokonujemy rozliczeń
          podatkowych. Polskie prawo daje nam możliwość przekazania 1% naszego
          podatku na rzecz wybranej przez nas organizacji pożytku publicznego.
        </p>
        <p>
          Wielkość naszego podatku nie ulegnie zmianie – my jedynie decydujemy o
          jego przeznaczeniu.
        </p>
        <p>
          Zwracamy się zatem z serdeczną prośbą i apelem do wszystkich, którzy
          składają zeznania podatkowe o przekazania 1% należnego podatku na cele
          realizowane przez Caritas Diecezji Tarnowskiej.
        </p>
        <p>
          Aby przekazać 1 % podatku za pośrednictwem Caritas Diecezji
          Tarnowskiej na potrzeby Parafialnego Oddziału Caritas działającego w
          naszej Parafii wystarczy tylko na zeznaniu podatkowym wpisać w
          odpowiednim miejscu numer{" "}
          <span className="font-bold text-error">KRS 0000211791</span> a w
          rubryce{" "}
          <span className="font-bold text-error">
            “Cel szczegółowy 1 %” wpisać hasło „GRUSZÓW MBNP”.
          </span>
        </p>
        <p>
          Zachęcamy gorąco do skorzystania z niego oraz wsparcia w ten sposób
          dzieł miłosierdzia prowadzonych przez nasz Parafialny Oddział Caritas.
        </p>
        <p className="w-full text-center font-bold text-accent">
          WIĘCEJ INFORMACJI NA{" "}
          <a
            className="link font-bold text-error"
            href="https://caritas.diecezja.tarnow.pl/index.php/pl/"
          >
            STRONIE INTERNETOWEJ
          </a>{" "}
          CARITAS DIECEZJI TARNOWSKIEJ:
        </p>
      </div>
    </>
  );
};
