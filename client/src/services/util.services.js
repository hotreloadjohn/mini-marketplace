import axios from "axios";

const API_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

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
