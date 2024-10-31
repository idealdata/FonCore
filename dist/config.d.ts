import { AxiosInstance } from "axios";
declare const Config: {
    axios: AxiosInstance;
    url: string;
    token: string;
};
export declare const setConfig: ({ url, token }: {
    url: string;
    token: string;
}) => void;
export default Config;
