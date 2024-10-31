import axios from "axios";
const Config = {
    axios,
    url: "",
    token: "",
};
export const setConfig = ({ url, token }) => {
    Config.url = url;
    Config.token = token;
    Config.axios = axios.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
        },
    });
};
export default Config;
