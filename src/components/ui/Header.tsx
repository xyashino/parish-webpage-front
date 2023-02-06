import React, { HTMLAttributes, PropsWithChildren } from "react";
import { Divider } from "@components/ui/Divider";

interface Props extends HTMLAttributes<HTMLHeadElement> {
  title: string;
}

export const Header = ({ title, ...props }: Props) => {
  return (
    <header className="w-full">
      <h1
        {...props}
        className="bg-primary p-4 text-3xl font-bold uppercase text-base-100 shadow"
      >
        {title}
      </h1>
    </header>
  );
};
