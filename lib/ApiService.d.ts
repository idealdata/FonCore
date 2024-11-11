export declare class ApiService {
    private apiUrl;
    private token;
    private api;
    constructor(apiUrl: string, token: string);
    protected get<T>(url: string): Promise<import("axios").AxiosResponse<T, any>>;
    protected post<T>(url: string, data: any): Promise<import("axios").AxiosResponse<T, any>>;
}
