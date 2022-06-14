import axios from "axios";
import md5 from "md5";

const privateKEY = '6c22491cfc5357f93ac43379f3002197fff08b22'
const publicKEY = '52c5a6538188eb24c5b2060d6d3b2453'

const time = Number(new Date());

const hash = md5(time + privateKEY + publicKEY );

const api = axios.create({
    baseURL:'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKEY,
        hash: hash,
    },
});

export default api;