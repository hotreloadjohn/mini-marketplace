import axios from "axios";

const API_URL = "http://localhost:5000/";

const getAllProducts = () => {
  return axios.get(API_URL + "getAllProducts").then((res) => res.data);
};

const getUserProducts = (id) => {
  return axios.get(API_URL + `getUserProducts/id`).then((res) => res.data);
};

const productService = {
  getAllProducts,
  getUserProducts,
};

export default productService;
