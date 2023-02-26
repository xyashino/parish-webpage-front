import React from "react";
import { Divider } from "@components/ui/Divider";
import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import { ArticleList } from "@components/Article/ArticleList";
export const Baptism = () => {
  return (
    <>
      <ArticleImgHeader title="Chrzest" />
      <div className="p-4 text-left">
        <blockquote className="upperase ">
          Idźcie więc i nauczajcie wszystkie narody,udzielając im chrztu w imię
          Ojca i Syna, i Ducha Świętego. Uczcie je zachowywać wszystko, co wam
          przykazałem. A oto Ja jestem z wami przez wszystkie dni, aż do
          skończenia świata.
          <br />
          (Mt 28, 19-20)
        </blockquote>

        <Divider />

        <h2 className="text-3xl">
          Udzielanie sakramentu Chrztu świętego w naszej parafii:
        </h2>
        <ArticleList order>
          <li>
            Sakrament chrztu św. jest udzielany w drugą i czwartą niedzielę
            miesiąca na Mszy św. o godz. 11<sup>00</sup>.
          </li>
          <li>
            Zgłaszając dziecko do chrztu św. w kancelarii parafialnej należy
            przedstawić:
            <ArticleList>
              <li>dowody osobiste rodziców;</li>
              <li>akt urodzenia dziecka z Urzędu Stanu Cywilnego</li>
              <li>akt urodzenia dziecka z Urzędu Stanu Cywilnego</li>
              <li>
                dane rodziców chrzestnych (imiona i nazwiska, adresy
                zamieszkania).
              </li>
            </ArticleList>
          </li>
          <li>
            Dziecko do chrztu św. mogą zapisać jedynie rodzice lub jeden z
            rodziców.
          </li>
          <li>
            Jeżeli rodzice dziecka nie mieszkają na terenie naszej parafii, mogą
            zapisać dziecko do chrztu św., ale za pisemną zgodą swojego
            proboszcza
          </li>
          <li>
            Rodzice chrzestni spoza naszej parafii powinni posiadać
            zaświadczenie od proboszcza własnej parafii, zawierające informację,
            że są praktykującymi katolikami.
          </li>
          <li>
            Przed chrztem zarówno rodzice (o ile nie żyją w związku
            niesakramentalnym), jak i rodzice chrzestni powinni przystąpić do
            spowiedzi św., aby w czasie Eucharystii przystąpić do Komunii św.,
          </li>
          <li>
            W dniu chrztu św. należy przybyć do zakrystii 15 minut przed
            rozpoczęciem Mszy św. w celu dopełnienia formalności (kartki od
            spowiedzi rodziców i chrzestnych, podpisy w Księdze Chrztów).
          </li>
          <li>
            Przychodząc na Mszę św. chrzcielną należy mieć ze sobą świecę
            chrzcielną oraz białą szatę dla dziecka.
          </li>
          <li>
            Warto, aby imię nadawane dziecku było imieniem świętego lub
            błogosławionego, aby dziecko miało swojego patrona i orędownika u
            Boga.
          </li>
        </ArticleList>

        <Divider />

        <h2 className="text-3xl">Kto może być rodzicem chrzestnym?:</h2>
        <p className="text-left text-xl">
          Pierwszym i najważniejszym obowiązkiem chrzestnego jest pomoc rodzicom
          w chrześcijańskim wychowaniu swojego dziecka. Dlatego też Kościół, w
          trosce o dobro ochrzczonego wyznacza pewne warunki:
        </p>
        <ArticleList order>
          <li>
            Do przyjęcia zadania chrzestnego może być dopuszczony ten, kto jest
            wyznaczony przez przyjmującego chrzest albo przez jego rodziców.
          </li>
          <li>Ukończył szesnaście lat.</li>
          <li>
            Jest katolikiem, bierzmowanym i przyjął już sakrament Najświętszej
            Eucharystiioraz prowadzi życie zgodne z wiarą i odpowiadające
            funkcji, jaką ma pełnić.
          </li>
          <li>Jest wolny od jakiejkolwiek kary kanonicznej.</li>
          <li>Nie jest ojcem lub matką przyjmującego chrzest.</li>
        </ArticleList>

        <Divider />

        <h2 className="text-3xl">Rodzicami chrzestnymi nie mogą być:</h2>
        <ArticleList order>
          <li>Osoby niewierzące lub innej wiary</li>
          <li>Osoby &quot;niepraktykujące&quot;</li>
          <li>Żyjący na kontrakcie cywilnym lub bez żadnego ślubu</li>
          <li>Nie bierzmowani i nie uczestniczący w katechezie szkolnej</li>
          <li>Prowadzący gorszący tryb życia</li>
        </ArticleList>

        <Divider />

        <blockquote className="mb-8 text-center text-xl">
          &quot;Niektórzy myślą: &quot;ale po co chrzcić dziecko, które tego nie
          rozumie? Poczekajmy aż dorośnie, zrozumie i samo poprosi o
          chrzest&quot;. Ale to oznacza brak ufności w Ducha Świętego. Kiedy
          chrzcimy dziecko,wchodzi do niego Duch Święty i to on sprawia, że
          rosną w nim cnoty chrześcijańskie, które potem rozkwitną. Zawsze
          należy dać szansę wszystkim dzieciom na to,aby miały w sobie Ducha
          Świętego, który będzie je prowadził w życiu&quot;.
          <br />
          <a
            className="my-4 p-2 text-2xl italic"
            target="_blank"
            href="https://pl.wikipedia.org/wiki/Franciszek_(papie%C5%BC)"
            rel="noreferrer"
          >
            Ojciec Święty Franciszek
          </a>
        </blockquote>
      </div>
    </>
  );
};
