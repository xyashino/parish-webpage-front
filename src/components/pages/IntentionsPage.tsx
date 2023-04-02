import React, { useState } from "react";
import { IntentionsTable } from "@components/IntentionsTable/IntentionsTable";
import { useLoaderData } from "react-router-dom";
import { DayIntention, IntentionResponse } from "@backendTypes";
import { TRANSLATE_INTENTIONS } from "@data/translate-intentions.data";
import { MenuData } from "@frontendTypes/menu-data.interface";
import { createDateRange } from "@utils/date.util";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import { Menu } from "@components/Menu/Menu";
import { BackgroundImgHeader } from "@components/ui/BackgroundImgHeader";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import Image from "@assets/intencje.webp";

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

const activeTable = (days: DayIntention[], menu: MenuData[]) => {
  return (
    days.find(({ id }) => id === menu.find(({ active }) => active)?.id) ??
    days[0]
  );
};

export const IntentionsPage = () => {
  const [{ startWeek, endWeek, days }] = useLoaderData() as IntentionResponse[];
  const [menu, setMenu] = useState<MenuData[]>(
    days.map(({ day, id }) => ({
      title: TRANSLATE_INTENTIONS.get(day) ?? day,
      active: today === day,
      type: day,
      id,
    }))
  );

  const [table, setTable] = useState<DayIntention>(activeTable(days, menu));

  const changeTable = (id: string) => {
    setMenu((prevState) => {
      prevState.forEach((el) => (el.active = (el.id as string) === id));
      return [...prevState];
    });
    setTable(() => activeTable(days, menu));
  };
  const title = <p>{createDateRange(startWeek, endWeek).toUpperCase()}</p>;

  return (
    <>
      <WhiteBoard className="flex flex-col items-center">
        <BackgroundImage image={Image} />
        <BackgroundImgHeader title="INTENCJE TYGODNIOWE">
          {title}
        </BackgroundImgHeader>
        <div className="card mb-2 w-full border-y-2">
          <Menu items={menu} onClick={changeTable} />
        </div>
        <IntentionsTable
          day={table.day}
          intentionRow={table.intentionsOfDay}
          dateOfDay={table.dateOfDay}
        />
      </WhiteBoard>
    </>
  );
};
