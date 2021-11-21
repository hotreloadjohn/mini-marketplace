import axios from "axios";

// To add cloud name to ENV
const cloudname = "dc2h3s9cn";
const API_URL = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`;

const uploadImage = (formData) => {
  return axios
    .post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

const utilsService = {
  uploadImage,
};

export default utilsService;
