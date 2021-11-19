import axios from "axios";

const API_URL = "http://localhost:5000/";

const getAllProducts = () => {
  return axios.get(API_URL + "getAllProducts").then((res) => res.data);
};

const productService = {
  getAllProducts,
};

export default productService;
