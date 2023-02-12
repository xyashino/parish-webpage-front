import React from "react";
interface Props {
  items: string[];
}
export const CouncilTableBody = ({ items }: Props) => {
  return (
    <tbody className="text-center font-bold">
      {items.map((el, i) => (
        <tr key={i}>
          <td className="px-4">{i + 1}.</td> <td>{el}</td>
        </tr>
      ))}
    </tbody>
  );
};
