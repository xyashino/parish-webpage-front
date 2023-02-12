import React, { HTMLAttributes, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  className?: string;
  onlyMyClasses?: true;
}

export const TextCard = ({ children, className, onlyMyClasses }: Props) => {
  const defaultClasses = `mx-4 my-2 grow  lg:my-4 rounded bg-neutral p-8 text-left uppercase text-base-100 shadow-md  leading-relaxed text-lg lg:text-xl`;
  const cardClasses = onlyMyClasses
    ? className
    : `${defaultClasses} ${className ?? ""}`;
  return <div className={cardClasses}>{children}</div>;
};
