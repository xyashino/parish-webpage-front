import React from "react";
import Image from "@assets/main/kolbe.webp";
import { Quote } from "./Quote";
import { getRandomInt } from "@utils/random-number";
import { Card } from "@components/ui/Card";
import { AUTHOR, QuotesData } from "@data/page-constants.data";

export const QuoteCard = () => {
  const quote = QuotesData[getRandomInt(0, QuotesData.length - 1)];

  return (
    <Card src={Image} alt={AUTHOR}>
      <Quote quote={quote} />
      <p className="text-md mt-2 text-center  font-bold uppercase italic text-primary">
        {AUTHOR}
      </p>
    </Card>
  );
};
