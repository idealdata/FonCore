var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "../networking";
function findAll() {
    return __awaiter(this, arguments, void 0, function* (search = null, sorter = null, pagination = null, filter = null, dateRange = null, configs = null) {
        var _a;
        let res = yield axios
            .get("/Fon/FonList", Object.assign(Object.assign({}, configs), { params: Object.assign(Object.assign(Object.assign(Object.assign({ search }, (pagination
                ? {
                    page: pagination.page,
                    perPage: pagination.perPage,
                }
                : {})), (sorter
                ? {
                    sortBy: sorter.column,
                    sortDir: sorter.dir,
                }
                : {})), (filter
                ? {
                    platform: filter.platform,
                    kategori: filter.category,
                    semsiyeId: filter.umbrella,
                    kurucuKodu: filter.exporter,
                    islemGorme: filter.status,
                    risk: filter.risk,
                    start_RiskDegeri: filter.start_risk,
                    end_RiskDegeri: filter.end_risk,
                    kodlar: (_a = filter.kodlar) === null || _a === void 0 ? void 0 : _a.join(","),
                }
                : {})), (dateRange
                ? {
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                }
                : {})) }))
            .catch((error) => error.response);
        return res === null || res === void 0 ? void 0 : res.data;
    });
}
function findOne(fonKod) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield axios
            .get(`/Fon/${fonKod}`, {})
            .catch((error) => error.response);
        return res === null || res === void 0 ? void 0 : res.data;
    });
}
function findOneChart(fonKod, startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield axios
            .get(`/Fon/${fonKod}/Grafik`, {
            params: { startDate, endDate },
        })
            .catch((error) => error.response);
        return res === null || res === void 0 ? void 0 : res.data;
    });
}
export default { findAll, findOne, findOneChart };
