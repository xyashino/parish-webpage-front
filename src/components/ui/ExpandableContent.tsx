import React, { PropsWithChildren, SyntheticEvent, useState } from "react";
import { Arrow } from "@icons/Arrow";

interface Props extends PropsWithChildren {
  title: string;
}

export const ExpandableContent = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full p-4 sm:w-4/5">
      <header
        className="not-prose flex w-full cursor-pointer items-center justify-between bg-primary p-4 text-center text-base-100"
        onClick={toggle}
        aria-hidden="true"
      >
        <h2 className="p-4 text-lg font-bold uppercase text-base-100 md:text-2xl">
          {title}
        </h2>
        <Arrow
          className={`block h-full self-center text-4xl transition-transform ${
            isOpen ? "rotate-[270deg]" : "rotate-90"
          }`}
        />
      </header>
      <div
        className={`relative grid overflow-hidden bg-base-300 transition-all ${
          isOpen ? "grid-rows-1fr" : "grid-rows-0fr"
        }`}
      >
        <div className="mx-8 min-h-0 text-left">{children}</div>
      </div>
    </div>
  );
};
