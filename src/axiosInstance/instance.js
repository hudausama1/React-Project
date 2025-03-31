import axios from "axios";

export const instance = axios.create({
    baseURL: "",
})

export const req = instance.interceptors.request.use((config)=>{
    console.log(config);
    return config
},(err) => {
    console.log(err);
})

export const res = instance.interceptors.response.use((config)=>{
    console.log(config);
    return config
},(err)=>{
    console.log(err);
    return Promise.reject(err)
})