import React from "react";

interface Props {
  active: boolean;
  title: string;
  onClick: () => void;
}

export const MenuItem = ({ title, active, onClick }: Props) => {
  const activeClass = active ? "active" : "";
  return (
    <li className="grow text-center">
      <button
        className={`w-full p-4 font-bold uppercase ${activeClass}`}
        onClick={() => (onClick ? onClick() : undefined)}
      >
        <p className="w-full text-center">{title}</p>
      </button>
    </li>
  );
};
