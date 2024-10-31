import Config from "../config";

async function findAll(): Promise<FCResponse<FCSectorItem[]>> {
  let res = await Config.axios
    ?.get("/Sector/SectorList", {})
    .catch((error: FCError) => error.response);
  return res?.data;
}
export default { findAll };
