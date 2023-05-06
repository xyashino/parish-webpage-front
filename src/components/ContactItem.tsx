import React, { ReactNode, useState } from "react";

interface Props {
  title: string;
  value: string;
  children?: ReactNode;
}
export const ContactItem = ({ children, value, title }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = async () => {
    setShowTooltip(true);
    await navigator.clipboard.writeText(value);
    setTimeout(() => setShowTooltip(false), 1000);
  };
  return (
    <div
      className={`grid w-full  grid-cols-3 p-2 hover:dark:bg-base-200 ${
        showTooltip ? "tooltip-open tooltip" : ""
      }`}
      onClick={copyToClipboard}
      onKeyDown={copyToClipboard}
      data-tip="Skopiowano do schowka"
      aria-hidden="true"
    >
      {children}
      <div className="col-span-2 flex flex-col">
        <h2 className="col-start-2 place-self-start text-2xl font-bold">
          {title}
        </h2>
        <p className="col-span-2 col-start-2 place-self-start text-left">
          {value}
        </p>
      </div>
    </div>
  );
};
