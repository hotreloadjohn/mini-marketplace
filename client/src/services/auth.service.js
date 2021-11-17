import axios from "axios";

const API_URL = "http://localhost:5000/";

const register = (name, email, password, confPassword) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
    confPassword,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        // let user = {
        //   token: response.data.accessToken,
        //   email: email,
        // };
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
