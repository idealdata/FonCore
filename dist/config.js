import ax from "axios";
const Config = {
    axios: ax,
    url: "",
    token: "",
};
export const setConfig = ({ url, token }) => {
    Config.url = url;
    Config.token = token;
    Config.axios = ax.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
        },
    });
};
export default Config;
