import React from "react";
import { IntentionResponse } from "@backendTypes";
import parse from "html-react-parser";

export const IntentionsTableRow = ({
  hour,
  value,
}: Omit<IntentionResponse, "id">) => {
  return (
    <tr>
      <td className="border-r-1 text-center text-xs font-bold lg:text-lg">
        {hour}
      </td>
      <td className="prose whitespace-normal break-words text-xs lg:text-lg">
        {parse(value)}
      </td>
    </tr>
  );
};
