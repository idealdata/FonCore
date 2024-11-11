import { ApiService } from '../ApiService';
declare class HelloService extends ApiService {
    constructor(apiUrl: string, token: string);
    getHello(): string;
}
export default HelloService;
