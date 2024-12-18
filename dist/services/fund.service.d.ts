declare class FundService {
    private static instance;
    static configure({ apiUrl, token }: {
        apiUrl: string;
        token: string;
    }): void;
    static getFunds(): Promise<any>;
    static getFunds2(): Promise<any>;
}
export default FundService;
//# sourceMappingURL=fund.service.d.ts.map