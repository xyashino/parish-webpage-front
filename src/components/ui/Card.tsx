import React, { ReactNode } from "react";
interface Props {
  children: ReactNode | ReactNode[];
  src: string;
  alt: string;
  left?: true;
}
export const Card = ({ children, src, alt, left }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl lg:w-4/5 lg:card-side">
      {left ? (
        <figure>
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="lg:min-h-full"
          />
        </figure>
      ) : null}

      <div className="card-body h-max items-center">
        <article className="prose">{children}</article>
      </div>

      {left ? null : (
        <figure>
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="lg:min-h-full"
          />
        </figure>
      )}
    </div>
  );
};
