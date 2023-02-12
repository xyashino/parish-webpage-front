import React, { HTMLAttributes, PropsWithChildren } from "react";
import { Info } from "@icons/Info";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

export const InfoAlert = ({ children, className, ...props }: Props) => {
  const localClass = `alert alert-info  mx-auto shadow-lg ${
    className ?? "w-full lg:w-4/5"
  }`;
  return (
    <div className={localClass} {...props}>
      <div className="text-lg font-bold">
        <Info className="float-left w-auto text-4xl" />
        <span className="w-5/6 p-2 text-sm lg:text-lg">{children}</span>
      </div>
    </div>
  );
};
