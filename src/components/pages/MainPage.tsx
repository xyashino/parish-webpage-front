import React from "react";
import Church from "@assets/main/church.png";
import { QuoteCard } from "../QuoteCard/QuoteCard";
import { Card } from "@components/ui/Card";
import { CHURCH_HISTORY } from "@data/main-page-constants.data";
import { Divider } from "@components/ui/Divider";
import { BackgroundImage } from "@components/ui/BackgroundImage";

export const MainPage = () => {
  return (
    <>
      <BackgroundImage divider />
      <div className="flex w-full flex-col items-center">
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
