import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadElement> {
  title: string;
}

export const Header = ({ title, ...props }: Props) => {
  return (
    <header className="w-full">
      <h1
        {...props}
        className="bg-primary p-4 text-2xl font-bold uppercase text-base-100 shadow lg:text-3xl"
      >
        {title}
      </h1>
    </header>
  );
};
