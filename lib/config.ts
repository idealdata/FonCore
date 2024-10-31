import axios, { AxiosInstance } from "axios";

const Config: {
  axios: AxiosInstance;
  url: string;
  token: string;
} = {
  axios,
  url: "",
  token: "",
};

export const setConfig = ({ url, token }: { url: string; token: string }) => {
  Config.url = url;
  Config.token = token;
  Config.axios = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default Config;
