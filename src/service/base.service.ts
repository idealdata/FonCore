import axios, { AxiosInstance } from "axios";

export class BaseService {
  protected client: AxiosInstance;

  constructor(baseURL: string, token?: string) {
    this.client = axios.create({
      baseURL,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }

  protected get<T>(url: string) {
    return this.client.get<T>(url).then((response) => response.data);
  }

  protected post<T>(url: string, data: any) {
    return this.client.post<T>(url, data).then((response) => response.data);
  }

  protected put<T>(url: string, data: any) {
    return this.client.put<T>(url, data).then((response) => response.data);
  }

  protected delete<T>(url: string) {
    return this.client.delete<T>(url).then((response) => response.data);
  }
}
