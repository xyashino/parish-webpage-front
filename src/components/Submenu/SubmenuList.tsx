import { Link, NavLink } from "react-router-dom";
import React from "react";
import { PageRouter } from "@enums/page-router.enum";

interface Props {
  submenu: { submenuRoute: PageRouter; submenuName: string }[];
  onClick: () => void;
}

export const SubmenuList = ({ submenu, onClick }: Props) => {
  return (
    <>
      {submenu.map(({ submenuRoute, submenuName }) => (
        <li key={submenuRoute} onClick={onClick}>
          <Link to={submenuRoute}>{submenuName}</Link>
        </li>
      ))}
    </>
  );
};
