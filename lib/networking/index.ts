import ax from "axios";

const axios = ax.create({
    baseURL: "https://fonapi.idealdata.com.tr/api/",
    headers: {
        "Content-Type": `application/json; charset=UTF-8`,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJpZGVhbHByb2QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiRmlsdGVyS3VydWN1SWQiOiIiLCJqdGkiOiIyNzU2N2M5NC1mMzc3LTQ4ODktYTk3ZC03NTViOGIwNjhlZjkiLCJyb2xlIjpbIlVzZXIiLCJBZG1pbiJdLCJuYmYiOjE3MzQ1MTI1MzUsImV4cCI6MTgyOTA3NzIwMCwiaWF0IjoxNzM0NTEyNTM1LCJpc3MiOiJodHRwczovL3d3dy5pRGVhbGRhdGEuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly93d3cuaURlYWxkYXRhLmNvbS50ciJ9.Ni_FO3qTaysUKS9EVC0BroKENin8uF6b3_pPDsmmDAA`,
    },
});
axios.interceptors.request.use(
    (request: any) => {
        return {...request};
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response: any) => {
        return {...response};
    },
    async (error) => {
        return Promise.reject(error);
    }
);

export default axios;
