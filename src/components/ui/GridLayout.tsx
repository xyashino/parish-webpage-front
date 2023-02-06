import React, { ReactNode } from "react";
import { Divider } from "@components/ui/Divider";
interface Props {
  titleContent: ReactNode | ReactNode[] | string;
  leftPanelContent: ReactNode | ReactNode[] | string;
  children: ReactNode | ReactNode[];
}

export const GridLayout = ({
  titleContent,
  leftPanelContent,
  children,
}: Props) => {
  return (
    <section className="row-auto grid w-full grid-cols-1 bg-base-200 p-4 shadow-neutral lg:w-4/5 ">
      <div className="  flex flex h-full w-full justify-center">
        {leftPanelContent}
      </div>
      <div className="w-full ">{children}</div>
      <div className="row-start-1 grid w-full bg-base-100 p-4">
        <h2 className="mb-3 text-4xl font-bold">{titleContent}</h2>
        <Divider />
      </div>
    </section>
  );
};
