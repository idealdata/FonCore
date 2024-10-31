import { AxiosInstance } from "axios";

class Service {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
}

export default Service;
