import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import { InfoAlert } from "@components/InfoAlert";
import React from "react";

export const Anointing = () => {
  return (
    <>
      <ArticleImgHeader title="Namaszczenie chorych" />
      <div className="p-4 text-left text-xl">
        <blockquote>
          Choruje ktoś wśród was? Niech sprowadzi kapłanów Kościoła, by się
          modlili nad nim i namaścili go olejem w imię Pana. A modlitwa pełna
          wiary będzie dla chorego ratunkiem i Pan go podźwignie, a jeśliby
          popełnił grzechy, będą mu odpuszczone.
        </blockquote>
        <p>
          Z Sakramentu Namaszczenia Chorych w naszej parafii można skorzystać z
          okazji <span className="font-bold"> I Piątku miesiąca</span>, po
          uprzednim zgłoszeniu chorego w kancelarii parafialnej.
        </p>

        <InfoAlert className="w-full">
          W nagłych przypadkach o każdej porze dnia i nocy, dzwoniąc na telefon
          księdza dyżurnego 507 577 910 lub domofonem!
        </InfoAlert>

        <p>
          Sakramentu namaszczenia chorych udziela się osobom chorym, udającym
          się na operację, będącym w podeszłym wieku, a także w ostatniej
          godzinie życia. Tak jak pozostałe sakramenty, tak i sakrament
          namaszczenia przeznaczony jest wyłącznie dla żyjących! Po stwierdzeniu
          zgonu kapłan nie może go już udzielić.
        </p>
        <h2>
          Na czas udzielania sakramentu chorych: spowiedzi, Komunii św. i
          namaszczenia olejami św. w mieszkaniu chorego koniecznie należy
          przygotować:
        </h2>
        <ul>
          <li>stół nakryty białym obrusem;</li>
          <li>postawić na nim krzyż, dwie świece;</li>
          <li>naczynie z wodą święconą i kropidło;</li>
          <li>
            szklankę letniej, przegotowanej wody jeśli chory ma problemy z
            przełykaniem;
          </li>
          <li>watę i talerzyk.</li>
        </ul>
        <p>
          Gdy kapłan przybędzie z sakramentami, należy zgromadzić wszystkich
          obecnych na wspólną modlitwę. W czasie spowiedzi chorego wyjść do
          innego pokoju i wspólnie odmawiać różaniec, koronkę do Bożego
          miłosierdzia lub śpiewać religijne pieśni.
        </p>
      </div>
    </>
  );
};
