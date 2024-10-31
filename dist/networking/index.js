var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ax from "axios";
const axios = ax.create({
    baseURL: "",
    headers: {
        "Content-Type": `application/json; charset=UTF-8`,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${""}`,
    },
});
axios.interceptors.request.use((request) => {
    return Object.assign({}, request);
}, (error) => {
    return Promise.reject(error);
});
axios.interceptors.response.use((response) => {
    return Object.assign({}, response);
}, (error) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.reject(error);
}));
export default axios;
