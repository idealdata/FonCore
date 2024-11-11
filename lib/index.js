// src/FonService.ts
import HelloService from './services/hello.service';
class FonCore {
    static initialize(apiUrl, token) {
        this.apiUrl = apiUrl;
        this.token = token;
        this.Hello = new HelloService(apiUrl, token);
    }
}
export default FonCore;
