import axios from "axios";

//https://foodapi-4nj1.onrender.com
//http://localhost:3000

export const api = axios.create({
  baseURL: "http://192.168.0.9:3000"
});

