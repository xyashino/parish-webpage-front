import React from "react";
import { IntentionsOfDay } from "@backendTypes";
import { IntentionsTableHead } from "@components/IntentionsTable/IntentionsTableHead";
import { IntentionsTableBody } from "@components/IntentionsTable/IntentionsTableBody";
import { DayIntentionsResponse } from "../../../../parish-webpage-backend/src/types/intentions/day-intentions/day-intentions-response.interface";

interface Props {
  day: DayIntentionsResponse["day"];
  intentionRow: IntentionsOfDay[];
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
