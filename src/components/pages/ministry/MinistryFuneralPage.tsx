import React from "react";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { Header } from "@components/ui/Header";
import { TextCard } from "@components/ui/TextCard";
import { InfoAlert } from "@components/InfoAlert";

export const MinistryFuneralPage = () => {
  return (
    <WhiteBoard article className="flex flex-wrap items-center justify-center">
      <Header title="Pogrzeb" />
      <TextCard>
        <span className="font-bold">
          Zgłoszenia pogrzebu należy dokonać w kancelarii parafii zamieszkania
          osoby zmarłej, w godzinach jej pracy
        </span>
        <br />
        <span className="italic">
          (poniedziałek-piątek: 8.30-10.00; 16.30-17.45, sobota: 8.30-9.00; w
          okresie wizyty duszpasterskiej zwanej kolędą, wakacji i ferii
          popołudniu tylko w środy i piątki 16 16.30-17.45). 16.30-17.45).
        </span>
      </TextCard>
      <InfoAlert>
        DO ZAKŁADU POGRZEBOWEGO UDAJEMY SIĘ DOPIERO PO USTALENIU TERMINU
        POGRZEBU Z KSIĘDZEM W KANCELARII PARAFIALNEJ.
      </InfoAlert>
      <h2 className="text-3xl">
        Dokumenty potrzebne do pogrzebu katolickiego:
      </h2>
      <div className="px-8 pb-8 text-left">
        <ul>
          <li className="text-error">
            Akt zgonu z USC (bez tego dokumentu pogrzeb nie może się odbyć).
          </li>
          <li>
            Zaświadczenie o przyjętych sakramentach (spowiedź, Komunia św.,
            namaszczenie) wydane przez duszpasterza lub kapelana szpitala.
          </li>
          <li>
            W przypadku zmarłych, którzy mieszkali poza naszą parafią, konieczna
            jest pisemna zgoda na pogrzeb z parafii ostatniego miejsca
            zamieszkania.
          </li>
        </ul>
        <p>
          Zachęcamy rodzinę zmarłej osoby do przystąpienia do spowiedzi przed
          Mszą św. pogrzebową, a w czasie Eucharystii do przyjęcia Komunii św. w
          intencji zmarłego.
        </p>
        <p className="font-bold">
          Z chwilą pogrzebu niech nie kończy się nasza troska o osoby, które
          odeszły. Pamiętajmy o nich w codziennych modlitwach, prosząc
          Miłosiernego Boga, by darował im winy i przyjął do chwały zbawionych.
        </p>
        <p className="font-bold">
          Szczególną pomocą dla zmarłych są Msze św., modlitwy wypominkowe
          (roczne i listopadowe) oraz zwyczaj odprawiania Mszy Świętych
          gregoriańskich.
        </p>
        <p>
          Intencje Mszy św. za zmarłego można zamawiać w kancelarii i będą one
          zapisane w Księdze Intencji naszej parafii. Natomiast intencje
          zamawiane w zakrystii bezpośrednio przed pogrzebem będą przekazane do
          odprawienia poza naszą parafię (misjonarze, księża rodacy, księża
          emeryci).
        </p>
      </div>
    </WhiteBoard>
  );
};
