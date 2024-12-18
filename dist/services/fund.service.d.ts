interface FundServiceConfig {
    apiUrl: string;
    token: string;
}
interface Fund {
    id: string;
    name: string;
    value: number;
}
declare class FundService {
    private static instance;
    static configure({ apiUrl, token }: FundServiceConfig): void;
    static getFunds(): Promise<Fund[]>;
}
export default FundService;
