import React from "react";
import parse from "html-react-parser";

import { Divider } from "@components/ui/Divider";
import { AnnouncementsResponse } from "@backendTypes";

interface Props {
  announcements: AnnouncementsResponse["announcements"];
}

export const AnnouncementBody = ({ announcements }: Props) => {
  if (announcements.length === 0) {
    return (
      <p className="mb-12 text-xl">Upss!... Nie ma ustawionych ogłoszeń !!</p>
    );
  }
  return (
    <>
      <ol className="text-left">
        {announcements.map(({ body, id }) => (
          <li key={id}>
            {parse(body)}
            <Divider />
          </li>
        ))}
      </ol>
    </>
  );
};
