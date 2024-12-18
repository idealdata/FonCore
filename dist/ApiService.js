"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiService {
    constructor(apiUrl, token) {
        this.apiUrl = apiUrl;
        this.token = token;
        this.api = axios_1.default.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    get(url) {
        return this.api.get(url);
    }
    post(url, data) {
        return this.api.post(url, data);
    }
}
exports.ApiService = ApiService;
