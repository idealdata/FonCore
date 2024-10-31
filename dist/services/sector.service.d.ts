import Service from ".";
declare class SectorService extends Service {
    findAll(): Promise<FCResponse<FCSectorItem[]>>;
}
export default SectorService;
