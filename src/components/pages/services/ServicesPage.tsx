import { WhiteBoard } from "@components/ui/WhiteBoard";
import { TextCard } from "@components/ui/TextCard";
import { ArticleImgHeader } from "@components/Article/ArticleImgHeader";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/nabozenstwa.png";

export const ServicesPage = () => {
  return (
    <WhiteBoard article>
      <BackgroundImage image={Image} />
      <ArticleImgHeader title="Nabożeństwa - Msze św." />
      <TextCard>
        <p className="text-2xl font-bold">
          Niedziele i uroczystości obowiązkowe:
        </p>
        <p className="text-xl font-bold ordinal oldstyle-nums">
          7<sup>00</sup> 9<sup>00</sup> 11<sup>00</sup>
        </p>
      </TextCard>
      <TextCard>
        <p className="text-xl font-bold">Dni powszednie:</p>
        <p>
          <span className="text-lg italic">
            poniedziałek, wtorek, czwartek:
          </span>
          <span className="mx-2 text-xl font-bold">
            6<sup>30</sup>
          </span>
        </p>
        <p>
          <span className="text-lg italic">środa, piątek, sobota:</span>
          <span className="mx-2 text-xl font-bold">
            18<sup>00</sup>
          </span>
        </p>
      </TextCard>
      <TextCard>
        <p className="text-xl font-bold">Odpust parafialny:</p>
        <p className="text-xl italic">Pierwsza Niedziela po 14 sierpnia</p>
      </TextCard>
    </WhiteBoard>
  );
};
