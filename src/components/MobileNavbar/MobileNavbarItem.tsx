import React from "react";
import { Page } from "../../types/page.interface";
import { SubmenuList } from "@components/Submenu/SubmenuList";
import { SubmenuContainer } from "@components/Submenu/SubmenuContainer";
import { PageRouter } from "@enums/page-router.enum";
import { MENU_DATA } from "@data/menu.data";
import { NavItem } from "@components/NavItem";

interface Props {
  router: PageRouter;
  active?: true;
  onClick?: () => void;
  className?: string;
}
export const MobileNavbarItem = ({ router, onClick, className }: Props) => {
  const { name, submenu } = MENU_DATA.get(router) as Page;
  if (!name) return null;
  const optionalStyles = className ?? "";
  const clickMethod = () => {
    const rootElement = document.querySelector("#root") as HTMLElement;
    if (rootElement) {
      rootElement.scrollTo(0, 0);
      rootElement.focus();
    }
    if (!onClick) return;
    onClick();
  };

  if (submenu) {
    return (
      <li className={optionalStyles}>
        <div className="collapse-arrow collapse relative flex flex-wrap p-0">
          <input type="checkbox" className="absolute top-0" />
          <SubmenuContainer name={name} isMobile>
            <SubmenuList submenu={submenu} onClick={clickMethod} />
          </SubmenuContainer>
        </div>
      </li>
    );
  }

  return <NavItem router={router} value={name} clickMethod={clickMethod} />;
};
