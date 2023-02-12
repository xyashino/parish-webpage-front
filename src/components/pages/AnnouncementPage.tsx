import React from "react";
import { Divider } from "@components/ui/Divider";
import { useLoaderData } from "react-router-dom";
import { AnnouncementsResponse } from "@backendTypes";

export const AnnouncementPage = () => {
  const [data] = useLoaderData() as AnnouncementsResponse[];
  return (
    <div className=" flex w-full flex-col items-center bg-base-100 lg:w-4/5 ">
      <header className="prose flex flex w-full items-center justify-center bg-primary p-4">
        <h2 className="p-4 text-base-100">
          Ogłoszenia parafialne
          <br /> {data.title}
          <br />
          {data.subtitle}
        </h2>
      </header>
      <article className="prose prose-neutral w-full p-4 lg:w-4/5 lg:prose-xl">
        <ol className="text-left">
          {data.announcements.map(({ body, id }) => (
            <div key={id}>
              <li>{body}</li>
              <Divider />
            </div>
          ))}
        </ol>
      </article>
    </div>
  );
};
