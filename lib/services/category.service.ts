import axios from "../networking";

class CategoryService {
    constructor() {
    }

    async findAll(): Promise<FCResponse<FCCategoryListItem[]>> {
        let res = await axios
            .get("/Kategori/KategoriList", {})
            .catch((error: FCError) => error.response);
        return res?.data;
    }

    async findAllSemsiyeList(): Promise<FCResponse<FCCategorySemsiyeListItem[]>> {
        let res = await axios
            .get("/Kategori/SemsiyeList", {})
            .catch((error: FCError) => error.response);
        return res?.data;
    }
}

export default CategoryService;
