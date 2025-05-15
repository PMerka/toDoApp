import axios from "axios";
import { jwtManager } from "./jwtManager";

const BASE_URL = import.meta.env.VITE_BASE_URL;

if (!BASE_URL) {
  console.error("missing BASE_URL");
  console.log("meta.env", import.meta.env);
}

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${jwtManager.getJwt()}`,
  },
});
