import React, { ReactNode } from "react";
import { DropDown } from "@icons/DropDown";

interface Props {
  name: string;
  children: ReactNode | ReactNode[];
  isMobile?: true;
}
export const SubmenuContainer = ({ children, name, isMobile }: Props) => {
  if (isMobile) {
    return (
      <>
        <div className="collapse-title font-bold normal-case">{name}</div>
        <div className="collapse-content w-full bg-base-100 p-0">
          <ul className="menu  w-full ">{children}</ul>
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        {name}
        <DropDown />
      </p>
      <ul className="dropdown-content menu border-2 bg-base-100 font-bold normal-case text-black">
        {children}
      </ul>
    </>
  );
};
