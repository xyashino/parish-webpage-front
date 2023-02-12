import React from "react";
interface Props {
  title: string;
}
export const CouncilTableHead = ({ title }: Props) => {
  return (
    <thead>
      <tr>
        <th colSpan={2} className="bg-primary text-center">
          <p className="text-2xl font-bold text-base-100">{title}</p>
        </th>
      </tr>
    </thead>
  );
};
