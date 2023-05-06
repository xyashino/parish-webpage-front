import React from "react";
import { useLoaderData } from "react-router-dom";
import { AnnouncementsResponse } from "@backendTypes";
import { AnnouncementHeader } from "@components/Announcement/AnnouncementHeader";
import { AnnouncementBody } from "@components/Announcement/AnnouncementBody";

export const AnnouncementPage = () => {
  const [data] = useLoaderData() as AnnouncementsResponse[];

  return (
    <div className="flex w-full flex-col items-center bg-base-100 lg:w-4/5 ">
      <AnnouncementHeader title={data.title} subtitle={data.subtitle} />
      <article className="prose prose-neutral mb-8 w-full p-4 lg:w-4/5 lg:prose-xl">
        <AnnouncementBody announcements={data.announcements} />
      </article>
    </div>
  );
};
