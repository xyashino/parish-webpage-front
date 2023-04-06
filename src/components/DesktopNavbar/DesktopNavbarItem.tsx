import React from "react";
import { Page } from "../../types/page.interface";
import { SubmenuList } from "@components/Submenu/SubmenuList";
import { SubmenuContainer } from "@components/Submenu/SubmenuContainer";
import { PageRouter } from "@enums/page-router.enum";
import { MENU_DATA } from "@data/menu.data";
import { NavItem } from "@components/NavItem";
import { useScrollTo } from "@hooks/useScrollTo";

interface Props {
  router: PageRouter;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const DesktopNavbarItem = ({ router, onClick, className }: Props) => {
  const { name, submenu } = MENU_DATA.get(router) as Page;
  const optionalStyles = className || "";
  const { scrollToElement } = useScrollTo("#root");

  const handleOnClick = () => {
    scrollToElement();
    if (onClick) onClick();
  };

  if (submenu) {
    return (
      <li className={`dropdown-end font-bold normal-case ${optionalStyles}`}>
        <SubmenuContainer name={name}>
          <SubmenuList submenu={submenu} onClick={handleOnClick} />
        </SubmenuContainer>
      </li>
    );
  }

  return <NavItem router={router} value={name} clickMethod={handleOnClick} />;
};
