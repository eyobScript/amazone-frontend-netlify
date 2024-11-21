import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/clone-764e0/us-central1/api'
    baseURL: 'https://amazone-api-73fq.onrender.com/'
});
export { axiosInstance};