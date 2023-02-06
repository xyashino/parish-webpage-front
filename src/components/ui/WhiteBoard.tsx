import React, { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface Props
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLElement>, "className"> {
  className?: string;
  article?: true;
}

export const WhiteBoard = ({
  className,
  article,
  children,
  ...props
}: Props) => {
  const sectionClasses = `h-full w-full bg-base-100  lg:w-4/5 ${
    className ? className : ""
  }`;
  return (
    <section className={sectionClasses} {...props}>
      {article ? <article className="prose">{children}</article> : children}
    </section>
  );
};
