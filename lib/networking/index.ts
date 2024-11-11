import ax from "axios";

const axios = ax.create({
    baseURL: "https://fonapi.idealdata.com.tr/api/",
    headers: {
        "Content-Type": `application/json; charset=UTF-8`,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJpZGVhbHByb2QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiRmlsdGVyS3VydWN1SWQiOiIiLCJqdGkiOiJlM2E3MzlhNC0zZGQ1LTQ3OGItODlhYS0xM2NiYjQzNDUwODYiLCJyb2xlIjpbIlVzZXIiLCJBZG1pbiJdLCJuYmYiOjE3MjUzNjY1NzUsImV4cCI6MTgxOTkxODgwMCwiaWF0IjoxNzI1MzY2NTc1LCJpc3MiOiJodHRwczovL3d3dy5pRGVhbGRhdGEuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly93d3cuaURlYWxkYXRhLmNvbS50ciJ9.cCdz4k31TYfyvur2qhChqpHcsiuADxLg3EcBsOv8wg8`,
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
