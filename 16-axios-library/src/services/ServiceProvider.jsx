import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.omdbapi.com/'
})

export const getMovie = () =>{
    return api.get('?i=tt3896198&apikey=cc4bfd2c&s=titanic&page=1')
}