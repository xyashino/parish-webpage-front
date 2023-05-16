import React, { PropsWithChildren } from "react";
import { Divider } from "@components/ui/Divider";

interface Props extends PropsWithChildren {
  title: string;
  divider?: true;
}

export const BackgroundImgHeader = ({ title, children, divider }: Props) => {
  return (
    <>
      <div className="not-prose relative flex w-full flex-col items-center">
        <div className="w-full bg-primary p-6 font-bold text-base-100 shadow lg:w-4/5 lg:-translate-y-1/2">
          <h2 className="m-0  text-xl uppercase text-base-100 lg:text-3xl">
            {title}
          </h2>
          {children}
        </div>
        {divider ? <Divider /> : null}
      </div>
    </>
  );
};
