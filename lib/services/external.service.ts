import axios from "../networking";

async function findAllGetiriler(): Promise<
  FCResponse<{ [key: string]: FCExternalGetiriItem[] }>
> {
  let res = await axios
    .get(`/External/Getiriler`, {})
    .catch((error: FCError) => error.response);
  return res?.data;
}

export default { findAllGetiriler };
