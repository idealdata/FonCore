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
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield axios
            .get("/Kurucu/KurucuList", {})
            .catch((error) => error.response);
        return res === null || res === void 0 ? void 0 : res.data;
    });
}
export default { findAll };
