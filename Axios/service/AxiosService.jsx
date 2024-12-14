import axios from 'axios'
import React from 'react'

const api = axios.create({
    baseURL : "https://www.omdbapi.com/"
})
export const axiosService = () => {
  return api.get("?i=tt3896198&apikey=efe7d584&s=batman&page=1")
};
