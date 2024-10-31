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
function findAll(fonKod_1) {
    return __awaiter(this, arguments, void 0, function* (fonKod, Count = 6) {
        let res = yield axios
            .get(`/Haber/${fonKod}/HaberList`, { params: { Count } })
            .catch((error) => error.response);
        return res === null || res === void 0 ? void 0 : res.data;
    });
}
export default { findAll };
