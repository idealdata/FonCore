import axios from "../networking";

async function findAll(): Promise<FCResponse<FCPeriodItem[]>> {
  let res = await axios
    .get("/Period/PeriodList", {})
    .catch((error: FCError) => error.response);
  return res?.data;
}
export default { findAll };
