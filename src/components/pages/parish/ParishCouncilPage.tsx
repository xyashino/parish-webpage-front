import React from "react";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { Header } from "@components/ui/Header";
import { CouncilCadendention, CouncilData } from "@data/council.data";
import { CouncilList } from "@components/CouncilList";
import { Divider } from "@components/ui/Divider";

export const ParishCouncilPage = () => {
  return (
    <WhiteBoard article>
      <Header title="CZŁONKOWIE RADY DUSZPASTERSKIEJ" />
      <h2 className="text-3xl">
        <span>Aktualna Kadencja </span>
        <span className="font-light italic">{CouncilCadendention}</span>
      </h2>
      <Divider />
      <div className="flex w-full flex-col items-center space-y-4 text-left">
        {CouncilData.map(({ name, list }, i) => (
          <CouncilList title={name} items={list} key={i} />
        ))}
      </div>
    </WhiteBoard>
  );
};
