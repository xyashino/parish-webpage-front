import React from "react";
import { InteractiveMenu } from "@components/ui/InteractiveMenu";
import { ArticleWrapper } from "@components/Article/ArticleWrapper";
import { GroupsMenu } from "@data/groups-menu.data";

export const MinistryGroupsPage = () => {
  return (
    <div className="bg-base-100 lg:w-4/5">
      <InteractiveMenu menu={GroupsMenu} article>
        <ArticleWrapper />
      </InteractiveMenu>
    </div>
  );
};
