import { Router } from "express";
import { auth, login, logout, register } from "./controller/user-controller.js";
import { autMiddleware } from "./middlewares/auth.js";
import { deleteProduct, getProducts } from "./controller/product-controller.js";
import {
  getCartItems,
  createCartItem,
} from "./controller/cartItem-controller.js";

export const router = Router();

// Rotas de usuário
router.post("/login", login);
router.post("/register", register);
router.get("/me", autMiddleware, auth);
router.post("/logout", autMiddleware, logout);

// Rotas de produto
router.get("/get-products", getProducts);
router.delete("/delete-product/:id", autMiddleware, deleteProduct);

// Rotas de Cart
router.get("/get-cart-items", autMiddleware, getCartItems);
router.post("/create-cart-item", autMiddleware, createCartItem);
