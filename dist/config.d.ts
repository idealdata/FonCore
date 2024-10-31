import { AxiosInstance } from "axios";
declare const Config: {
    axiosInstance: AxiosInstance | null;
    url: string;
    token: string;
};
export declare const setConfig: ({ url, token }: {
    url: string;
    token: string;
}) => void;
export declare const getAxiosInstance: () => AxiosInstance;
export default Config;
