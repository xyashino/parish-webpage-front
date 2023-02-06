import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLUListElement> {
  order?: true;
  onlyMyClasses?: true;
  outside?: true;
}

export const ArticleList = ({
  children,
  className,
  onlyMyClasses,
  order,
  outside,
  ...props
}: Props) => {
  let ulClasses = `${outside ? "list-outside" : "list-inside"} ${
    order ? "list-decimal" : "list-disc"
  } p-4 text-left text-xl ${className ? className : ""}`;
  if (onlyMyClasses) {
    ulClasses = className ?? "";
  }

  return (
    <ul className={ulClasses} {...props}>
      {children}
    </ul>
  );
};
