"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = require("axios");
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
