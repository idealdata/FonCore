import axios, {AxiosInstance} from 'axios';

export class ApiService {
    private api: AxiosInstance;

    constructor(private apiUrl: string, private token: string) {
        this.api = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    protected get<T>(url: string) {
        return this.api.get<T>(url);
    }

    protected post<T>(url: string, data: any) {
        return this.api.post<T>(url, data);
    }
}