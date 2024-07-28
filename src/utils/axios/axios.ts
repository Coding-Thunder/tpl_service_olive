import { Axios } from "axios"


// base url to make requests 
const baseUrl = import.meta.env.VITE_APP_SERVER_BASE_URL




// common headers 
const headers = {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

// new axios instance generation with base url
const myAxios = new Axios({
    baseURL: baseUrl,
    timeout: 1000,
    headers
});


export default myAxios

