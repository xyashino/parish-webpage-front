import { createContext } from "react";
import { MenuItem } from "@frontendTypes/menu-item.interface";

interface InitialValue {
  activeItem: MenuItem;
}

const initialValue = {
  activeItem: {
    title: "",
    active: false,
  } as MenuItem,
};

export const MenuContext = createContext<InitialValue>(initialValue);
