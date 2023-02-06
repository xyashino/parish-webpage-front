import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}

export const ExpandableContent = ({ title, children }: Props) => {
  return (
    <div className="collapse-arrow  collapse  mt-12 w-4/5">
      <input type="checkbox" />
      <header className="collapse-title w-full bg-primary text-center text-base-100">
        <p className="text-2xl font-bold uppercase text-base-100">{title}</p>
      </header>
      <div className="collapse-content bg-base-200 text-left">{children}</div>
    </div>
  );
};
