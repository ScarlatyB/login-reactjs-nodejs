import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:5173/"
});

export const createSessio = async (email, password) =>{
    return api.post("/sessions", {email, password})
};