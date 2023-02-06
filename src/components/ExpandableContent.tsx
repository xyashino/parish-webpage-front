import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}

export const ExpandableContent = ({ title, children }: Props) => {
  return (
    <div className="collapse-arrow  collapse  mt-6 w-full lg:mt-12 lg:w-4/5">
      <input type="checkbox" />
      <header className="collapse-title w-full bg-primary text-center text-base-100">
        <p className="text-lg font-bold uppercase text-base-100 lg:text-2xl">
          {title}
        </p>
      </header>
      <div className="collapse-content bg-base-200 text-left">{children}</div>
    </div>
  );
};
