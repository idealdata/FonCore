import { BaseService } from "./base.service";
export class FundService extends BaseService {
    constructor(baseURL, token) {
        super(baseURL, token);
    }
    getFunds() {
        return this.get(`/Fon/FonList`);
    }
}
