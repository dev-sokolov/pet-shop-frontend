import axios from "axios";

const {VITE_API_URL} = import.meta.env 

const backendInstance = axios.create({
    baseURL: VITE_API_URL
})

export default backendInstance;