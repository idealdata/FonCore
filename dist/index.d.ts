import { AxiosInstance } from "axios";
import SectorService from "./services/sector.service";
declare class FonCore {
    axiosInstance: AxiosInstance;
    Sector: SectorService;
    constructor({ url, token }: {
        url: string;
        token: string;
    });
    Configration(url: string, token: string): void;
    Services(): void;
}
export default FonCore;
