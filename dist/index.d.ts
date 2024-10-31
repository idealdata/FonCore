import SectorService from "./services/sector.service";
declare class FonCore {
    private axiosInstance;
    Sector: SectorService;
    constructor({ url, token }: {
        url: string;
        token: string;
    });
    Configration(url: string, token: string): void;
    Services(): void;
}
export default FonCore;
