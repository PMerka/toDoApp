import axios from "axios";
import { getCookie } from "./cookies";

const BASE_URL = import.meta.env.VITE_BASE_URL;

if (!BASE_URL) {
  console.error("missing BASE_URL");
}

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${getCookie("jwt")}`,
  },
});
