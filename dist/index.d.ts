import HelloService from './services/hello.service';
declare class FonCore {
    private static apiUrl;
    private static token;
    static Hello: HelloService;
    static initialize(apiUrl: string, token: string): void;
}
export default FonCore;
