import { AxiosRequestConfig } from "axios";
declare function findAll(search?: FCNullable<string>, sorter?: FCNullable<FCSorter>, pagination?: FCNullable<FCPagination>, filter?: FCNullable<FCFonFilter>, dateRange?: FCNullable<FCDateRange>, configs?: FCNullable<AxiosRequestConfig>): Promise<FCResponsePagination<FCFonListItem[]>>;
declare function findOne(fonKod: string): Promise<FCResponse<FCFon>>;
declare function findOneChart(fonKod: string, startDate?: Date, endDate?: Date): Promise<FCResponse<FCFonChartItem[]>>;
declare const _default: {
    findAll: typeof findAll;
    findOne: typeof findOne;
    findOneChart: typeof findOneChart;
};
export default _default;
