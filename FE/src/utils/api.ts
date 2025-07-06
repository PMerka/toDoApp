import axios from "axios";
import { getCookie, setCookie } from "./cookies";

const BASE_URL = import.meta.env.VITE_BASE_URL;

if (!BASE_URL) {
  console.error("missing BASE_URL");
  console.log("meta.env", import.meta.env);
}

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const setAxiosToken = (token: string) => {
  setCookie("token", token);
  const authToken = getCookie("token");
  if (authToken) {
    axiosClient.defaults.headers.common[
      "authorization"
    ] = `Bearer ${authToken}`;
  }
};

export const deleteAxiosToken = () => {
  setCookie("token", "");
  const authToken = getCookie("token");
  console.log(authToken);
  axiosClient.defaults.headers.common["authorization"] = `Bearer ${authToken}`;
  console.log(axiosClient.defaults.headers.common["authorization"]);
};
