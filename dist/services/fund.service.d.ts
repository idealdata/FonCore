declare class FundService {
    private static instance;
    static configure({ apiUrl, token }: {
        apiUrl: string;
        token: string;
    }): void;
    static getFunds(): Promise<any>;
}
export default FundService;
