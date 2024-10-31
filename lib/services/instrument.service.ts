import axios from "../networking";

async function findOneSummary(
  symbol: string,
  periodName?: string
): Promise<FCResponse<FCInstrumentSummary>> {
  let res = await axios
    .get(`/Instrument/${symbol}/Summary`, {
      params: { periodName },
    })
    .catch((error: FCError) => error.response);
  return res?.data;
}
async function findAllSummary(
  periodName: string
): Promise<FCResponse<FCInstrumentSummaryItem[]>> {
  let res = await axios
    .get(`/Instrument/Summary/${periodName}`, {})
    .catch((error: FCError) => error.response);
  return res?.data;
}
export default { findOneSummary, findAllSummary };
