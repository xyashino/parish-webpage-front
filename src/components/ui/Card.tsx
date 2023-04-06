import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  src: string;
  alt: string;
  left?: true;
}

export const Card = ({ children, src, alt, left }: Props) => {
  const Img = (
    <figure>
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="object-center lg:min-h-full"
      />
    </figure>
  );

  return (
    <div className="card w-5/6 bg-base-100 shadow-xl lg:w-4/5 lg:card-side">
      {left ? Img : null}
      <div className="card-body h-max items-center text-left">
        <article className="prose">{children}</article>
      </div>
      {left ? null : Img}
    </div>
  );
};
