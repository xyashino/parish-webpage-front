import { ReactNode } from "react";

export interface MenuData {
  title: string;
  active: boolean;
  type?: string;
  article?: ReactNode;
  id?: string;

  [key: string]: unknown;
}
