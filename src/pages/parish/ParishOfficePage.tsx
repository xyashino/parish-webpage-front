import React from "react";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { TextCard } from "@components/ui/TextCard";
import { Header } from "@components/ui/Header";

export const ParishOfficePage = () => {
  return (
    <WhiteBoard className="text-xl">
      <Header title="Kancelaria parafialna" />
      <div className="p-x-12 flex flex-wrap items-center justify-around pb-6">
        <TextCard className="w-full lg:w-2/5">
          <h2 className="text-2xl font-bold">Czynna:</h2>
          <h3 className="font-light italic">
            Od <span className="font-bold">PONIEDZIAŁKU</span> do{" "}
            <span className="font-bold">PIĄTKU</span>:
          </h3>
          <p className="p-2 font-light italic">
            <span className=" font-bold">8.30 – 9.30</span> oraz
            <span className=" font-bold"> 16.30 – 17.30</span>
          </p>
        </TextCard>

        <TextCard className="indicator w-full lg:w-2/5">
          <p className="p-2 font-light italic">
            <p className="font-bold">
              W NIEDZIELE, SOBOTY, UROCZYSTOŚCI, ŚWIĘTA I PIERWSZE PIĄTKI
            </p>
            <p className="text-2xl uppercase">
              KANCELARIA PARAFIALNA NIECZYNNA
            </p>
          </p>
        </TextCard>

        <TextCard className="indicator w-full  lg:w-4/5">
          <p className="p-2 font-light italic">
            <p className="font-bold">
              KANCELARIA MAŁŻEŃSKA (przygotowanie do małżeństwa):
            </p>
            <p className="text-xl uppercase">
              <span className="font-bold">ŚRODA</span> i
              <span className="font-bold"> PIĄTEK</span> (oprócz pierwszych
              piątków) <span className="font-bold italic">19.00 – 20.00</span>
            </p>
          </p>
        </TextCard>

        <TextCard className="w-full lg:w-4/5 ">
          <h2 className="m-2 text-xl font-bold">
            WYDAWANIE DOKUMENTÓW KANCELARYJNYCH:
          </h2>
          <p className="text-lg">
            W związku z wejściem w życie (maj 2018 r.) unijnych regulacji
            prawnych tzw. <span className="font-bold uppercase">RODO </span>
            (Rozporządzenie o Ochronie Danych Osobowych) informujmy, że wszelkie
            dokumenty kancelaryjne:
          </p>
          <ul className="m-2 list-inside list-disc text-lg font-bold">
            <li>metryki chrztu</li>
            <li>zaświadczenia do pełnienia funkcji chrzestnego</li>
            <li>inne dokumenty</li>
          </ul>
          <p className="p-2 text-lg">
            <span>będą wydawane </span>
            <span className="font-bold">
              tylko osobom pełnoletnim, których dokument dotyczy
            </span>
            <span className="italic"> (po okazaniu dokumentu tożsamości).</span>
          </p>
          <h2 className="m-2 text-2xl font-bold">
            WYDAWANIE DOKUMENTÓW INNYM OSOBOM (żonie, mężowi, rodzicowi…)
          </h2>
          <p className="p-2 text-lg">
            Dokumenty może również odebrać w imieniu zainteresowanej osoby inna
            pełnoletnia osoba, jeżeli przedstawi w kancelarii parafialnej
            pisemne pełnomocnictwo. Pełnomocnictwo to nie może być jednak
            jakiekolwiek, lecz winno być sporządzone zgodnie z zasadami prawa
            cywilnego (wzory można łatwo znaleźć w internecie) – a zatem
            posiadać miejsce i datę wystawienia, własnoręczny podpis osoby
            udzielającej pełnomocnictwa oraz jej dane). Dla przykładu bez
            pisemnego pełnomocnictwa żona nie będzie już mogła odebrać dokumentu
            dla męża i odwrotnie, rodzic dla dorosłego dziecka itd.
          </p>
          <h2 className="m-2 text-2xl font-bold">
            WYDAWANIE DOKUMENTÓW DROGĄ POCZTOWĄ
          </h2>
          <p className="p-2 text-lg">
            Jeżeli jakaś osoba, która mieszka bardzo daleko np. za granicą i
            chciałaby otrzymać dokument pocztą, powinna udać się do swojego
            księdza proboszcza (ewentualnie kapłana z Polskiej Misji Katolickiej
            – jeśli mieszka za granicą), który w jej imieniu wystosuje pismo do
            naszej parafii. Po otrzymaniu pisma wystawimy dokument i odeślemy
            pocztą poleconą do tegoż kapłana, który następnie przekaże dokument
            osobie zainteresowanej.
          </p>
          <h2 className="m-2 text-2xl font-bold">
            WYDAWANIE DOKUMENTÓW OSOBOM MAŁOLETNIM
          </h2>
          <p className="p-2 text-lg">
            Dla osób małoletnich dokument odbierają tylko ich rodzice (lub
            opiekunowie prawni).
          </p>
        </TextCard>
      </div>
    </WhiteBoard>
  );
};
