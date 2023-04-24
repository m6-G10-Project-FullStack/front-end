import axios from "axios";

const apiKenzie = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/cars",
});

export default apiKenzie;
