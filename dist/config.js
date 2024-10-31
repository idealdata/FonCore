import ax from "axios";
const Config = {
    axiosInstance: null,
    url: "",
    token: "",
};
export const setConfig = ({ url, token }) => {
    Config.url = url;
    Config.token = token;
    Config.axiosInstance = ax.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
        },
    });
};
export const getAxiosInstance = () => {
    if (!Config.axiosInstance) {
        throw new Error("Axios instance is not initialized. Call setConfig first.");
    }
    return Config.axiosInstance;
};
export default Config;
