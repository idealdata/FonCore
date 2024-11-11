// src/services/UserService.ts
import { ApiService } from '../ApiService';
class HelloService extends ApiService {
    constructor(apiUrl, token) {
        super(apiUrl, token);
    }
    getHello() {
        return "hello";
    }
}
export default HelloService;
