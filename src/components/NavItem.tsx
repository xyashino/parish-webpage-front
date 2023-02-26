import React from "react";
import { Link } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";

interface Props {
  router: PageRouter;
  clickMethod?: () => void;
  className?: string;
  value: string;
}
export const NavItem = ({ router, clickMethod, className, value }: Props) => {
  const optionalStyles = className ?? "";
  return (
    <li className={"font-bold normal-case " + optionalStyles}>
      <Link to={router} onClick={clickMethod}>
        {value}
      </Link>
    </li>
  );
};
