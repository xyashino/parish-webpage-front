import React from "react";
import { IntentionResponse } from "@backendTypes";
import { IntentionsTableEmptyRow } from "@components/IntentionsTable/IntentionsTableEmptyRow";
import { IntentionsTableRow } from "@components/IntentionsTable/IntentionsTableRow";

interface Props {
  intentionRow: IntentionResponse[];
}

export const IntentionsTableBody = ({ intentionRow }: Props) => {
  if (intentionRow.length !== 0) {
    return (
      <tbody>
        {intentionRow.map(({ hour, value, id }) => (
          <IntentionsTableRow hour={hour} value={value} key={id} />
        ))}
      </tbody>
    );
  }
  return (
    <tbody>
      <IntentionsTableEmptyRow />
    </tbody>
  );
};
