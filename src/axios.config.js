import axios from 'axios';


export const gradify = axios.create({
    baseURL:'http://10.0.2.2:5500'
})