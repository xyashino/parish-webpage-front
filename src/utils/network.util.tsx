import axios from "axios";
import React from "react";
import { PageRouter } from "@enums/page-router.enum";
import { redirect } from "react-router-dom";
import { Loader } from "@components/ui/Loader";
import { Root } from "react-dom/client";

export const HttpRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export const getDataFrom = async (path: PageRouter, root: Root) => {
  root.render(<Loader />);
  try {
    const response = await HttpRequest.get(path);
    root.render(null);
    return response.data;
  } catch (e) {
    root.render(null);
    redirect(PageRouter.Main);
    return null;
  }
};
