import React from "react";

export const Quote = ({ quote }: { quote: string }) => {
  return (
    <blockquote>
      <div className="h-3 text-left text-3xl leading-tight ">“</div>
      <p className="px-5 text-center">{quote}</p>
      <div className="-mt-3 h-3 text-right text-3xl leading-tight ">”</div>
    </blockquote>
  );
};
