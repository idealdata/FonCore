import { BaseService } from './base.service';

export class FundService extends BaseService {
  constructor(baseURL: string, token?: string) {
    super(baseURL, token);
  }

  getFunds() {
    return this.get(`/funds`);
  }

  getFundById(fundId: string) {
    return this.get(`/funds/${fundId}`);
  }
}