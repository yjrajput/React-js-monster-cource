import axios from 'axios'

const apidata = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const getPost = () =>{
    return apidata.get('posts')
}