import axios from "../networking";

async function findAll(): Promise<FCResponse<FCExporterListItem[]>> {
  let res = await axios
    .get("/Kurucu/KurucuList", {})
    .catch((error: FCError) => error.response);
  return res?.data;
}
export default { findAll };
