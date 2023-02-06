import React from "react";
import { InteractiveMenu } from "@components/ui/InteractiveMenu";
import { ArticleWrapper } from "@components/Article/ArticleWrapper";
import { SacramentMenu } from "@data/sacrament-menu.data";

export const MinistrySacramentPage = () => {
  return (
    <div className="bg-base-100 lg:w-4/5">
      <InteractiveMenu menu={SacramentMenu} article>
        <ArticleWrapper />
      </InteractiveMenu>
    </div>
  );
};
