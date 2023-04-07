import React from "react";
import Church from "@assets/main/church.webp";
import { Card } from "@components/ui/Card";
import { CHURCH_HISTORY } from "@data/page-constants.data";
import { Divider } from "@components/ui/Divider";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import { QuoteCard } from "@components/QuoteCard/QuoteCard";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";

export const MainPage = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <BackgroundImage />
        <BackgroundImgHeader title="Parafia Rzymskokatolicka św. Maksymiliama M. Kolbego w Gruszowie Wielkim" />
        <Card src={Church} alt="church" left>
          <h2>Historia Kościoła</h2>
          <p>{CHURCH_HISTORY}</p>
        </Card>
        <Divider />
        <QuoteCard />
      </div>
    </>
  );
};
