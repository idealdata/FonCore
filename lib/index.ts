// src/FonService.ts
import HelloService from './services/hello.service';

class FonCore {
    private static apiUrl: string;
    private static token: string;

    public static Hello: HelloService;

    static initialize(apiUrl: string, token: string) {
        this.apiUrl = apiUrl;
        this.token = token;
        this.Hello = new HelloService(apiUrl, token);
    }
}

export default FonCore;