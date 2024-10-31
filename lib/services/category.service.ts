import axios from "../networking";

async function findAll(): Promise<FCResponse<FCCategoryListItem[]>> {
  let res = await axios
    .get("/Kategori/KategoriList", {})
    .catch((error: FCError) => error.response);
  return res?.data;
}
async function findAllSemsiyeList(): Promise<
  FCResponse<FCCategorySemsiyeListItem[]>
> {
  let res = await axios
    .get("/Kategori/SemsiyeList", {})
    .catch((error: FCError) => error.response);
  return res?.data;
}
export default { findAll, findAllSemsiyeList };
