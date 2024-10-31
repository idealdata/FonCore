"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = HelloWorld;
const config_1 = require("./config");
function HelloWorld(name = "World") {
    return `Hello, ${name}!`;
}
exports.default = { setConfig: config_1.setConfig };
