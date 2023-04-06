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
  active?: true;
  onClick?: () => void;
  className?: string;
}

export const MobileNavbarItem = ({ router, onClick, className }: Props) => {
  const optionalStyles = className ?? "";
  const { name, submenu } = MENU_DATA.get(router) as Page;
  const { scrollToElement } = useScrollTo("#root");

  const handleItemClick = () => {
    scrollToElement();
    onClick && onClick();
  };

  if (submenu) {
    return (
      <li className={optionalStyles}>
        <div className="collapse-arrow collapse relative flex flex-wrap p-0">
          <input type="checkbox" className="absolute top-0" />
          <SubmenuContainer name={name} isMobile>
            <SubmenuList submenu={submenu} onClick={handleItemClick} />
          </SubmenuContainer>
        </div>
      </li>
    );
  }

  return <NavItem router={router} value={name} clickMethod={handleItemClick} />;
};
