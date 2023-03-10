import React from "react";
import { InteractiveMenu } from "@components/ui/InteractiveMenu";
import { ArticleWrapper } from "@components/Article/ArticleWrapper";
import { SACRAMENT_MENU } from "@data/sacrament-menu.data";

export const MinistrySacramentPage = () => {
  return (
    <div className="relative bg-base-100 lg:w-4/5">
      <InteractiveMenu menu={SACRAMENT_MENU} article>
        <ArticleWrapper />
      </InteractiveMenu>
    </div>
  );
};
