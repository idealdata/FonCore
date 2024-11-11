declare class CategoryService {
    constructor();
    findAll(): Promise<FCResponse<FCCategoryListItem[]>>;
    findAllSemsiyeList(): Promise<FCResponse<FCCategorySemsiyeListItem[]>>;
}
export default CategoryService;
