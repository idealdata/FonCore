import ax, { AxiosInstance } from "axios";

const Config: {
  axiosInstance: AxiosInstance | null;
  url: string;
  token: string;
} = {
  axiosInstance: null,
  url: "",
  token: "",
};

export const setConfig = ({ url, token }: { url: string; token: string }) => {
  Config.url = url;
  Config.token = token;
  Config.axiosInstance = ax.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAxiosInstance = (): AxiosInstance => {
  if (!Config.axiosInstance) {
    throw new Error("Axios instance is not initialized. Call setConfig first.");
  }
  return Config.axiosInstance;
};

export default Config;
