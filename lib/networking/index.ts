import ax from "axios";

const axios = ax.create({
  baseURL: "",
  headers: {
    "Content-Type": `application/json; charset=UTF-8`,
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${""}`,
  },
});
axios.interceptors.request.use(
  (request: any) => {
    return { ...request };
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    return { ...response };
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

export default axios;
