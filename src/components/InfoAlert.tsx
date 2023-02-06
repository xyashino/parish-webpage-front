import { Info } from "@icons/Info";
import React, { HTMLAttributes, PropsWithChildren } from "react";
interface Props extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

export const InfoAlert = ({ children, className, ...props }: Props) => {
  const localClass = `alert alert-info  mx-auto shadow-lg ${
    className ? className : "w-4/5"
  }`;
  return (
    <div className={localClass} {...props}>
      <div className="text-lg font-bold">
        <Info className="text-4xl" />
        <span className="p-2">{children}</span>
      </div>
    </div>
  );
};
