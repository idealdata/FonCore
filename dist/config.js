"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAxiosInstance = exports.setConfig = void 0;
const axios_1 = require("axios");
const Config = {
    axiosInstance: null,
    url: "",
    token: "",
};
const setConfig = ({ url, token }) => {
    Config.url = url;
    Config.token = token;
    Config.axiosInstance = axios_1.default.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
        },
    });
};
exports.setConfig = setConfig;
const getAxiosInstance = () => {
    if (!Config.axiosInstance) {
        throw new Error("Axios instance is not initialized. Call setConfig first.");
    }
    return Config.axiosInstance;
};
exports.getAxiosInstance = getAxiosInstance;
exports.default = Config;
