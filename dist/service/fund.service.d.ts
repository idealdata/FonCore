import { BaseService } from './base.service';
export declare class FundService extends BaseService {
    constructor(baseURL: string, token?: string);
    getFunds(): Promise<unknown>;
    getFundById(fundId: string): Promise<unknown>;
}
//# sourceMappingURL=fund.service.d.ts.map