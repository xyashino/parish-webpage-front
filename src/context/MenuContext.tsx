import { createContext } from "react";
import { MenuData } from "@frontendTypes/menu-data.interface";

interface InitialValue {
  activeItem: MenuData;
}

const initialValue = {
  activeItem: {
    title: "",
    active: false,
  } as MenuData,
};

export const MenuContext = createContext<InitialValue>(initialValue);
