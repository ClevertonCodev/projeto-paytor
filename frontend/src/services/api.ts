import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    }
});


  export default api;