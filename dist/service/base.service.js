import axios from "axios";
export class BaseService {
    constructor(baseURL, token) {
        this.client = axios.create({
            baseURL,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
    }
    get(url) {
        return this.client.get(url).then((response) => response.data);
    }
    post(url, data) {
        return this.client.post(url, data).then((response) => response.data);
    }
    put(url, data) {
        return this.client.put(url, data).then((response) => response.data);
    }
    delete(url) {
        return this.client.delete(url).then((response) => response.data);
    }
}
