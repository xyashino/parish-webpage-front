import React from "react";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import { ExpandableContent } from "@components/ui/ExpandableContent";
import { TextCard } from "@components/ui/TextCard";

export const Rosary = () => {
  return (
    <>
      <BackgroundImgHeader title="Roże Różancowe" />
      <div className="p-4 p-2 text-left">
        <TextCard>
          <h2 className="text-base-100">RÓŻE RÓŻAŃCOWE W NASZEJ PARAFII:</h2>
          <ul>
            <li>
              <p>
                <span className="font-bold">ŻEŃSKIE:</span> 97 RÓŻ – 1940
                CZŁONKIŃ
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">MĘSKIE:</span> 912 RÓŻ – 240
                CZŁONKÓW
              </p>
            </li>
          </ul>
        </TextCard>
        <div className="flex w-full flex-wrap justify-center">
          <ExpandableContent title="Czym są Róże Różańcowe?">
            <p>
              Róże Różańcowe są grupami modlitewnymi. Róża różańcowa polega na
              codziennym odmawianiu we własnym zakresie jednej przydzielonej
              tajemnicy różańca.
            </p>
          </ExpandableContent>
          <ExpandableContent title="Ile osób może należeć do Róży?">
            <p>
              Róża liczy 20 osób – w ten sposób, jeśli każda z osób odmawia inną
              tajemnicy, wszyscy razem jako wspólnota odmawiają każdego dnia
              cały różaniec.
            </p>
          </ExpandableContent>
          <ExpandableContent title="O co modlą się Róże?">
            <p>
              Róże odmawiają codziennie różaniec w intencjach ogólnych,
              najczęściej miesięcznych, dotyczących całego kościoła, parafii,
              misji, diecezji itp., lub w intencjach osobistych, za członków
              Róży, za osoby, które prosiły o modlitwę lub sprawy, które
              polecono ich intencji.
            </p>
            <p>
              Róże Różańcowe są nie tylko wspólnotą modlitewną ale i ludzką.
              Wspólnota ludzka, to wzajemne wspieranie się członków Róży w
              codziennych sprawach zarówno osobistych czy rodzinnych, jak też w
              działaniu na rzecz wspólnoty parafialnej.
            </p>
          </ExpandableContent>
          <ExpandableContent title="Jaką funkcję pełni zelator?">
            <p>
              Róży przewodzi <span className="font-bold">zelatorka</span> lub
              <span className="font-bold">zelator</span>, którzy są
              odpowiedzialni za zmianę tajemnic, kompletność grupy, a także za
              systematyczne odmawianie całego różańca przez członków i
              członkinie Róży.
            </p>
          </ExpandableContent>
        </div>
      </div>
    </>
  );
};
