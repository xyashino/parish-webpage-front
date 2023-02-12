import React from "react";
import { Divider } from "@components/ui/Divider";
import { CouncilTableHead } from "@components/CouncilTable/CouncilTableHead";
import { CouncilTableBody } from "@components/CouncilTable/CouncilTableBody";

interface Props {
  title: string;
  items: string[];
}

export const CouncilTable = ({ items, title }: Props) => {
  return (
    <>
      <table className="table-zebra my-8 table w-5/6 shadow-md lg:w-3/5">
        <CouncilTableHead title={title} />
        <CouncilTableBody items={items} />
      </table>
      <Divider />
    </>
  );
};
