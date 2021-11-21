import axios from "axios";

const API_URL = "http://localhost:5000/";

const getUsernameById = (userId) => {
  console.log(typeof userId);
  return axios
    .get(API_URL + "usernameById", {
      id: parseInt(userId),
    })
    .then((res) => console.log(res.data));
};

const userService = {
  getUsernameById,
};

export default userService;
