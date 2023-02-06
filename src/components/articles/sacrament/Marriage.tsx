import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import React from "react";
import { InfoAlert } from "@components/InfoAlert";
import { ExpandableContent } from "@components/ExpandableContent";
import { Divider } from "@components/ui/Divider";

export const Marriage = () => {
  return (
    <>
      <ArticleImgHeader title="Małżeństwo" />
      <div className="flex flex-col items-center p-4">
        <blockquote>
          Przymierze małżeńskie, przez które mężczyzna i kobieta stanowią między
          sobą wewnętrzną wspólnotę życia i miłości, powstało z woli Stwórcy,
          który wyposażył je we własne prawa. Z natury jest ono nastawione na
          dobro współmałżonków, a także na zrodzenie i wychowanie potomstwa.
          Małżeństwo ochrzczonych zostało podniesione przez Chrystusa Pana do
          godności sakramentu.
        </blockquote>
        <InfoAlert>
          <p className="uppercase">
            na spotkanie należy umówić się wcześniej dzwoniąc na numer:{" "}
            <span className="font-bold">604 132 122</span>
          </p>
        </InfoAlert>

        <h2 className="text-3xl">
          Czynności prawno-duszpasterskie związane z sakramentem małżeństwa:
        </h2>
        <Divider />
        <ExpandableContent title="Kiedy i do kogo zgłaszają się narzeczeni?">
          <h2>Kiedy?</h2>
          <p>
            Obydwoje narzeczeni mają obowiązek zgłosić się do Kancelarii
            Parafialnej (w naszej parafii do Kancelarii Małżeńskiej){" "}
            <span className="font-bold">
              najpóźniej 3 miesiące przed planowaną datą ślubu
            </span>
            w celu przeprowadzenia rozmowy i spisania protokołu
            prawno-kanonicznego. W przeciwnym razie trzeba prosić Kurię
            Diecezjalną o dyspensę od zachowania trzech miesięcy bezpośredniego
            przygotowania do zawarcia sakramentu małżeństwa.
          </p>
          <h2>Do którego proboszcza należy się zgłosić? </h2>
          <p>
            Prawo kanoniczne postanawia, że narzeczeni mają się zgłosić do
            proboszcza parafii, w której jedno z nich ma pobyt stały, albo pobyt
            tymczasowy. Narzeczeni pochodzący z różnych parafii sami ustalają,
            gdzie będzie brany ślub, a tym samym i to, do którego z proboszczów
            udadzą się celem załatwienia formalności. Dawny polski zwyczaj mówi
            o załatwianiu tych spraw w parafii narzeczonej i jeżeli nie ma
            poważniejszych racji, zachęcamy, aby ten zwyczaj respektować.
          </p>
        </ExpandableContent>

        <ExpandableContent title="Po co narzeczeni zgłaszają się do Proboszcza?">
          <p className="text-xl">
            Potrzebne jest urzędowe stwierdzenie, ze strony Kościoła, czy
            kandydaci odpowiadają warunkom stawianym przez Kościół by mógł
            zaistnieć Sakrament Małżeństwa. Tzn., czy:
          </p>
          <ul className="list-inside list-disc font-bold uppercase">
            <li>są stanu wolnego,</li>
            <li>nie mają żadnych przeszkód małżeńskich,</li>
            <li>
              odpowiadają wszystkim wymogom, jakie stawia prawo, by małżeństwo
              było zawarte ważnie i godziwi
            </li>
          </ul>
        </ExpandableContent>

        <ExpandableContent title="Co mają przynieść?">
          <ul className="list-inside list-disc">
            <li>Dowody osobiste.</li>
            <li>
              Metryki chrztu (niedawno wydane). Ważność metryki potrzebnej do
              ślubu wynosi sześć miesięcy, licząc od daty wystawienia do daty
              ślubu. Metrykę wybieramy osobiście w parafii, w której zostaliśmy
              ochrzczeni. Metrykę może odebrać w imieniu zainteresowanej osoby
              inna pełnoletnia osoba (np. rodzic), jeżeli przedstawi w
              kancelarii parafialnej pisemne pełnomocnictwo sporządzone zgodnie
              z zasadami prawa cywilnego (wzory można łatwo znaleźć w
              internecie) – ma ono zawierać miejsce i datę wystawienia,
              własnoręczny podpis osoby udzielającej pełnomocnictwa oraz jej
              dane). Jeżeli ktoś został ochrzczony w parafii, w której spisywany
              jest protokół przedślubny, nie przedkłada metryki chrztu.
            </li>
            <li>
              Wdowiec i wdowa przedkładają świadectwo zgonu współmałżonka.
            </li>
            <li>Świadectwa nauki religii z ostatniej klasy szkoły średniej.</li>
            <li>
              Dokumenty z Urzędu Stanu Cywilnego, które są potwierdzeniem stanu
              wolnego i brakiem przeszkód od strony cywilnej. Dokumenty te są
              podpisywane podczas ceremonii zawierania Sakramentu Małżeństwa.
              Narzeczeni muszą sami zadbać, aby te dokumenty do parafii
              dostarczyć (zob. zakładka „Do godziwego zawarcia małżeństwa…”).
            </li>
            <li>
              Świadectwa katechizacji przedmałżeńskiej (tzw. „Kurs
              przedmałżeński”). Kurs ten jest wymagany do zawarcia Sakramentu
              Małżeństwa i trzeba wcześniej zatroszczyć się o jego ukończenie.
            </li>
          </ul>
        </ExpandableContent>
        <ExpandableContent title="Treść rozmowy – o co ksiądz pyta?">
          <p>
            Jest pewien zestaw pytań, które kapłan stawia wszystkim,
            załatwiającym przyszły ślub. Pytania te znajdują się w specjalnym
            formularzu, który nazywa się protokołem kanonicznego badania
            narzeczonych.
          </p>
        </ExpandableContent>

        <ExpandableContent title="Co narzeczeni otrzymują i co załatwiają? PORADNIA RODZINNA">
          <h2>Skierowanie do Katolickiej Poradni Rodzinnej</h2>
          <p>
            W naszej parafii poradnia ta znajduje się w budynku katechetycznym
            na I piętrze (tam, gdzie sklep Biblos). W Poradni odbywają się trzy
            spotkania:
          </p>
          <ul className="list-inside list-disc">
            <li>
              {" "}
              <span className="font-bold">pierwsze</span> – wspólne dla
              wszystkich par, które przyjdą, odbywa się w każdy I i III czwartek
              miesiąca o godz. 17.00 (należy umówić się telefonicznie);
            </li>
            <li>
              {" "}
              <span className="font-bold">drugie i trzecie </span> –
              indywidualne. Na to spotkanie trzeba się umówić na pierwszym
              spotkaniu.
            </li>
          </ul>
          <h2>Skierowanie na Dzień Skupienia</h2>
          <p>
            Dzień Skupienia dla narzeczonych w Mielcu jest w każdą I niedzielę
            miesiąca o godz. 14.00 w Mielcu, w parafii pw. Trójcy Świętej.
          </p>
          <h2>Kartkę do spowiedzi</h2>
          <p>
            Narzeczeni powinni odbyć dwie spowiedzi. Pierwszą zaraz po daniu na
            zapowiedzi – powinna to być spowiedź z całego dotychczasowego życia.
            Drugą spowiedź odbywają w dzień lub w przeddzień ślubu (lub
            wcześniej – lecz tak, by w łasce uświęcającej przystąpić do
            Sakramentu Małżeństwa).
          </p>
          <h2>Formularz o wygłoszenie zapowiedzi</h2>
          <p>
            Jeżeli jedna ze stron jest z innej parafii, otrzymuje formularz o
            wygłoszenie zapowiedzi w parafii z której pochodzi. Zanosi ten
            formularz do parafii, w której mieszka, a po wygłoszeniu zgłasza się
            tam po odbiór wygłoszonych zapowiedzi i dokument ten przynosi do
            parafii w której był sporządzony protokół.
          </p>
          <h2>Powtórne spotkanie w kancelarii</h2>
          <p>
            Po skompletowaniu wyżej wymienionych dokumentów narzeczeni zgłaszają
            się powtórnie do kancelarii, gdzie był spisywany protokół. Zostaje
            uzupełniona druga część protokołu i omawia się szczegóły dotyczące
            samego obrzędu ślubu. Jeżeli narzeczeni chcą, można wtedy wystawić
            licencję na udzielenie ślubu w innej parafii.
          </p>
        </ExpandableContent>

        <ExpandableContent title="Fotografowanie i filmowanie w czasie ślubu">
          <p>
            Jest możliwe, jeśli fotograf lub operator przedstawi wcześniej
            kapłanowi dokument (legitymację) ukończenia Kursu fotografowania i
            filmowania podczas celebracji liturgicznych.
          </p>
        </ExpandableContent>
        <ExpandableContent title="Terminy kursów przedmałżeńskich w parafiach mieleckich">
          <p className="font-bold">
            Prosimy słuchać w ogłoszeniach duszpasterskich kiedy dokładnie
            rozpoczynają się kursy lub sprawdzać na stronach internetowych
            wspomnianych parafii.
          </p>
          <p>
            Można skorzystać również z tzw.
            <a href="#" className="uppercase text-accent">
              {" "}
              weekendowych kursów
            </a>
            <span>
              {" "}
              organizowanych w ośrodkach rekolekcyjnych w naszej diecezji.{" "}
            </span>
          </p>
        </ExpandableContent>
      </div>
    </>
  );
};
