var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
class FundService {
    static configure({ apiUrl, token }) {
        this.instance = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    static getFunds() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.instance) {
                throw new Error('FundService is not configured. Call configure() first.');
            }
            const response = yield this.instance.get('/Fon/FonList');
            return response.data;
        });
    }
    static getFunds2() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.instance) {
                throw new Error('FundService is not configured. Call configure() first.');
            }
            const response = yield this.instance.get('/Fon/FonList');
            return response.data;
        });
    }
}
export default FundService;
