"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/services/UserService.ts
const ApiService_1 = require("../ApiService");
class HelloService extends ApiService_1.ApiService {
    constructor(apiUrl, token) {
        super(apiUrl, token);
    }
    getHello() {
        return "hello";
    }
}
exports.default = HelloService;
