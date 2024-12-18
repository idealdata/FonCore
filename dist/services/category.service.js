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
const networking_1 = __importDefault(require("../networking"));
class CategoryService {
    constructor() {
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield networking_1.default
                .get("/Kategori/KategoriList", {})
                .catch((error) => error.response);
            return res === null || res === void 0 ? void 0 : res.data;
        });
    }
    findAllSemsiyeList() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield networking_1.default
                .get("/Kategori/SemsiyeList", {})
                .catch((error) => error.response);
            return res === null || res === void 0 ? void 0 : res.data;
        });
    }
}
exports.default = CategoryService;
