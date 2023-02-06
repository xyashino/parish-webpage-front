import React from "react";
import { InteractiveMenu } from "@components/ui/InteractiveMenu";
import { SacramentArticle } from "@components/Article/SacramentArticle";
import { GroupsMenu } from "@data/groups-menu.data";

export const MinistryGroupsPage = () => {
  return (
    <div className="bg-base-100 lg:w-4/5">
      <InteractiveMenu menu={GroupsMenu} article>
        <SacramentArticle />
      </InteractiveMenu>
    </div>
  );
};
