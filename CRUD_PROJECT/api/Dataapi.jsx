import axios from 'axios'

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/" ,
}) ;

// get method
export const getApiData = () => {
    return api.get("posts");
}

//delete
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}