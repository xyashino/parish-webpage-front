import React, { HTMLAttributes, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  className?: string;
  onlyMyClasses?: true;
}
export const TextCard = ({ children, className, onlyMyClasses }: Props) => {
  const cardClasses = onlyMyClasses
    ? className
    : `my-4 grow lg:my-8 rounded bg-neutral p-8 text-left uppercase text-base-100 shadow-md  leading-relaxed ${
        className ? className : ""
      }`;
  return <div className={cardClasses}>{children}</div>;
};
