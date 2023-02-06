import React, { HTMLAttributes } from "react";
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  horizontal?: true;
  value?: string;
  className?: string;
}
export const Divider = ({ horizontal, value, className, ...props }: Props) => {
  const tailwindStyles = `divider mb-0 ${
    horizontal ? "divider-horizontal" : ""
  } 
      ${className ? className : ""}`;
  return (
    <div className={tailwindStyles} {...props}>
      {value && ""}
    </div>
  );
};
