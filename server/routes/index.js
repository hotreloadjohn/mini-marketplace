import express from "express";
import { getUsers, getUsernameById } from "../controllers/users.js";
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controllers/refreshtoken.js";
import { register, login, logout } from "../controllers/auth.js";
import { validateRegister } from "../middleware/customvalidators.js";
import {
  createProduct,
  getAllProducts,
  getProductsByUserId,
  deleteProduct,
  getProductDetails,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

// Auth
router.post("/register", validateRegister, register);
router.post("/login", login);
router.delete("/logout", logout);
router.get("/token", refreshToken);

// User
router.get("/users", verifyToken, getUsers);
router.get("/usernameById", getUsernameById);
// router.post("/users", Register);
// router.post("/login", Login);

// Product
router.post("/createproduct", verifyToken, createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getUserProducts/:id", verifyToken, getProductsByUserId);
router.get("/product/:id", getProductDetails);
router.delete("/product/:id", verifyToken, deleteProduct);
router.put("/product/:id", verifyToken, updateProduct);
// router.get("/searchproduct/:keyword", getProductsByKeyword);

export default router;
