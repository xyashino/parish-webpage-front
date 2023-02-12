import React, { PropsWithChildren, ReactNode, useState } from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";
import { MenuContext } from "@context/MenuContext";
import { Menu } from "@components/Menu/Menu";

interface Props extends PropsWithChildren {
  menu: MenuData[];
  article?: true;
  titlePanel?: ReactNode | ReactNode[];
}

export const InteractiveMenu = ({ menu, children }: Props) => {
  const menuCopy = [...menu];
  const [activeItem, setActiveItem] = useState(
    menuCopy.find(({ active }) => active) ?? menuCopy[0]
  );
  const changeBody = (item: string) => {
    menuCopy.forEach(
      (el) => (el.active = el.title.toLowerCase() === item.toLowerCase())
    );
    const tableObject = menuCopy.find((obj) => obj.title === item);
    if (!tableObject) return;
    setActiveItem(tableObject);
  };

  return (
    <MenuContext.Provider value={{ activeItem }}>
      <div className="card sticky top-0 w-full">
        <Menu items={menuCopy} onClick={changeBody} />
      </div>
      <div className="pb-4 lg:px-4">{children}</div>
    </MenuContext.Provider>
  );
};
