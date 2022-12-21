import axios from "axios";
//para cuando este el back------------------------------------
export const serviceApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})