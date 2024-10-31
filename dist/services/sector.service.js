var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Service from ".";
class SectorService extends Service {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            let res = yield ((_a = this.axios) === null || _a === void 0 ? void 0 : _a.get("/Sector/SectorList", {}).catch((error) => error.response));
            return res === null || res === void 0 ? void 0 : res.data;
        });
    }
}
export default SectorService;
