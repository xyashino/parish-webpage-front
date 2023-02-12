import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../../types/page.interface";
import { SubmenuList } from "@components/Submenu/SubmenuList";
import { SubmenuContainer } from "@components/Submenu/SubmenuContainer";
import { PageRouter } from "@enums/page-router.enum";
import { MENU_DATA } from "@data/menu.data";

interface Props {
  router: PageRouter;
  active?: true;
  onClick?: () => void;
  className?: string;
  isMobile?: true;
}
export const NavItem = ({ router, onClick, className, isMobile }: Props) => {
  const { name, submenu } = MENU_DATA.get(router) as Page;
  if (!name) return null;
  const optionalStyles = className ? className : "";
  const clickMethod = () => {
    const rootElement = document.querySelector("#root") as HTMLElement;
    if (rootElement) {
      rootElement.scrollTo(0, 0);
      rootElement.focus();
    }
    if (!onClick) return;
    onClick();
  };

  if (submenu && isMobile) {
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

  if (submenu) {
    return (
      <li className={"dropdown-end font-bold normal-case" + optionalStyles}>
        <SubmenuContainer name={name}>
          <SubmenuList submenu={submenu} onClick={clickMethod} />
        </SubmenuContainer>
      </li>
    );
  }

  return (
    <li className={"font-bold normal-case " + optionalStyles}>
      <Link to={router} onClick={clickMethod}>
        {name}
      </Link>
    </li>
  );
};
