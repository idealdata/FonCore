import axios from 'axios';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class Service {
    constructor(axios) {
        this.axios = axios;
    }
}

class SectorService extends Service {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            let res = yield ((_a = this.axios) === null || _a === void 0 ? void 0 : _a.get("/Sector/SectorList", {}).catch((error) => error.response));
            return res === null || res === void 0 ? void 0 : res.data;
        });
    }
}

class FonCore {
    constructor({ url, token }) {
        this.Configration(url, token);
        this.Services();
    }
    Configration(url, token) {
        this.axiosInstance = axios.create({
            baseURL: url,
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
    }
    Services() {
        this.Sector = new SectorService(this.axiosInstance);
    }
}

export { FonCore as default };