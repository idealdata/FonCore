import { AxiosInstance } from "axios";
export declare class BaseService {
    protected client: AxiosInstance;
    constructor(baseURL: string, token?: string);
    protected get<T>(url: string): Promise<T>;
    protected post<T>(url: string, data: any): Promise<T>;
    protected put<T>(url: string, data: any): Promise<T>;
    protected delete<T>(url: string): Promise<T>;
}
//# sourceMappingURL=base.service.d.ts.map