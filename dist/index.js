"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/FonService.ts
const hello_service_1 = require("./services/hello.service");
class FonCore {
    static initialize(apiUrl, token) {
        this.apiUrl = apiUrl;
        this.token = token;
        this.Hello = new hello_service_1.default(apiUrl, token);
    }
}
exports.default = FonCore;
