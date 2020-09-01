import axios from 'axios';

const API = axios.create({
    baseURL : "http://starlord.hackerearth.com/TopRamen",
});

export default API;