import axios from "axios";

const url = 'http://192.168.237.198:3000/api/AUTH';


export  const $auth = axios.create({
    baseURL: url,
    // withCredentials:true,
    }
);
