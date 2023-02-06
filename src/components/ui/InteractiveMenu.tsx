import React, { PropsWithChildren, ReactNode, useState } from "react";
import { Menu } from "@components/ui/Menu";
import { MenuItem } from "../../types/menu-item.interface";
import { GridLayout } from "@components/ui/GridLayout";
import { WhiteBoard } from "@components/ui/WhiteBoard";
import { MenuContext } from "@context/MenuContext";

interface Props extends PropsWithChildren {
  menu: MenuItem[];
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
      <div className="card  w-full">
        <Menu items={menuCopy} onClick={changeBody} />
      </div>
      <div className="pb-4 lg:px-4">{children}</div>
    </MenuContext.Provider>
  );
};
