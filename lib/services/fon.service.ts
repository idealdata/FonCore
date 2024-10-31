import axios from "../networking";
import { AxiosRequestConfig } from "axios";

async function findAll(
  search: FCNullable<string> = null,
  sorter: FCNullable<FCSorter> = null,
  pagination: FCNullable<FCPagination> = null,
  filter: FCNullable<FCFonFilter> = null,
  dateRange: FCNullable<FCDateRange> = null,
  configs: FCNullable<AxiosRequestConfig> = null
): Promise<FCResponsePagination<FCFonListItem[]>> {
  let res = await axios
    .get("/Fon/FonList", {
      ...configs,
      params: {
        search,
        ...(pagination
          ? {
              page: pagination.page,
              perPage: pagination.perPage,
            }
          : {}),
        ...(sorter
          ? {
              sortBy: sorter.column,
              sortDir: sorter.dir,
            }
          : {}),
        ...(filter
          ? {
              platform: filter.platform,
              kategori: filter.category,
              semsiyeId: filter.umbrella,
              kurucuKodu: filter.exporter,
              islemGorme: filter.status,
              risk: filter.risk,
              start_RiskDegeri: filter.start_risk,
              end_RiskDegeri: filter.end_risk,
              kodlar: filter.kodlar?.join(","),
            }
          : {}),
        ...(dateRange
          ? {
              startDate: dateRange.startDate,
              endDate: dateRange.endDate,
            }
          : {}),
      },
    })
    .catch((error: FCError) => error.response);
  return res?.data;
}

async function findOne(fonKod: string): Promise<FCResponse<FCFon>> {
  let res = await axios
    .get(`/Fon/${fonKod}`, {})
    .catch((error: FCError) => error.response);
  return res?.data;
}

async function findOneChart(
  fonKod: string,
  startDate?: Date,
  endDate?: Date
): Promise<FCResponse<FCFonChartItem[]>> {
  let res = await axios
    .get(`/Fon/${fonKod}/Grafik`, {
      params: { startDate, endDate },
    })
    .catch((error: FCError) => error.response);
  return res?.data;
}

export default { findAll, findOne, findOneChart };
