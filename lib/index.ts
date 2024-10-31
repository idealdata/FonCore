import axios, { AxiosInstance } from "axios";
// Services
import SectorService from "./services/sector.service";

class FonCore {
  private axiosInstance: AxiosInstance;
  // Services
  public Sector!: SectorService;

  constructor({ url, token }: { url: string; token: string }) {
    this.Configration(url, token);
    this.Services();
  }

  Configration(url: string, token: string) {
    this.axiosInstance = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  Services() {
    this.Sector = new SectorService(this.axiosInstance);
  }
}
export default FonCore;
