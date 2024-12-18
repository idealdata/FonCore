"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios = axios_1.default.create({
    baseURL: "https://fonapi.idealdata.com.tr/api/",
    headers: {
        "Content-Type": `application/json; charset=UTF-8`,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJpZGVhbHByb2QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiRmlsdGVyS3VydWN1SWQiOiIiLCJqdGkiOiIyNzU2N2M5NC1mMzc3LTQ4ODktYTk3ZC03NTViOGIwNjhlZjkiLCJyb2xlIjpbIlVzZXIiLCJBZG1pbiJdLCJuYmYiOjE3MzQ1MTI1MzUsImV4cCI6MTgyOTA3NzIwMCwiaWF0IjoxNzM0NTEyNTM1LCJpc3MiOiJodHRwczovL3d3dy5pRGVhbGRhdGEuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly93d3cuaURlYWxkYXRhLmNvbS50ciJ9.Ni_FO3qTaysUKS9EVC0BroKENin8uF6b3_pPDsmmDAA`,
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
exports.default = axios;
