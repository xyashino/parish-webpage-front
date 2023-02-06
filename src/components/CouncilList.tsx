import React from "react";
import { Divider } from "@components/ui/Divider";

interface Props {
  title: string;
  items: string[];
}

export const CouncilList = ({ items, title }: Props) => {
  return (
    <>
      <table className="table-zebra my-8 table w-5/6 shadow-md lg:w-3/5">
        <thead>
          <tr>
            <th colSpan={2} className="bg-primary text-center">
              <p className="text-2xl font-bold text-base-100">{title}</p>
            </th>
          </tr>
        </thead>
        <tbody className="text-center font-bold">
          {items.map((el, i) => (
            <tr key={i}>
              <td className="px-4">{i + 1}.</td> <td>{el}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Divider />
    </>
  );
};
