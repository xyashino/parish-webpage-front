import React from "react";
import { Link } from "react-router-dom";
import { PageRouter } from "@enums/page-router.enum";

interface Props {
  submenu: { submenuRoute: PageRouter; submenuName: string }[];
  onClick: () => void;
}

export const SubmenuList = ({ submenu, onClick }: Props) => {
  return (
    <>
      {submenu.map(({ submenuRoute, submenuName }) => (
        <li key={submenuRoute}>
          <Link to={submenuRoute} onClick={onClick}>
            {submenuName}
          </Link>
        </li>
      ))}
    </>
  );
};
