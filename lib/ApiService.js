import axios from 'axios';
export class ApiService {
    constructor(apiUrl, token) {
        this.apiUrl = apiUrl;
        this.token = token;
        this.api = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    get(url) {
        return this.api.get(url);
    }
    post(url, data) {
        return this.api.post(url, data);
    }
}
