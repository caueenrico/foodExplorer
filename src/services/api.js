import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodapi-4nj1.onrender.com"
});
