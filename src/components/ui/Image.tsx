import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

export const Image = ({ ...props }: Props) => {
  return (
    <img
      className="my-4 h-64 w-2/5 rounded object-cover shadow transition-transform hover:scale-110"
      {...props}
    />
  );
};
