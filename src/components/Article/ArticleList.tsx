import React from "react";

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  order?: boolean;
  onlyCustomClasses?: boolean;
  outsideList?: boolean;
}

export const ArticleList = ({
  children,
  className,
  onlyCustomClasses,
  order,
  outsideList,
  ...props
}: Props) => {
  let ulClasses = `${outsideList ? "list-outside" : "list-inside"} ${
    order ? "list-decimal" : "list-disc"
  } p-4 text-left text-xl ${className ? className : ""}`;
  if (onlyCustomClasses) {
    ulClasses = className ?? "";
  }

  return (
    <ul className={ulClasses} {...props}>
      {children}
    </ul>
  );
};
