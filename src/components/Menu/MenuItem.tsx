import React from "react";

interface Props {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

export const MenuItem = ({ title, isActive, onClick }: Props) => {
  const activeClass = isActive ? "active" : "";

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li className="grow text-center">
      <button
        className={`w-full p-4 font-bold uppercase ${activeClass}`}
        onClick={handleOnClick}
      >
        <p className="w-full text-center text-xs lg:text-lg">{title}</p>
      </button>
    </li>
  );
};
