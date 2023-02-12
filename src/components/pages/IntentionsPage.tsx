import React, { useState } from "react";
import { IntentionsTable } from "@components/IntentionsTable/IntentionsTable";
import { useLoaderData } from "react-router-dom";
import { GridLayout } from "@components/ui/GridLayout";
import { DayIntentionsResponse } from "@backendTypes";
import { TRANSLATE_INTENTIONS } from "@data/translate-intentions.data";
import { MenuItem } from "@frontendTypes/menu-item.interface";
import { createDateRange } from "@utils/date.util";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import { Menu } from "@components/ui/Menu";

const weekday = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const today = weekday[new Date().getDay()];

const activeTable = (intentions: DayIntentionsResponse[], menu: MenuItem[]) => {
  return (
    intentions.find(({ id }) => id === menu.find(({ active }) => active)?.id) ??
    intentions[0]
  );
};

export const IntentionsPage = () => {
  const intentions = useLoaderData() as DayIntentionsResponse[];
  const [menu, setMenu] = useState<MenuItem[]>(
    intentions.map(({ day, id }) => ({
      title: TRANSLATE_INTENTIONS.get(day) ?? "unknown",
      active: today === day,
      type: day,
      id,
    }))
  );

  const [table, setTable] = useState<DayIntentionsResponse>(
    activeTable(intentions, menu)
  );

  const changeTable = (type: string) => {
    setMenu((prevState) => {
      prevState.forEach(
        (el) =>
          (el.active =
            (el.type as unknown as string).toLowerCase() === type.toLowerCase())
      );
      return [...prevState];
    });

    setTable(() => activeTable(intentions, menu));
  };
  const title = (
    <p>
      INTENCJE TYGODNIOWE <br />{" "}
      {createDateRange(
        intentions.at(0)?.dateOfDay ?? null,
        intentions.at(-1)?.dateOfDay ?? null
      )}
    </p>
  );
  const panel = (
    <div className="card w-full">
      <Menu items={menu} onClick={changeTable} />
    </div>
  );

  return (
    <>
      <BackgroundImage divider />
      <GridLayout titleContent={title} leftPanelContent={panel}>
        <IntentionsTable
          day={table.day}
          intentionRow={table.intentions}
          dateOfDay={table.dateOfDay}
        />
      </GridLayout>
    </>
  );
};
