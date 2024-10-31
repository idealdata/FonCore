import axios from "../networking";

async function findOne(fonKod: string): Promise<FCResponse<FCPortfolio>> {
  let res = await axios
    .get(`/Portfolio/${fonKod}/Summary`)
    .catch((error: FCError) => error.response);
  return res?.data;
}

export default { findOne };
