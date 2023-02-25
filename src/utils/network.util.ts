import axios from "axios";
import { PageRouter } from "@enums/page-router.enum";
import { redirect } from "react-router-dom";

export const HttpRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export const getDataFrom = async (path: PageRouter) => {
  try {
    const response = await HttpRequest.get(path);
    return response.data;
  } catch (e) {
    redirect(PageRouter.Main);
    return null;
  }
};
