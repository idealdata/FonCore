import axios from "../networking";

async function findAll(
  fonKod: string,
  Count: number = 6
): Promise<FCResponse<FCNewsListItem[]>> {
  let res = await axios
    .get(`/Haber/${fonKod}/HaberList`, { params: { Count } })
    .catch((error: FCError) => error.response);
  return res?.data;
}

export default { findAll };
