import React from "react";
import { IntentionsTableRow } from "./IntentionsTableRow";
import { TRANSLATE_INTENTIONS } from "@data/intentions.data";
import { DayIntentionsResponse, IntentionResponse } from "@backendTypes";
import { Day } from "@enums/day.enum";
import { getDayAndMonth } from "@utils/date.util";
interface Props {
  day: DayIntentionsResponse["day"];
  intentionRow: IntentionResponse[];
  dateOfDay: DayIntentionsResponse["dateOfDay"];
}
const thStyle = "bg-primary text-xl text-base-100 ";
export const IntentionsTable = ({ day, intentionRow, dateOfDay }: Props) => {
  return (
    <table className="overflow-wrap table w-full grow">
      <thead>
        <tr className="bg-neutral text-center">
          <th colSpan={2} className={thStyle}>
            {TRANSLATE_INTENTIONS.get(day as unknown as Day) ?? day}
            {getDayAndMonth(dateOfDay)}
          </th>
        </tr>
        <tr className="bg-neutral text-center">
          <th className={thStyle + "w-1/5"}>Godzina</th>
          <th className={thStyle + "w-4/5 text-left"}>Intencje Mszy ŚW.</th>
        </tr>
      </thead>
      <tbody>
        {intentionRow ? (
          intentionRow.map(({ hour, value, id }) => (
            <IntentionsTableRow hour={hour} value={value} key={id} />
          ))
        ) : (
          <tr>
            <td colSpan={2}> Upps... Brak intencji </td>{" "}
          </tr>
        )}
      </tbody>
    </table>
  );
};
