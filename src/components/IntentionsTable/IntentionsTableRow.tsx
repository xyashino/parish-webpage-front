import React from "react";
import { IntentionsOfDay } from "@backendTypes";
import parse from "html-react-parser";

export const IntentionsTableRow = ({
  hour,
  value,
}: Omit<IntentionsOfDay, "id">) => {
  return (
    <tr>
      <td className="border-r-1 text-center font-bold">{hour}</td>
      <td className="prose whitespace-normal break-words">{parse(value)}</td>
    </tr>
  );
};
