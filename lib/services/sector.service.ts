import Service from ".";

class SectorService extends Service {
  async findAll(): Promise<FCResponse<FCSectorItem[]>> {
    let res = await this.axios
      ?.get("/Sector/SectorList", {})
      .catch((error: FCError) => error.response);
    return res?.data;
  }
}
export default SectorService;
