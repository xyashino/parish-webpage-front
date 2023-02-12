import React from "react";
import { DayIntentionsResponse, IntentionResponse } from "@backendTypes";
import { IntentionsTableHead } from "@components/IntentionsTable/IntentionsTableHead";
import { IntentionsTableBody } from "@components/IntentionsTable/IntentionsTableBody";

interface Props {
  day: DayIntentionsResponse["day"];
  intentionRow: IntentionResponse[];
  dateOfDay: DayIntentionsResponse["dateOfDay"];
}

export const IntentionsTable = ({ day, intentionRow, dateOfDay }: Props) => {
  return (
    <table className="overflow-wrap table w-full grow">
      <IntentionsTableHead day={day} dateOfDay={dateOfDay} />
      <IntentionsTableBody intentionRow={intentionRow} />
    </table>
  );
};
